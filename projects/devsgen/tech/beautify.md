# Code Beautification — Detailed Plan

Purpose: Implement a generic, language-agnostic beautifier that formats "structure-like" text (JSON-ish, Python repr, PHP arrays/var_dump, generic bracketed content) without heavy language-specific parsers and without blocking the UI.

## Constraints
- No complicated language-specific parsing libraries (ASTs, full parsers) required.
- Processing must not block the UI; all heavy work runs off the main thread.
- Best-effort formatting: tolerate malformed inputs and never throw.

## Scope and Goals
- Re-indent and line-wrap based on bracket hierarchy: `{}`, `[]`, `()`.
- Respect strings and comments so internal brackets don’t affect structure.
- Optional, light normalizations by "mode" for common inputs:
  - `structure`: re-indent only; do not alter tokens.
  - `jsonish`: normalize quotes and commas conservatively.
  - `phpish`: treat `=>` like `:` and `array(` like `[` for indentation.
- Copy output, format-on-type toggle, and explicit "Format" action.

## High-Level Architecture
- Web Worker-based formatter to keep React responsive.
- Chunked processing with progress events and cancellation.
- Debounced triggers to avoid overwork while typing.

### Worker API
- Request: `postMessage({ id: string, text: string, options: BeautifyOptions })`
- Progress: `postMessage({ id, type: 'progress', processed: number, total: number })`
- Result: `postMessage({ id, type: 'result', result: BeautifyResult })`
- Cancellation: new request supersedes previous by `id` or a `cancel` message.

```ts
// types/beautify.ts
export type BeautifyMode = 'structure' | 'jsonish' | 'phpish';

export interface BeautifyOptions {
  mode: BeautifyMode;
  indent: number; // e.g., 2 or 4
  useTabs: boolean;
  newlineAfterComma: boolean; // in arrays/objects
  keepComments: boolean; // detect and preserve comment tokens
  conservative: boolean; // only re-indent; no token edits
}

export interface BeautifyDiagnostics {
  unbalancedBrackets?: boolean;
  truncated?: boolean;
  warnings: string[];
}

export interface BeautifyResult {
  output: string;
  diagnostics: BeautifyDiagnostics;
  timeMs: number;
}
```

### UI Integration (Astro + React + Nanostores)
- Two-pane view: input (left), output (right).
- Controls: mode select, indent size, tabs/spaces, newline options, conservative toggle, format-on-type toggle, copy button.
- Nanostores persist tool options and last-used settings.
- Debounce input events (150–300ms); send to worker with an incrementing `id`.

## Core Algorithm

### Tokenizer (single pass, tolerant)
- States: `default`, `string('"' or '\'')`, `lineComment` (`//` or `#`), `blockComment` (`/* ... */`).
- Recognize brackets `{ [ ( ] ) }` only when not in string/comment.
- Handle escapes within strings (\\, \" and \").
- Emit tokens: `open`, `close`, `comma`, `colon`, `string`, `comment`, `other`.
- Keep original substrings for tokens so we can format conservatively.

Pseudo:
```ts
for (i = 0; i < src.length; i++) {
  const ch = src[i];
  switch (state) {
    case 'default':
      // detect //, #, /*, strings, brackets, comma, colon
      // push tokens accordingly
      break;
    case 'string':
      // advance handling escapes until matching quote
      break;
    case 'lineComment':
      // consume until newline
      break;
    case 'blockComment':
      // consume until */ or EOF
      break;
  }
}
```

### Formatter (stack-based indentation)
- Maintain `indentLevel` stack for each opening bracket token.
- On `open`: emit token, then newline + indent.
- On `close`: newline to current `indentLevel - 1`, emit token.
- On `comma`: emit comma; if `newlineAfterComma`, then newline + indent to current level.
- On `colon`: emit colon followed by space.
- `string`, `comment`, `other`: append with minimal whitespace normalization.
- Trailing spaces trimmed per line; ensure final newline.
- Diagnostics: track balance; if EOF with non-empty stack, set `unbalancedBrackets`.

### Mode-specific Behavior
- `structure` (default):
  - Never rewrite strings or tokens; only adjust whitespace/newlines/indent.
  - Ignore comments for indentation (unless `keepComments` true, then preserve as tokens but don’t let them affect stack).
- `jsonish`:
  - Optionally normalize single quotes to double quotes when safe (outside of nested, escaped contexts).
  - Optionally strip trailing commas before a closing `]`/`}` if detected.
  - Treat comments as non-structural and preserve if `keepComments`.
- `phpish`:
  - Treat `=>` as a `colon` for spacing and wrap rules.
  - Treat `array(` as `[` and its corresponding `)` as `]` for indentation only (preserve original lexeme unless not conservative).
  - For var_dump-like output, detect key/value separators and nested arrays/objects best-effort.

## Performance and Responsiveness
- Run inside a Web Worker.
- Process input in chunks (e.g., 2–5k chars) to emit periodic `progress` events.
- Cancellation: When a new request `id` arrives, mark previous run as cancelled and stop early.
- Avoid creating huge intermediate strings; build via small buffers per line/chunk.

## Error Handling and Safety
- Never throw for malformed input; return `diagnostics` with warnings.
- If input exceeds a soft limit (e.g., > 5MB), process in streaming mode with minimal features.
- Idempotence: running the formatter on its own output should yield the same output (within mode constraints).

## Implementation Tasks (Step-by-step)
1. Create types: `types/beautify.ts` (above).
2. Implement tokenizer: `src/lib/beautify/tokenize.ts` with the state machine.
3. Implement formatter: `src/lib/beautify/format.ts` consuming tokens and `BeautifyOptions`.
4. Implement mode adapters: `src/lib/beautify/modes/{structure,jsonish,phpish}.ts` with small helpers (e.g., `isTrailingComma`, `normalizeQuotes`).
5. Implement detection (optional): `src/lib/beautify/detect.ts` using lightweight heuristics (see below).
6. Wire Web Worker: `src/workers/beautifyWorker.ts` handling `id`, `options`, chunking, cancellation, and posting `progress`/`result`.
7. UI component: `src/components/tools/Beautifier.tsx` with two-pane layout, settings, and calls to the worker.
8. Persist options with Nanostores: `src/stores/beautify.ts`.
9. Add copy button and format-on-type debounce.
10. Add tests (unit + golden + performance) with Vitest.

## Test Plan

### Unit Tests (Tokenizer)
- Strings with escaped quotes; ensure brackets inside strings are ignored.
- Comments: `//`, `#`, `/* */`; ensure ignored for structure.
- Mixed brackets with interleaved strings/comments; ensure stack balance.

### Golden Tests (Formatter)
- JSON-ish input with single quotes and trailing commas → `jsonish` formatted output.
- Python repr-like: `{'a': 1, 'b': [1,(2,3)]}` → properly indented; optional normalization of `True/False/None` only if enabled.
- PHP array: `array('a' => 1, 'b' => array(2,3))` → indented as if `[`/`]` with `=>` alignment.
- PHP var_dump-like structures: ensure nested arrays indent correctly.
- Generic malformed input: unbalanced brackets → best-effort output with diagnostics.

### Property Tests
- Idempotence: formatting the same text twice yields identical output.
- Stability under whitespace changes: reformatting after minor edits preserves structure.

### Performance Tests
- Large input (e.g., 1–5 MB, 100k+ lines) completes under a time budget (target < 200ms/MB in worker depending on device).
- UI stays responsive; verify worker posts progress at least every 50–100ms.

### Example Vitest Sketch
```ts
import { tokenize } from '@/lib/beautify/tokenize';
import { format } from '@/lib/beautify/format';

it('formats jsonish with single quotes', () => {
  const input = "{'a': 1, 'b': [2,3,],}";
  const tokens = tokenize(input, { keepComments: true });
  const out = format(tokens, { mode: 'jsonish', indent: 2, useTabs: false, newlineAfterComma: true, keepComments: true, conservative: false });
  expect(out.output).toMatchInlineSnapshot(`
    {
      "a": 1,
      "b": [
        2,
        3
      ]
    }
  `);
  expect(out.diagnostics.unbalancedBrackets).toBeFalsy();
});
```

## Provided Detection Snippet — Review

You provided:

```ts
type Detected =
  | "json"
  | "json5"
  | "hjson"
  | "pythonRepr"
  | "phpArray"
  | "phpVarDump"
  | "unknown";

function detectType(src: string): Detected {
  const s = src.trim();
  if (!s) return "unknown";

  // Fast path: valid JSON
  try {
    JSON.parse(s);
    return "json";
  } catch {}

  // JSON5/HJSON hints
  if (/\/\/.+|#.+|,\s*[\]}]/.test(s) || /'[^']*'/.test(s)) {
    // Trailing commas, comments, single-quoted strings
    // Try to parse as JSON5/HJSON later
  }

  // PHP array syntax patterns
  if (/\barray\s*\(/i.test(s) || /=>/.test(s) || /\[\s*[^\]]*=>/m.test(s)) {
    // Heuristic check if it looks like var_dump
    if (/=>\s*(string|int|float|array|object)\s*\(/i.test(s) || /\{\s*\[/.test(s)) {
      return "phpVarDump";
    }
    return "phpArray";
  }

  // Python repr: {'a': 1}, True/False, None, tuples
  if (/(^|[\s\[{(])'(?:[^'\\]|\\.)*'/.test(s) || /\b(True|False|None)\b/.test(s)) {
    return "pythonRepr";
  }

  // Try JSON5/HJSON parse to be sure
  try {
    JSON5.parse(s);
    return "json5";
  } catch {}
  try {
    HJSON.parse(s);
    return "hjson";
  } catch {}

  return "unknown";
}

function stringifyPretty(obj: any): string {
  return JSON.stringify(obj, null, 2);
}
```

### Findings
- Relies on `JSON5` and `HJSON` globals which may be undefined; causes ReferenceErrors unless guarded or bundled.
- Your constraint is to avoid heavy parsing libraries; attempting JSON5/HJSON parse contradicts that goal.
- Heuristics broadly fine, but some regexes may over-match (e.g., any `#` will flag JSON5/HJSON hints).
- `stringifyPretty` is fine but only useful after successful parse; our formatter doesn’t need to parse to objects.

### Recommendation
- Keep fast JSON path via `JSON.parse` only; otherwise use heuristics and fall back to structure-based formatting.
- If you still want JSON5/HJSON support, guard dynamic usage: `if (typeof JSON5 !== 'undefined') { ... }` to avoid reference errors and only in the worker.
- Prefer a single `jsonish` bucket rather than distinguishing `json5` vs `hjson` unless you actually use those libraries.

### Revised Lightweight Detector (no external libs required)
```ts
export type Detected =
  | 'json'
  | 'jsonish'
  | 'pythonRepr'
  | 'phpArray'
  | 'phpVarDump'
  | 'unknown';

export function detectType(src: string): Detected {
  const s = src.trim();
  if (!s) return 'unknown';

  // Fast path: valid JSON
  try {
    JSON.parse(s);
    return 'json';
  } catch {}

  // PHP array or var_dump heuristics
  if (/\barray\s*\(/i.test(s) || /=>/.test(s) || /\[\s*[^\]]*=>/m.test(s)) {
    if (/=>\s*(string|int|float|array|object)\s*\(/i.test(s) || /\[\s*"?.+?"?\]\s*=>/m.test(s)) {
      return 'phpVarDump';
    }
    return 'phpArray';
  }

  // Python repr heuristics: single-quoted keys/strings, True/False/None, tuples
  if (/(^|[\s\[{(])'(?:[^'\\]|\\.)*'/.test(s) || /\b(True|False|None)\b/.test(s) || /\((?:[^()]*,)[^()]*\)/.test(s)) {
    return 'pythonRepr';
  }

  // JSON-like but not strict JSON: comments, trailing commas, single quotes
  if (/\/\/|#/.test(s) || /,\s*[\]}]/.test(s) || /(^|[^\\])'(?:[^'\\]|\\.)*'/.test(s)) {
    return 'jsonish';
  }

  return 'unknown';
}
```

Notes:
- The detector is optional; the UI can let users choose the mode directly. Use detection as a default suggestion only.
- Keep detection in the worker to avoid any potential main-thread slow paths.

## Future Enhancements (Optional)
- Minimal diff rendering of output to reduce paint cost on very large texts.
- Streaming output: append formatted chunks progressively for immediate feedback.
- Additional modes (e.g., `yamlish` indentation-only), still without full parsing.

## What To Avoid
- Heavy parsers: Avoid bundling/using JSON5, HJSON, AST parsers, or Prettier-like libraries.
- Main-thread work: Do not run tokenization/formatting on the UI thread; always use a Web Worker.
- Aggressive rewrites: Do not change tokens/values by default; keep a conservative mode that only re-indents.
- String/comment misparsing: Do not treat brackets inside strings/comments as structural; always respect escapes.
- Global deps: Do not reference undeclared globals (e.g., `JSON5`, `HJSON`); guard or omit entirely.
- Uncancellable tasks: Do not run long formatting without cancellation/progress; new input must cancel prior runs.
- Over-normalization: Avoid semantic-altering transforms (e.g., converting True→true) unless explicitly enabled.
- Exceptions on bad input: Never throw on malformed or unbalanced content; return diagnostics instead.
- Memory spikes: Avoid building massive single strings repeatedly; use buffered concatenation and chunking.
- UI jank: Avoid synchronous copy of MB-sized strings on each keystroke; debounce and allow manual format.

## What To Implement
- Workerized core: A Web Worker with request `id`, progress events, cancellation, and final result.
- Tokenizer: Single-pass, state-machine lexer handling strings, comments, brackets, commas, colons, and other.
- Formatter: Stack-based indentation, newline/space rules, trailing-space trim, final newline, diagnostics.
- Modes: `structure`, `jsonish`, `phpish` with minimal, opt-in normalizations (quotes, trailing commas, `=>`).
- Detector (optional): Lightweight, library-free `detectType` used to suggest a default mode.
- Options/state: Indent size, tabs/spaces, newline-after-comma, keepComments, conservative; persisted via Nanostores.
- UI: Two-pane editor, settings controls, format-on-type (debounced), explicit Format button, Copy output.
- Tests: Unit (tokenizer), golden (formatter outputs), property (idempotence), performance (time budget, progress cadence).
- Diagnostics: Unbalanced brackets flag, warnings list, timing; render unobtrusively in the UI.
- Large-input strategy: Soft size threshold that switches to streaming/minimal features while staying responsive.

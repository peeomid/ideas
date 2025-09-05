import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Copy, Wand2, RotateCcw } from "lucide-react";
import JSON5 from "json5";
import * as HJSON from "hjson";

// --- Utilities --------------------------------------------------------------

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
    } catch { }

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
    } catch { }
    try {
        HJSON.parse(s);
        return "hjson";
    } catch { }

    return "unknown";
}

function stringifyPretty(obj: any): string {
    return JSON.stringify(obj, null, 2);
}

// Convert a Python-literal-ish repr into JSON text.
// Handles dict/list/tuple, strings, numbers, True/False/None.
// Not a full Python parser; good for typical dumps and reprs.
function pythonReprToJsonText(src: string): string {
    let s = src.trim();
    // Map booleans/None
    s = s.replace(/\bTrue\b/g, "true").replace(/\bFalse\b/g, "false").replace(/\bNone\b/g, "null");
    // Convert tuples to arrays conservatively: (a, b, c) -> [a, b, c]
    // This is heuristic and may mis-handle parentheses in strings.
    s = s.replace(/\(/g, "[").replace(/\)/g, "]");
    // Convert single-quoted strings to JSON double-quoted strings
    s = s.replace(/'((?:[^'\\]|\\.)*)'/g, (_m, inner) => {
        const escaped = inner.replace(/\\"/g, '"').replace(/"/g, '\\"');
        return `"${escaped}"`;
    });
    // Now it *resembles* JSON; try JSON5 first for leniency.
    return s;
}

// Convert simple PHP array syntaxes (var_export/print_r-ish) to JSON-ish text.
// Supports: array ( 'k' => 'v', 0 => 1 ) and [ 'k' => 'v' ]
// Does not fully support var_dump or objects. Basic scalars handled.
function phpArrayToJsonText(src: string): string {
    let s = src.trim();
    // Normalize keywords
    s = s.replace(/\bNULL\b/gi, "null").replace(/\bTRUE\b/gi, "true").replace(/\bFALSE\b/gi, "false");
    // Replace array(...) with {...}
    s = s.replace(/\barray\s*\(/gi, "{").replace(/\)(?=\s*[),\]}]|\s*$)/g, "}");
    // Allow short array syntax [ ... ] to remain; we'll decide object vs array later.

    // Convert 'key' => value to "key": value
    s = s.replace(/'((?:[^'\\]|\\.)*)'\s*=>/g, (_m, key) => {
        const escaped = key.replace(/\\"/g, '"').replace(/"/g, '\\"');
        return `"${escaped}":`;
    });
    // Convert "key" => value to "key": value (if anyone uses it)
    s = s.replace(/"((?:[^"\\]|\\.)*)"\s*=>/g, (_m, key) => `"${key}":`);
    // Bareword keys => value  (rare) -> "key": value
    s = s.replace(/\b([A-Za-z_][A-Za-z0-9_]*)\b\s*=>/g, (_m, key) => `"${key}":`);

    // Single-quoted strings to double-quoted
    s = s.replace(/'((?:[^'\\]|\\.)*)'/g, (_m, inner) => `"${inner.replace(/"/g, '\\"')}"`);

    // At this point many arrays will look like JSON objects; for pure lists like [a, b], leave as arrays.
    // Heuristic: if we see any ":" at the top level after a { we treat as object.
    return s;
}

// Generic bracket-based pretty printer for unknown structures.
// Indents on {[(/ and outdents on ])} . Respects strings and escapes.
function prettyByBrackets(input: string, indentStr = "  "): string {
    let out = "";
    let depth = 0;
    let inSingle = false;
    let inDouble = false;
    let escape = false;

    const openers = new Set(["{", "[", "("]);
    const closers = new Set(["}", "]", ")"]);

    const pushIndent = () => {
        out += "\n" + indentStr.repeat(depth);
    };

    for (let i = 0; i < input.length; i++) {
        const ch = input[i];

        if (escape) {
            out += ch;
            escape = false;
            continue;
        }

        if (ch === "\\") {
            out += ch;
            if (inSingle || inDouble) escape = true;
            continue;
        }

        if (!inDouble && ch === "'" && !inSingle) {
            inSingle = true;
            out += ch;
            continue;
        } else if (inSingle && ch === "'") {
            inSingle = false;
            out += ch;
            continue;
        }

        if (!inSingle && ch === '"' && !inDouble) {
            inDouble = true;
            out += ch;
            continue;
        } else if (inDouble && ch === '"') {
            inDouble = false;
            out += ch;
            continue;
        }

        if (inSingle || inDouble) {
            out += ch;
            continue;
        }

        if (openers.has(ch)) {
            out += ch;
            depth++;
            pushIndent();
            continue;
        }

        if (closers.has(ch)) {
            depth = Math.max(0, depth - 1);
            out += "\n" + indentStr.repeat(depth) + ch;
            continue;
        }

        if (ch === ",") {
            out += ch;
            pushIndent();
            continue;
        }

        if (ch === ":") {
            out += ": ";
            continue;
        }

        if (ch === "\n") {
            // collapse multiple newlines
            if (!out.endsWith("\n")) out += "\n" + indentStr.repeat(depth);
            continue;
        }

        out += ch;
    }

    return out;
}

// Main formatter pipeline
function formatGeneric(input: string, force?: Detected): { output: string; detected: Detected; stage: string } {
    const chosen = force ?? detectType(input);

    // 1) Strict JSON
    if (chosen === "json") {
        const obj = JSON.parse(input);
        return { output: stringifyPretty(obj), detected: chosen, stage: "strict-json" };
    }

    // 2) JSON5 / HJSON
    if (chosen === "json5" || chosen === "hjson") {
        try {
            const obj = JSON5.parse(input);
            return { output: stringifyPretty(obj), detected: "json5", stage: "json5" };
        } catch { }
        try {
            const obj = HJSON.parse(input);
            return { output: stringifyPretty(obj), detected: "hjson", stage: "hjson" };
        } catch { }
    }

    // 3) Python repr-like
    if (chosen === "pythonRepr") {
        const jsonish = pythonReprToJsonText(input);
        try {
            const obj = JSON5.parse(jsonish);
            return { output: stringifyPretty(obj), detected: chosen, stage: "python->json5" };
        } catch { }
        return { output: prettyByBrackets(jsonish), detected: chosen, stage: "python->brackets" };
    }

    // 4) PHP arrays (var_export/print_r-ish)
    if (chosen === "phpArray") {
        const jsonish = phpArrayToJsonText(input);
        try {
            const obj = JSON5.parse(jsonish);
            return { output: stringifyPretty(obj), detected: chosen, stage: "php->json5" };
        } catch { }
        return { output: prettyByBrackets(jsonish), detected: chosen, stage: "php->brackets" };
    }

    // 5) PHP var_dump (best-effort: normalize + bracket pretty)
    if (chosen === "phpVarDump") {
        // Minimal cleanup: remove types like string(3) and int(4) wrappers but keep values
        let s = input
            .replace(/string\(\d+\)\s*"/g, '"')
            .replace(/int\((\-?\d+)\)/g, '$1')
            .replace(/float\(([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\)/g, '$1')
            .replace(/bool\((true|false)\)/g, '$1')
            .replace(/NULL/g, 'null')
            .replace(/\[([^\]]+)\]\s*=>/g, '"$1":')
            .replace(/object\([^)]*\)\s*\((\d+)\)\s*\{/g, '{ // object with $1 props ')
            .replace(/array\((\d+)\)\s*\{/g, '{ // array with $1 items ')
            .replace(/\}/g, '}');
        return { output: prettyByBrackets(s), detected: chosen, stage: "var_dump->brackets" };
    }

    // 6) Unknown -> bracket beautifier
    return { output: prettyByBrackets(input), detected: chosen, stage: "brackets" };
}

// --- UI --------------------------------------------------------------------

export default function App() {
    const [input, setInput] = useState(`Paste anything here…\n\nExamples:\n\n// JSON with single quotes\n{ 'a': 1, 'b': [1,2,3,], // trailing comma ok\n  'user': { 'name': 'Nụ', 'active': True, 'email': None } }\n\n# Python repr\n{'users': [{'id': 1, 'name': 'Alice'}, {'id': 2, 'name': 'Bob'}], 'ok': True}\n\n// PHP var_export\narray ( 'foo' => 'bar', 0 => 10, 'nested' => array( 'x' => 1, 'y' => 2 ), )\n\n// PHP var_dump-ish\narray(2) {\n  [\"id\"]=>\n  int(42)\n  [\"tags\"]=>\n  array(3) { [0]=> string(3) \"one\" [1]=> string(3) \"two\" [2]=> string(5) \"three\" }\n}`);
    const [forced, setForced] = useState<Detected | "auto">("auto");
    const [output, setOutput] = useState("");
    const [detected, setDetected] = useState<Detected>("unknown");
    const [stage, setStage] = useState("-");

    const handleFormat = () => {
        const { output, detected, stage } = formatGeneric(input, forced === "auto" ? undefined : forced);
        setOutput(output);
        setDetected(detected);
        setStage(stage);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(output || "");
        } catch { }
    };

    const badge = useMemo(() => {
        const m: Record<Detected, string> = {
            json: "bg-emerald-100 text-emerald-700",
            json5: "bg-emerald-100 text-emerald-700",
            hjson: "bg-emerald-100 text-emerald-700",
            pythonRepr: "bg-indigo-100 text-indigo-700",
            phpArray: "bg-amber-100 text-amber-700",
            phpVarDump: "bg-amber-100 text-amber-700",
            unknown: "bg-slate-100 text-slate-700",
        };
        return m[detected];
    }, [detected]);

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h1 className="text-2xl font-semibold tracking-tight">Generic Code Beautifier</h1>
                    <p className="text-sm text-slate-600">
                        Paste JSON/JSON5/HJSON, Python <code>repr</code>, PHP <code>array/print_r/var_export</code>, or even messy
                        <code> var_dump</code>. We'll try to normalize & pretty-print. For unknown text, we fall back to a smart
                        bracket-based formatter.
                    </p>

                    <Card className="shadow-sm">
                        <CardContent className="p-4 space-y-3">
                            <div className="flex items-center gap-3">
                                <label className="text-xs font-medium w-20">Mode</label>
                                <select
                                    className="w-full border rounded-md p-2 bg-white"
                                    value={forced}
                                    onChange={(e) => setForced(e.target.value as any)}
                                >
                                    <option value="auto">Auto-detect</option>
                                    <option value="json">Force: JSON</option>
                                    <option value="json5">Force: JSON5</option>
                                    <option value="hjson">Force: HJSON</option>
                                    <option value="pythonRepr">Force: Python repr</option>
                                    <option value="phpArray">Force: PHP array</option>
                                    <option value="phpVarDump">Force: PHP var_dump</option>
                                    <option value="unknown">Force: Unknown (brackets)</option>
                                </select>
                            </div>

                            <Textarea
                                className="h-[360px] font-mono text-sm"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />

                            <div className="flex gap-2">
                                <Button onClick={handleFormat} className="gap-2"><Wand2 className="h-4 w-4" />Beautify</Button>
                                <Button variant="secondary" onClick={() => { setInput(""); setOutput(""); setDetected("unknown"); setStage("-"); }} className="gap-2">
                                    <RotateCcw className="h-4 w-4" />Reset
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${badge}`}>{detected}</span>
                            <span className="text-xs text-slate-500">stage: {stage}</span>
                        </div>
                        <Button size="sm" variant="outline" onClick={handleCopy} className="gap-2">
                            <Copy className="h-4 w-4" />Copy output
                        </Button>
                    </div>

                    <Card className="shadow-sm">
                        <CardContent className="p-4">
                            <pre className="whitespace-pre-wrap font-mono text-sm leading-6">{output}</pre>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm">
                        <CardContent className="p-4 space-y-2 text-sm text-slate-600">
                            <div className="font-medium">Notes & Limitations</div>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>Python converter handles dicts/lists/tuples, basic scalars. Sets & complex objects are not fully supported.</li>
                                <li>PHP support targets <code>array(...)</code>, short arrays <code>[...]</code>, and <code>print_r/var_export</code> styles. <code>var_dump</code> is best-effort.</li>
                                <li>Unknown structures fall back to bracket-based indentation that respects strings and escapes.</li>
                                <li>No evaluation of code is performed; everything is string-to-string transforms.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

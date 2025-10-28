# Let the LLM Write the Prompts: An Intro to DSPy in Compound AI Pipelines

**Source:** [YouTube Video](https://www.youtube.com/watch?v=I9ZtkgYZnOw)
**Date Read:** 2025-09-24
**Rating:** ⭐⭐⭐⭐⭐
**Topics:** #ai-ml #llm #prompting #dspy #automation

## Key Points

### The Problem with Traditional Prompting
- **Prompts are brittle and fragile** - Similar to regex, "I know I'll use prompting and now I have two problems"
- **Model-dependent performance** - Prompts perform differently across models; slight wording changes can drastically affect benchmark scores
- **Prompts become catch-all solutions** - Teams add hot fixes and patches that accumulate over time
- **Opaque and hard to maintain** - Prompts contain multiple components (task, chain of thought, context, examples, tools, formatting) but appear as blocks of text
- **Version control nightmare** - Most teams don't properly version their prompts
- **Not portable** - Changing models means rewriting prompts

### DSPy Framework Solution
- **Decouples task from LLM** - Write tasks programmatically, not as text prompts
- **Two core concepts:**
  - **Signatures** - Define inputs and outputs (what you want)
  - **Modules** - Define prompting strategy (how to get it)
- **Behind the scenes:** Converts signatures + modules into proper system/user prompts automatically
- **Modular design:** Switch between prompting strategies (predict, chain of thought, react, etc.) by changing one line

### Real-World Example: Overture Maps Conflation
- **Challenge:** Merging 70+ million POI (points of interest) from multiple sources
- **Problem:** Human-created messy data - misspellings, similar names, bad addresses
- **Solution:** Compound AI pipeline with DSPy for LLM matching step
- **Results without writing prompts:**
  - Qwen 0.6B: 60% → 82% accuracy (14 lines of code)
  - Llama: 84% → 91% accuracy
  - Reasoning model: 86.95% accuracy
  - Each optimization produced different, optimized prompts

### MIPRO v2 Optimizer
- **Automatic prompt optimization process:**
  1. Runs task on training data with current prompt
  2. Sends traces + task description to larger LLM (e.g., GPT-4)
  3. LLM generates multiple better prompt candidates (5-30)
  4. Tests all candidates against eval data
  5. Merges best parts together
  6. Returns optimized prompt
- **Also optimizes:** Number of examples, synthetic vs real examples, prompting techniques
- **Cost:** ~$1 in credits to go from 60% to 82% accuracy

### Key Benefits
- **Model portability** - Switch models easily, re-optimize, deploy
- **Team collaboration** - Code is readable, no opaque prompts
- **Versioning** - Saves as JSON, proper version control
- **Focus on what matters** - Task definition + eval data (not prompts)
- **Future-proof** - New optimizers/models/strategies work without code changes
- **No JSON parsing** - Structured outputs work automatically

## My Thoughts

This completely changes how I should think about LLM integration in projects. The key insight is that **prompts are temporary** - there's always a better model or strategy tomorrow, so don't invest heavily in hand-crafted prompts.

The framework addresses several pain points I've encountered:
- Formatting/parsing JSON from LLM responses
- Maintaining prompts across different models
- Team collaboration on complex prompts
- Version control for prompts

The real magic is the optimizer - using a large LLM to write better prompts for your smaller production model. This is essentially **prompt engineering as code + automated optimization**.

For my projects, this could be incredibly valuable for:
- **Devsgen** - Code formatting/analysis features
- **Textua** - Text processing and readability
- **Any LLM pipeline** - Standardized, maintainable approach

The emphasis on eval data over prompts is crucial: "Prompts are worthless. Eval data is gold."

## Action Items

- [ ] Try DSPy for next LLM-based feature in any project
- [ ] Start with simple signature definition for structured data extraction
- [ ] Build eval dataset for any LLM task I'm working on
- [ ] Explore MIPRO v2 optimization for production pipelines
- [ ] Check out Overture Maps data for any geo projects
- [ ] Read DSPy documentation and examples

## Connected Ideas

- Related to: [[knowledge/topics/ai-ml-moc]] - Core AI/ML concepts
- Relevant for: [[projects/devsgen/main-devsgen]] - Could use for code analysis features
- Relevant for: [[projects/textua/main-textua]] - Text processing optimization
- Concept: Compound AI pipelines - combining multiple AI approaches
- Tool: DSPy framework - https://github.com/stanfordnlp/dspy
- Principle: Eval data > Prompts - focus on testing, not prompt engineering
Check my code, see where the function to add quotation case with advisor

⏺ I'll help you find the function that adds quotation cases with advisors. Let me search through the codebase to locate this functionality.

⏺ Update Todos
  ⎿  ☐ Search for quotation case creation functions with advisor

⏺ serena - search_for_pattern (MCP)(substring_pattern: "quotation.*case.*advisor|advisor.*quotation.*case", restrict_search_to_code_files: true)
  ⎿  The answer is too long (2274890 characters). Please try a more specific tool query or raise the max_answer_chars parameter.

⏺ serena - search_for_pattern (MCP)(substring_pattern: "def.*add.*quotation|create.*quotation", restrict_search_to_code_files: true, paths_include_glob: "*.py")
  ⎿  The answer is too long (4850793 characters). Please try a more specific tool query or raise the max_answer_chars parameter.

⏺ serena - search_for_pattern (MCP)(substring_pattern: "quotation", restrict_search_to_code_files: true, paths_include_glob: "*views*.py")
  ⎿  {
       "quotation/tests/test_views/test_customer_views.py": [
         "  >  28:from quotation.constants import QuoterStatus",
     … +677 lines (ctrl+r to expand)

⏺ Let me now search specifically for "advisor" related functions in the quotation views:

⏺ serena - search_for_pattern (MCP)(substring_pattern: "add.*advisor.*quotation|add_advisor_to_group_quotation", restrict_search_to_code_files: true)
  ⎿  The answer is too long (950750 characters). Please try a more specific tool query or raise the max_answer_chars parameter.

⏺ serena - find_symbol (MCP)(name_path: "add_advisor_to_group_quotation_case")
  ⎿  [
       {
         "name_path": "add_advisor_to_group_quotation_case",
     … +8 lines (ctrl+r to expand)

⏺ Perfect! Let me examine this function:

⏺ Read(quotation/services/group_quotation/group_quotation_case.py)
  ⎿  Read 25 lines (ctrl+r to expand)

⏺ Now let me check where this function is called from in the views to see the complete flow:

⏺ serena - find_referencing_symbols (MCP)(name_path: "add_advisor_to_group_quotation_case", relative_path: "quotation/services/group_quotation/group_quotation_case.py")
  ⎿  [
       {
         "name_path": "group_quotation",
     … +119 lines (ctrl+r to expand)

⏺ Now I'll look at the specific advisor view where this is called:

⏺ Read(quotation/views/advisor_view.py)
  ⎿  Read 15 lines (ctrl+r to expand)

⏺ Let me check the class this method belongs to:

⏺ Read(quotation/views/advisor_view.py)
  ⎿  Read 40 lines (ctrl+r to expand)
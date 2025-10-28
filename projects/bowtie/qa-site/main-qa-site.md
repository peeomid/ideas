# Bowtie Q&A Site

## Problem Statement
- 200 markdown Q&A files are hard for engineers to search
- Need solution to help engineers directly in Slack for ops requests

## Solution
FastAPI backend that parses markdown Q&A content and provides search API, with simple frontend interface.
Database: SQLite vs postgres

## Ideas:
- A business knowledge base/terms would help?

## MVP Features
- Service:
    - Parse markdown file and store into database

- **FastAPI backend**
    - Search API /api/search
    - Endpoints for content retrieval /api/qna/{question_id}
- **Frontend**
    - Simple search interface
    - Question display with answers
    - Navigation to related questions

## Things to consider
- Keep text file/markdown
    -> easy to review/control, like how claude code use code files/memory
    -> easy to update
    -> easy to version control

    Issue with text file: easy on local computer, but to run on server, and let it push file changes directly to git is not ideal? possible conflict when system run -> create and commit, in parallel, another person push to git?

## Db consideration
- SQLite 
    - lightweight, mirror of markdown
    - Can push to git
    
- Postgres
    - To manage more things, like interaction history -> do we need it? Can we keep it text based?

→ **Todo**: [[projects/bowtie/qa-site/todo]]
→ **Technical Notes**: [[projects/bowtie/qa-site/technical-notes]]

Ideas:
- Manage engineer knowledge (eg an engineer ask where I can learn more about sth)
- Knowledge on routing in ops request
- Knowledge on how to handle requests
- Knowledge on features/how to use features (do we have a feature for/how do we ... in admin portal) -> Get from SOP/change log
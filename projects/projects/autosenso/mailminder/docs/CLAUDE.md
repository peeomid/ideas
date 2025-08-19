# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Google Apps Script project for Gmail automation called **AutoSenso**. It automatically organizes Gmail emails into different categories based on sender patterns, using Gmail filters and labels. The project helps users maintain a clean inbox by automatically sorting emails from known senders.

## Architecture

### Core Components

- **Code.js**: Main script containing all Gmail automation logic
- **appsscript.json**: Google Apps Script configuration with Gmail API dependencies
- **Google Sheets Integration**: Uses connected Google Sheets to store email sender lists for each category

### Key Functions

1. **Initialize()**: Sets up initial labels and sheets (run once during setup)
2. **A_RUN_THIS()**: Main processing function that should run regularly (every 10 minutes)
3. **UPDATE_EMAIL_LISTS()**: Updates Gmail filters based on spreadsheet changes
4. **Install()**: Sets up automatic triggers for A_RUN_THIS()

### Email Categories

The script organizes emails into these categories:
- **AutoSenso/Imbox**: Important emails that stay in inbox
- **AutoSenso/Feed**: Regular updates/newsletters
- **AutoSenso/Papertrail**: Receipts/transactions
- **AutoSenso/Promotional**: Marketing emails
- **IGNORE**: Emails that go to trash

### Special Labels

- **to-sort**: User applies this to emails they want categorized
- **to-ignore**: User applies this to emails they want blocked
- **AutoSenso/to-screen**: System applies this to new emails needing review

## Development Commands

### Deployment
```bash
# Deploy to Google Apps Script
clasp push

# Full deployment with git commit
git add -A && git commit -m 'u' && git push && clasp push
```

### Testing
There are no automated tests. Test manually in Google Apps Script editor or by running functions directly.

## Development Workflow

1. **Local Development**: Edit Code.js locally
2. **Deploy**: Use `clasp push` to deploy to Google Apps Script
3. **Test**: Test functions manually in Apps Script editor
4. **Version Control**: Commit changes to git

## Key Constants to Modify

Update these constants in Code.js for customization:
- `USER_LABELS`: Maps category names to labels and sheet names
- `TO_SORT_LABEL`, `TO_IGNORE_LABEL`, `TO_SCREEN_LABEL`: Control label names
- `FILTER_UPDATE_INTERVAL`: How often to process emails (minutes)
- `MAX_FILTER_LENGTH`: Gmail filter length limit

## Important Notes

- This project uses Google Apps Script runtime V8
- Requires Gmail API advanced service enabled
- Connected to Google Sheets for email list storage
- Timezone set to Asia/Ho_Chi_Minh
- Uses Gmail filters with complex criteria for email matching
- Handles nested label creation automatically
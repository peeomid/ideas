# Gmail Auto-Organizer Script (AutoSenso)

This script helps you organize your Gmail inbox automatically. It sorts your emails into different labels based on who sent them. Here's how it works:

## Getting Started

1. First, you need to run the **Initialize** function. This does two important things:
   - It creates special labels in your Gmail account.
   - It sets up sheets in a Google Spreadsheet to keep track of email addresses.

2. Set up Multiple Inboxes in Gmail:
   - Follow the guide at https://support.google.com/mail/answer/9694882?hl=en to set up multiple inboxes.
   - Use the following setup for your multiple inboxes:
     1. `is:unread {is:important label:[autosenso]-imbox } -label:[autosenso]-feed -label:[autosenso]-promotional` | Important Unread or Imbox
     2. `{label:[autosenso]-feed } is:unread` | Feed
     3. `{label:[autosenso]-papertrail} is:unread  -label:[autosenso]-feed` | PaperTrail/Transaction/Receipt
     4. `-label:[autosenso]-papertrail -label:[autosenso]-feed {label:[autosenso]-promotional} is:unread` | Promotion and Not Important
     5. `label:[autosenso]-to-screen` | To Screen

## How It Works

After setting up, you run the **A_RUN_THIS** function regularly. Here's what it does:
- It looks for new emails that you've marked to sort or ignore.
- It adds the senders of these emails to the right list in your spreadsheet.
- It creates or updates filters in your Gmail to handle these senders automatically in the future.
- It moves emails to the right labels based on the sender.
- It can even move some emails to the trash if you've marked them as "ignore".

The script uses special labels:
- **to-sort**: You add this to emails you want the script to categorize.
- **to-ignore**: Add this to emails you never want to see again.
- **[AutoSenso]/to-screen**: The script adds this to new emails it's not sure about.

The script creates five main categories for your emails:
- **[AutoSenso]/Imbox**: Important emails you want to see right away.
- **[AutoSenso]/Feed**: Regular updates or newsletters you want to read later.
- **[AutoSenso]/Papertrail**: Emails you need to keep but don't need to read right away.
- **[AutoSenso]/Promotional**: Ads or promotional emails.
- **IGNORE**: Emails that will go straight to trash.

After sorting emails, the script:
- Moves emails out of your inbox if they're not marked as important.
- Keeps your inbox clean and organized.

## What You Need to Do

1. Run **Initialize** once when you first set up the script.
2. Set up Multiple Inboxes as described in the "Getting Started" section.
3. Run **A_RUN_THIS** regularly (it can be set up to run automatically).
4. When you get new emails that you want to categorize:
   - Add the **to-sort** label to the email.
   - Add one of the category labels ([AutoSenso]Imbox, [AutoSenso]Feed, [AutoSenso]Papertrail, or [AutoSenso]Promotional) to the same email.
   - The script will then know to add that sender to the selected category for future emails.

This script helps keep your inbox organized by applying your categorization choices to future emails from the same senders. It puts emails in the right place automatically, saving you time and keeping your inbox tidy.

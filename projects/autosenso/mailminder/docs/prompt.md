Let me explain what my script does exactly.  It helps filter email into categories like https://www.hey.com/, These are the categories 
const USER_LABELS = {
  IGNORE: { label: 'IGNORE', sheetName: 'ignore' },
  IMBOX: { label: '0Auto/Imbox', sheetName: 'imbox' },
  FEED: { label: '0Auto/Feed', sheetName: 'feed' },
  PAPERTRAIL: { label: '0Auto/Papertrail', sheetName: 'papertrail' },
  PROMOTIONAL: { label: '0Auto/Promotional', sheetName: 'promotional' }
};
The idea is, when a new email coming in, user can select 'to-sort' label, then another label, say 'feed', the script will add that email to feed list, then automatically create/update feed filter in gmail to include that email address. That way, when that we got email from that email address again, it'll auto apply 'feed' label, and skip inbox. That way, user's inbox will always be clear, only important emails stay in inbox. Feed is mostly for updates, newspaper. Papertrail is for receipt stuff.
Another concern is that, free offering script shouldn't have all the logic, that users can simply add simple stuff to have the upgrade version


---
1. Headline:
"Effortless Gmail Organization: Your Personal Email Assistant"

2. Quick description (2 sentences):
AutoSenso is a smart Gmail organizer that learns from your email habits and automatically sorts your messages. It keeps your inbox clean and organized, saving you time and reducing email stress.

3. Paragraph explanation:
AutoSenso simplifies your email management:
• It organizes emails based on your categorization
• Automatically sorts new messages into categories you've defined:
  - Important messages (Imbox)
  - Newsletters (Feed)
  - Records (Papertrail)
  - Promotions
• Sends unwanted emails directly to trash based on your choices
• Keeps your inbox clean and organized
• Saves you time by automating email sorting after initial setup
• Helps you focus on important emails
• Works in the background, applying your categorization rules consistently
• Maintains categories based on your selections
- Since it runs in background, it works with your mobile email app too

Benefits:
• Less time spent on email management
• Reduced email stress and overwhelm
• Improved productivity and focus
• Customized email organization that fits your needs
• Clean, clutter-free inbox

4. Context for a prompt:

AutoSenso is a Gmail automation script I've developed to help users organize their inbox effortlessly. It works by applying user-defined categorization rules to incoming emails, automatically sorting new messages into predefined labels like Imbox, Feed, Papertrail, and Promotional. The script creates and manages Gmail filters based on the user's manual selections, ensuring that future emails from the same senders are sorted correctly. AutoSenso runs periodically to keep the inbox organized according to the user's preferences. This tool aims to save users time, reduce email stress, and maintain a clean, clutter-free inbox by consistently applying the user's chosen organization system without requiring constant manual intervention.


---
I'm gonna launch AutoSenso soon, and I need help with launching, some example are, but not limited to:
- Write user guides
- marketing
- promotion
- Sales
- And can suggest other jobs

And I want to use chain of thoughts prompt technique, and experts technique to help me.
Here's what you should do, in markdown format:
- First, think step by step, what are the possible personas that will use this? 
- Then give me 2-3 sentences description of each persona that I can feed into AI.
- Group experts into groups.
- For each group, give description of purpose, and their target tasks. That they should discuss, and come to agreement on given topic, then write it down.
- Sample prompts using chain of thoughts prompt technique, for different kinds of tasks, and guide on how to use them.

---
# Chain of Thoughts

1. User Guide Creation:
   "As an expert technical writer, create a comprehensive user guide for AutoSenso. Think through the following steps:
   1. What are the key features of AutoSenso?
   2. How would a new user set up AutoSenso for the first time?
   3. What common issues might users encounter, and how can they be resolved?
   4. How can advanced users customize AutoSenso for their specific needs?
   For each step, provide detailed explanations and examples to ensure users of all levels can understand and effectively use AutoSenso."

2. Marketing Strategy Development:
   "As a seasoned digital marketing expert, develop a marketing strategy for AutoSenso. Consider the following:
   1. Who is the target audience for AutoSenso?
   2. What are the unique selling points of AutoSenso compared to other email organization tools?
   3. Which marketing channels would be most effective for reaching potential users?
   4. How can we measure the success of our marketing efforts?
   For each point, provide reasoning and specific tactics that could be implemented to promote AutoSenso effectively."

3. Sales Pitch Creation:
   "As an experienced sales professional, craft a compelling sales pitch for AutoSenso. Think through these steps:
   1. What pain points does AutoSenso solve for potential customers?
   2. How can we quantify the benefits of using AutoSenso (e.g., time saved, stress reduced)?
   3. What objections might potential customers have, and how can we address them?
   4. How can we structure the pitch to build interest and close the sale?
   For each step, provide specific examples and persuasive language that could be used in various sales situations."

Guide on using these prompts:
1. Start with the relevant prompt based on your current task.
2. Follow the step-by-step thinking process outlined in the prompt.
3. Elaborate on each point, providing detailed reasoning and examples.
4. After completing all steps, review and refine your output to ensure coherence and completeness.
5. If needed, ask follow-up questions to dive deeper into specific aspects of the task.


---
Experts

you are asked to act based on different roles / personalities
these are saved in this folder as {name}.txt
the user will ask you for help by 
@name
.txt mentioning you
always consider your name and role on the team
reply as if you are talking to a team member
you can recommend and involve other members of the team
always reply in conversational writing style
keep sentences short like in a chat exchange
when replying, just note your name, like this "suzie: ....response here", but use markdown like this: `**suzie:** `
to talk to another member of the team, mention them like this `**@name** __question__`- make sure you use the markdown code ticks


Role: Project manager
Name: suzie
i am an expert at project planning
especially for software projects
i am focussed on delivering quickly and iterating based on feedback
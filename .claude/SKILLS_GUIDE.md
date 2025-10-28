# Claude Code Skills Management Guide

## Overview

This guide explains how to manage Claude Code skills across different workspaces on your computer, including installation, transfer, and organization strategies.

## Understanding Skill Storage Locations

Claude Code supports three types of skill storage locations:

### 1. Personal Skills (`~/.claude/skills/`)
- **Scope**: Available globally across all workspaces
- **Use case**: Personal workflows, utilities you use frequently
- **Persistence**: Survives across projects
- **Sharing**: Not shared with team members

### 2. Project Skills (`.claude/skills/`)
- **Scope**: Available only in the specific project/workspace
- **Use case**: Team-shared expertise, project-specific workflows
- **Persistence**: Committed to git, shared with team
- **Sharing**: Automatically available to team members who pull changes

### 3. Plugin Skills
- **Scope**: Bundled with installed plugins
- **Use case**: Skills provided by Claude Code plugins
- **Management**: Managed through plugin installation

## Installing Skills from GitHub

### Method 1: Direct Clone (Recommended for Single Skills)

```bash
# For personal skills (available globally)
cd ~/.claude/skills/
git clone https://github.com/username/skill-name.git

# For project skills (workspace-specific)
cd /path/to/your/workspace/.claude/skills/
git clone https://github.com/username/skill-name.git
```

### Method 2: Download and Extract (For Multiple Skills from One Repo)

```bash
# Clone the repository temporarily
cd ~/Downloads
git clone https://github.com/anthropics/skills.git

# Copy specific skills to personal directory
cp -r skills/skill-name ~/.claude/skills/

# Or copy to project directory
cp -r skills/skill-name /path/to/workspace/.claude/skills/

# Clean up
rm -rf skills
```

## Transferring Skills Between Workspaces

### Scenario 1: Copy from Personal to Project (Make Team-Available)

```bash
# Copy from personal to current workspace
cp -r ~/.claude/skills/skill-name ./.claude/skills/

# Commit to git for team sharing
git add .claude/skills/skill-name
git commit -m "Add skill-name skill for team use"
git push
```

### Scenario 2: Copy from One Project to Another

```bash
# Navigate to target workspace
cd /path/to/target-workspace

# Copy skill from source workspace
cp -r /path/to/source-workspace/.claude/skills/skill-name ./.claude/skills/

# Commit if it's a team-shared workspace
git add .claude/skills/skill-name
git commit -m "Add skill-name skill"
```

### Scenario 3: Copy from Project to Personal (Make Globally Available)

```bash
# Copy from current workspace to personal skills
cp -r ./.claude/skills/skill-name ~/.claude/skills/
```

### Scenario 4: Link Skills (For Active Development)

If you're actively developing a skill and want it available in multiple workspaces without duplicating files:

```bash
# Create a symlink from workspace to personal skill
ln -s ~/.claude/skills/skill-name ./.claude/skills/skill-name
```

**Note**: Symlinks allow you to edit once and have changes reflected everywhere, but won't work with git commits.

## Managing the skill-creator Skill Specifically

The `skill-creator` skill is special because it helps you create other skills. Here's how to use it across workspaces:

### Install Globally (Recommended)

```bash
# Already installed at ~/.claude/skills/skill-creator/
# Available in all workspaces automatically
```

### Add to Specific Workspace for Team

```bash
# From any workspace
cp -r ~/.claude/skills/skill-creator ./.claude/skills/

# Commit for team
git add .claude/skills/skill-creator
git commit -m "Add skill-creator for team skill development"
git push
```

## Verifying Skill Installation

```bash
# Check personal skills
ls -la ~/.claude/skills/

# Check project skills
ls -la .claude/skills/

# View skill details
cat ~/.claude/skills/skill-name/SKILL.md
```

Or ask Claude Code directly:
```
What skills are available?
```

## Creating Skills with skill-creator

### Quick Start

1. **Initialize a new skill**:
   ```bash
   ~/.claude/skills/skill-creator/scripts/init_skill.py my-skill-name --path ~/.claude/skills/
   ```

2. **Edit the generated SKILL.md**:
   - Update the description in frontmatter
   - Add instructions for using the skill
   - Include any scripts, references, or assets

3. **Package the skill** (for distribution):
   ```bash
   ~/.claude/skills/skill-creator/scripts/package_skill.py ~/.claude/skills/my-skill-name
   ```

### Alternative: Ask Claude Code

Simply ask:
```
Help me create a skill for [specific purpose]
```

Claude will use the skill-creator skill to guide you through the process.

## Best Practices

### When to Use Personal vs Project Skills

**Use Personal Skills when:**
- The skill is for your individual workflow
- You're experimenting or developing a skill
- The skill contains personal preferences or credentials

**Use Project Skills when:**
- The entire team needs the same workflow
- The skill contains company/project-specific knowledge
- You want version control and team collaboration

### Organizing Skills

```
~/.claude/skills/                    # Personal skills
├── skill-creator/                   # For creating new skills
├── my-workflow-automation/          # Personal automation
└── quick-notes/                     # Personal note-taking

./.claude/skills/                    # Project skills
├── company-branding/                # Brand guidelines
├── api-integration/                 # Project API docs
└── database-schema/                 # Database reference
```

### Skill Naming Conventions

- Use lowercase with hyphens: `my-skill-name`
- Be descriptive but concise: `pdf-editor` not `edit-pdf-files-skill`
- Maximum 64 characters

### Git Management

**For Project Skills:**

```bash
# Add .gitignore entry if skill contains sensitive data
echo ".claude/skills/api-keys/" >> .gitignore

# Commit skills directory structure
git add .claude/skills/
git commit -m "Add project skills"
```

**For Personal Skills:**
- Never commit to project repos
- Consider backing up with separate git repo

## Troubleshooting

### Skill Not Loading

1. Check file structure:
   ```bash
   ls -la ~/.claude/skills/skill-name/
   # Should contain SKILL.md with valid YAML frontmatter
   ```

2. Validate YAML frontmatter:
   ```bash
   head -5 ~/.claude/skills/skill-name/SKILL.md
   # Should show:
   # ---
   # name: skill-name
   # description: ...
   # ---
   ```

3. Restart Claude Code session

### Permission Issues

```bash
# Fix permissions for personal skills
chmod -R 755 ~/.claude/skills/

# Fix permissions for project skills
chmod -R 755 ./.claude/skills/
```

### Skill Conflicts

If two skills have similar descriptions and trigger conditions:
1. Make descriptions more specific
2. Use distinct terminology in descriptions
3. Consider combining into one skill

## Advanced: Skill Development Workflow

### Iterative Development Process

1. **Develop in personal directory**:
   ```bash
   # Create and test in personal skills
   ~/.claude/skills/skill-creator/scripts/init_skill.py test-skill --path ~/.claude/skills/
   ```

2. **Test in a sandbox workspace**:
   ```bash
   mkdir ~/skill-testing
   cd ~/skill-testing
   mkdir -p .claude/skills
   ln -s ~/.claude/skills/test-skill .claude/skills/test-skill
   ```

3. **Iterate and refine**:
   - Test with real queries
   - Update SKILL.md based on results
   - Add/modify scripts, references, assets

4. **Package and distribute**:
   ```bash
   ~/.claude/skills/skill-creator/scripts/package_skill.py ~/.claude/skills/test-skill
   # Creates test-skill.zip for distribution
   ```

5. **Deploy to workspaces**:
   ```bash
   # Copy to production workspace
   cp -r ~/.claude/skills/test-skill /path/to/workspace/.claude/skills/
   ```

## Quick Reference Commands

```bash
# List all available skills
ls -la ~/.claude/skills/         # Personal
ls -la .claude/skills/            # Project

# Copy skill to workspace
cp -r ~/.claude/skills/SKILL-NAME ./.claude/skills/

# Copy skill from workspace to personal
cp -r ./.claude/skills/SKILL-NAME ~/.claude/skills/

# Initialize new skill
~/.claude/skills/skill-creator/scripts/init_skill.py SKILL-NAME --path PATH

# Package skill for distribution
~/.claude/skills/skill-creator/scripts/package_skill.py PATH/TO/SKILL

# Install packaged skill
unzip skill-name.zip -d ~/.claude/skills/

# Remove skill
rm -rf ~/.claude/skills/SKILL-NAME      # Personal
rm -rf ./.claude/skills/SKILL-NAME      # Project
```

## Resources

- [Claude Code Skills Documentation](https://docs.claude.com/en/docs/claude-code/skills.md)
- [Official Skills Repository](https://github.com/anthropics/skills)
- skill-creator skill: `~/.claude/skills/skill-creator/SKILL.md`

## Examples

### Example 1: Share Personal Skill with Team

```bash
# You have a useful personal skill
ls ~/.claude/skills/my-automation/

# Copy to project for team sharing
cd ~/projects/team-project
cp -r ~/.claude/skills/my-automation ./.claude/skills/

# Commit and push
git add .claude/skills/my-automation
git commit -m "Add automation skill for team workflow"
git push

# Team members get it automatically on next pull
```

### Example 2: Use Skill from Another Project

```bash
# Found useful skill in another project
ls ~/projects/old-project/.claude/skills/useful-tool/

# Copy to current project
cd ~/projects/new-project
cp -r ~/projects/old-project/.claude/skills/useful-tool ./.claude/skills/

# Now available in new project
```

### Example 3: Make Project Skill Available Everywhere

```bash
# Useful project skill you want globally
cd ~/projects/my-project

# Copy to personal skills
cp -r ./.claude/skills/project-skill ~/.claude/skills/

# Now available in all workspaces
```

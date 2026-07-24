# Week 6 - Git Hands-on 3

## Objective
- Understand Git Branching
- Create and switch branches
- Commit changes in a branch
- Merge a branch into the main branch
- View Git history
- Delete merged branches

## Prerequisites
- Git Bash
- Git installed
- Local Git repository

## Files Included
- README.md
- commands.txt
- sample.txt

## Git Commands Used

```bash
git branch GitNewBranch
git branch -a
git checkout GitNewBranch
git status
git add sample.txt
git commit -m "Added sample.txt in GitNewBranch"
git checkout main
git diff main GitNewBranch
git difftool main GitNewBranch
git merge GitNewBranch
git log --oneline --graph --decorate
git branch -d GitNewBranch
git status
```

## Expected Outcome

- New branch created successfully.
- Changes committed in the branch.
- Branch merged into the main branch.
- Commit history displayed.
- Branch deleted after successful merge.

## Learning Outcome

This exercise demonstrates how Git branching enables parallel development and how changes can be merged safely into the main branch.
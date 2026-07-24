# Week 6 - Git Hands-on 4

## Objective

- Understand merge conflicts in Git.
- Resolve conflicts during branch merging.
- Update `.gitignore`.
- Delete merged branches.

## Prerequisites

- Git installed
- Git Bash
- Hands-on 3 completed

## Files Included

- README.md
- commands.txt
- hello.xml
- .gitignore

## Git Commands Used

```bash
git status
git branch GitWork
git checkout GitWork
git add hello.xml
git commit -m "Added hello.xml in GitWork branch"
git checkout main
git add hello.xml
git commit -m "Modified hello.xml in main"
git log --oneline --graph --decorate --all
git diff main GitWork
git difftool main GitWork
git merge GitWork
git add hello.xml
git commit -m "Resolved merge conflict"
git add .gitignore
git commit -m "Updated .gitignore"
git branch
git branch -d GitWork
git log --oneline --graph --decorate
```

## Expected Outcome

- Created a feature branch.
- Modified the same file in two branches.
- Generated and resolved a merge conflict.
- Updated `.gitignore`.
- Successfully merged and deleted the feature branch.

## Learning Outcome

This exercise demonstrates how Git detects merge conflicts when the same file is modified in multiple branches and how conflicts can be resolved before completing the merge.
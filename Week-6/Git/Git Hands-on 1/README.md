# Week 6 - Git Hands-on 1

## Objective

- Configure Git
- Initialize a local Git repository
- Create and track files using Git
- Commit changes to the local repository

## Software Used

- Git Bash
- Git
- Windows 11

## Commands Executed

```bash
git --version
git config --global user.name "Shubrat Mishra"
git config --global user.email "msanjaykumar995@gmail.com"
git config --global --list
mkdir GitDemo
cd GitDemo
git init
echo Welcome to the version control > welcome.txt
cat welcome.txt
git status
git add welcome.txt
git status
git commit -m "Added welcome.txt"
git log --oneline
```

## Result

Successfully configured Git, initialized a repository, created a file, tracked it using Git, and committed the changes successfully.
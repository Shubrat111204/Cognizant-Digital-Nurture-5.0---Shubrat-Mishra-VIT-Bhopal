# Week 6 - Git Hands-on 2

## Objective

- Understand the purpose of `.gitignore`
- Ignore unwanted files and folders from being tracked by Git

## Software Used

- Git
- Git Bash
- Visual Studio Code

## Files Ignored

- All `.log` files
- `logs` directory

## Commands Executed

```bash
echo This is a log file > test.log
mkdir logs
echo Error Log > logs/error.txt
touch .gitignore
git status
git add .gitignore
git commit -m "Added gitignore file"
git status
```

## .gitignore Content

```text
*.log
logs/
```

## Result

Successfully configured Git to ignore `.log` files and the `logs` folder. The ignored files were not tracked by Git, while the `.gitignore` file was committed successfully.
#!/bin/bash

# Set default commit message if not provided as an argument
COMMIT_MSG=${1:-"Updated project"}

echo "🚀 Running Git Automation Script..."

## Check for Git repository
#if [ ! -d ".git" ]; then
#    echo "❌ No Git repository found. Please run this script inside a Git project."
#    exit 1
#fi

# Show current branch
BRANCH=$(git branch --show-current)
echo "🔍 Current branch: $BRANCH"

# Pull latest changes
#echo "📥 Pulling latest changes..."
#git pull origin "$BRANCH"

# Add all changes
echo "📌 Staging all changes..."
git add .

# Commit changes
echo "📝 Committing changes..."
git commit -m "$COMMIT_MSG"

# Push changes
echo "📤 Pushing changes to remote repository..."
git push

echo "✅ Git operations completed successfully!"

echo "Build project"
npm run build

echo "Deploy to GitHub"
npm run deploy

echo "Finish!!!"


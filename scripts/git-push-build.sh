#!/bin/sh
git add . 
echo "Type the comment for this commit."

read commitText

git commit -m "$commitText"
git branch
echo "What branch would you like to push too?"
read branch
git push origin $branch
echo "Running Build"
npm run build 
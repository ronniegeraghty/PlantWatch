#!/bin/sh
git add . 
echo "Type the comment for this commit."

read commitText

git commit -m "$commitText"
echo "Pushing to master branch"
git push origin master
echo "Running Build"
npm run build 
echo "Running predeploy"
npm run predeploy
echo "Runnig Deploy"
npm run deploy
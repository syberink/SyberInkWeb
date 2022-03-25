#/bin/sh
git checkout dev
git merge main
git add .
read commitnote
git commit -am "$commitnote"
git push origin dev

git checkout main
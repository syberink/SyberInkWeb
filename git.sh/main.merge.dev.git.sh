#/bin/sh
git checkout main
git merge dev
git add .
read commitnote
git commit -am "$commitnote"
git push origin main
git checkout $1
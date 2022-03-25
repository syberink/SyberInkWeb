#/bin/sh
git checkout dev
git merge $1
git add .
read commitnote
git commit -am "$commitnote"
git push origin dev

git checkout $1
#/bin/sh
git checkout dev
git fetch upstream
git rebase upstream/dev
# git merge upstream/dev
git push origin dev
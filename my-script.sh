#!/bin/bash
echo "============Start of Pull command============"
git pull
echo "============End of Pull command============"

echo "============Start of Commit command============"
git add .
#git reset my-script.sh 
echo -n "Enter you msg";
read MSG
git commit -m "$MSG"
echo "============End of Commit command============"
echo "============Start of Push command============"
git push
echo "============End of Push command============"

#sudo git config --global credential.helper store
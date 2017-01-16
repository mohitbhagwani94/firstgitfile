#!/bin/bash
echo "============Start of Pull command=============="
git pull
echo "============End of Pull command================"
echo "============Start of Commit command============"
git add .
git commit -m "============automate commiting 4============"
echo "============End of Commit command============"
echo "============Start of Push command============"
git push
echo "============End of Push command============"
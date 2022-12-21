#!/usr/bin/env bash
cd /home/ec2-user/node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install --lts
nvm install 16
sleep 10
npm install
npm start

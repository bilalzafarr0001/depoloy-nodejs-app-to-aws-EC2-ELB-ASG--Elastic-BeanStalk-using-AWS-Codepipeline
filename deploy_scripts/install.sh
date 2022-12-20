# add nodejs to yum
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

. ~/.nvm/nvm.sh

nvm install --lts

nvm install 14
 
# install pm2 module globaly
npm install -g pm2
pm2 update

# delete existing bundle
cd /home/ec2-user
rm -rf node
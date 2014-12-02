#!/bin/bash
echo "Deploy to nginx"

sudo rm -rf /var/www/html/cw
sudo mkdir /var/www/html/cw
sudo cp -R app /var/www/html/cw
sudo cp -R node_modules /var/www/html/cw/node_modules

sudo cp  config/cw.conf /etc/nginx/sites-enabled/cw.conf
sudo nginx -s reload

echo "Deploy to nginx is a success"


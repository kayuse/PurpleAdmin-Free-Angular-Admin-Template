#!/bin/bash
cp src/environments/environment.prod.ts src/environments/environment.ts
docker pull ilanaasoft/emc-portal:latest
docker kill $(docker ps -q)
docker run -d -p 4200:80 ilanaasoft/emc-portal:latest
# ng build --prod
# pm2 start
# docker build -t emc-portal/angular-app:latest . 
# docker stop $(docker ps -a -q)
# docker run -d -p 4200:80 emc-portal/angular-app:latest
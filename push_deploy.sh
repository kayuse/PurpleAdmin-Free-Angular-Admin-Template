 #!/bin/bash
cp src/environments/environment.prod.ts src/environments/environment.ts
docker build -t ilanaasoft/emc-portal:latest  . 
docker push ilanaasoft/emc-portal:latest

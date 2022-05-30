 #!/bin/bash
cp src/environments/environment.prod.ts src/environments/environment.ts
docker build -t ilanaasoft/emc-portal:latest  .   --platform linux/amd64
docker push ilanaasoft/emc-portal:latest

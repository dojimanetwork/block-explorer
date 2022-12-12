docker build --platform=linux/amd64 -f Dockerfile --force-rm  -t dojima-block-explorer .

docker tag dojima-block-explorer:latest 576263512135.dkr.ecr.$REGION.amazonaws.com/dojima-block-explorer:$TAG

aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin 576263512135.dkr.ecr.$REGION.amazonaws.com

docker push 576263512135.dkr.ecr.$REGION.amazonaws.com/dojima-block-explorer:$TAG




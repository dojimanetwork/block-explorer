BRANCH?=$(shell git rev-parse --abbrev-ref HEAD | sed -e 's/prod/mainnet/g;s/develop/testnet/g;')
BUILDTAG?=$(shell git rev-parse --abbrev-ref HEAD | sed -e 's/prod/mainnet/g;s/develop/testnet/g;')
GITREF=$(shell git rev-parse --short HEAD)
# pull branch name from CI, if available
ifdef CI_COMMIT_BRANCH
	BRANCH=$(shell echo ${CI_COMMIT_BRANCH} | sed 's/prod/mainnet/g')
	BUILDTAG=$(shell echo ${CI_COMMIT_BRANCH} | sed -e 's/prod/mainnet/g;s/develop/testnet/g;s/testnet-multichain/testnet/g')
endif
VERSION=$(shell cat version)
TAG=$(shell date +%Y-%m-%d)
# ------------------------------- GitHub ------------------------------- #

region-check:
	@if [ -z "${REGION}" ]; then\
        	echo "add region env variable";\
        	exit 1;\
    fi

ecr-check:
	@if [ -z "${ECR}" ]; then\
    		echo "add ecr env variable";\
    		exit 1;\
    fi
aws-github-push: ecr-check region-check
	docker tag ${ECR}:${GITREF} ${ECR}:${BRANCH}-${VERSION}-${TAG}
	docker push ${ECR}:${BRANCH}-${VERSION}-${TAG}

aws-github-build: region-check ecr-check
	docker build -f ./Dockerfile $(shell sh ./semver_tags.sh ${ECR} ${BRANCH} $(shell cat version)) -t ${ECR}:${GITREF} .
# ------------------------------------------------------------------ #

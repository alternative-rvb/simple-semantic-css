#!/bin/bash

PREVIOUS_TAG=$1
CURRENT_TAG=$2

echo "## ${CURRENT_TAG}"
echo ""

git log --pretty=format:"* %s (%cn)" ${PREVIOUS_TAG}..${CURRENT_TAG} --no-merges

#!/usr/bin/bash

set -euo pipefail

cat people-data.json | jq -rc .[0].name


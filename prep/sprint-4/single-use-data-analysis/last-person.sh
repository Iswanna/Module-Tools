#!/bin/bash

set -euo pipefail

cat people-data.json | jq -rc .[length-1].name
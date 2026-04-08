#!/bin/bash

set -euo pipefail

jq -r 'max_by(.score) | .name' people-data.json
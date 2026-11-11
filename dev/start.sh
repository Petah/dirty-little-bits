#!/bin/sh
# Builds the client, then runs the game server (ws://localhost:8081)
# and the web page (http://localhost:8080). Ctrl+C stops both.
set -e
cd "$(dirname "$0")"
[ -d node_modules ] || npm install --no-audit --no-fund
node build.mjs
cd ..
NODE_PATH=dev/node_modules node private/js/server/main.js &
SERVER=$!
trap 'kill $SERVER 2>/dev/null' EXIT INT TERM
echo "Open http://localhost:8080"
python3 -m http.server 8080 --bind 127.0.0.1 --directory public

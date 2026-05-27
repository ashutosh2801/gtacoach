#!/bin/bash

set -euo pipefail

TARGET_DIR="deploy"

echo "Preparing deploy workspace..."
mkdir -p "$TARGET_DIR"

echo "Cleaning old deploy contents..."
find "$TARGET_DIR" -mindepth 1 -maxdepth 1 -exec rm -rf {} +

echo "Building Next.js app..."
npm run build

echo "Creating deploy structure..."
mkdir -p "$TARGET_DIR"

echo "Copy standalone server (including hidden .next files)..."
cp -r .next/standalone/. "$TARGET_DIR"/

echo "Copy static files..."
mkdir -p "$TARGET_DIR"/.next/static
cp -r .next/static/. "$TARGET_DIR"/.next/static/

echo "Copy public folder..."
cp -r public "$TARGET_DIR"/

echo "Set deploy start script to standalone server with explicit host binding..."
(cd "$TARGET_DIR" && npm pkg set scripts.start="node -e \"process.env.HOSTNAME='0.0.0.0';require('./server.js')\"" >/dev/null)

echo "Deployment package ready at '$TARGET_DIR'!"
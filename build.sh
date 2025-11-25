#!/bin/bash

echo "=============================="
echo "Environment: $ENV"
echo "=============================="

echo "Running tests..."
if grep -q "bug" index.html; then
    echo "Tests failed!"
    exit 1
else
    echo "Tests passed!"
fi

echo "Building project for $ENV..."
# Simulate build
mkdir -p build_$ENV
cp index.html build_$ENV/
echo "Build complete!"

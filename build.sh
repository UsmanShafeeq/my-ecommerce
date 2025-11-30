#!/bin/bash

set -e  # Exit on error

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get environment from argument or default to dev
ENV=${1:-dev}

echo -e "${BLUE}=====================================${NC}"
echo -e "${BLUE}Building E-Commerce App${NC}"
echo -e "${BLUE}Environment: ${YELLOW}$ENV${NC}"
echo -e "${BLUE}=====================================${NC}"

# Validate environment
if [[ ! "$ENV" =~ ^(dev|staging|prod)$ ]]; then
    echo -e "${RED}Invalid environment: $ENV${NC}"
    echo "Supported environments: dev, staging, prod"
    exit 1
fi

# Load environment variables
if [ -f ".env.$ENV" ]; then
    echo -e "${GREEN}✓${NC} Loading .env.$ENV"
    export $(cat .env.$ENV | grep -v '^#' | xargs)
else
    echo -e "${RED}✗${NC} Environment file .env.$ENV not found!"
    exit 1
fi

# Install dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
if ! npm install; then
    echo -e "${RED}✗${NC} Dependency installation failed!"
    exit 1
fi
echo -e "${GREEN}✓${NC} Dependencies installed"

# Run linting
echo -e "${YELLOW}Running ESLint...${NC}"
if ! npm run lint; then
    echo -e "${RED}✗${NC} Linting failed! Run 'npm run lint:fix' to fix issues."
    exit 1
fi
echo -e "${GREEN}✓${NC} Linting passed"

# Build project
echo -e "${YELLOW}Building project for $ENV...${NC}"
if ! npm run build:$ENV; then
    echo -e "${RED}✗${NC} Build failed!"
    exit 1
fi
echo -e "${GREEN}✓${NC} Build completed successfully"

# Verify build output
if [ -d "dist" ]; then
    DIST_SIZE=$(du -sh dist | cut -f1)
    echo -e "${GREEN}✓${NC} Build artifacts: $DIST_SIZE"
else
    echo -e "${RED}✗${NC} Build output not found in dist/"
    exit 1
fi

echo -e "${BLUE}=====================================${NC}"
echo -e "${GREEN}Build completed successfully!${NC}"
echo -e "${BLUE}Environment: ${YELLOW}$ENV${NC}"
echo -e "${BLUE}Output directory: dist/${NC}"
echo -e "${BLUE}=====================================${NC}"

exit 0

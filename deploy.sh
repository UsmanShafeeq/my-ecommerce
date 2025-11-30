#!/bin/bash

# Deployment script for My E-Commerce Application
# Usage: ./deploy.sh <environment> [server_host]

set -e

# Configuration
REPO_NAME="my-ecommerce"
REPO_OWNER="UsmanShafeeq"
DEPLOY_USER="deploy"
APP_DIR="/var/www/my-ecommerce"
BACKUP_DIR="/var/backups/my-ecommerce"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Functions
log_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

log_success() {
    echo -e "${GREEN}✓${NC} $1"
}

log_error() {
    echo -e "${RED}✗${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Validate arguments
if [ $# -lt 1 ]; then
    echo "Usage: $0 <environment> [server_host]"
    echo "Environments: dev, staging, prod"
    exit 1
fi

ENV=$1
SERVER=${2:-localhost}

# Validate environment
if [[ ! "$ENV" =~ ^(dev|staging|prod)$ ]]; then
    log_error "Invalid environment: $ENV"
    exit 1
fi

log_info "Starting deployment for $ENV environment on $SERVER"

# Create backup
log_info "Creating backup..."
BACKUP_FILE="$BACKUP_DIR/backup-$(date +%Y%m%d_%H%M%S).tar.gz"
mkdir -p "$BACKUP_DIR"
tar -czf "$BACKUP_FILE" "$APP_DIR" 2>/dev/null || true
log_success "Backup created: $BACKUP_FILE"

# Pull latest code
log_info "Pulling latest code..."
cd "$APP_DIR"
git pull origin main
log_success "Code pulled successfully"

# Install dependencies
log_info "Installing dependencies..."
npm ci
log_success "Dependencies installed"

# Run linting
log_info "Running linting checks..."
npm run lint || {
    log_warning "Linting failed, attempting to fix..."
    npm run lint:fix || true
}
log_success "Linting checks completed"

# Build application
log_info "Building for $ENV..."
npm run build:$ENV
log_success "Build completed"

# Run health checks
log_info "Running health checks..."
if [ -d "dist" ] && [ -f "dist/index.html" ]; then
    log_success "Build artifacts verified"
else
    log_error "Build artifacts not found!"
    log_error "Rolling back..."
    tar -xzf "$BACKUP_FILE" -C /
    exit 1
fi

# Restart application (using Docker Compose or PM2)
if [ -f "docker-compose.yml" ]; then
    log_info "Restarting Docker container..."
    docker-compose -f docker-compose.yml up -d ecommerce-$ENV
    log_success "Container restarted"
else
    log_info "Using PM2 for restart..."
    pm2 restart my-ecommerce-$ENV || pm2 start app.js --name my-ecommerce-$ENV
    log_success "Application restarted with PM2"
fi

# Clear cache
log_info "Clearing cache..."
rm -rf /tmp/my-ecommerce-cache-* 2>/dev/null || true
log_success "Cache cleared"

# Verify deployment
log_info "Verifying deployment..."
sleep 5
if curl -s https://my-ecommerce.com/index.html > /dev/null; then
    log_success "Deployment verified!"
else
    log_error "Deployment verification failed!"
    log_error "Rolling back..."
    tar -xzf "$BACKUP_FILE" -C /
    exit 1
fi

echo ""
log_success "Deployment completed successfully!"
log_info "Environment: $ENV"
log_info "Timestamp: $(date)"
echo ""

exit 0

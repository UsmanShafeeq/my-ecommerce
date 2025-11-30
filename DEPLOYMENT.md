# Deployment Guide

This document provides comprehensive deployment instructions for the My E-Commerce application across different environments.

## Table of Contents
1. [Quick Start](#quick-start)
2. [Prerequisites](#prerequisites)
3. [Environment Setup](#environment-setup)
4. [Local Development](#local-development)
5. [Docker Deployment](#docker-deployment)
6. [CI/CD Pipeline](#cicd-pipeline)
7. [Production Deployment](#production-deployment)
8. [Troubleshooting](#troubleshooting)

## Quick Start

### Development Environment
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Access at: http://localhost:5173
```

### Build for Different Environments
```bash
# Build for development
npm run build:dev

# Build for staging
npm run build:staging

# Build for production
npm run build:prod
```

## Prerequisites

### System Requirements
- Node.js v20 or higher
- npm or yarn
- Docker and Docker Compose (for containerized deployment)
- Git
- Nginx (for production server)

### Installation
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

## Environment Setup

### Environment Variables

The application uses three environment files:

**Development (.env.dev)**
```env
ENV=dev
VITE_API_URL=https://dev-api.my-ecommerce.com
VITE_APP_NAME=My E-Commerce (Dev)
VITE_DEBUG=true
VITE_LOG_LEVEL=debug
```

**Staging (.env.staging)**
```env
ENV=staging
VITE_API_URL=https://staging-api.my-ecommerce.com
VITE_APP_NAME=My E-Commerce (Staging)
VITE_DEBUG=false
VITE_LOG_LEVEL=info
```

**Production (.env.prod)**
```env
ENV=prod
VITE_API_URL=https://api.my-ecommerce.com
VITE_APP_NAME=My E-Commerce
VITE_DEBUG=false
VITE_LOG_LEVEL=error
```

## Local Development

### Setup
```bash
# Clone repository
git clone https://github.com/UsmanShafeeq/my-ecommerce.git
cd my-ecommerce

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Code Quality
```bash
# Run ESLint
npm run lint

# Fix linting issues
npm run lint:fix
```

### Building
```bash
# Development build
npm run build:dev

# Staging build
npm run build:staging

# Production build
npm run build:prod
```

## Docker Deployment

### Build Docker Image
```bash
# Production image
docker build --build-arg BUILD_ENV=prod -t my-ecommerce:prod .

# Staging image
docker build --build-arg BUILD_ENV=staging -t my-ecommerce:staging .
```

### Docker Compose
```bash
# Start all services
docker-compose up -d

# Start specific service
docker-compose up -d ecommerce-prod

# View logs
docker-compose logs -f ecommerce-prod

# Stop services
docker-compose down
```

### Environment Profile
```bash
# Development (uses profile)
docker-compose --profile dev up -d ecommerce-dev

# Production
docker-compose up -d ecommerce-prod

# Staging
docker-compose up -d ecommerce-staging
```

## CI/CD Pipeline

The project includes GitHub Actions workflows for automated building and deployment.

### Workflow Stages
1. **Lint & Test** - Code quality checks
2. **Build** - Multi-environment builds (dev, staging, prod)
3. **Deploy** - Environment-specific deployments

### Triggering Deployments
- **Production**: Push to `main` branch
- **Staging**: Push to `staging` branch
- **Development**: Pull requests

### GitHub Secrets Required
```
DEPLOY_KEY              # SSH private key for server access
DEPLOY_USER             # Deployment user on server
PROD_SERVER_HOST        # Production server IP/hostname
STAGING_SERVER_HOST     # Staging server IP/hostname
SONAR_TOKEN            # SonarQube token (optional)
```

## Production Deployment

### Server Setup

1. **Install Dependencies**
```bash
# Update system
sudo apt-get update && sudo apt-get upgrade -y

# Install Node.js, Docker, Nginx
sudo apt-get install -y nodejs docker.io docker-compose nginx
```

2. **Configure Nginx**
```bash
# Copy nginx configuration
sudo cp nginx.conf /etc/nginx/sites-available/my-ecommerce
sudo ln -s /etc/nginx/sites-available/my-ecommerce /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx
```

3. **Setup SSL Certificates**
```bash
# Using Let's Encrypt with Certbot
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot certonly --nginx -d my-ecommerce.com -d www.my-ecommerce.com

# Auto-renewal
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

4. **Deploy Application**
```bash
# Clone repository
sudo mkdir -p /var/www/my-ecommerce
sudo chown $USER:$USER /var/www/my-ecommerce
git clone https://github.com/UsmanShafeeq/my-ecommerce.git /var/www/my-ecommerce

# Run deployment script
cd /var/www/my-ecommerce
chmod +x deploy.sh
./deploy.sh prod
```

### Health Checks
```bash
# Check application status
curl https://my-ecommerce.com

# Check nginx status
sudo systemctl status nginx

# Check Docker containers
docker ps -a

# View application logs
docker logs my-ecommerce-prod
```

### Monitoring
```bash
# Monitor resource usage
docker stats my-ecommerce-prod

# View real-time logs
docker logs -f my-ecommerce-prod

# Check disk space
df -h /var/www/my-ecommerce
```

## Backup & Recovery

### Automated Backups
```bash
# Daily backup script (cron)
# 0 2 * * * /var/www/my-ecommerce/backup.sh

# Create backup manually
./deploy.sh backup

# Restore from backup
tar -xzf /var/backups/my-ecommerce/backup-YYYYMMDD_HHMMSS.tar.gz -C /
```

## Troubleshooting

### Build Issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check for linting issues
npm run lint:fix
```

### Docker Issues
```bash
# Rebuild Docker image
docker-compose down
docker system prune -a
docker-compose up -d --build

# Check container logs
docker logs my-ecommerce-prod

# Access container shell
docker exec -it my-ecommerce-prod sh
```

### Nginx Issues
```bash
# Check nginx configuration
sudo nginx -t

# View error logs
sudo tail -f /var/log/nginx/error.log

# Reload nginx
sudo systemctl reload nginx
```

### Performance Optimization
```bash
# Enable gzip compression (nginx)
# Check nginx.conf for gzip configuration

# Optimize CSS and JS
# Check build output for bundle size

# Enable caching headers
# Check nginx.conf for cache control
```

## Rollback Procedure

If deployment fails:

```bash
# 1. Stop current deployment
docker-compose down ecommerce-prod

# 2. Restore from backup
tar -xzf /var/backups/my-ecommerce/latest-backup.tar.gz -C /

# 3. Restart services
docker-compose up -d ecommerce-prod

# 4. Verify deployment
curl https://my-ecommerce.com
```

## Support & Contact

For deployment issues or questions:
- Create an issue on GitHub
- Contact: support@my-ecommerce.com
- Documentation: docs/deployment.md

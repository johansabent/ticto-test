#!/usr/bin/env bash
# Copy this to your IDE template or run manually in new projects
# Usage: bash setup-docker.sh

set -e

echo "🐳 Setting up Docker for development..."

# Create files if they don't exist
[ ! -f "docker-compose.yml" ] && echo "Creating docker-compose.yml..." && cp docker-compose.template.yml docker-compose.yml || echo "docker-compose.yml already exists"
[ ! -f "Dockerfile" ] && echo "Creating Dockerfile..." && cp Dockerfile.template Dockerfile || echo "Dockerfile already exists"
[ ! -f ".dockerignore" ] && echo "Creating .dockerignore..." && cp .dockerignore.template .dockerignore || echo ".dockerignore already exists"
[ ! -f ".env.docker" ] && echo "Creating .env.docker..." && cp .env.docker.template .env.docker || echo ".env.docker already exists"

echo "✅ Docker setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.docker with your project name and ports"
echo "2. Run: docker compose up --pull always"
echo "3. Visit: http://localhost:3000"
echo ""
echo "For hot reload:"
echo "- Edit code in ./src, ./public, or ./app folders"
echo "- Changes reflect instantly in the container"

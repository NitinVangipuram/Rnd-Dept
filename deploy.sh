#!/bin/bash
set -e  # Exit immediately if a command fails

echo "🔹 Stashing changes..."
git stash

echo "🔹 Pulling latest changes from origin/main..."
git pull origin main

echo "🔹 Applying stashed changes..."
git stash pop || true   # '|| true' prevents errors if there's nothing to pop

echo "🔹 Restoring specific files..."
git restore backend/types/generated/components.d.ts backend/types/generated/contentTypes.d.ts

echo "🔹 Applying stash again (if needed)..."
git stash pop || true

echo "🔹 Building frontend..."
cd frontend
npm run build

echo "✅ Deployment script finished successfully!"

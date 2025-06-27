#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Starting deployment process..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Static files generated in 'out' directory"
    echo "🌐 Ready for deployment to GitHub Pages"
else
    echo "❌ Build failed!"
    exit 1
fi

echo "🎉 Deployment preparation complete!" 
#!/bin/bash

echo "🚀 Preparing project for GitHub Pages deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if .github/workflows/deploy.yml exists
if [ ! -f ".github/workflows/deploy.yml" ]; then
    echo "❌ Error: GitHub Actions workflow not found."
    echo "Please ensure .github/workflows/deploy.yml exists."
    exit 1
fi

# Check if components exist
if [ ! -d "components" ]; then
    echo "❌ Error: components directory not found."
    exit 1
fi

# Check if app directory exists
if [ ! -d "app" ]; then
    echo "❌ Error: app directory not found."
    exit 1
fi

echo "✅ Project structure looks good!"

# Check git status
echo "📋 Checking git status..."
git status --porcelain

echo ""
echo "🎉 Project is ready for deployment!"
echo ""
echo "📝 Next steps:"
echo "1. Commit your changes:"
echo "   git add ."
echo "   git commit -m 'Prepare for deployment'"
echo ""
echo "2. Push to GitHub:"
echo "   git push origin main"
echo ""
echo "3. GitHub Actions will automatically:"
echo "   - Install dependencies (Node.js 18)"
echo "   - Build the project"
echo "   - Deploy to GitHub Pages"
echo ""
echo "4. Monitor deployment at:"
echo "   https://github.com/[your-username]/[repository-name]/actions"
echo ""
echo "🌐 Your site will be available at:"
echo "   https://[your-username].github.io/[repository-name]"

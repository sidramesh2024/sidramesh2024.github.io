
#!/bin/bash

# GitHub Pages Deployment Script for Next.js Portfolio
# This script configures and builds the project for static export to GitHub Pages

echo "🚀 Starting GitHub Pages deployment build..."

# Set environment variables for static export
export NEXT_OUTPUT_MODE=export

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Build the project for static export
echo "🏗️  Building project for static export..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Create .nojekyll file to prevent Jekyll processing
    echo "📝 Creating .nojekyll file..."
    touch out/.nojekyll
    
    # Create a simple index redirect if needed
    if [ ! -f out/index.html ]; then
        echo "⚠️  Warning: No index.html found in out directory"
    fi
    
    echo "🎉 GitHub Pages build complete!"
    echo "📁 Static files are ready in the 'out' directory"
    echo ""
    echo "Next steps for GitHub Pages deployment:"
    echo "1. Push your repository to GitHub"
    echo "2. Go to Settings > Pages in your GitHub repository"
    echo "3. Set source to 'GitHub Actions' or upload the 'out' folder contents"
    echo "4. Or use GitHub Actions to automatically deploy from this script"
    echo ""
    echo "To test locally, run: npx serve out"
    
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

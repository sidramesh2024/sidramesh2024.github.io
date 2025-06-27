# GitHub Pages Deployment Guide

This guide will help you deploy your Next.js portfolio site to GitHub Pages using the included GitHub Actions workflow.

## 🚀 Quick Setup

### 1. Push to GitHub
First, make sure your code is pushed to a GitHub repository:

```bash
git add .
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 3. Monitor Deployment
1. Go to the **Actions** tab in your repository
2. You should see a "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 2-3 minutes)

## 📋 What the Workflow Does

The `.github/workflows/deploy.yml` file automatically:

1. **Triggers** on pushes to the `main` branch
2. **Sets up** Node.js 18 environment
3. **Installs** dependencies (`npm ci`)
4. **Builds** the Next.js app (`npm run build`)
5. **Exports** static files to the `out/` directory
6. **Deploys** to GitHub Pages

## 🔧 Configuration Details

### Next.js Configuration
The `next.config.js` is configured for static export:
- `output: 'export'` - Generates static files
- `trailingSlash: true` - Adds trailing slashes for GitHub Pages
- `images: { unoptimized: true }` - Required for static export

### GitHub Actions Workflow
The workflow includes:
- **Permissions**: Proper GitHub Pages deployment permissions
- **Concurrency**: Prevents multiple deployments running simultaneously
- **Caching**: npm cache for faster builds
- **Artifact upload**: Uploads built files to GitHub Pages

## 🌐 Accessing Your Site

Once deployed, your site will be available at:
- `https://[your-username].github.io/[repository-name]`
- For example: `https://sidramesh2024.github.io/sidramesh2024.github.io`

## 🔍 Troubleshooting

### Common Issues

1. **Build fails in Actions**
   - Check the Actions tab for error details
   - Ensure all dependencies are properly listed in `package.json`

2. **Site not accessible**
   - Verify GitHub Pages is enabled in repository settings
   - Check that the workflow completed successfully
   - Wait a few minutes for DNS propagation

3. **Images not loading**
   - Ensure images are in the `public/` directory
   - Use relative paths in your components

### Manual Deployment (if needed)

If you need to deploy manually:

```bash
# Install dependencies (requires Node.js 18+)
npm install

# Build the project
npm run build

# The static files will be in the 'out' directory
# Upload these files to your GitHub Pages repository
```

## 📝 Environment Requirements

- **Node.js**: 18.17.0 or higher
- **npm**: 8.0.0 or higher
- **GitHub**: Repository with GitHub Pages enabled

## 🎯 Next Steps

After successful deployment:

1. **Customize content**: Update the components in `/components/` with your information
2. **Add custom domain** (optional): Configure in GitHub Pages settings
3. **Monitor performance**: Use GitHub Pages analytics to track visitors

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs for detailed error messages
2. Verify your Node.js version meets the requirements
3. Ensure all files are properly committed and pushed

---

Your portfolio site will be automatically deployed every time you push to the `main` branch! 🎉 
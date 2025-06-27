# Sidharth Ramesh - Portfolio Website

A professional portfolio website built with Next.js 14, showcasing 8 years of Data Engineering expertise and technical skills.

## 🚀 Features

- **Modern Design**: Clean, professional UI with blue tech theme
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered interactions
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **GitHub Pages Ready**: Configured for static export and deployment
- **Auto Deployment**: GitHub Actions workflow for automatic deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages + GitHub Actions

## 📁 Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
├── .github/workflows/     # GitHub Actions workflows
│   └── deploy.yml         # Deployment workflow
├── scripts/               # Build scripts
│   └── deploy.sh          # Local deployment script
├── public/                # Static assets
├── package.json           # Dependencies
└── next.config.js         # Next.js configuration
```

## 🏗️ Development

### Prerequisites
- Node.js 18 or higher
- npm

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the website.

### Building for Production
```bash
# Build for static export (GitHub Pages)
npm run build

# Or use the deployment script
./scripts/deploy.sh
```

## 🚀 GitHub Pages Deployment

### Automatic Deployment (Recommended)
The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages:

1. **Push to main branch**: Any push to the `main` branch triggers the deployment
2. **Automatic build**: The workflow builds the Next.js app and exports static files
3. **Deploy to Pages**: Static files are automatically deployed to GitHub Pages

### Setup Instructions
1. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Push your code**:
   ```bash
   git add .
   git commit -m "Add GitHub Actions deployment"
   git push origin main
   ```

3. **Monitor deployment**:
   - Go to Actions tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow run

### Manual Deployment
If you prefer manual deployment:

```bash
# Build the project
npm run build

# The static files will be in the 'out' directory
# Upload these files to your GitHub Pages repository
```

### Local Testing
```bash
# Build the static export
npm run build

# Serve locally to test
npx serve out
```

## 📝 Configuration

### Next.js Configuration
The project is configured for GitHub Pages with:
- `output: 'export'` for static generation
- `trailingSlash: true` for proper routing
- Unoptimized images for static hosting
- TypeScript and ESLint configurations

### GitHub Actions Workflow
The `.github/workflows/deploy.yml` file includes:
- Node.js 18 setup
- Dependency installation
- Build process
- Automatic deployment to GitHub Pages
- Proper permissions and concurrency settings

## 🎨 Customization

### Colors
The website uses a professional blue tech theme:
- Primary: `#0a192f` (Navy)
- Accent: `#64ffda` (Cyan)
- Text: `#8892b0` (Light Gray)

### Content
Edit the components in `/components/` to update:
- Personal information
- Work experience
- Skills and technologies
- Education details
- Contact information

## 🔧 Troubleshooting

### Common Issues
1. **Build fails**: Check Node.js version (requires 18+)
2. **Deployment fails**: Ensure GitHub Pages is enabled in repository settings
3. **Images not loading**: Verify image paths and Next.js Image component usage

### Debug Commands
```bash
# Check Node.js version
node --version

# Clean install dependencies
rm -rf node_modules package-lock.json
npm install

# Build with verbose output
npm run build --verbose
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using Next.js and deployed on GitHub Pages


# Sidharth Ramesh - Portfolio Website

A professional portfolio website built with Next.js 14, showcasing 8 years of Data Engineering expertise and technical skills.

## 🚀 Features

- **Modern Design**: Clean, professional UI with blue tech theme
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion powered interactions
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **GitHub Pages Ready**: Configured for static export and deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
/app
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
├── public/            # Static assets (favicon, images)
├── package.json       # Dependencies
├── package-lock.json  # Locked dependencies
└── deploy-github-pages.sh # Deployment script
```

## 🏗️ Development

### Prerequisites
- Node.js 18 or higher
- npm

### Local Development
```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the website.

### Building for Production
```bash
# Build for static export (GitHub Pages)
chmod +x deploy-github-pages.sh
./deploy-github-pages.sh
```

## 🚀 GitHub Pages Deployment

### Option 1: Automatic Deployment (Recommended)
1. Push your code to a GitHub repository
2. The included GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy to GitHub Pages

### Option 2: Manual Deployment
1. Run the deployment script: `./deploy-github-pages.sh`
2. Upload the contents of the `out/` directory to your GitHub Pages repository
3. Enable GitHub Pages in repository settings

### Option 3: Local Testing
```bash
# Build the static export
./deploy-github-pages.sh

# Serve locally to test
npx serve out
```

## 📝 Configuration

The project is configured for GitHub Pages with:
- Static export enabled via `NEXT_OUTPUT_MODE=export`
- Unoptimized images for static hosting
- `.nojekyll` file to prevent Jekyll processing
- Proper asset paths for GitHub Pages

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

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using Next.js and deployed on GitHub Pages

# Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Node.js and npm installed

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio` or `varshitha-gogineni-portfolio`)
5. Make it public
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### 2. Update Configuration

1. Update the `base` path in `vite.config.ts` to match your repository name:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/', // Change this to your actual repository name
  // ... rest of config
});
```

2. Update the README.md with your actual GitHub Pages URL:
```markdown
[View Portfolio](https://yourusername.github.io/your-repository-name)
```

### 3. Initialize Git and Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/your-repository-name.git

# Push to main branch
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically deploy your site

### 5. Access Your Portfolio

Your portfolio will be available at:
`https://yourusername.github.io/your-repository-name`

## Alternative: Manual Deployment

If you prefer manual deployment:

1. Build the project:
```bash
npm run build
```

2. Create a `gh-pages` branch:
```bash
git checkout -b gh-pages
```

3. Copy contents of `dist/` folder to root of `gh-pages` branch

4. Push the `gh-pages` branch:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

5. In repository settings, set source to "Deploy from a branch" and select `gh-pages` branch

## Troubleshooting

### Images Not Loading
- Ensure image paths are correct
- Check that images are in the `public/` folder
- Verify the `base` path in `vite.config.ts` matches your repository name

### 404 Errors
- Make sure the `base` path in `vite.config.ts` is set correctly
- Check that all file paths are relative to the base path

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check for any TypeScript errors
- Verify all imports are correct

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public/` folder with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable "Enforce HTTPS" in repository settings

## Performance Optimization

The portfolio is already optimized with:
- Code splitting
- Image optimization
- CSS minification
- JavaScript minification
- Gzip compression

## Security

- All external links use `rel="noopener noreferrer"`
- Form submissions are handled securely through Formspree
- No sensitive information is exposed in the code

## Maintenance

- Update content regularly
- Keep dependencies updated
- Monitor GitHub Pages status
- Test the site after any changes

## Support

If you encounter any issues:
1. Check the GitHub Actions logs
2. Verify all configuration files
3. Test locally with `npm run build && npm run preview`
4. Check the browser console for errors

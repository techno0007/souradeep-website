# Netlify Deployment Guide

## Quick Start

### Method 1: Drag & Drop (Easiest)
1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Sign up or log in
3. Drag and drop the entire project folder onto the Netlify dashboard
4. Your site will be live in seconds!

### Method 2: Git Integration (Recommended)
1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to Netlify and click "New site from Git"
3. Connect your repository
4. Configure build settings:
   - Build command: (leave empty - no build needed)
   - Publish directory: `.` (root)
5. Click "Deploy site"

### Method 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## Configuration

The `netlify.toml` file is already configured with:
- ✅ Security headers
- ✅ Cache control for static assets
- ✅ Redirect rules
- ✅ Performance optimizations

## Custom Domain

1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Enter your domain name (e.g., makeyourweddingcanvas.in)
4. Follow the DNS configuration instructions

## Environment Variables

If you need environment variables:
1. Go to Site settings > Environment variables
2. Add your variables
3. Redeploy your site

## Form Handling

The contact form uses WhatsApp integration. If you want to use Netlify Forms instead:

1. Add `netlify` attribute to your form in `index.html`:
   ```html
   <form netlify name="contact" method="POST" data-netlify="true">
   ```

2. Add a hidden input:
   ```html
   <input type="hidden" name="form-name" value="contact">
   ```

3. Deploy your site
4. Form submissions will appear in Netlify dashboard

## Performance

Netlify automatically:
- ✅ Minifies CSS and JavaScript
- ✅ Compresses images
- ✅ Enables Gzip compression
- ✅ Uses CDN for fast delivery
- ✅ Implements HTTP/2

## Analytics

1. Go to Site settings > Analytics
2. Enable Netlify Analytics
3. View your site's analytics

## Continuous Deployment

1. Connect your Git repository
2. Netlify will automatically deploy on every push
3. Configure branch deployments in Site settings

## Support

For help, visit:
- [Netlify Docs](https://docs.netlify.com)
- [Netlify Community](https://community.netlify.com)
- [Netlify Support](https://www.netlify.com/support)

---

Happy deploying! 🚀


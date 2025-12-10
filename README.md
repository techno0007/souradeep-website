# Moment Diaries - Wedding Photography Portfolio

A beautiful, modern wedding photography portfolio website built with vanilla HTML, CSS, and JavaScript. Fully optimized for Netlify deployment.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🚀 Fast loading with optimized assets
- 🎭 Smooth animations and transitions
- 📧 Contact form with WhatsApp integration
- 🖼️ Image gallery with lightbox
- 🔍 SEO optimized
- ♿ Accessibility features
- 🌐 Netlify ready

## Project Structure

```
.
├── index.html          # Main HTML file
├── css/
│   └── styles.css     # All styles
├── js/
│   └── main.js        # All JavaScript functionality
├── assets/
│   ├── header/        # Hero/header images
│   ├── service/       # Service card images
│   ├── gallery/       # Gallery portfolio images
│   ├── logo/         # Logo and favicon
│   └── about/        # About section images
├── netlify.toml       # Netlify configuration
├── _redirects         # Netlify redirects
├── robots.txt         # SEO robots file
└── sitemap.xml        # SEO sitemap
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom CSS with CSS Variables
- **Vanilla JavaScript** - No frameworks, pure JS
- **Netlify** - Hosting platform

## Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in your browser
3. That's it! No build process required.

### Using a Local Server (Recommended)

For best results, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Deployment to Netlify

### Option 1: Drag & Drop (Easiest)

1. Go to [Netlify](https://app.netlify.com)
2. Drag and drop the entire project folder onto the Netlify dashboard
3. Your site will be live in seconds!

### Option 2: Git Integration (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Connect your repository to Netlify
3. Configure build settings:
   - Build command: (leave empty - no build needed)
   - Publish directory: `.` (root directory)
4. Deploy!

### Option 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Configuration

### Netlify Settings

The `netlify.toml` file is already configured with:
- Security headers
- Cache control for static assets
- Redirect rules
- Performance optimizations

### Customization

#### Update Contact Information

Edit the contact information in `index.html`:
- Phone number
- Email address
- Social media links

#### Update Images

1. Replace images in `assets/` folders
2. Update image paths in `index.html` if needed
3. Maintain the same file names for easy replacement

#### Update Colors

Edit CSS variables in `css/styles.css`:
```css
:root {
  --gold: #D4AF37;
  --gold-light: #E5C158;
  /* ... more variables */
}
```

#### Update Content

All content is in `index.html`. Simply edit the HTML to update:
- Section titles
- Descriptions
- Services
- Gallery

## Performance Optimizations

- ✅ Optimized images (preloading)
- ✅ CSS minification (Netlify's built-in)
- ✅ JavaScript minification (Netlify's built-in)
- ✅ Image preloading
- ✅ Cache headers configured
- ✅ Gzip compression (automatic on Netlify)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus styles
- Screen reader friendly
- Reduced motion support

## SEO

- Semantic HTML structure
- Meta tags in `<head>`
- Schema.org JSON-LD structured data
- Alt text for images
- Proper heading hierarchy
- Descriptive link text
- robots.txt
- sitemap.xml

## Contact Form

The contact form uses WhatsApp integration:
- Name, Phone, and Message are required
- Email is optional
- On submit, opens WhatsApp with pre-filled message

To use Netlify Forms instead, see `netlify-deploy.md`.

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on GitHub or contact the developer.

## Credits

- Fonts: Google Fonts (Playfair Display, Lato)
- Icons: SVG icons (inline)
- Images: Provided by client

---

Made with ❤️ for wedding photography

# Design Guidelines: Make Your Wedding Canvas

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium photography portfolio sites like Format, Squarespace Photography templates, and the referenced template. This is an experience-focused, visual-rich wedding photography showcase requiring elegant, emotional design that builds trust and showcases artistry.

## Core Design Principles
- **Elegance First**: Refined, timeless aesthetics befitting wedding photography
- **Image Supremacy**: Photography takes center stage with generous image displays
- **Breathing Room**: Ample whitespace to let imagery shine
- **Trust Building**: Professional presentation that instills confidence in premium service

## Typography System

**Primary Font**: Playfair Display (serif) - for headings, elegant and romantic
**Secondary Font**: Lato (sans-serif) - for body text, clean readability

**Hierarchy**:
- Hero Headlines: text-6xl to text-7xl, font-bold
- Section Headers: text-4xl to text-5xl, font-semibold
- Subheadings: text-2xl to text-3xl, font-medium
- Body Text: text-base to text-lg, font-normal
- Small Labels: text-sm, uppercase tracking-wide

## Layout System

**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24, and 32
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 for grids, mb-12 between major elements
- Container: max-w-7xl for full sections, max-w-4xl for text content

**Grid Structure**:
- Desktop Gallery: 4 columns (grid-cols-4)
- Tablet Gallery: 2 columns (md:grid-cols-2)
- Mobile Gallery: 1 column (grid-cols-1)

## Page Structure & Sections

### 1. Hero Section (Full Viewport - 100vh)
- **Animated Text Slider**: Three rotating headlines showcasing brand names:
  - "THE TOUCH PHOTOGRAPHY"
  - "FLIMSY SHELTER PHOTOGRAPHY"  
  - "GOLDEN SUN PHOTOGRAPHY"
  - Replace with wedding-themed phrases like "Make Your Wedding Canvas", "Capturing Forever Moments", "Your Love Story in Frames"
- **Centered Typography**: Large, elegant serif headlines
- **Minimal Chrome**: Clean presentation, no background image
- **Subtle Animation**: Smooth fade transitions between text slides (3-4 second intervals)

### 2. About Section
- **Two-Column Layout**: Image left (50%), content right (50%)
- **Featured Image**: Professional photographer portrait or signature wedding shot
- **Content Block**: 
  - Small eyebrow text: "Get to know Me"
  - Large heading: "Get to Know me Better"
  - Descriptive paragraph about photography philosophy
  - Italicized quote/tagline
  - Primary CTA button: "Contact Me"
- **Padding**: py-24

### 3. Services Overview
- **Three-Column Grid**: Equal width service cards
- **Each Card Contains**:
  - Square or landscape service image
  - Service title (h4)
  - Brief description paragraph
- **Services**: Event Photography, Video Productions, Modeling Photography (adapt to: Wedding Photography, Pre-Wedding Shoots, Event Coverage)

### 4. Featured Portfolio Section
- **Split Layout**: 40% content, 60% image
- **Content Side**:
  - Eyebrow: "20 high quality images"
  - Headline: Category name (e.g., "Wedding & Celebrations")
  - Descriptive paragraph
  - "View Gallery" CTA button
- **Image Side**: Large showcase image with subtle border or shadow

### 5. Main Gallery Grid
- **Section Header**: 
  - Eyebrow: "Gallery"
  - Headline: "Our World Class Works"
- **Masonry-Style Grid**: 4 columns desktop, 2 tablet, 1 mobile
- **Gallery Items**: 8-12 images organized by categories:
  - Wedding
  - Pre-Wedding
  - Baby Rice Ceremony
  - Birthday
  - Album Design
- **Card Structure**:
  - Image with hover overlay effect
  - Project title on hover
  - Category label
  - Link to full project

### 6. Testimonials Section
- **Centered Header**: "Trusted by 10,000+ Customers" eyebrow + "Our Customers" headline
- **Carousel Layout**: Horizontal scrolling testimonial cards
- **Card Design**:
  - Circular avatar image (96px diameter)
  - Testimonial text (italic)
  - Client name below
- **Visible Cards**: 3 on desktop, 2 on tablet, 1 on mobile
- **Carousel Controls**: Subtle arrow navigation

### 7. Team Section (Optional Adaptation)
- **Centered Content Block**:
  - Eyebrow: "Specialized in Enthusiasm Photography"
  - Headline: "We are world class Team building wonderful products"
  - Supporting text
- Adapt to showcase photography team or solo photographer credentials

### 8. Latest Work/Blog Section
- **Three-Column Blog Cards**:
  - Featured image
  - Category tag
  - Date
  - Title
  - Excerpt
  - "Read More" link
- Adapt to showcase recent wedding galleries or photography tips

### 9. Contact Section
- **Two-Column Layout**:
  - **Left Column (60%)**: Contact form
    - Fields: Name, Email, Phone, Message
    - Submit button
  - **Right Column (40%)**: Contact information
    - Eyebrow: "We'll be with you"
    - Heading: "Contact Us"
    - Phone number
    - Email address
    - Physical address
    - Business hours or response time
- **Form Styling**: Clean inputs with subtle borders, adequate padding

### 10. Footer
- **Multi-Column Layout**:
  - Brand name/logo
  - Quick navigation links
  - Social media icons (Instagram, Facebook, Pinterest, YouTube)
  - Contact information recap
  - Copyright notice
- **Styling**: Adequate spacing, understated presentation

## Component Library

### Navigation
- **Fixed Header**: Transparent on hero, solid on scroll
- **Logo**: Left-aligned, brand name in elegant serif
- **Menu Items**: Right-aligned, uppercase tracking, adequate spacing
- **Mobile**: Hamburger menu with slide-out drawer

### Buttons
- **Primary CTA**: Solid button with generous padding (px-8 py-4)
- **Secondary**: Outlined version
- **Hover States**: Subtle scale (1.02) or opacity change
- **On Images**: Blurred background (backdrop-blur-sm), semi-transparent

### Image Treatments
- **Gallery Hover**: Slight zoom (scale-105) with overlay
- **Aspect Ratios**: 
  - Gallery thumbnails: 4:3 or 1:1
  - Featured images: 16:9 or 3:2
- **Loading**: Placeholder with subtle gradient

### Cards
- **Shadow**: Subtle elevation (shadow-md)
- **Border Radius**: Minimal (rounded-lg)
- **Spacing**: Consistent internal padding (p-6)

## Images Section

**Hero Section**: No background image - clean presentation with rotating text
**About Section**: Professional portrait or signature wedding photograph (landscape orientation)
**Services Cards**: Three service category images showcasing different photography styles
**Featured Portfolio**: Large hero image representing the featured category
**Gallery Grid**: 8-12 diverse portfolio images across all five categories
**Testimonials**: Circular avatar photos of clients
**Blog/Latest Work**: Three featured wedding gallery thumbnails
**No decorative backgrounds**: Clean, minimal presentation throughout

## Accessibility
- Adequate contrast ratios for all text
- Focus indicators on all interactive elements
- Alt text for all images
- Semantic HTML structure
- Form labels properly associated

## Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
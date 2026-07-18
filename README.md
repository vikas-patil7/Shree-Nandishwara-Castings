# Sree Nandishwara Castings - Premium Manufacturing Website

A modern, premium industrial manufacturing website for Sree Nandishwara Castings built with React, Tailwind CSS, and Framer Motion.

## Features

### 🎨 Design
- **Premium Industrial UI**: Dark blue, steel gray, and metallic silver color scheme
- **Modern Animations**: Smooth scrolling, parallax effects, and interactive hover states
- **Glassmorphism**: Modern glass-effect cards with blur backdrop
- **Fully Responsive**: Mobile-first, adaptive design for all screen sizes
- **SEO Optimized**: Structured markup and meta tags for search engines

### 🏢 Pages
1. **Home** - Hero section with stats, services, and capabilities
2. **About Us** - Company history, mission, vision, and values
3. **Services** - Detailed service offerings with equipment specs
4. **Industries Served** - Target industries and success stories
5. **Infrastructure** - Manufacturing facilities and equipment
6. **Gallery** - Factory photo gallery with lightbox
7. **Careers** - Job openings and application form
8. **Blog** - Industry insights and company updates
9. **Contact** - Contact form, location, and FAQ

### ⚡ Key Sections
- Full-screen hero section with animations
- Statistics counters with animations
- Service cards with hover effects
- Manufacturing process timeline
- Industries served carousel
- Quality assurance information
- Equipment specifications
- Interactive contact form
- Floating WhatsApp chat
- Back-to-top button
- Sticky navigation bar

### 📱 Technical Stack
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Advanced animations
- **Vite** - Fast build tool
- **Lucide React** - Icon library
- **React Icons** - Additional icons

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project folder**
```bash
cd "Shri Nandhiswara"
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production-ready files.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── ServiceCard.tsx
│   ├── StatCounter.tsx
│   ├── FloatingWhatsApp.tsx
│   └── BackToTop.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── IndustriesPage.tsx
│   ├── InfrastructurePage.tsx
│   ├── GalleryPage.tsx
│   ├── CareerPage.tsx
│   ├── BlogPage.tsx
│   └── ContactPage.tsx
├── App.tsx             # Main app component
├── App.css             # App styles
├── index.css           # Global styles
└── main.tsx            # Entry point
```

## Customization

### Colors
Customize industrial theme colors in `tailwind.config.ts`:
```typescript
colors: {
  'industrial-dark': '#0f172a',
  'industrial-blue': '#1e3a5f',
  'steel-gray': '#2d3748',
  'metallic-silver': '#e2e8f0',
  'accent-blue': '#3b82f6',
  'accent-cyan': '#06b6d4',
}
```

### Content
Update company information:
- Phone number: Replace `+918066889999` throughout
- Email: Update email addresses
- Location: Modify Bangalore references
- Services: Edit service cards and descriptions

### Animation
Adjust animation speeds and effects in:
- `tailwind.config.ts` - Animation keyframes
- Individual component files - Motion components
- `index.css` - Global animations

## Performance Optimizations

- ✅ Code splitting with React lazy loading
- ✅ Image optimization with WebP support
- ✅ CSS minification
- ✅ JavaScript minification and bundling
- ✅ Automatic route-based code splitting
- ✅ Lazy component loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Contact & Support

- **Phone**: +91 80668 89999
- **Email**: info@sreenandishwara.com
- **WhatsApp**: Floating chat widget enabled

## License

© 2024 Sree Nandishwara Castings. All rights reserved.

## Additional Resources

### Components Used
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [React Documentation](https://react.dev/)
- [Lucide Icons](https://lucide.dev/)

### Deployment

The website can be deployed to:
- **Vercel** - Recommended for React apps
- **Netlify** - Excellent CI/CD support
- **AWS S3 + CloudFront**
- **GitHub Pages**
- **Any Node.js hosting**

### Next Steps

1. Replace placeholder images with actual factory photos
2. Update company contact information
3. Integrate with backend for form submissions
4. Add analytics tracking
5. Set up email notifications for inquiries
6. Implement blog backend
7. Add customer testimonials
8. Create admin panel for content management

---

**Built with ❤️ for Sree Nandishwara Castings**

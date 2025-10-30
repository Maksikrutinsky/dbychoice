# Design By Choice - Next.js Website

Modern, SEO-optimized interior design website built with Next.js 15, TypeScript, and React.

## Features

✅ **Next.js 15** with App Router for optimal performance
✅ **Server-Side Rendering (SSR)** for perfect SEO
✅ **TypeScript** for type safety
✅ **CSS Modules** for scoped styling
✅ **Image Optimization** with Next.js Image component
✅ **SEO Optimized** with:
  - Meta tags (Open Graph, Twitter Cards)
  - Structured Data (Schema.org JSON-LD)
  - Sitemap.xml
  - Robots.txt
  - Manifest.json for PWA support
✅ **Responsive Design** - mobile-first approach
✅ **Performance Optimized** with lazy loading and code splitting
✅ **Accessibility** with ARIA labels and semantic HTML

## Getting Started

### Installation

```bash
cd design-by-choice-nextjs
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
design-by-choice-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with fonts and metadata
│   │   ├── page.tsx        # Home page
│   │   ├── globals.css     # Global styles
│   │   ├── sitemap.ts      # Dynamic sitemap
│   │   └── robots.ts       # Robots.txt configuration
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── RevolutionaryDesign.tsx
│       ├── VisionSection.tsx
│       ├── LightingShowcase.tsx
│       ├── UltraRealistic.tsx
│       ├── Footer.tsx
│       └── YouTubeModal.tsx
├── public/
│   ├── images/            # Image assets
│   ├── video/            # Video assets
│   └── manifest.json     # PWA manifest
└── next.config.ts        # Next.js configuration
```

## SEO Features

### Metadata
- Title and description optimized for search engines
- Open Graph tags for social media sharing
- Twitter Card tags
- Canonical URLs
- Keywords and author information

### Structured Data
- Organization schema
- Service schema
- Contact point information

### Performance
- Image optimization with Next.js Image
- Lazy loading
- Code splitting
- Automatic font optimization
- Compression enabled

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
Build the production version:
```bash
npm run build
```

The output will be in `.next/` directory. You can deploy it to any Node.js hosting platform.

## Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Performance Tips

1. **Images**: All images are automatically optimized by Next.js
2. **Fonts**: Google Fonts are automatically optimized
3. **Analytics**: Add Google Analytics in `layout.tsx`
4. **Caching**: Configure caching in `next.config.ts`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2025 Design By Choice. All rights reserved.

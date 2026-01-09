# Dos Amigos - Mexican Food & Cantina Website

A custom-built, high-performance, conversion-optimized, mobile-first restaurant website for Dos Amigos in Pittsfield, Maine.

## Features

### Design
- **Mobile-first architecture** - Optimized for mobile traffic
- **Mexican-inspired color palette** - Green, red, yellow with textured backgrounds
- **Custom typography** - Inter for body text, Bebas Neue for display headings
- **NO stock photos** - Pure CSS design with logo only
- **Custom curved section dividers** - No straight lines
- **Smooth Framer Motion animations** - Professional transitions

### Components
- **Sticky shrinking header** with blur effect
- **Custom floating mobile navigation** - iOS-inspired pill dock with hollow active states
- **Responsive layouts** - Mobile accordion, desktop two-column for menu

### Pages
1. **Home (/)** - Hero, signature items, local credibility, CTAs
2. **Menu (/menu)** - Full menu with accordion (mobile) and two-column (desktop)
3. **Order Online (/order)** - Platform routing with auto-redirect logic
4. **Location & Hours (/location)** - Map embed, hours table, parking info
5. **About (/about)** - Restaurant story and values
6. **Contact (/contact)** - Contact info and message form

### Technical Features
- **SEO optimized** - Structured data for Restaurant, Menu, and LocalBusiness
- **Performance** - Target < 2s mobile load time
- **Accessibility** - Semantic HTML, ARIA labels where needed
- **Admin-friendly** - Centralized config file for easy content updates

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
pnpm build
pnpm start
```

## Content Management

All editable content is in [/lib/config.ts](lib/config.ts). See [ADMIN_GUIDE.md](ADMIN_GUIDE.md) for detailed instructions.

### Quick Updates

**Update hours:**
```typescript
// lib/config.ts
hours: {
  monday: { open: "11:00 AM", close: "9:00 PM", closed: false },
  // ...
}
```

**Update menu prices:**
```typescript
// lib/config.ts
entrees: [
  { number: "12", name: "Carnitas Plate", price: "$15.99", description: "..." },
  // ...
]
```

**Update order platforms:**
```typescript
// lib/config.ts
orderPlatforms: {
  uberEats: {
    name: "Uber Eats",
    url: "https://www.ubereats.com/YOUR_URL",
    available: true,
  },
}
```

## Project Structure

```
dos-amigos/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── menu/page.tsx      # Menu page
│   ├── order/page.tsx     # Order online page
│   ├── location/page.tsx  # Location & hours
│   ├── about/page.tsx     # About page
│   ├── contact/page.tsx   # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx         # Sticky header
│   ├── FloatingMobileNav.tsx  # Mobile navigation
│   ├── SectionDivider.tsx # Custom dividers
│   └── StructuredData.tsx # SEO structured data
├── lib/                   # Utilities and config
│   ├── config.ts          # **MAIN CONTENT FILE**
│   └── structured-data.ts # SEO schema generators
├── ADMIN_GUIDE.md         # Content management guide
└── README.md              # This file
```

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Inter, Bebas Neue)
- **Language:** TypeScript

## Performance

- Lighthouse score target: 90+
- Mobile load time: < 2 seconds
- Image lazy-loading: Enabled
- Static site generation: All pages pre-rendered

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile: iOS Safari, Chrome Android
- Responsive breakpoints: 640px, 768px, 1024px, 1280px

## SEO

The site includes comprehensive structured data:
- Restaurant schema (name, location, hours, cuisine)
- Menu schema (all items with pricing)
- LocalBusiness schema (for Google Maps)

All metadata is auto-generated from [lib/config.ts](lib/config.ts).

## Customization

### Colors

Edit the color palette in [app/globals.css](app/globals.css):

```css
:root {
  --color-verde: #1a8754;
  --color-rojo: #dc2626;
  --color-amarillo: #fbbf24;
  /* ... */
}
```

### Fonts

Change fonts in [app/layout.tsx](app/layout.tsx):

```typescript
const inter = Inter({ /* ... */ });
const bebas = Bebas_Neue({ /* ... */ });
```

## Deployment

The site can be deployed to any hosting platform that supports Next.js:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Self-hosted with Node.js

## License

Custom-built for Dos Amigos. All rights reserved.

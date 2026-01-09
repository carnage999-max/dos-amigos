# Dos Amigos - Admin Guide

## Content Management

All editable content for the website is centralized in `/lib/config.ts`. This file controls:

- Restaurant information (name, address, phone, email)
- Hours of operation
- Order platform links
- Menu items and pricing
- Signature items showcase
- About page story content

## How to Update Content

### 1. Restaurant Information

Edit the `restaurantInfo` object in `/lib/config.ts`:

```typescript
export const restaurantInfo = {
  name: "Dos Amigos",
  tagline: "Mexican Food and Cantina",
  address: "135 Main St., Pittsfield, ME 04967",
  phone: "+12075551234",  // Update this
  phoneDisplay: "(207) 555-1234",  // Update this
  email: "info@dosamigosmaine.com",  // Update this
  // ...
}
```

### 2. Hours of Operation

Update hours in the `restaurantInfo.hours` object:

```typescript
hours: {
  monday: { open: "11:00 AM", close: "9:00 PM", closed: false },
  // Set closed: true for days you're closed
  sunday: { open: "12:00 PM", close: "8:00 PM", closed: false },
}
```

### 3. Order Platforms

Enable/disable and update order platform URLs:

```typescript
orderPlatforms: {
  uberEats: {
    name: "Uber Eats",
    url: "https://www.ubereats.com/YOUR_RESTAURANT_URL",
    available: true,  // Set to false to hide
  },
  doorDash: {
    name: "DoorDash",
    url: "https://www.doordash.com/YOUR_RESTAURANT_URL",
    available: true,
  },
  inHouse: {
    name: "Direct Order",
    url: "/order/direct",
    available: false,  // Set to true when ready
  },
}
```

### 4. Menu Items and Prices

Update menu items in the `menuData` object. Each item has:

- `number`: Item number (matches printed menu)
- `name`: Item name
- `price`: Price as string (e.g., "$12.99")
- `description`: Optional description

Example:

```typescript
export const menuData = {
  entrees: [
    {
      number: "12",
      name: "Carnitas Plate",
      price: "$15.99",
      description: "Slow-cooked pork with rice, beans, tortillas"
    },
    // Add or remove items here
  ],
}
```

### 5. Signature Items (Homepage)

Update featured items on the homepage:

```typescript
export const signatureItems = [
  { number: "12", name: "Carnitas Tacos", price: "$12.99" },
  // Add up to 6 items
];
```

### 6. About Page Story

Update restaurant story paragraphs:

```typescript
story: [
  "First paragraph about your restaurant...",
  "Second paragraph...",
  "Third paragraph...",
]
```

## Quick Price Updates

To quickly update all prices:

1. Open `/lib/config.ts`
2. Search for the item number (e.g., `number: "12"`)
3. Update the `price` field
4. Save the file
5. Rebuild the site: `pnpm build`

## Deploying Changes

After making changes:

1. Save all files
2. Run `pnpm build` to build the production site
3. Test locally with `pnpm start`
4. Deploy to your hosting provider

## Holiday Hours Override

To set special holiday hours:

1. This feature is marked as "admin-controlled" in the spec
2. You can temporarily edit the hours in the config file
3. For a more permanent solution, consider adding a separate `holidayHours` object

## SEO and Metadata

SEO data is automatically generated from your config file. The structured data (Google-friendly) is created from:

- Restaurant info → Restaurant schema
- Menu data → Menu schema
- Location data → LocalBusiness schema

No manual updates needed for SEO!

## Need Help?

- All configuration is in `/lib/config.ts`
- Component files are in `/components/`
- Page files are in `/app/[page-name]/page.tsx`

## Performance Notes

- Images are lazy-loaded automatically
- The site is optimized for mobile-first
- Target: Sub-2 second load time on mobile
- Run `pnpm build` to check bundle size

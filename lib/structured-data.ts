import { restaurantInfo, menuData } from "./config";

export function getRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://dosamigosmaine.com/#restaurant",
    name: restaurantInfo.name,
    description: `${restaurantInfo.tagline} - Authentic Mexican cuisine in Pittsfield, Maine`,
    url: "https://dosamigosmaine.com",
    telephone: restaurantInfo.phone,
    email: restaurantInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "135 Main St.",
      addressLocality: "Pittsfield",
      addressRegion: "ME",
      postalCode: "04967",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurantInfo.coordinates.lat,
      longitude: restaurantInfo.coordinates.lng,
    },
    servesCuisine: ["Mexican", "Latin American"],
    priceRange: "$$",
    acceptsReservations: false,
    openingHoursSpecification: Object.entries(restaurantInfo.hours).map(
      ([day, hours]) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
        opens: hours.closed ? undefined : hours.open,
        closes: hours.closed ? undefined : hours.close,
      })
    ),
  };
}

export function getMenuSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${restaurantInfo.name} Menu`,
    description: "Full menu of authentic Mexican cuisine",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Á La Carte",
        hasMenuItem: menuData.aLaCarte.map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.description || "",
          offers: {
            "@type": "Offer",
            price: item.price.replace("$", ""),
            priceCurrency: "USD",
          },
        })),
      },
      {
        "@type": "MenuSection",
        name: "Appetizers",
        hasMenuItem: menuData.appetizers.map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.description || "",
          offers: {
            "@type": "Offer",
            price: item.price.replace("$", ""),
            priceCurrency: "USD",
          },
        })),
      },
      {
        "@type": "MenuSection",
        name: "Side Dishes",
        hasMenuItem: menuData.sideDishes.map((item: any) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.description || "",
          offers: {
            "@type": "Offer",
            price: item.price.replace("$", ""),
            priceCurrency: "USD",
          },
        })),
      },
      {
        "@type": "MenuSection",
        name: "Extra & Desserts",
        hasMenuItem: menuData.extraAndDesserts.map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.description || "",
          offers: {
            "@type": "Offer",
            price: item.price.replace("$", ""),
            priceCurrency: "USD",
          },
        })),
      },
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://dosamigosmaine.com/#localbusiness",
    name: restaurantInfo.name,
    image: "https://dosamigosmaine.com/og-image.png",
    telephone: restaurantInfo.phone,
    email: restaurantInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "135 Main St.",
      addressLocality: "Pittsfield",
      addressRegion: "ME",
      postalCode: "04967",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurantInfo.coordinates.lat,
      longitude: restaurantInfo.coordinates.lng,
    },
    openingHoursSpecification: Object.entries(restaurantInfo.hours).map(
      ([day, hours]) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
        opens: hours.closed ? undefined : hours.open,
        closes: hours.closed ? undefined : hours.close,
      })
    ),
  };
}

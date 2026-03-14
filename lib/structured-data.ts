import { restaurantInfo, menuData } from "./config";

export function getRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://www.mydosamigos.com/#restaurant",
    name: restaurantInfo.name,
    description: `${restaurantInfo.tagline} - Authentic Mexican cuisine in Pittsfield, Maine`,
    url: "https://www.mydosamigos.com",
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
      ([day, hours]) => {
        // Convert "11:00 AM" to "11:00" and "9:00 PM" to "21:00" for valid Schema
        const convertTo24Hour = (timeStr?: string) => {
          if (!timeStr) return undefined;
          const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
          if (!match) return timeStr;
          let [_, hStr, mStr, modifier] = match;
          let h = parseInt(hStr, 10);
          if (modifier.toUpperCase() === 'PM' && h < 12) h += 12;
          if (modifier.toUpperCase() === 'AM' && h === 12) h = 0;
          return `${h.toString().padStart(2, '0')}:${mStr}`;
        };
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
          opens: hours.closed ? undefined : convertTo24Hour(hours.open),
          closes: hours.closed ? undefined : convertTo24Hour(hours.close),
        };
      }
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
    "@id": "https://www.mydosamigos.com/#localbusiness",
    name: restaurantInfo.name,
    image: "https://www.mydosamigos.com/og-image.png",
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
      ([day, hours]) => {
        const convertTo24Hour = (timeStr?: string) => {
          if (!timeStr) return undefined;
          const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
          if (!match) return timeStr;
          let [_, hStr, mStr, modifier] = match;
          let h = parseInt(hStr, 10);
          if (modifier.toUpperCase() === 'PM' && h < 12) h += 12;
          if (modifier.toUpperCase() === 'AM' && h === 12) h = 0;
          return `${h.toString().padStart(2, '0')}:${mStr}`;
        };
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
          opens: hours.closed ? undefined : convertTo24Hour(hours.open),
          closes: hours.closed ? undefined : convertTo24Hour(hours.close),
        };
      }
    ),
  };
}

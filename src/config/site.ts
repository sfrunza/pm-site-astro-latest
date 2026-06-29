const appUrl = 'https://www.insightmoving.com';

export interface BusinessAddress {
  address: string;
  city: string;
  state: string;
  zip: string;
}

export type SocialNetwork =
  'facebook' | 'instagram' | 'twitter' | 'yelp' | 'google';

export type Social = {
  name: string;
  href: string;
  network: SocialNetwork;
};

export const SITE = {
  title: "Phoenix Moving & Storage | Boston Moving Company",
  description: "Professional moving services with experienced movers. Residential and commercial moves, packing services, and storage solutions.",
  url: appUrl, // Update with your actual domain
  author: "Phoenix Moving",
  ogImage: "/og-image.jpg",
  logo: "/favicon.svg",
  twitterHandle: "@phoenixmoving",
  keywords: "moving services, professional movers, residential moving, commercial moving, packing services",
  language: "en",
  locale: "en_US",
  type: "website",
  // Analytics
  googleAnalyticsId: "G-XXXXXXXXXX", // Replace with your GA4 ID
  googleTagManagerId: "GTM-XXXXXXX", // Replace with your GTM ID
  // Social Media
  facebookAppId: "your-facebook-app-id",
  // Contact
  contactEmail: "info@gophoenixmoving.com",
  contactPhone: "+1 (508) 315-9458",
  // Business Info
  businessName: "Phoenix Moving & Storage",
  businessShortName: "Phoenix Moving",
  businessAddresses: [
    {
      address: "18 Lakeview Gardens",
      city: "Natick",
      state: "MA",
      zip: "01760",
    },
    {
      address: "174 Adams Street",
      city: "Newton",
      state: "MA",
      zip: "02458",
    }
  ] as BusinessAddress[],
  businessHours: "Monday - Friday: 8AM - 6PM, Saturday - Sunday: 9AM - 4PM",
  businessLicenses: {
    MDPU: "32054",
    DOT: "3868109",
    MC: "01415308",
  },
  businessUrls: {
    googleMaps: "https://goo.gl/maps/NPF6QwaYbWBQdG3Q6",
    yelp: "https://www.yelp.com/biz/phoenix-moving-and-storage-newton",
    facebook: "https://www.facebook.com/phoenixmoving",
    instagram: "https://www.instagram.com/phoenixmovingboston/",
    twitter: "https://twitter.com/phoenix_moving",
    thumbtack: "https://www.thumbtack.com/ma/natick/movers/phoenix-moving",
  },
  // Schema.org structured data
  schema: {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Phoenix Moving",
    "description": "Professional moving services with experienced movers",
    "url": appUrl,
    "telephone": "(508) 315-9458",
    "email": "info@gophoenixmoving.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "18 Lakeview Gardens",
      "addressLocality": "Natick",
      "addressRegion": "MA",
      "postalCode": "01760",
      "addressCountry": "US"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 42.2728,
        "longitude": -71.3692
      },
      "geoRadius": "50000"
    }
  }
};
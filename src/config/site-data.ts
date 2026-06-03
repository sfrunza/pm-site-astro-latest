export type Service = {
  name: string;
  description: string;
  shortDescription: string;
  video: string;
  href: string;
};

export const services: Service[] = [
  {
    name: "Local Moving",
    description:
      "Phoenix Moving is a perfect solution for your Boston and surrounding area move.",
    shortDescription: "Hourly based full moving servcies",
    video: "/videos/video-1.mp4",
    href: "/local-moving",
  },
  {
    name: "Interstate Moving",
    description:
      "Moving across United States with fully licensed and insured moving company.",
    shortDescription: "Flat rate moving. Gas, mileage, tolls and insurance are included",
    video: "/videos/video-2.mp4",
    href: "/interstate-moving",
  },
  {
    name: "Packing Services",
    description:
      "Moving packing solutions. Phoenix Moving Company provides all kinds of boxes and carefully packs your belongings.",
    shortDescription: "Top-notch packing services to reduce the stress of moving",
    video: "/videos/video-3.mp4",
    href: "/packing-services",
  },
  {
    name: "Storage Solutions",
    description:
      "All types of storage for your move with Phoenix Moving Company. Short and long-term available.",
    shortDescription: "Temperature-controlled storage for up to 6 months",
    video: "/videos/video-4.mp4",
    href: "/storage-solutions",
  },
  {
    name: "Piano Movers",
    description:
      "Right tools, equipment, and expertise to ensure it is done correctly and safely.",
    shortDescription: "Right tools, equipment, and expertise to ensure it is done correctly and safely",
    video: "/videos/video-5.mp4",
    href: "/piano-moving",
  }
];
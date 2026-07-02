import { SITE } from "@/config/site";

export type Service = {
  name: string;
  description: string;
  shortDescription: string;
  href: string;
};

export const services: Service[] = [
  {
    name: "Local Moving",
    description:
      `${SITE.businessShortName} is the perfect solution for your Boston-area move.`,
    shortDescription: "Hourly full-service moving",
    href: "/local-moving",
  },
  {
    name: "Interstate Moving",
    description:
      "Move across the United States with a fully licensed and insured moving company.",
    shortDescription: "Flat-rate moving with gas, mileage, tolls, and insurance included",
    href: "/interstate-moving",
  },
  {
    name: "Packing Services",
    description:
      `${SITE.businessShortName} provides packing supplies, boxes, and careful packing for your belongings.`,
    shortDescription: "Top-notch packing services to reduce the stress of moving",
    href: "/packing-services",
  },
  {
    name: "Storage Solutions",
    description:
      `${SITE.businessShortName} offers short- and long-term storage options for your move.`,
    shortDescription: "Temperature-controlled storage options for your move",
    href: "/storage-solutions",
  },
  {
    name: "Piano Movers",
    description:
      "We use the right tools, equipment, and expertise to move your piano correctly and safely.",
    shortDescription: "Specialized tools, equipment, and expertise for safe piano moving",
    href: "/piano-moving",
  }
];
import type { Faq } from '@/blocks/faq/faqs';
import type { CityPremiumContent } from '@/config/city-premium/types';
import type { MovingStep } from '@/config/moving-howto';
import type { RelatedLink } from '@/config/service-faqs';
import { SITE } from '@/config/site';
import {
  CalendarTimeIcon,
  LicenseIcon,
  Receipt2Icon,
  ShieldCheckIcon,
  TruckDeliveryIcon,
} from '@/icons';

export const NATICK_PATH = '/natick-ma-movers';

/** 40–60 word direct answer for GEO / above-the-fold. */
const natickDirectAnswer =
  'Phoenix Moving is a licensed, insured Natick moving company headquartered at 18 Lakeview Gardens. We provide local, long-distance, packing, storage, and commercial moves for Natick Center, West Natick, South Natick, and MetroWest with transparent pricing and free estimates.';

const natickTrustFeatures = [
  `Licensed MDPU #${SITE.businessLicenses.MDPU}`,
  `US DOT ${SITE.businessLicenses.DOT}`,
  'Fully insured crews',
  'Free moving estimates',
  'Natick headquarters',
  '4.98★ average (243 reviews)',
];

const natickWhyChooseFeatures = [
  {
    name: 'Licensed & insured Massachusetts movers',
    description:
      'Phoenix Moving holds MDPU license 32054, US DOT 3868109, and cargo, motor vehicle, and general liability coverage—so your Natick move meets building and landlord requirements.',
    icon: LicenseIcon,
  },
  {
    name: 'MetroWest crews who know Natick',
    description:
      'Our teams navigate Natick Center, Route 9 corridor condos, and South Natick colonials daily. Shorter drive times from our Natick HQ often mean lower travel charges on local jobs.',
    icon: TruckDeliveryIcon,
  },
  {
    name: 'Transparent hourly & flat-rate pricing',
    description:
      'Local Natick moves are billed in 15-minute increments for labor and prorated travel. Long-distance quotes are flat-rate with no surprise fuel surcharges—see our pricing page before you book.',
    icon: Receipt2Icon,
  },
  {
    name: 'COIs, elevators & tight access',
    description:
      'We prepare certificates of insurance for Natick apartments and condos, reserve freight elevators when required, and pad floors and doorways to protect common areas.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Flexible scheduling',
    description:
      'Book weekdays, weekends, or month-end with a coordinator who confirms crew size, truck type, and parking permits before load day.',
    icon: CalendarTimeIcon,
  },
  {
    name: 'Full-service packing & storage',
    description:
      'Add professional packing, wardrobe boxes, or short-term storage between closings—one vendor for your entire Natick relocation timeline.',
    icon: TruckDeliveryIcon,
  },
];

const natickHowToSteps: MovingStep[] = [
  {
    stepNumber: '01',
    title: 'Request a Natick moving quote',
    description:
      'Tell us your addresses, home size, and move date online or by phone. We confirm crew size, truck, and whether COI or elevator reservations are needed.',
  },
  {
    stepNumber: '02',
    title: 'Book & prepare your Natick move',
    description:
      'Reserve your date with a $100 local deposit. Declutter, label boxes, and share building rules—we send prep tips tailored to Natick condos and single-family homes.',
  },
  {
    stepNumber: '03',
    title: 'Professional load day in Natick',
    description:
      'Uniformed crews arrive on time with blankets, dollies, and floor protection. We load, transport, and unload—placing furniture where you want it and reassembling beds and tables.',
  },
  {
    stepNumber: '04',
    title: 'Walkthrough & payment',
    description:
      'Review the finished move, sign off on any notes, and pay by cash, card, or certified check per your estimate. Local balances are due when the job is complete.',
  },
];

const natickNeighborhoods = [
  {
    name: 'Natick Center',
    description:
      'Walkable downtown moves near the MBTA, shops, and mixed-use buildings—often with elevator COIs and limited street parking.',
  },
  {
    name: 'West Natick',
    description:
      'Route 9 corridor apartments, townhomes, and office parks with straightforward highway access for our trucks.',
  },
  {
    name: 'South Natick',
    description:
      'Residential streets, larger lots, and older homes that may need extra padding for tight stairways and doorways.',
  },
  {
    name: 'ZIP 01760',
    description:
      'All Natick, MA addresses in 01760 are in our primary MetroWest service zone with same-week availability when schedules allow.',
  },
];

const natickNearbyTowns: RelatedLink[] = [
  {
    href: '/framingham-movers',
    label: 'Framingham movers',
    description: 'Neighboring MetroWest city moves east of Natick.',
  },
  {
    href: '/needham-movers',
    label: 'Needham movers',
    description: 'Residential moves along the Route 128 corridor.',
  },
  {
    href: '/wayland-movers',
    label: 'Wayland movers',
    description: 'Suburban homes and lake-area properties west of Natick.',
  },
  {
    href: '/wellesley-movers',
    label: 'Wellesley movers',
    description: 'College-town and estate moves north of Natick.',
  },
  {
    href: '/newton-movers',
    label: 'Newton movers',
    description: 'Second Phoenix Moving location—full-service crews.',
  },
  {
    href: '/boston-movers',
    label: 'Boston movers',
    description: 'Greater Boston apartments, walk-ups, and offices.',
  },
];

const natickRelatedLinks: RelatedLink[] = [
  {
    href: '/local-moving',
    label: 'Local moving services',
    description: 'Hourly MetroWest and Greater Boston crews.',
  },
  {
    href: '/interstate-moving',
    label: 'Long-distance moving',
    description: 'Licensed interstate moves from Natick.',
  },
  {
    href: '/packing-services',
    label: 'Packing services',
    description: 'Full or partial packing before load day.',
  },
  {
    href: '/storage-solutions',
    label: 'Storage solutions',
    description: 'Short- and long-term storage between homes.',
  },
  {
    href: '/pricing',
    label: 'Moving prices',
    description: 'Transparent rates for local and long-distance moves.',
  },
  {
    href: '/book',
    label: 'Book your Natick move',
    description: 'Free, no-obligation estimate online.',
  },
];

const natickFaqs: Faq[] = [
  {
    question: 'How much do Natick movers cost?',
    answer: `<p>Local Natick moves are typically billed hourly in 15-minute increments for labor plus prorated travel from our Natick warehouse. Studio and one-bedroom jobs often run a few hours; larger homes take longer. <a href="/pricing">See moving prices</a> or <a href="/book">request a free quote</a> for your exact home size and date.</p>`,
  },
  {
    question: 'Are Phoenix Moving crews licensed and insured in Natick?',
    answer: `<p>Yes. We are licensed with the Massachusetts Department of Public Utilities (MDPU #${SITE.businessLicenses.MDPU}), US DOT ${SITE.businessLicenses.DOT}, and carry cargo, motor vehicle, and general liability insurance. We provide certificates of insurance for Natick buildings when required.</p>`,
  },
  {
    question: 'Do you offer packing and storage for Natick moves?',
    answer: `<p>Yes. Add <a href="/packing-services">professional packing</a>, supplies, and <a href="/storage-solutions">storage</a> between closings or lease gaps. One coordinator can bundle services on your Natick timeline.</p>`,
  },
  {
    question: 'How far in advance should I book movers in Natick?',
    answer: `<p>Book two to four weeks ahead for most Natick local moves. Month-end Saturdays, summer weekends, and September lease turnover fill quickly—earlier booking secures your preferred crew and truck.</p>`,
  },
  {
    question: 'Do you handle Natick apartments and condo buildings?',
    answer: `<p>Yes. Share your building manager’s COI template, elevator reservation rules, and loading dock instructions when you book. Our Natick crews pad common areas and follow freight-elevator time windows.</p>`,
  },
  {
    question: 'What areas near Natick do you also serve?',
    answer: `<p>Beyond ZIP 01760, we serve Framingham, Needham, Wayland, Wellesley, Newton, and all of Greater Boston. Explore our <a href="/local-moving">local moving</a> page or nearby city pages linked from this guide.</p>`,
  },
];

const natickKeywords = [
  'Natick movers',
  'Natick MA moving company',
  'movers Natick Massachusetts',
  'local movers Natick',
  'best movers Natick MA',
  'affordable movers Natick',
  'licensed movers Natick',
  'residential movers Natick',
  'commercial movers Natick',
  'apartment movers Natick',
  'packing services Natick',
  'moving and storage Natick',
  'MetroWest movers',
  'Natick Center movers',
  'West Natick movers',
  'South Natick movers',
  '01760 movers',
  'Phoenix Moving Natick',
].join(', ');

const natickSeo = {
  title: 'Natick Movers | Licensed MA Moving Company — Phoenix Moving',
  description:
    'Natick movers headquartered on Lakeview Gardens. Licensed, insured local & long-distance moves, packing, storage. Free estimate—book online today.',
  serviceName: 'Natick Moving Services',
  serviceDescription:
    'Licensed local and long-distance moving, packing, storage, and commercial relocation for Natick, MA and MetroWest—headquartered at 18 Lakeview Gardens with transparent pricing.',
  howToName: 'How to book Natick movers with Phoenix Moving',
  howToDescription:
    'Four steps to plan and complete a Natick move with Phoenix Moving—from free quote to walkthrough and payment.',
};

export const natickPremium: CityPremiumContent = {
  path: NATICK_PATH,
  imageSlug: 'natick-movers',
  legacySlug: 'natick-movers',
  keywords: natickKeywords,
  ogImageAlt: 'Natick, MA movers — Phoenix Moving',
  schema: {
    cityName: 'Natick',
    postalCode: '01760',
    geo: { latitude: 42.2728, longitude: -71.3692 },
    areaServed: [
      { '@type': 'City', name: 'Natick' },
      { '@type': 'PostalCode', name: '01760' },
      { '@type': 'State', name: 'Massachusetts' },
    ],
  },
  seo: natickSeo,
  breadcrumbLabel: 'Natick Movers',
  hero: {
    title: 'Natick, MA Movers',
    subtitle:
      'Licensed Natick moving company—local, long-distance, packing, and storage from our MetroWest headquarters.',
  },
  directAnswer: natickDirectAnswer,
  intro: {
    label: 'Natick, MA',
    title: 'Your local Natick moving company',
    imageAlt: 'Natick, Massachusetts — Phoenix Moving service area',
    trustLead: 'Natick movers you can trust:',
  },
  trustFeatures: natickTrustFeatures,
  whyChoose: {
    label: 'Why Natick homeowners choose us',
    title: 'Why choose Phoenix Moving in Natick?',
    subtitle:
      'Licensed MetroWest crews, transparent pricing, and building-ready service from our Natick headquarters.',
    features: natickWhyChooseFeatures,
  },
  howTo: {
    label: 'Your Natick move',
    title: 'How our Natick move works',
    subtitle:
      'Four clear steps from free quote to walkthrough—no surprises on moving day.',
    steps: natickHowToSteps,
  },
  neighborhoods: {
    label: 'Service area',
    title: 'Areas we serve in and around Natick',
    subtitle:
      'From Natick Center to South Natick and neighboring MetroWest towns—we know the roads, buildings, and parking rules.',
    areas: natickNeighborhoods.map((area) => ({
      title: area.name,
      description: area.description,
    })),
  },
  nearbyTowns: natickNearbyTowns,
  pricing: {
    label: 'Pricing',
    title: 'Transparent Natick moving rates',
    subtitle:
      'Local moves are billed hourly with prorated travel from our Natick warehouse. Long-distance jobs use flat-rate quotes with fuel and tolls included.',
  },
  reviews: true,
  faq: {
    title: 'Natick moving FAQ',
    label: 'Questions about Natick moves',
    groupName: 'natick-faq',
    items: natickFaqs,
  },
  relatedLinks: natickRelatedLinks,
  relatedTitle: 'Moving services for Natick residents',
  finalCta: {
    title: 'Book your Natick movers today.',
    description: 'Free estimates · Licensed & insured · Headquartered in Natick, MA',
  },
};

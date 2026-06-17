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

export const DEDHAM_PATH = '/dedham-ma-movers';


/** 40–60 word direct answer for GEO / above-the-fold. */
const dedhamDirectAnswer =
  `${SITE.businessShortName} is a licensed, insured Massachusetts moving company serving Dedham and Norfolk County from our Natick headquarters. We handle local, long-distance, packing, storage, and commercial moves in Dedham Square, Oakdale, and nearby South Shore communities—with transparent pricing and free estimates.`;

const dedhamTrustFeatures = [
  `Licensed MDPU #${SITE.businessLicenses.MDPU}`,
  `US DOT ${SITE.businessLicenses.DOT}`,
  'Fully insured crews',
  'Free moving estimates',
  'MetroWest headquarters',
  '4.98★ average (243 reviews)',
];

const dedhamWhyChooseFeatures = [
  {
    name: 'Licensed & insured Massachusetts movers',
    description:
      `${SITE.businessShortName} holds MDPU license 32054, US DOT 3868109, and cargo, motor vehicle, and general liability coverage—so your Dedham move meets landlord and building requirements.`,
    icon: LicenseIcon,
  },
  {
    name: 'Crews who know Dedham & Route 128',
    description:
      'Our teams navigate Dedham Square, Oakdale colonials, and East Dedham condos regularly. Short drives from our Natick warehouse help keep travel time fair on local jobs.',
    icon: TruckDeliveryIcon,
  },
  {
    name: 'Transparent hourly & flat-rate pricing',
    description:
      'Local Dedham moves are billed in 15-minute increments for labor and prorated travel. Long-distance quotes are flat-rate with fuel and tolls included—see our pricing page before you book.',
    icon: Receipt2Icon,
  },
  {
    name: 'COIs, elevators & tight access',
    description:
      'We prepare certificates of insurance for Dedham apartments and condos, coordinate freight elevators when required, and pad floors and doorways in common areas.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Flexible scheduling',
    description:
      'Book weekdays, weekends, or month-end with a coordinator who confirms crew size, truck type, and parking logistics before load day.',
    icon: CalendarTimeIcon,
  },
  {
    name: 'Full-service packing & storage',
    description:
      'Add professional packing, wardrobe boxes, or short-term storage between closings—one vendor for your entire Dedham relocation timeline.',
    icon: TruckDeliveryIcon,
  },
];

const dedhamHowToSteps: MovingStep[] = [
  {
    stepNumber: '01',
    title: 'Request a Dedham moving quote',
    description:
      'Tell us your addresses, home size, and move date online or by phone. We confirm crew size, truck, and whether COI or elevator reservations are needed.',
  },
  {
    stepNumber: '02',
    title: 'Book & prepare your Dedham move',
    description:
      'Reserve your date with a $100 local deposit. Declutter, label boxes, and share building rules—we send prep tips tailored to Dedham condos and single-family homes.',
  },
  {
    stepNumber: '03',
    title: 'Professional load day in Dedham',
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

const dedhamServicesCopy = {
  label: 'Dedham moving services',
  title: 'Full-service movers for Dedham homes & businesses',
  subtitle:
    `From Dedham Square walk-ups to Oakdale colonials and office relocations along Route 1, ${SITE.businessShortName} delivers licensed local crews, packing, storage, and long-distance options from our Natick headquarters.`,
};

/** Long-form “moving in Dedham” copy for FeatureImageLeft. */
const dedhamMovingInDedham = {
  title: 'Moving in Dedham, Massachusetts',
  subtitle:
    'Historic downtown charm, suburban streets, and quick access to Boston—here is how we plan Dedham moves for less stress on load day.',
  paragraphs: [
    `Dedham sits about 15 miles southwest of Boston in Norfolk County, blending a walkable town center with quiet residential pockets like Oakdale, Riverdale, and East Dedham. Whether you are closing on a colonial near the Charles River, leasing a condo near commuter rail, or shifting your business along Route 1, ${SITE.businessShortName} builds a move plan around your building rules, parking, and inventory—not a one-size template.`,
    'Our coordinators work from Natick, so travel to Dedham is straightforward on I-95 and Route 1. That often keeps prorated travel time reasonable compared with crews dispatched from far outside MetroWest. We confirm crew size, truck type, and whether your building needs a certificate of insurance (COI) or freight-elevator reservation before we arrive.',
    'Many Dedham moves pair local loading with <a href="/interstate-moving" aria-label="Long-distance delivery">long-distance delivery</a>, <a href="/packing-services" aria-label="Professional packing">professional packing</a>, or <a href="/storage-solutions" aria-label="Storage">short-term storage</a> between closings. One team can handle the timeline so you are not juggling multiple vendors during a stressful transition.',
  ],
};

const dedhamMoveTypes = [
  {
    title: 'Residential moves in Dedham',
    description:
      'Whole-home and apartment relocations with furniture disassembly, blanket wrapping, and careful placement in your new rooms. Ideal for families leaving Oakdale colonials or upsizing near Dedham Square.',
  },
  {
    title: 'Apartment & condo moves',
    description:
      'Elevator reservations, COI paperwork, and padded common areas for Dedham multi-family buildings. We follow freight-elevator windows and protect hallways on move day.',
  },
  {
    title: 'Commercial & office moves',
    description:
      'Relocate desks, files, and equipment with a plan to limit downtime. Weekend and after-hours slots available for offices along Route 1 and Dedham Corporate Center.',
  },
  {
    title: 'Small moves & single items',
    description:
      'Focused help for partial loads—one bedroom, furniture only, or load/unload assistance when you do not need a full truck crew all day.',
  },
  {
    title: 'Packing & crating',
    description:
      'Full-home packing, fragile-only packs, and supplies delivered before load day. Pair with your Dedham move for one coordinated schedule.',
  },
];

const dedhamPricingFactors = [
  {
    title: 'Home size & inventory',
    description:
      'Studios and one-bedrooms typically need fewer hours than multi-bedroom colonials with basements and garages. Your online quote reflects room count and heavy items.',
  },
  {
    title: 'Labor + travel time',
    description:
      'Local Dedham jobs bill in 15-minute increments for on-site labor plus prorated travel from our Natick warehouse to your origin and back after delivery.',
  },
  {
    title: 'Access & building rules',
    description:
      'Long carries, stairs, elevators, and COI requirements can add time. Share building details when you book so the estimate matches move-day reality.',
  },
  {
    title: 'Packing & add-ons',
    description:
      'Professional packing, storage, and specialty handling are quoted separately. Bundle services with one coordinator for a single timeline.',
  },
];

const dedhamCostOverview =
  'Most Dedham local moves are hourly with transparent travel charges—no surprise fuel fees on local jobs. Long-distance relocations from Dedham use flat-rate quotes that include mileage, tolls, and insurance. Request a free estimate for your addresses and move date; we confirm crew size before you reserve.';

const dedhamCommercialCopy = {
  title: 'Office & commercial moves in Dedham',
  subtitle:
    'Minimize downtime for Norfolk County businesses with planned commercial relocations.',
  paragraphs: [
    `Dedham businesses along Route 1, legacy mill conversions, and professional offices near Dedham Corporate Center trust ${SITE.businessShortName} for structured commercial moves. We label workstations, protect IT equipment, and stage furniture so your team can resume work faster.`,
    'Share your target move-in window, loading dock or freight elevator rules, and any after-hours access needs. We align crew size and truck type with your floor plan and coordinate COIs when property managers require them.',
  ],
};

const dedhamPrepTips = [
  'Reserve freight elevators and loading zones with your Dedham building manager at least one week ahead.',
  'Label boxes by room; set aside essentials you will need the first night in Dedham.',
  'Measure doorways and stair turns for oversized items before move day.',
  'Share COI templates and parking instructions with your coordinator when you book.',
  'Declutter donations and trash before the crew arrives to reduce labor time.',
];

const dedhamNeighborhoods = [
  {
    name: 'Dedham Square',
    description:
      'Historic downtown moves near shops, restaurants, and mixed-use buildings—often with limited street parking and walk-up or elevator access.',
  },
  {
    name: 'Oakdale & Riverdale',
    description:
      'Residential streets with colonials, split-levels, and tree-lined neighborhoods where stair padding and driveway loading are common.',
  },
  {
    name: 'East Dedham',
    description:
      'Closer to Boston and Milton with condos, townhomes, and commuter-rail access—crews plan for tighter turns and building COI requirements.',
  },
  {
    name: 'ZIP 02026',
    description:
      'Primary Dedham, MA addresses in 02026 are in our Norfolk County service zone; some 02027 addresses along town borders may qualify—ask when you book.',
  },
];

const dedhamNearbyTowns: RelatedLink[] = [
  {
    href: '/westwood-movers',
    label: 'Westwood movers',
    description: 'Neighboring town moves west of Dedham along Route 109.',
  },
  {
    href: '/norwood-movers',
    label: 'Norwood movers',
    description: 'South Shore residential and commercial moves near Dedham.',
  },
  {
    href: '/needham-movers',
    label: 'Needham movers',
    description: 'Route 128 corridor homes north of Dedham.',
  },
  {
    href: '/canton-movers',
    label: 'Canton movers',
    description: 'Suburban moves southeast of Dedham.',
  },
  {
    href: '/newton-ma-movers',
    label: 'Newton movers (full guide)',
    description: `Second ${SITE.businessShortName} location—full-service crews.`,
  },
  {
    href: '/boston-ma-movers',
    label: 'Boston movers (full guide)',
    description: 'Greater Boston apartments, walk-ups, and offices.',
  },
];

const dedhamRelatedLinks: RelatedLink[] = [
  {
    href: '/local-moving',
    label: 'Local moving services',
    description: 'Hourly Greater Boston and Norfolk County crews.',
  },
  {
    href: '/interstate-moving',
    label: 'Long-distance moving',
    description: 'Licensed interstate moves from MetroWest.',
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
    label: 'Book your Dedham move',
    description: 'Free, no-obligation estimate online.',
  },
];

const dedhamFaqs: Faq[] = [
  {
    question: 'How much do Dedham movers cost?',
    answer: `<p>Local Dedham moves are typically billed hourly in 15-minute increments for labor plus prorated travel from our Natick warehouse. Studio and one-bedroom jobs often run a few hours; larger homes take longer. <a href="/pricing" aria-label="See moving prices">See moving prices</a> or <a href="/book" aria-label="Request a free quote">request a free quote</a> for your home size and date.</p>`,
  },
  {
    question: `Are ${SITE.businessShortName} crews licensed and insured in Dedham?`,
    answer: `<p>Yes. We are licensed with the Massachusetts Department of Public Utilities (MDPU #${SITE.businessLicenses.MDPU}), US DOT ${SITE.businessLicenses.DOT}, and carry cargo, motor vehicle, and general liability insurance. We provide certificates of insurance for Dedham buildings when required.</p>`,
  },
  {
    question: 'Do you offer packing and storage for Dedham moves?',
    answer: `<p>Yes. Add <a href="/packing-services" aria-label="Professional packing">professional packing</a>, supplies, and <a href="/storage-solutions" aria-label="Storage">storage</a> between closings or lease gaps. One coordinator can bundle services on your Dedham timeline.</p>`,
  },
  {
    question: 'How far in advance should I book movers in Dedham?',
    answer: `<p>Book two to four weeks ahead for most Dedham local moves. Month-end Saturdays, summer weekends, and September lease turnover fill quickly—earlier booking secures your preferred crew and truck.</p>`,
  },
  {
    question: 'Do you handle Dedham apartments and condo buildings?',
    answer: `<p>Yes. Share your building manager’s COI template, elevator reservation rules, and loading dock instructions when you book. Our crews pad common areas and follow freight-elevator time windows.</p>`,
  },
  {
    question: 'What areas near Dedham do you also serve?',
    answer: `<p>Beyond ZIP 02026, we serve Westwood, Norwood, Needham, Canton, Newton, Boston, and all of Greater Boston. Explore our <a href="/local-moving" aria-label="Local moving">local moving</a> page or nearby city pages linked from this guide.</p>`,
  },
  {
    question: 'Do you offer senior downsizing or estate moves in Dedham?',
    answer:
      '<p>Yes. We help Dedham families with downsizing, estate cleanouts, and partial loads—coordinating packing, donation drop-offs, and storage when you need a lighter footprint. Tell us your timeline when you <a href="/book" aria-label="Request a quote">request a quote</a>.</p>',
  },
  {
    question: `Can ${SITE.businessShortName} handle weekend moves in Dedham?`,
    answer:
      '<p>Weekend and month-end dates are available for Dedham local moves when schedules allow. Popular Saturdays fill early—book two to four weeks ahead for the best crew and truck match.</p>',
  },
  {
    question: 'How is travel time calculated for Dedham local moves?',
    answer:
      '<p>Travel is prorated in 15-minute increments from our Natick warehouse to your Dedham origin, and from your destination back to Natick after unload. Time between origin and destination counts as labor, not travel.</p>',
  },
];

const dedhamKeywords = [
  'Dedham movers',
  'Dedham MA moving company',
  'movers Dedham Massachusetts',
  'local movers Dedham',
  'best movers Dedham MA',
  'affordable movers Dedham',
  'licensed movers Dedham',
  'residential movers Dedham',
  'commercial movers Dedham',
  'apartment movers Dedham',
  'packing services Dedham',
  'moving and storage Dedham',
  'Norfolk County movers',
  'Dedham Square movers',
  'Oakdale movers',
  'East Dedham movers',
  '02026 movers',
  `${SITE.businessShortName} Dedham`,
].join(', ');

const dedhamSeo = {
  title: `Dedham, MA Movers | ${SITE.businessName}`,
  description:
    'Licensed Dedham movers from MetroWest HQ. Local & long-distance moves, packing, storage. Free estimate—book your Dedham, MA move online today.',
  serviceName: 'Dedham Moving Services',
  serviceDescription:
    'Licensed local and long-distance moving, packing, storage, and commercial relocation for Dedham, MA and Norfolk County—with transparent pricing from our Natick headquarters.',
  howToName: `How to book Dedham movers with ${SITE.businessShortName}`,
  howToDescription:
    `Four steps to plan and complete a Dedham move with ${SITE.businessShortName}—from free quote to walkthrough and payment.`,
};

export const dedhamPremium: CityPremiumContent = {
  path: DEDHAM_PATH,
  imageSlug: 'dedham-movers',
  legacySlug: 'dedham-movers',
  keywords: dedhamKeywords,
  ogImageAlt: `Dedham, MA movers — ${SITE.businessShortName}`,
  schema: {
    cityName: 'Dedham',
    postalCode: '02026',
    geo: { latitude: 42.2418, longitude: -71.1662 },
    areaServed: [
      { '@type': 'City', name: 'Dedham' },
      { '@type': 'PostalCode', name: '02026' },
      { '@type': 'State', name: 'Massachusetts' },
    ],
  },
  seo: dedhamSeo,
  breadcrumbLabel: 'Dedham Movers',
  hero: {
    title: 'Dedham, MA Movers',
    subtitle:
      'Licensed Dedham movers for homes and businesses—local, long-distance, packing, and storage from our MetroWest headquarters, about 15 miles southwest of Boston.',
  },
  directAnswer: dedhamDirectAnswer,
  intro: {
    label: 'Dedham, MA',
    title: 'Your local Dedham moving company',
    imageAlt: `Dedham, Massachusetts — ${SITE.businessShortName} service area`,
    trustLead: 'Dedham movers you can trust:',
  },
  trustFeatures: dedhamTrustFeatures,
  services: dedhamServicesCopy,
  movingInCity: {
    title: dedhamMovingInDedham.title,
    subtitle: dedhamMovingInDedham.subtitle,
    paragraphs: dedhamMovingInDedham.paragraphs,
    imageAlt: `${SITE.businessShortName} crew serving Dedham, Massachusetts`,
  },
  moveTypes: {
    label: 'Move types',
    title: 'Dedham moves we handle every week',
    subtitle:
      'Residential, commercial, and specialty services tailored to Norfolk County homes and businesses.',
    items: dedhamMoveTypes,
    quoteButtonLabel: 'Get a Dedham moving quote',
    showPianoLink: true,
  },
  whyChoose: {
    label: 'Why Dedham homeowners choose us',
    title: `Why choose ${SITE.businessShortName} in Dedham?`,
    subtitle:
      'Licensed MetroWest crews, transparent pricing, and building-ready service for Norfolk County moves.',
    features: dedhamWhyChooseFeatures,
  },
  howTo: {
    label: 'Your Dedham move',
    title: 'How our Dedham move works',
    subtitle:
      'Four clear steps from free quote to walkthrough—no surprises on moving day.',
    steps: dedhamHowToSteps,
  },
  neighborhoods: {
    label: 'Service area',
    title: 'Neighborhoods & nearby towns',
    subtitle:
      'From Dedham Square to Oakdale and East Dedham—we know Norfolk County roads, buildings, and parking.',
    areas: dedhamNeighborhoods.map((area) => ({
      title: area.name,
      description: area.description,
    })),
  },
  nearbyTowns: dedhamNearbyTowns,
  midCta: {
    title: 'Planning a Dedham move this month?',
    description:
      'Free estimates · Licensed MDPU crews · Serving Dedham from Natick, MA',
  },
  pricing: {
    label: 'Pricing',
    title: 'How much do Dedham movers cost?',
    subtitle: dedhamCostOverview,
    factors: dedhamPricingFactors,
  },
  commercial: {
    label: 'Commercial',
    title: dedhamCommercialCopy.title,
    subtitle: dedhamCommercialCopy.subtitle,
    paragraphs: dedhamCommercialCopy.paragraphs,
    imageAlt: 'Commercial and office moving in Dedham, MA',
  },
  prepTips: {
    label: 'Move-day prep',
    title: 'Prepare for your Dedham move',
    subtitle:
      'A short checklist helps crews stay on schedule and protects your building.',
    tips: dedhamPrepTips,
  },
  movingChecklist: true,
  reviews: true,
  faq: {
    title: 'Dedham moving FAQ',
    label: 'Questions about Dedham moves',
    groupName: 'dedham-faq',
    items: dedhamFaqs,
  },
  relatedLinks: dedhamRelatedLinks,
  relatedTitle: 'Moving services for Dedham residents',
  finalCta: {
    title: 'Book your Dedham movers today.',
    description: 'Free estimates · Licensed & insured · Serving Dedham from Natick, MA',
  },
};

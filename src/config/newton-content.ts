import type { Faq } from '@/blocks/faq/FAQ1.astro';
import type {
  CityPremiumContent,
  CityPremiumSectionId,
} from '@/config/city-premium/types';
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

export const NEWTON_PATH = '/newton-ma-movers';

const newtonDirectAnswer =
  'Phoenix Moving is a licensed, insured Newton moving company with a local office at 174 Adams Street. We provide residential, commercial, packing, storage, and long-distance moves across Newton’s villages—from Newton Centre to Newtonville—with transparent hourly pricing and free estimates.';

const newtonTrustFeatures = [
  `Licensed MDPU #${SITE.businessLicenses.MDPU}`,
  `US DOT ${SITE.businessLicenses.DOT}`,
  'Newton office · 174 Adams St',
  'Fully insured crews',
  'Free moving estimates',
  '4.98★ average (243 reviews)',
];

const newtonWhyChooseFeatures = [
  {
    name: 'Local Newton office & crews',
    description:
      'Unlike movers dispatched from distant warehouses, Phoenix Moving maintains a Newton location at 174 Adams Street. Shorter travel times on local jobs often mean fairer prorated charges and faster response when you need schedule changes.',
    icon: TruckDeliveryIcon,
  },
  {
    name: 'Licensed & insured for MA buildings',
    description:
      'We hold MDPU license 32054, US DOT 3868109, and cargo, motor vehicle, and general liability coverage. Certificates of insurance are available for condo associations, universities, and commercial landlords across Newton.',
    icon: LicenseIcon,
  },
  {
    name: 'Village-by-village experience',
    description:
      'Newton is thirteen villages in one city—each with different streets, parking rules, and housing stock. Our coordinators plan for Newton Highlands hills, Chestnut Hill elevators, and Newtonville triple-deckers before load day.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Transparent hourly & flat-rate options',
    description:
      'Local Newton moves bill in 15-minute increments for labor plus prorated travel. Interstate and long-distance quotes use flat rates with fuel and tolls included—review our pricing page before you book.',
    icon: Receipt2Icon,
  },
  {
    name: 'Flexible scheduling year-round',
    description:
      'Book weekdays, weekends, or month-end. We help align crew size and truck type with lease turnovers common near Boston College, Lasell, and Mount Ida Corridor housing.',
    icon: CalendarTimeIcon,
  },
  {
    name: 'Packing, storage & specialty handling',
    description:
      'Add professional packing, short-term storage between closings, or piano and antique handling through one coordinator—ideal when your Newton timeline includes gap periods or multi-stop deliveries.',
    icon: TruckDeliveryIcon,
  },
];

const newtonHowToSteps: MovingStep[] = [
  {
    stepNumber: '01',
    title: 'Tell us about your Newton move',
    description:
      'Share origin and destination addresses, home size, and your target date online or by phone. We note village-specific access—driveway width, elevator banks, and whether a COI is required.',
  },
  {
    stepNumber: '02',
    title: 'Receive a written estimate & book',
    description:
      'Your coordinator confirms crew size, truck type, and travel assumptions. Reserve with a $100 local deposit and receive prep guidance tailored to condos, Victorians, and split-level homes common in Newton.',
  },
  {
    stepNumber: '03',
    title: 'Load day with floor & furniture protection',
    description:
      'Uniformed crews arrive with blankets, dollies, and runners. We load, transport, and unload—placing furniture where you want it and reassembling beds, tables, and office workstations as quoted.',
  },
  {
    stepNumber: '04',
    title: 'Final walkthrough & payment',
    description:
      'Review completed work, note any concerns on the bill of lading, and pay by cash, card, or certified check per your estimate. Local balances are due when the job is finished.',
  },
];

const newtonServicesCopy = {
  label: 'Newton moving services',
  title: 'Full-service movers for Newton homes, apartments & offices',
  subtitle:
    'From triple-deckers near Crystal Lake to elevator buildings in Newton Centre, Phoenix Moving delivers licensed crews, packing, storage, and long-distance options—with a Newton office for local support.',
};

const newtonMovingInNewton = {
  title: 'Planning a move in Newton, Massachusetts',
  subtitle:
    'Thirteen villages, strong schools, and quick Red Line access to Boston—here is how we tailor moves to Newton’s mix of housing and building rules.',
  paragraphs: [
    'Newton is one of Greater Boston’s most desirable communities: tree-lined streets, excellent public schools, and a patchwork of villages—Newton Centre, Newtonville, West Newton, Newton Highlands, Auburndale, Chestnut Hill, and more—each with its own personality. Moves here are rarely “generic suburban.” You might be leaving a Victorian with a narrow side entrance, a condo near the Green Line with freight-elevator windows, or a colonial on a sloped lot in Newton Highlands. Phoenix Moving builds plans around your actual access, not a template developed for another town.',
    'Our <strong>Newton office at 174 Adams Street</strong> means local coordinators understand village streets, commuter-rail crossings, and peak traffic on Washington Street and Route 9. Travel time on hourly jobs is prorated from our warehouse and return routing—when crews start closer to your neighborhood, you avoid the inflated travel charges that out-of-area movers sometimes pass through on local estimates.',
    'Many Newton relocations connect to Boston employment, university schedules, or family moves along the Route 128 corridor. We coordinate <a href="/local-moving">local moves</a> within Newton, to neighboring Brookline or Wellesley, and <a href="/interstate-moving">long-distance deliveries</a> nationwide. Add <a href="/packing-services">professional packing</a> or <a href="/storage-solutions">storage</a> when closing dates do not align—one vendor keeps your timeline coherent.',
    'Building managers in Newton frequently require certificates of insurance, elevator reservations, and padded common areas. Share your property manager’s checklist when you <a href="/book">request a quote</a> so move day matches building rules and avoids fines or denied dock access. Our crews pad hallways, protect elevator cabs, and follow timed freight schedules where required.',
    'Whether you are a first-time renter near Newton Centre or downsizing from a larger home in Oak Hill, you receive the same transparent communication: confirmed arrival windows, crew lead contact, and billing based on the estimate you approved—no surprise fuel surcharges on local Newton jobs.',
  ],
  imageAlt: 'Phoenix Moving — Newton, MA local movers',
};

const newtonLocalGuide = {
  label: 'Newton moving guide',
  title: 'What to know before moving in Newton',
  subtitle:
    'Parking, villages, and timing—practical notes from crews who work in Newton every week.',
  paragraphs: [
    'Newton’s village structure matters for truck placement. In Newtonville and West Newton, crews often back down driveways or use street parking with temporary no-parking coordination. Newton Centre and Chestnut Hill buildings may require elevator reservations and loading-dock time slots—book these before you confirm your move date. Hills in Newton Highlands and Oak Hill can affect how we stage dollies and how many trips carry from garage to living level.',
    'College and academic calendars influence demand. Late August and early September see higher volume near Boston College and surrounding neighborhoods. Planning three to four weeks ahead secures preferred crews. Winter moves are common; crews use floor runners and door jamb protection when salt and slush increase slip risk at entries.',
    'If you are comparing movers, ask how travel time is calculated, whether COI preparation is included, and how overtime is handled after the estimate. Phoenix Moving publishes <a href="/pricing">rate guidance</a> and explains 15-minute billing increments for labor. Long-distance moves from Newton use flat-rate quotes that include mileage, tolls, and insurance—your coordinator walks through line items before you sign.',
    'Downsizing and estate moves are frequent in Newton’s established neighborhoods. We can combine partial packing, donation drop coordination, and storage for items that will not fit your next home yet. Senior moves benefit from labeled boxes by room and clear pathways—our coordinators send a prep checklist when you book.',
    'Commercial relocations along Washington Street, Needham Street, and office parks near the Massachusetts Turnpike require after-hours or weekend slots to limit downtime. We label workstations, protect IT equipment, and stage furniture by floor plan so your team reopens with minimal disruption. Share floor plans and COI requirements early for accurate crew sizing.',
    'Finally, remember that Newton shares borders with Brookline, Wellesley, Weston, and Boston. If your move crosses city lines, tell us both addresses upfront so travel and toll assumptions stay accurate. We serve all of Greater Boston from our Natick headquarters and Newton office—your estimate reflects the full route, not just the Newton leg.',
  ],
};

const newtonMoveTypes = [
  {
    title: 'Residential & family moves',
    description:
      'Whole-home relocations for single-family colonials, split-levels, and townhomes. Furniture disassembly, blanket wrapping, and room-by-room placement at your new Newton or Greater Boston address.',
  },
  {
    title: 'Apartments, condos & elevators',
    description:
      'COI paperwork, freight-elevator scheduling, and padded common areas for Newton Centre, Chestnut Hill, and along the Green Line. We follow building time windows and protect lobby floors.',
  },
  {
    title: 'College & rental turnovers',
    description:
      'Focused moves for students and young professionals near Boston College and village centers—ideal when you need fast turnaround between leases with less volume than a full-home job.',
  },
  {
    title: 'Office & commercial relocation',
    description:
      'Desks, files, and equipment with labeling systems and optional after-hours loading. Weekend slots available for offices along Route 9 and village commercial districts.',
  },
  {
    title: 'Packing, crating & storage',
    description:
      'Full-home packing, fragile-only packs, wardrobe cartons, and short-term storage between closings. Bundle with your Newton move for one timeline and one coordinator.',
  },
  {
    title: 'Senior & downsizing moves',
    description:
      'Patient-paced loading, partial packing, and coordination with family members. We handle donations and storage when you are rightsizing within Newton or moving to assisted living nearby.',
  },
];

const newtonNeighborhoods = [
  {
    name: 'Newton Centre',
    description:
      'Walkable village center with shops, restaurants, and Green Line access. Moves often involve elevators, tight turn radii on side streets, and premium condo buildings requiring COIs.',
  },
  {
    name: 'Newtonville & West Newton',
    description:
      'Mix of triple-deckers, single-families, and commuter-rail convenience. Street parking and driveway grades are common planning factors for our crews.',
  },
  {
    name: 'Newton Highlands & Oak Hill',
    description:
      'Hilly residential streets and larger lots. Extra stair padding and longer carries from garage to living areas are typical on move day.',
  },
  {
    name: 'Chestnut Hill & Auburndale',
    description:
      'Border villages with estate homes, apartments near Boston College, and Charles River proximity. We plan routes around Hammond Pond Parkway and local parkways.',
  },
  {
    name: 'ZIP codes 02458–02468',
    description:
      'Newton spans multiple ZIP codes; share your full address when booking so we assign the right crew familiarity and travel routing from our Adams Street office or Natick warehouse.',
  },
];

const newtonNearbyTowns: RelatedLink[] = [
  {
    href: '/brookline-movers',
    label: 'Brookline movers',
    description: 'Bordering Boston with walk-up and elevator buildings.',
  },
  {
    href: '/wellesley-movers',
    label: 'Wellesley movers',
    description: 'West along Route 9 for estate and suburban homes.',
  },
  {
    href: '/needham-movers',
    label: 'Needham movers',
    description: 'South of Newton along the Route 128 corridor.',
  },
  {
    href: '/waltham-movers',
    label: 'Waltham movers',
    description: 'Northwest commutes and Charles River communities.',
  },
  {
    href: '/natick-ma-movers',
    label: 'Natick movers (full guide)',
    description: 'Phoenix Moving headquarters and MetroWest hub.',
  },
  {
    href: '/boston-movers',
    label: 'Boston movers',
    description: 'Apartments, walk-ups, and downtown offices.',
  },
];

const newtonRelatedLinks: RelatedLink[] = [
  {
    href: '/local-moving',
    label: 'Local moving services',
    description: 'Hourly Greater Boston and Newton crews.',
  },
  {
    href: '/interstate-moving',
    label: 'Long-distance moving',
    description: 'Licensed interstate moves from Massachusetts.',
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
    href: '/piano-moving',
    label: 'Piano moving',
    description: 'Upright, baby grand, and specialty instrument handling.',
  },
  {
    href: '/pricing',
    label: 'Moving prices',
    description: 'Transparent rates for local and long-distance moves.',
  },
  {
    href: '/book',
    label: 'Book your Newton move',
    description: 'Free, no-obligation estimate online.',
  },
];

const newtonReviews = [
  {
    author: 'Rachel T.',
    location: 'Newton Centre',
    rating: 5,
    text: 'Elevator COI handled smoothly and crew finished ahead of schedule. Clear pricing matched the estimate—best Newton move we have had.',
  },
  {
    author: 'Mark D.',
    location: 'Newtonville',
    rating: 5,
    text: 'Tight driveway but they navigated it without damage. Professional wrapping on our antique dining set.',
  },
  {
    author: 'Elena V.',
    location: 'Newton Highlands',
    rating: 5,
    text: 'Hilly lot meant extra care on the stairs—they padded everything and communicated well with our building manager.',
  },
  {
    author: 'James L.',
    location: 'Chestnut Hill',
    rating: 5,
    text: 'Office relocation over a weekend—desks labeled and IT equipment treated carefully. Back online Monday morning.',
  },
];

const newtonPricingFactors = [
  {
    title: 'Inventory & home layout',
    description:
      'Studios and one-bedrooms typically require fewer hours than multi-level Victorians with basements and garages. Heavy items—pianos, safes, gym equipment—may need extra crew.',
  },
  {
    title: 'Labor & travel time',
    description:
      'Local Newton jobs bill in 15-minute increments for on-site work plus prorated travel from our warehouse or Newton office round trip.',
  },
  {
    title: 'Building & village access',
    description:
      'Elevators, long carries, stair flights, and COI requirements affect duration. Share details when you book for an estimate that reflects move-day reality.',
  },
  {
    title: 'Season & date',
    description:
      'Month-end Saturdays, summer lease turnover, and September academic peaks fill quickly. Earlier booking improves crew and truck availability.',
  },
  {
    title: 'Add-on services',
    description:
      'Packing, storage, and specialty handling are quoted separately. Bundling through one coordinator simplifies billing and scheduling.',
  },
];

const newtonCostOverview =
  'Newton local moves are typically hourly with transparent travel charges from our Adams Street office or Natick warehouse. Long-distance relocations use flat-rate quotes including fuel, mileage, tolls, and insurance. Request a free estimate with your addresses, home size, and date—we confirm crew and truck before you reserve.';

const newtonCommercialCopy = {
  label: 'Commercial moving',
  title: 'Office & commercial moves in Newton',
  subtitle:
    'Relocate Newton businesses with labeled workstations, protected equipment, and weekend options.',
  paragraphs: [
    'Newton’s commercial corridors along Washington Street, Needham Street, and village centers host professional services, medical offices, and light industrial tenants who cannot afford multi-day downtime. Phoenix Moving plans commercial relocations with floor-by-floor labeling, IT-sensitive handling, and optional after-hours or weekend loading so your team returns to productive space quickly.',
    'We coordinate COIs with landlords, reserve freight elevators in mixed-use buildings, and align truck staging with local parking rules. Share your target move-in date, headcount, and specialty items—server racks, lab equipment, or retail fixtures—so we size crews and materials correctly.',
  ],
  imageAlt: 'Commercial office moving in Newton, Massachusetts',
};

const newtonPrepTips = [
  'Reserve freight elevators and loading docks with your Newton building manager at least one week before move day.',
  'Label boxes by room and note fragile items on the sides—crews place cartons in matching rooms at destination.',
  'Measure large furniture and stairwell turns; tell your coordinator about items that may require disassembly.',
  'Obtain parking permits or no-parking signs if your village requires them for truck staging.',
  'Set aside documents, medications, and overnight essentials in a bag that travels with you—not on the truck.',
  'Confirm COI limits and additional insured wording with your property manager before we issue certificates.',
];

const newtonFaqs: Faq[] = [
  {
    question: 'How much do Newton movers cost?',
    answer: `<p>Local Newton moves are billed hourly in 15-minute increments for labor plus prorated travel. Studio and one-bedroom jobs often run a few hours; larger homes and multi-level Victorians take longer. <a href="/pricing">See moving prices</a> or <a href="/book">request a free quote</a> for your inventory and date.</p>`,
  },
  {
    question: 'Does Phoenix Moving have a Newton office?',
    answer:
      '<p>Yes. We maintain a Newton location at 174 Adams Street, MA 02458, in addition to our Natick headquarters. Local coordinators and crews support moves across all Newton villages from this office.</p>',
  },
  {
    question: 'Are your Newton movers licensed and insured?',
    answer: `<p>Yes. We are licensed with the Massachusetts Department of Public Utilities (MDPU #${SITE.businessLicenses.MDPU}), US DOT ${SITE.businessLicenses.DOT}, and carry cargo, motor vehicle, and general liability insurance. COIs are available for Newton buildings when required.</p>`,
  },
  {
    question: 'Do you handle Newton apartments and condo buildings?',
    answer:
      '<p>Yes. Share your building’s COI template, elevator reservation rules, and loading instructions when you book. Our crews pad common areas and follow freight-elevator time windows in Newton Centre, Chestnut Hill, and along the Green Line.</p>',
  },
  {
    question: 'Do you offer packing and storage for Newton moves?',
    answer:
      '<p>Yes. Add <a href="/packing-services">professional packing</a>, supplies, and <a href="/storage-solutions">storage</a> between closings or lease gaps. One coordinator can bundle services on your Newton timeline.</p>',
  },
  {
    question: 'How far in advance should I book movers in Newton?',
    answer:
      '<p>Book two to four weeks ahead for most local Newton moves. Late August, September, and month-end Saturdays fill quickly—earlier booking secures your preferred crew and truck size.</p>',
  },
  {
    question: 'Can you move me from Newton to another state?',
    answer:
      '<p>Yes. <a href="/interstate-moving">Long-distance moves</a> from Newton use flat-rate quotes with fuel, mileage, tolls, and insurance included. Your coordinator confirms delivery windows and inventory before pickup.</p>',
  },
  {
    question: 'What Newton villages do you serve?',
    answer:
      '<p>We serve all Newton villages including Newton Centre, Newtonville, West Newton, Newton Highlands, Auburndale, Chestnut Hill, Oak Hill, and surrounding ZIP codes. See neighborhood notes on this page or call for border addresses.</p>',
  },
  {
    question: 'What towns near Newton do you also cover?',
    answer:
      '<p>We regularly serve Brookline, Wellesley, Needham, Waltham, Weston, and all of Greater Boston. Explore linked city pages or our <a href="/local-moving">local moving</a> hub for service details.</p>',
  },
];

const newtonKeywords = [
  'Newton movers',
  'Newton MA moving company',
  'movers Newton Massachusetts',
  'local movers Newton',
  'best movers Newton MA',
  'affordable movers Newton',
  'licensed movers Newton',
  'residential movers Newton',
  'commercial movers Newton',
  'apartment movers Newton',
  'Newton Centre movers',
  'Newtonville movers',
  'Newton Highlands movers',
  'Chestnut Hill movers',
  '02458 movers',
  'Phoenix Moving Newton',
  'moving company Adams Street Newton',
].join(', ');

const newtonSeo = {
  title: 'Newton Movers | Licensed MA Moving Company — Phoenix Moving',
  description:
    'Newton movers with a local Adams Street office. Licensed local & long-distance moves, packing, storage. Free estimate—book your Newton, MA move today.',
  serviceName: 'Newton Moving Services',
  serviceDescription:
    'Licensed local and long-distance moving, packing, storage, and commercial relocation for Newton, MA—from our Newton office and Natick headquarters with transparent pricing.',
  howToName: 'How to book Newton movers with Phoenix Moving',
  howToDescription:
    'Four steps to plan and complete a Newton move with Phoenix Moving—from free quote to walkthrough and payment.',
};

/** Shuffled vs Dedham/Natick default — reviews & pricing appear earlier. */
const newtonSectionOrder: CityPremiumSectionId[] = [
  'whyChoose',
  'neighborhoods',
  'pricing',
  'movingInCity',
  'howTo',
  'reviews',
  'moveTypes',
  'midCta',
  'commercial',
  'localGuide',
  'prepTips',
  'services',
  'faq',
  'related',
];

export const newtonPremium: CityPremiumContent = {
  path: NEWTON_PATH,
  imageSlug: 'newton-movers',
  legacySlug: 'newton-movers',
  keywords: newtonKeywords,
  ogImageAlt: 'Newton, MA movers — Phoenix Moving',
  schema: {
    cityName: 'Newton',
    postalCode: '02458',
    geo: { latitude: 42.337, longitude: -71.2092 },
    areaServed: [
      { '@type': 'City', name: 'Newton' },
      { '@type': 'PostalCode', name: '02458' },
      { '@type': 'PostalCode', name: '02459' },
      { '@type': 'PostalCode', name: '02460' },
      { '@type': 'State', name: 'Massachusetts' },
    ],
  },
  seo: newtonSeo,
  breadcrumbLabel: 'Newton Movers',
  sectionOrder: newtonSectionOrder,
  hero: {
    title: 'Newton, MA Movers',
    subtitle:
      'Licensed Newton movers with a local office on Adams Street—residential, commercial, packing, and long-distance service across every Newton village.',
  },
  directAnswer: newtonDirectAnswer,
  intro: {
    label: 'Newton, MA',
    title: 'Your Newton moving company — local office',
    imageAlt: 'Newton, Massachusetts — Phoenix Moving',
    trustLead: 'Newton movers you can trust:',
    officeIndex: 1,
  },
  trustFeatures: newtonTrustFeatures,
  services: newtonServicesCopy,
  movingInCity: newtonMovingInNewton,
  moveTypes: {
    label: 'What we move',
    title: 'Newton move types we handle',
    subtitle:
      'Residential, commercial, student turnovers, and specialty services—scoped to your village and building rules.',
    items: newtonMoveTypes,
    quoteButtonLabel: 'Get a Newton moving quote',
    showPianoLink: true,
  },
  whyChoose: {
    label: 'Why Newton families choose us',
    title: 'Why choose Phoenix Moving in Newton?',
    subtitle:
      'A Newton office, village-aware crews, and transparent pricing for Greater Boston relocations.',
    features: newtonWhyChooseFeatures,
  },
  howTo: {
    label: 'Your Newton move',
    title: 'How a Newton move with Phoenix works',
    subtitle:
      'Four clear steps from estimate to walkthrough—coordinated from our Adams Street team.',
    steps: newtonHowToSteps,
  },
  neighborhoods: {
    label: 'Villages & ZIP codes',
    title: 'Newton neighborhoods we serve',
    subtitle:
      'From Newton Centre to Chestnut Hill—local knowledge of streets, hills, and building requirements.',
    areas: newtonNeighborhoods.map((area) => ({
      title: area.name,
      description: area.description,
    })),
    nearbyHeading: 'Nearby communities',
  },
  nearbyTowns: newtonNearbyTowns,
  midCta: {
    title: 'Moving in Newton this season?',
    description:
      'Free estimates · Licensed crews · Local office at 174 Adams Street, Newton',
  },
  pricing: {
    label: 'Moving costs',
    title: 'How much do Newton movers cost?',
    subtitle: newtonCostOverview,
    factors: newtonPricingFactors,
  },
  commercial: newtonCommercialCopy,
  localGuide: newtonLocalGuide,
  prepTips: {
    label: 'Move-day checklist',
    title: 'Prepare for your Newton move',
    subtitle:
      'Six steps that keep Newton building managers, crews, and your family aligned before the truck arrives.',
    tips: newtonPrepTips,
  },
  reviews: {
    label: 'Customer reviews',
    title: 'What Newton customers say',
    subtitle:
      '4.98★ average from 243+ verified reviews—Newton and MetroWest clients trust Phoenix Moving for careful, on-time crews.',
    items: newtonReviews,
  },
  faq: {
    title: 'Newton moving FAQ',
    label: 'Questions about Newton moves',
    groupName: 'newton-faq',
    items: newtonFaqs,
  },
  relatedLinks: newtonRelatedLinks,
  relatedTitle: 'Moving services for Newton residents',
  finalCta: {
    title: 'Book your Newton movers today.',
    description:
      'Free estimates · Licensed & insured · Local office at 174 Adams Street, Newton, MA',
  },
};

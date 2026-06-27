import type { Faq } from '@/blocks/faq/faqs';
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

export const NATICK_PATH = '/natick-movers';

const natickDirectAnswer =
  `${SITE.businessShortName} is a licensed Natick movers team headquartered at 18 Lakeview Gardens. We provide residential, commercial, packing, storage, and long-distance moves across Natick Center, West Natick, South Natick, and MetroWest—with transparent hourly pricing and free estimates.`;

const natickTrustFeatures = [
  `Licensed MDPU #${SITE.businessLicenses.MDPU}`,
  `US DOT ${SITE.businessLicenses.DOT}`,
  'Natick HQ · 18 Lakeview Gardens',
  'Fully insured crews',
  'Free moving estimates',
  '4.98★ average (243 reviews)',
];

const natickWhyChooseFeatures = [
  {
    name: 'MetroWest headquarters in Natick',
    description:
      `${SITE.businessShortName} is headquartered at 18 Lakeview Gardens—not a distant call center. Local Natick moves often see the lowest prorated travel charges in our service area because crews dispatch from your town, not from hours away.`,
    icon: TruckDeliveryIcon,
  },
  {
    name: 'Licensed & insured for MA buildings',
    description:
      `We hold MDPU license ${SITE.businessLicenses.MDPU}, US DOT ${SITE.businessLicenses.DOT}, and cargo, motor vehicle, and general liability coverage. Certificates of insurance are available for Natick condo associations, office landlords, and Route 9 commercial buildings.`,
    icon: LicenseIcon,
  },
  {
    name: 'Neighborhood-by-neighborhood planning',
    description:
      'Natick Center commuter-rail condos, Route 9 corridor townhomes, and South Natick colonials each have different access rules. Our coordinators plan elevator windows, driveway grades, and parking before load day.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Transparent hourly & flat-rate options',
    description:
      'Local Natick moves bill in 15-minute increments for labor plus prorated travel. Interstate and long-distance quotes use flat rates with fuel and tolls included—review our pricing page before you book.',
    icon: Receipt2Icon,
  },
  {
    name: 'Flexible scheduling year-round',
    description:
      'Book weekdays, weekends, or month-end. We align crew size and truck type with lease turnovers along Route 9, Speen Street offices, and Natick Center apartments.',
    icon: CalendarTimeIcon,
  },
  {
    name: 'Packing, storage & specialty handling',
    description:
      'Add professional packing, short-term storage between closings, or piano and antique handling through one coordinator—ideal when your Natick timeline includes gap periods or multi-stop deliveries.',
    icon: TruckDeliveryIcon,
  },
];

const natickHowToSteps: MovingStep[] = [
  {
    stepNumber: '01',
    title: 'Tell us about your Natick move',
    description:
      'Share origin and destination addresses, home size, and your target date online or by phone. We note building access—elevator banks, driveway width, and whether a COI is required for your Natick address.',
  },
  {
    stepNumber: '02',
    title: 'Receive a written estimate & book',
    description:
      'Your coordinator confirms crew size, truck type, and travel assumptions from our Lakeview Gardens warehouse. Reserve with a $100 local deposit and receive prep guidance tailored to Natick condos and colonials.',
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

const natickServicesCopy = {
  label: 'Natick moving services',
  title: 'Movers in Natick, MA for homes, apartments & offices',
  subtitle:
    `From Natick Center walk-ups near the Commuter Rail to Route 9 office parks and South Natick colonials, ${SITE.businessShortName} delivers licensed crews, packing, storage, and long-distance options—from our Natick headquarters.`,
};

const natickMovingInNatick = {
  title: 'Planning a move in Natick, Massachusetts',
  subtitle:
    'MetroWest hub, Route 9 corridor access, and a mix of downtown condos and suburban streets—here is how we tailor Natick moves to your building and timeline.',
  paragraphs: [
    `Natick is home to roughly 37,500 residents, according to the <a href="https://www.census.gov/quickfacts/fact/table/naticktownmassachusetts" rel="noopener noreferrer" aria-label="U.S. Census Bureau">U.S. Census Bureau</a> (2024 population estimate)—a MetroWest town that blends a walkable downtown, major retail and office corridors along Route 9, and quiet residential pockets in South Natick and near the Charles River. Moves here range from elevator condos steps from the Natick Center MBTA station to split-level homes on wooded streets where crews plan longer carries from driveway to living level. ${SITE.businessShortName} builds plans around your actual access, not a template developed for another town.`,
    `Our <strong>headquarters at 18 Lakeview Gardens</strong> means Natick local jobs start with minimal travel time—crews know Speen Street traffic patterns, Route 9 loading zones, and South Natick bridge crossings before they arrive. Hourly billing uses 15-minute labor increments plus prorated travel from our warehouse and return routing. When your move stays within Natick or neighboring Framingham, Needham, or Wellesley, you avoid the inflated travel charges that out-of-area movers sometimes pass through on local estimates.`,
    'Many Natick relocations connect to Boston employment, biotech and office parks along Route 128, or family moves across MetroWest. We coordinate <a href="/local-moving">local moves</a> within Natick, to Newton or Boston, and <a href="/interstate-moving">long-distance deliveries</a> nationwide. Add <a href="/packing-services">professional packing</a> or <a href="/storage-solutions">storage</a> when closing dates do not align—one vendor at our Natick HQ keeps your timeline coherent.',
    'Building managers along Route 9 and in Natick Center mixed-use properties frequently require certificates of insurance, elevator reservations, and padded common areas. Share your property manager\'s checklist when you <a href="/book">request a quote</a> so move day matches building rules and avoids fines or denied dock access. Our crews pad hallways, protect elevator cabs, and follow timed freight schedules where required.',
    'Whether you are leasing your first apartment near downtown Natick or downsizing from a larger colonial in South Natick, you receive the same transparent communication: confirmed arrival windows, crew lead contact, and billing based on the estimate you approved—no surprise fuel surcharges on local Natick jobs.',
  ],
  imageAlt: `${SITE.businessShortName} — Natick, MA local movers`,
};

const natickLocalGuide = {
  label: 'Natick moving guide',
  title: 'What to know before moving in Natick',
  subtitle:
    'Route 9 timing, commuter-rail access, and building rules—practical notes from crews who work in Natick every week.',
  paragraphs: [
    'Natick\'s geography splits into distinct moving profiles. Natick Center moves often involve limited street parking, freight elevators, and tight turnaround space near the Commuter Rail—reserve elevator windows and share COI requirements early. West Natick and the Route 9 corridor add highway-adjacent office parks and apartment complexes where loading docks and after-hours access matter. South Natick\'s older homes may have narrow stairwells, low door headers, and longer carries from detached garages.',
    'Traffic peaks on Route 9, Speen Street, and connectors to the Massachusetts Turnpike can affect arrival windows. We schedule crews with buffer time for morning and evening rush when your move crosses those corridors. Winter moves are common in MetroWest; crews use floor runners and door jamb protection when salt and slush increase slip risk at entries.',
    `If you are comparing movers Natick renters and homeowners hire, ask how travel time is calculated from the warehouse, whether COI preparation is included, and how overtime is handled after the estimate. ${SITE.businessShortName} publishes <a href="/pricing" aria-label="See moving prices">rate guidance</a> and explains 15-minute billing increments for labor. Long-distance moves from Natick use flat-rate quotes that include mileage, tolls, and insurance—your coordinator walks through line items before you sign.`,
    'About 72% of Natick housing units are owner-occupied (<a href="https://www.census.gov/quickfacts/fact/table/naticktownmassachusetts" rel="noopener noreferrer" aria-label="U.S. Census Bureau">U.S. Census Bureau, 2020-2024</a>), so downsizing and estate moves are frequent in established neighborhoods. We can combine partial packing, donation drop coordination, and storage for items that will not fit your next home yet. Senior moves benefit from labeled boxes by room and clear pathways—our coordinators send a prep checklist when you book.',
    'Commercial relocations along Speen Street, Route 9 professional buildings, and light industrial sites near the Pike require after-hours or weekend slots to limit downtime. We label workstations, protect IT equipment, and stage furniture by floor plan so your team reopens with minimal disruption. Share floor plans and COI requirements early for accurate crew sizing.',
    'Finally, Natick borders Framingham, Wellesley, Wayland, Sherborn, Dover, and Needham. If your move crosses town lines, tell us both addresses upfront so travel assumptions stay accurate. We dispatch MetroWest and Greater Boston crews from Lakeview Gardens—your estimate reflects the full route, not just the Natick leg.',
  ],
};

const natickMoveTypes = [
  {
    title: 'Residential & family moves',
    description:
      'Whole-home relocations for colonials, split-levels, and townhomes in South Natick and suburban streets. Furniture disassembly, blanket wrapping, and room-by-room placement at your new Natick or MetroWest address.',
  },
  {
    title: 'Apartments, condos & elevators',
    description:
      'COI paperwork, freight-elevator scheduling, and padded common areas for Natick Center and Route 9 corridor buildings. We follow building time windows and protect lobby floors.',
  },
  {
    title: 'Commercial & office relocation',
    description:
      'Desks, files, and equipment with labeling systems and optional after-hours loading. Weekend slots available for offices along Speen Street and Route 9 business parks.',
  },
  {
    title: 'Small moves & single items',
    description:
      'Focused help for partial loads—one bedroom, furniture only, or load/unload assistance when you do not need a full truck crew all day.',
  },
  {
    title: 'Packing, crating & storage',
    description:
      'Full-home packing, fragile-only packs, wardrobe cartons, and short-term storage between closings. Bundle with your Natick move for one timeline and one coordinator.',
  },
  {
    title: 'Senior & downsizing moves',
    description:
      'Patient-paced loading, partial packing, and coordination with family members. We handle donations and storage when you are rightsizing within Natick or moving to assisted living nearby.',
  },
];

const natickNeighborhoods = [
  {
    name: 'Natick Center',
    description:
      'Walkable downtown moves near the MBTA Commuter Rail, shops, and mixed-use buildings—often with elevator COIs, limited street parking, and tight truck staging.',
  },
  {
    name: 'West Natick & Route 9',
    description:
      'Corridor apartments, townhomes, and office parks with highway access. Loading docks, freight elevators, and peak-hour traffic planning are common on move day.',
  },
  {
    name: 'South Natick',
    description:
      'Residential streets, larger lots, and historic homes near the Charles River. Extra stair padding and longer carries from garage to living areas are typical.',
  },
  {
    name: 'East Natick & Wellesley border',
    description:
      'Suburban neighborhoods with split-levels and ranches where driveway width and tree coverage affect truck placement and carry distance.',
  },
  {
    name: 'ZIP 01760',
    description:
      'Primary Natick addresses in 01760 are in our home service zone with same-week availability when schedules allow—crews dispatch from 18 Lakeview Gardens.',
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
    label: 'Newton movers (full guide)',
    description: `${SITE.businessShortName} office at 174 Adams Street—full-service crews.`,
  },
  {
    href: '/boston-movers',
    label: 'Boston movers (full guide)',
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
    label: 'Book your Natick move',
    description: 'Free, no-obligation estimate online.',
  },
];

const natickPricingFactors = [
  {
    title: 'Inventory & home layout',
    description:
      'Studios and one-bedrooms typically require fewer hours than multi-level colonials with basements and garages. Heavy items—pianos, safes, gym equipment—may need extra crew.',
  },
  {
    title: 'Labor & travel time',
    description:
      'Local Natick jobs bill in 15-minute increments. Weekday hourly rates start at $130 (2 movers + truck), $180 (3 movers + truck), and $220 (4 movers + truck), plus prorated travel from our Lakeview Gardens warehouse.',
  },
  {
    title: 'Building & neighborhood access',
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

const natickCostOverview =
  'Natick local moves bill hourly in 15-minute increments plus prorated travel from our Lakeview Gardens headquarters. Standard weekday rates start at $130/hour (2 movers + truck), $180/hour (3 movers + truck), and $220/hour (4 movers + truck), taxes included. A typical Natick studio or one-bedroom local move runs about 3–5 labor hours ($390–$650 at the 2-mover rate), while larger colonials and multi-level homes often need 5–8 hours with a 3- or 4-person crew ($900–$1,760+). Because crews dispatch from Natick, travel charges on in-town jobs are often lower than moves booked from distant warehouses. Weekend and peak dates may use higher tiers—see our pricing page for current rates. Long-distance relocations from Natick use flat-rate quotes including fuel, mileage, tolls, and insurance.';

const natickCommercialCopy = {
  label: 'Commercial moving',
  title: 'Office & commercial moves in Natick',
  subtitle:
    'Relocate Natick businesses with labeled workstations, protected equipment, and weekend options.',
  paragraphs: [
    `Natick's Speen Street corridor, Route 9 professional buildings, and light industrial sites near the Massachusetts Turnpike host medical practices, tech firms, and retail back-office teams who cannot afford multi-day downtime. ${SITE.businessShortName} plans commercial relocations from our Lakeview Gardens headquarters with floor-by-floor labeling, IT-sensitive handling, and optional after-hours or weekend loading so your team returns to productive space quickly.`,
    'We coordinate COIs with landlords, reserve freight elevators in mixed-use buildings, and align truck staging with Route 9 and downtown parking rules. Share your target move-in date, headcount, and specialty items—server racks, lab equipment, or retail fixtures—so we size crews and materials correctly.',
  ],
  imageAlt: 'Commercial office moving in Natick, Massachusetts',
};

const natickPrepTips = [
  'Reserve freight elevators and loading docks with your Natick building manager at least one week before move day.',
  'Label boxes by room and note fragile items on the sides—crews place cartons in matching rooms at destination.',
  'Measure large furniture and stairwell turns; tell your coordinator about items that may require disassembly.',
  'Plan truck staging for Route 9 or Natick Center properties—share loading dock hours and any permit requirements.',
  'Set aside documents, medications, and overnight essentials in a bag that travels with you—not on the truck.',
  'Confirm COI limits and additional insured wording with your property manager before we issue certificates.',
];

const natickFaqs: Faq[] = [
  {
    question: 'How much do Natick movers cost?',
    answer: `<p>Local Natick moves are billed hourly in 15-minute increments plus prorated travel. Standard weekday rates start at <strong>$130/hour</strong> (2 movers + truck), <strong>$180/hour</strong> (3 movers + truck), and <strong>$220/hour</strong> (4 movers + truck), taxes included. A studio or one-bedroom move typically runs 3–5 labor hours ($390–$650 at the 2-mover rate); larger Natick homes often need 5–8 hours with a 3- or 4-person crew ($900–$1,760+). Because our warehouse is in Natick, in-town jobs often see lower travel charges than moves from out-of-area companies. Weekend and peak dates may use higher hourly tiers. Long-distance moves from Natick use flat-rate quotes with fuel, tolls, and insurance included. <a href="/pricing" aria-label="See moving prices">See moving prices</a> or <a href="/book" aria-label="Request a free quote">request a free quote</a> for your inventory and date.</p>`,
  },
  {
    question: 'Who are the best movers in Natick, MA?',
    answer: `<p>The best movers in Natick, MA combine a local headquarters, licensed crews, and neighborhood-specific planning—not generic suburban templates. ${SITE.businessShortName} is headquartered at 18 Lakeview Gardens, holds MDPU #${SITE.businessLicenses.MDPU} and US DOT ${SITE.businessLicenses.DOT}, and plans for Natick Center elevators, Route 9 loading docks, and South Natick stairways before load day. Compare our <a href="/pricing" aria-label="See moving prices">moving prices</a>, read neighborhood notes on this page, or <a href="/book" aria-label="Book your move">book a free estimate</a>.</p>`,
  },
  {
    question: 'Do you provide movers in Natick, MA for local moves?',
    answer: `<p>Yes. Our movers in Natick, MA handle local relocations within the town and to nearby Framingham, Wellesley, Needham, Newton, and Greater Boston. Hourly crews bill in 15-minute increments with prorated travel from our Lakeview Gardens warehouse. Share both addresses when you <a href="/book" aria-label="Request a quote">request a quote</a> so your estimate reflects the full route.</p>`,
  },
  {
    question: `Does ${SITE.businessShortName} have a Natick office?`,
    answer:
      '<p>Yes. Our headquarters and primary warehouse are at 18 Lakeview Gardens, Natick, MA 01760. We also maintain a Newton office at 174 Adams Street for Greater Boston moves. Natick coordinators and crews support relocations across MetroWest from our Lakeview Gardens location.</p>',
  },
  {
    question: 'Are your Natick movers licensed and insured?',
    answer: `<p>Yes. We are licensed with the Massachusetts Department of Public Utilities (MDPU #${SITE.businessLicenses.MDPU}), US DOT ${SITE.businessLicenses.DOT}, and carry cargo, motor vehicle, and general liability insurance. COIs are available for Natick buildings when required.</p>`,
  },
  {
    question: 'Do you handle Natick apartments and condo buildings?',
    answer:
      '<p>Yes. Share your building\'s COI template, elevator reservation rules, and loading instructions when you book. Our crews pad common areas and follow freight-elevator time windows in Natick Center and along the Route 9 corridor.</p>',
  },
  {
    question: 'Do you offer packing and storage for Natick moves?',
    answer:
      '<p>Yes. Add <a href="/packing-services" aria-label="Professional packing">professional packing</a>, supplies, and <a href="/storage-solutions" aria-label="Storage">storage</a> between closings or lease gaps. One coordinator can bundle services on your Natick timeline.</p>',
  },
  {
    question: 'How far in advance should I book movers in Natick?',
    answer:
      '<p>Book two to four weeks ahead for most local Natick moves. Month-end Saturdays, summer weekends, and September lease turnover fill quickly—earlier booking secures your preferred crew and truck size.</p>',
  },
  {
    question: 'Can you move me from Natick to another state?',
    answer:
      '<p>Yes. <a href="/interstate-moving" aria-label="Long-distance moves">Long-distance moves</a> from Natick use flat-rate quotes with fuel, mileage, tolls, and insurance included. Your coordinator confirms delivery windows and inventory before pickup.</p>',
  },
  {
    question: 'What Natick neighborhoods do you serve?',
    answer:
      '<p>We serve Natick Center, West Natick, South Natick, East Natick, and all addresses in ZIP 01760. See neighborhood notes on this page or call for border addresses near Wellesley, Framingham, or Dover.</p>',
  },
  {
    question: 'How is travel time calculated for Natick local moves?',
    answer:
      '<p>Travel is prorated in 15-minute increments from our Lakeview Gardens warehouse to your Natick origin, and from your destination back to Natick after unload. Time between origin and destination counts as labor, not travel. Because our HQ is in Natick, many in-town jobs see minimal travel charges compared with movers dispatched from distant warehouses.</p>',
  },
  {
    question: 'What towns near Natick do you also cover?',
    answer:
      '<p>We regularly serve Framingham, Wellesley, Needham, Wayland, Newton, Boston, and all of Greater Boston. Explore linked city pages or our <a href="/local-moving" aria-label="Local moving services">local moving</a> hub for service details.</p>',
  },
];

const natickKeywords = [
  'Natick movers',
  'movers Natick',
  'movers in Natick MA',
  'movers Natick MA',
  'Natick MA moving company',
  'movers Natick Massachusetts',
  'local movers Natick',
  'licensed movers Natick',
  'best movers Natick MA',
  'professional movers Natick',
  'residential movers Natick',
  'commercial movers Natick',
  'apartment movers Natick',
  'packing services Natick',
  'moving and storage Natick',
  'MetroWest movers',
  'Natick Center movers',
  'West Natick movers',
  'South Natick movers',
  'Route 9 movers Natick',
  '01760 movers',
  `${SITE.businessShortName} Natick`,
  'moving company Lakeview Gardens Natick',
  'Natick headquarters movers',
].join(', ');

const natickSeo = {
  title: `Natick Movers | ${SITE.businessName} (Free Estimate)`,
  description:
    'Natick movers headquartered at 18 Lakeview Gardens. Licensed local & long-distance moves, packing, storage. Free estimate—book your Natick, MA move today.',
  serviceName: 'Natick Moving Services',
  serviceDescription:
    'Licensed local and long-distance moving, packing, storage, and commercial relocation for Natick, MA and MetroWest—headquartered at 18 Lakeview Gardens with transparent pricing and minimal travel on local jobs.',
  howToName: `How to book Natick movers with ${SITE.businessShortName}`,
  howToDescription:
    `Four steps to plan and complete a Natick move with ${SITE.businessShortName}—from free quote to walkthrough and payment.`,
};

/** Unique order vs Newton/Boston/Dedham — leads with move types & local guide, services block late. */
const natickSectionOrder: CityPremiumSectionId[] = [
  'moveTypes',
  'movingInCity',
  'localGuide',
  'whyChoose',
  'pricing',
  'reviews',
  'howTo',
  'neighborhoods',
  'commercial',
  'midCta',
  'services',
  'prepTips',
  'movingChecklist',
  'faq',
  'related',
];

export const natickPremium: CityPremiumContent = {
  path: NATICK_PATH,
  imageSlug: 'natick-movers',
  legacySlug: 'natick-movers',
  keywords: natickKeywords,
  ogImageAlt: `Natick, MA movers — ${SITE.businessShortName}`,
  schema: {
    cityName: 'Natick',
    postalCode: '01760',
    officeIndex: 0,
    geo: { latitude: 42.2728, longitude: -71.3692 },
    areaServed: [
      { '@type': 'City', name: 'Natick' },
      '01760',
      { '@type': 'State', name: 'Massachusetts' },
    ],
  },
  seo: natickSeo,
  breadcrumbLabel: 'Natick Movers',
  sectionOrder: natickSectionOrder,
  hero: {
    title: 'Natick Movers',
    subtitle:
      'Licensed movers in Natick, MA with our MetroWest headquarters at 18 Lakeview Gardens—residential, commercial, packing, and long-distance service across every neighborhood.',
  },
  directAnswer: natickDirectAnswer,
  intro: {
    label: 'Natick, MA',
    title: 'Movers in Natick, MA — Lakeview Gardens headquarters',
    imageAlt: `Natick, Massachusetts — ${SITE.businessShortName} headquarters`,
    trustLead: 'Natick movers you can trust:',
    officeIndex: 0,
  },
  trustFeatures: natickTrustFeatures,
  services: natickServicesCopy,
  movingInCity: natickMovingInNatick,
  moveTypes: {
    label: 'What we move',
    title: 'Natick move types we handle',
    subtitle:
      'Residential, commercial, downsizing, and specialty services—scoped to your Natick neighborhood and building rules.',
    items: natickMoveTypes,
    quoteButtonLabel: 'Get a Natick moving quote',
    showPianoLink: true,
  },
  whyChoose: {
    label: 'Why Natick homeowners choose us',
    title: `Why choose ${SITE.businessShortName} in Natick?`,
    subtitle:
      'A Natick headquarters, neighborhood-aware crews, and transparent pricing for MetroWest relocations.',
    features: natickWhyChooseFeatures,
  },
  howTo: {
    label: 'Your Natick move',
    title: `How a Natick move with ${SITE.businessShortName} works`,
    subtitle:
      'Four clear steps from estimate to walkthrough—coordinated from our Lakeview Gardens team.',
    steps: natickHowToSteps,
  },
  neighborhoods: {
    label: 'Neighborhoods & ZIP codes',
    title: 'Natick neighborhoods we serve',
    subtitle:
      'From Natick Center to South Natick—local knowledge of Route 9, commuter rail, and building requirements.',
    areas: natickNeighborhoods.map((area) => ({
      title: area.name,
      description: area.description,
    })),
    nearbyHeading: 'Nearby MetroWest communities',
  },
  nearbyTowns: natickNearbyTowns,
  midCta: {
    title: 'Planning a Natick move this month?',
    description:
      'Free estimates · Licensed crews · Headquarters at 18 Lakeview Gardens, Natick',
  },
  pricing: {
    label: 'Moving costs',
    title: 'How much do Natick movers cost?',
    subtitle: natickCostOverview,
    factors: natickPricingFactors,
  },
  commercial: natickCommercialCopy,
  localGuide: natickLocalGuide,
  prepTips: {
    label: 'Move-day checklist',
    title: 'Prepare for your Natick move',
    subtitle:
      'Six steps that keep Natick building managers, crews, and your family aligned before the truck arrives.',
    tips: natickPrepTips,
  },
  movingChecklist: true,
  reviews: true,
  faq: {
    title: 'Natick movers FAQ',
    label: 'Questions about Natick moves',
    groupName: 'natick-faq',
    items: natickFaqs,
  },
  relatedLinks: natickRelatedLinks,
  relatedTitle: 'Moving services for Natick residents',
  finalCta: {
    title: 'Book your Natick movers today.',
    description:
      'Free estimates · Licensed & insured · Headquarters at 18 Lakeview Gardens, Natick, MA',
  },
};

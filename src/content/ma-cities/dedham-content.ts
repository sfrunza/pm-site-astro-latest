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

export const DEDHAM_PATH = '/dedham-movers';

const dedhamDirectAnswer =
  `${SITE.businessShortName} is a licensed Dedham movers team serving Norfolk County from our Natick headquarters at 18 Lakeview Gardens. We provide residential, commercial, packing, storage, and long-distance moves across Dedham Square, Oakdale, East Dedham, and the Route 1 corridor—with transparent hourly pricing and free estimates.`;

const dedhamTrustFeatures = [
  `Licensed MDPU #${SITE.businessLicenses.MDPU}`,
  `US DOT ${SITE.businessLicenses.DOT}`,
  'Natick HQ · 18 Lakeview Gardens',
  'Fully insured crews',
  'Free moving estimates',
  '4.98★ average (243 reviews)',
];

const dedhamWhyChooseFeatures = [
  {
    name: 'Norfolk County & Route 1 corridor crews',
    description:
      'Dedham moves mix historic downtown walk-ups, Oakdale colonials, and office parks along Route 1. Our teams plan for Dedham Square parking, I-95 access, and Dedham Corporate Center loading rules—not generic suburban assumptions.',
    icon: TruckDeliveryIcon,
  },
  {
    name: 'Licensed & insured for MA buildings',
    description:
      `${SITE.businessShortName} holds MDPU license ${SITE.businessLicenses.MDPU}, US DOT ${SITE.businessLicenses.DOT}, and cargo, motor vehicle, and general liability coverage. COIs meet requirements for Dedham condo boards, commercial landlords, and mixed-use buildings.`,
    icon: LicenseIcon,
  },
  {
    name: 'Fair travel from our Natick warehouse',
    description:
      'Crews dispatch from 18 Lakeview Gardens—about 15 minutes to most Dedham neighborhoods via I-95 or Route 1. Prorated travel on hourly jobs stays predictable compared with movers routed from downtown Boston or distant warehouses.',
    icon: Receipt2Icon,
  },
  {
    name: 'Building-ready condo & office moves',
    description:
      'We prepare certificates of insurance, reserve freight elevators, and pad common areas for East Dedham apartments and Route 1 office suites. Share your property manager checklist when you book.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Weekend & month-end availability',
    description:
      'Lease turnovers along the Providence Highway corridor and Dedham Center fill fast. Book two to four weeks ahead for Saturdays; we confirm crew size and truck type before you reserve.',
    icon: CalendarTimeIcon,
  },
  {
    name: 'Packing, storage & estate support',
    description:
      'Bundle professional packing, wardrobe cartons, short-term storage between closings, or senior downsizing help through one coordinator—common when Dedham families rightsizing from larger colonials.',
    icon: TruckDeliveryIcon,
  },
];

const dedhamHowToSteps: MovingStep[] = [
  {
    stepNumber: '01',
    title: 'Share your Dedham addresses & inventory',
    description:
      'Tell us origin and destination, home size, and target date online or by phone. We flag building rules—COI templates, elevator windows, Route 1 dock hours, and whether Dedham Square parking needs coordination.',
  },
  {
    stepNumber: '02',
    title: 'Approve your estimate & lock the date',
    description:
      'Your coordinator confirms crew count, truck size, and travel assumptions from Natick. Reserve with a $100 local deposit and receive a prep sheet matched to colonials, townhomes, or office suites.',
  },
  {
    stepNumber: '03',
    title: 'Load day with hall & floor protection',
    description:
      'Uniformed crews arrive with blankets, dollies, and runners. We load, drive, and unload—setting furniture in labeled rooms and reassembling beds, desks, and conference tables as quoted.',
  },
  {
    stepNumber: '04',
    title: 'Sign off & settle the balance',
    description:
      'Walk through finished rooms, note any concerns on the bill of lading, and pay by cash, card, or certified check per your estimate. Local Dedham balances are due when the job is complete.',
  },
];

const dedhamServicesCopy = {
  label: 'Dedham relocation services',
  title: 'Licensed movers for Dedham homes, apartments & offices',
  subtitle:
    `Whether you are leaving a colonial in Oakdale, a condo near Dedham Center, or an office along Route 1, ${SITE.businessShortName} coordinates local crews, packing, storage, and interstate delivery from our Natick headquarters.`,
};

const dedhamMovingInDedham = {
  title: 'Relocating in Dedham, Massachusetts',
  subtitle:
    'A historic town center, leafy suburbs, and a busy Route 1 business strip—here is how we match crews and trucks to Dedham\'s mix of housing and commercial access.',
  paragraphs: [
    `Dedham is home to roughly 25,400 residents, according to the <a href="https://www.census.gov/quickfacts/fact/table/dedhamtownmassachusetts" rel="noopener noreferrer" aria-label="U.S. Census Bureau">U.S. Census Bureau</a> (2024 population estimate)—one of Norfolk County\'s oldest communities, where a compact downtown meets suburban neighborhoods like Oakdale, Riverdale, and Greenlodge. Moves here might mean a walk-up near Dedham Square, a split-level on a wooded street, or a corporate suite off Providence Highway. ${SITE.businessShortName} scopes each job to your building, parking, and inventory—not a copy-paste plan from another town.`,
    'Coordinators at our <strong>Natick headquarters on 18 Lakeview Gardens</strong> route crews to Dedham daily via I-95, Route 1, or Route 109 depending on origin and traffic. Hourly jobs bill in 15-minute labor increments plus prorated warehouse travel—typically a modest charge compared with Boston-dispatch movers who add long downtown travel to Norfolk County estimates.',
    'Dedham sits between Boston employment and South Shore suburbs, so many jobs pair <a href="/local-moving">local loading</a> with <a href="/interstate-moving">interstate delivery</a>, <a href="/packing-services">professional packing</a>, or <a href="/storage-solutions">storage</a> when closing dates slip. One coordinator keeps pickup, hold, and delivery on one timeline—especially helpful when you are selling an Oakdale colonial and buying closer to the commuter rail.',
    'Property managers in East Dedham and along Route 1 often require COIs, freight-elevator reservations, and padded lobby floors. Send your checklist when you <a href="/book">request a quote</a> so move day aligns with building rules—avoiding fines, denied dock access, or overtime from waiting on elevators.',
    'From first-time renters near Legacy Place to families downsizing from larger homes by the Charles River, you get the same upfront communication: confirmed arrival windows, a crew lead phone number, and billing tied to the estimate you approved—no surprise fuel surcharges on local Dedham work.',
  ],
  imageAlt: `${SITE.businessShortName} — Dedham, MA moving crew`,
};

const dedhamLocalGuide = {
  label: 'Dedham move planning',
  title: 'Local tips before your Dedham move day',
  subtitle:
    'Parking, Route 1 timing, and building logistics—notes from crews who work in Norfolk County every week.',
  paragraphs: [
    'Dedham Square and downtown moves often need early parking coordination—narrow streets, shopfront loading zones, and mixed-use buildings with limited staging space. Confirm whether your landlord requires temporary no-parking signs or if the truck can use a side street while the crew shuttles via dolly. East Dedham and commuter-rail-adjacent condos more often need elevator bookings and COI paperwork than Oakdale single-family driveways.',
    'Route 1 and Providence Highway carry heavy commercial traffic; morning and evening peaks can shift arrival windows when your move crosses those corridors. We build buffer into schedules when pickup or delivery sits near Dedham Corporate Center, legacy mill conversions, or retail back-office space with strict dock hours.',
    `When comparing Dedham moving quotes, ask how travel is calculated from the warehouse, whether COI preparation is included, and how billing handles overtime. ${SITE.businessShortName} publishes <a href="/pricing" aria-label="See moving prices">hourly rate guidance</a> with 15-minute labor increments. Interstate moves from Dedham use flat-rate quotes covering mileage, tolls, and insurance—line items are reviewed before you sign.`,
    'Roughly 76% of Dedham housing units are owner-occupied (<a href="https://www.census.gov/quickfacts/fact/table/dedhamtownmassachusetts" rel="noopener noreferrer" aria-label="U.S. Census Bureau">U.S. Census Bureau, 2020-2024</a>), so estate cleanouts and downsizing moves are common. We can combine partial packing, donation runs, and storage for items staying in the household transition. Senior moves work best with room-labeled boxes and cleared pathways—your coordinator sends a checklist after booking.',
    'Office relocations along Route 1, Washington Street, and Dedham Corporate Center benefit from after-hours loading. We tag workstations, wrap monitors, and stage desks by floor plan so staff reopen with less downtime. Share COI requirements and loading-dock rules at least two weeks ahead for accurate crew sizing.',
    'Dedham borders Westwood, Norwood, Needham, Canton, and Milton. Cross-town moves need both addresses at quote time so travel and toll assumptions stay accurate. We also serve all of Greater Boston from Natick—your estimate reflects the full route, not just the Dedham segment.',
  ],
};

const dedhamMoveTypes = [
  {
    title: 'Whole-home & colonial moves',
    description:
      'Full-house relocations from Oakdale, Riverdale, and Greenlodge colonials—disassembly, blanket wrap, and room-by-room placement. Basements, garages, and patio sets included when quoted.',
  },
  {
    title: 'Dedham Square & downtown apartments',
    description:
      'Walk-ups and mixed-use units near the historic center—crews plan tight stairwells, short parking windows, and lobby protection for older brick buildings.',
  },
  {
    title: 'Route 1 & office park relocations',
    description:
      'Commercial suites, medical offices, and retail back-office moves with labeled workstations, IT-sensitive handling, and optional weekend loading to cut downtime.',
  },
  {
    title: 'Condos & elevator buildings',
    description:
      'East Dedham and corridor apartments needing COIs, freight-elevator slots, and padded common areas—we follow building time windows and protect hall floors.',
  },
  {
    title: 'Partial loads & furniture-only',
    description:
      'Single-bedroom, appliance, or load/unload-only help when a full truck crew all day is more than you need—popular for in-town Dedham shuffles.',
  },
  {
    title: 'Estate, senior & downsizing moves',
    description:
      'Slower-paced packing, donation coordination, and storage for families rightsizing from larger Norfolk County homes or handling estate timelines.',
  },
];

const dedhamNeighborhoods = [
  {
    name: 'Dedham Square',
    description:
      'Historic downtown with shops, restaurants, and mixed-use buildings—limited street parking, walk-up stairs, and occasional loading-zone permits.',
  },
  {
    name: 'Oakdale & Riverdale',
    description:
      'Tree-lined streets of colonials and split-levels where driveway grades, basement exits, and long garage carries shape crew planning.',
  },
  {
    name: 'East Dedham',
    description:
      'Closer to Milton and Boston with townhomes, condos, and commuter-rail access—elevator COIs and tighter truck turns are common.',
  },
  {
    name: 'Route 1 / Providence Highway',
    description:
      'Office parks, retail, and apartment complexes along the commercial corridor—dock reservations and peak-traffic timing matter on load day.',
  },
  {
    name: 'ZIP 02026 & 02027',
    description:
      'Primary Dedham addresses in 02026 are in our Norfolk County zone; some 02027 border properties near Westwood or Canton may qualify—confirm when you book.',
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
    href: '/natick-movers',
    label: 'Natick movers (full guide)',
    description: `${SITE.businessShortName} headquarters—crews dispatch from Lakeview Gardens.`,
  },
  {
    href: '/boston-movers',
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
    label: 'Book your Dedham move',
    description: 'Free, no-obligation estimate online.',
  },
];

const dedhamPricingFactors = [
  {
    title: 'Rooms & heavy items',
    description:
      'Studios and one-bedrooms usually take fewer hours than three-bedroom colonials with basements, garages, and patio furniture. Pianos, safes, and gym gear may need extra crew.',
  },
  {
    title: 'On-site labor & warehouse travel',
    description:
      'Dedham jobs bill in 15-minute increments. Weekday rates start at $130 (2 movers + truck), $180 (3 movers + truck), and $220 (4 movers + truck), plus prorated travel from 18 Lakeview Gardens, Natick.',
  },
  {
    title: 'Stairs, elevators & COIs',
    description:
      'Walk-ups in Dedham Square, long driveway carries in Oakdale, and Route 1 dock rules can extend duration. Share access details when you book.',
  },
  {
    title: 'Peak dates & weekends',
    description:
      'Month-end Saturdays, summer lease season, and September turnover fill quickly. Earlier booking improves truck and crew match.',
  },
  {
    title: 'Packing, storage & specialty add-ons',
    description:
      'Crating, overnight holds, and estate cleanout support are quoted separately—bundle through one coordinator for a single invoice timeline.',
  },
];

const dedhamCostOverview =
  'Dedham local moves bill hourly in 15-minute increments plus prorated travel from our Natick warehouse. Standard weekday rates start at $130/hour (2 movers + truck), $180/hour (3 movers + truck), and $220/hour (4 movers + truck), taxes included. A typical Dedham studio or one-bedroom local move runs about 3–5 labor hours ($390–$650 at the 2-mover rate); larger Oakdale colonials and multi-level homes often need 5–8 hours with a 3- or 4-person crew ($900–$1,760+). Weekend and peak dates may use higher tiers—see our pricing page for current rates. Long-distance relocations from Dedham use flat-rate quotes including fuel, mileage, tolls, and insurance.';

const dedhamCommercialCopy = {
  label: 'Business relocations',
  title: 'Commercial & office moves in Dedham',
  subtitle:
    'Route 1 offices, medical suites, and warehouse-adjacent tenants—planned moves that protect uptime.',
  paragraphs: [
    `Norfolk County businesses along Providence Highway, legacy mill redevelopments, and Dedham Corporate Center rely on ${SITE.businessShortName} when downtime costs more than overtime. We tag workstations, wrap monitors, and stage furniture by department so teams reopen in mapped rooms—not random piles.`,
    'Night and weekend slots suit medical practices, legal offices, and retail back-office teams that cannot shut down weekdays. Share dock rules, freight-elevator limits, and COI wording at least two weeks ahead—we align truck size, crew count, and floor protection with your property manager\'s checklist.',
    'Multi-phase moves (pack one suite, deliver the next) and IT-sensitive equipment rides are scoped in the written estimate. Your coordinator stays the single contact from Natick dispatch through final walkthrough.',
  ],
  imageAlt: 'Office and commercial relocation in Dedham, Massachusetts',
};

const dedhamPrepTips = [
  'Book freight elevators and loading docks with your Dedham property manager at least one week before move day.',
  'For Dedham Square addresses, confirm truck staging rules and whether temporary parking signs are allowed on your street.',
  'Label boxes by room on two sides; keep medications, documents, and overnight gear in a personal bag—not on the truck.',
  'Measure stairwells and door headers for oversized pieces; tell your coordinator about items needing disassembly.',
  'Share COI templates and additional-insured wording with us before we issue certificates for your building.',
  'Declutter donations and trash before crews arrive—less volume means fewer billable hours on hourly Dedham jobs.',
];

const dedhamFaqs: Faq[] = [
  {
    question: 'How much do Dedham movers cost?',
    answer: `<p>Local Dedham moves are billed hourly in 15-minute increments plus prorated travel. Standard weekday rates start at <strong>$130/hour</strong> (2 movers + truck), <strong>$180/hour</strong> (3 movers + truck), and <strong>$220/hour</strong> (4 movers + truck), taxes included. A studio or one-bedroom move typically runs 3–5 labor hours ($390–$650 at the 2-mover rate); larger colonials often need 5–8 hours with a 3- or 4-person crew ($900–$1,760+). Weekend and peak dates may use higher hourly tiers. Long-distance moves from Dedham use flat-rate quotes with fuel, tolls, and insurance included. <a href="/pricing" aria-label="See moving prices">See moving prices</a> or <a href="/book" aria-label="Request a free quote">request a free quote</a> for your inventory and date.</p>`,
  },
  {
    question: 'Who are the best movers in Dedham, MA?',
    answer: `<p>The best movers in Dedham, MA combine Norfolk County experience, licensed crews, and building-specific planning—not one-size suburban templates. ${SITE.businessShortName} dispatches from Natick (MDPU #${SITE.businessLicenses.MDPU}, US DOT ${SITE.businessLicenses.DOT}), plans for Dedham Square parking, Route 1 docks, and Oakdale driveway access before load day. Compare our <a href="/pricing" aria-label="See moving prices">moving prices</a>, read neighborhood notes on this page, or <a href="/book" aria-label="Book your move">book a free estimate</a>.</p>`,
  },
  {
    question: 'Do you provide movers in Dedham, MA for local moves?',
    answer: `<p>Yes. Our movers in Dedham, MA handle local relocations within town and to Westwood, Norwood, Needham, Canton, Boston, and Greater Boston. Hourly crews bill in 15-minute increments with prorated travel from our Natick warehouse. Share both addresses when you <a href="/book" aria-label="Request a quote">request a quote</a> so your estimate reflects the full route.</p>`,
  },
  {
    question: `Where is ${SITE.businessShortName} located for Dedham moves?`,
    answer:
      '<p>Our headquarters and primary warehouse are at 18 Lakeview Gardens, Natick, MA 01760—about 15 minutes from most Dedham neighborhoods via I-95 or Route 1. We also maintain a Newton office at 174 Adams Street for Greater Boston moves. Dedham coordinators dispatch crews from Natick.</p>',
  },
  {
    question: 'Are your Dedham movers licensed and insured?',
    answer: `<p>Yes. We are licensed with the Massachusetts Department of Public Utilities (MDPU #${SITE.businessLicenses.MDPU}), US DOT ${SITE.businessLicenses.DOT}, and carry cargo, motor vehicle, and general liability insurance. COIs are available for Dedham buildings when required.</p>`,
  },
  {
    question: 'Do you handle Dedham apartments and condo buildings?',
    answer:
      '<p>Yes. Share your building manager\'s COI template, elevator reservation rules, and loading dock instructions when you book. Our crews pad common areas and follow freight-elevator time windows in East Dedham and along the Route 1 corridor.</p>',
  },
  {
    question: 'Do you offer packing and storage for Dedham moves?',
    answer:
      '<p>Yes. Add <a href="/packing-services" aria-label="Professional packing">professional packing</a>, supplies, and <a href="/storage-solutions" aria-label="Storage">storage</a> between closings or lease gaps. One coordinator can bundle services on your Dedham timeline.</p>',
  },
  {
    question: 'How far in advance should I book movers in Dedham?',
    answer:
      '<p>Book two to four weeks ahead for most Dedham local moves. Month-end Saturdays, summer weekends, and September lease turnover fill quickly—earlier booking secures your preferred crew and truck.</p>',
  },
  {
    question: 'Can you move me from Dedham to another state?',
    answer:
      '<p>Yes. <a href="/interstate-moving" aria-label="Long-distance moves">Long-distance moves</a> from Dedham use flat-rate quotes with fuel, mileage, tolls, and insurance included. Your coordinator confirms delivery windows and inventory before pickup.</p>',
  },
  {
    question: 'What Dedham neighborhoods do you serve?',
    answer:
      '<p>We serve Dedham Square, Oakdale, Riverdale, East Dedham, Greenlodge, the Route 1 corridor, and ZIP codes 02026 and qualifying 02027 border addresses. See neighborhood notes on this page or call for edge cases near Westwood or Canton.</p>',
  },
  {
    question: 'Do you offer senior downsizing or estate moves in Dedham?',
    answer:
      '<p>Yes. We help Dedham families with downsizing, estate cleanouts, and partial loads—coordinating packing, donation drop-offs, and storage when you need a lighter footprint. Tell us your timeline when you <a href="/book" aria-label="Request a quote">request a quote</a>.</p>',
  },
  {
    question: 'How is travel time calculated for Dedham local moves?',
    answer:
      '<p>Travel is prorated in 15-minute increments from our Natick warehouse at 18 Lakeview Gardens to your Dedham origin, and from your destination back to Natick after unload. Time between origin and destination counts as labor, not travel.</p>',
  },
  {
    question: 'What towns near Dedham do you also cover?',
    answer:
      '<p>Beyond ZIP 02026, we serve Westwood, Norwood, Needham, Canton, Milton, Newton, Boston, and all of Greater Boston. Explore our <a href="/local-moving" aria-label="Local moving">local moving</a> page or nearby city pages linked from this guide.</p>',
  },
];

const dedhamKeywords = [
  'Dedham movers',
  'movers Dedham',
  'movers in Dedham MA',
  'movers Dedham MA',
  'Dedham MA moving company',
  'movers Dedham Massachusetts',
  'local movers Dedham',
  'licensed movers Dedham',
  'best movers Dedham MA',
  'professional movers Dedham',
  'affordable movers Dedham',
  'residential movers Dedham',
  'commercial movers Dedham',
  'apartment movers Dedham',
  'packing services Dedham',
  'moving and storage Dedham',
  'Norfolk County movers',
  'Dedham Square movers',
  'Oakdale movers',
  'East Dedham movers',
  'Route 1 movers Dedham',
  '02026 movers',
  '02027 movers',
  `${SITE.businessShortName} Dedham`,
  'moving company Natick to Dedham',
].join(', ');

const dedhamSeo = {
  title: `Dedham Movers | ${SITE.businessName} (Free Estimate)`,
  description:
    'Dedham movers serving Norfolk County from our Natick HQ. Licensed local & long-distance moves, packing, storage. Free estimate—book your Dedham, MA move today.',
  serviceName: 'Dedham Moving Services',
  serviceDescription:
    'Licensed local and long-distance moving, packing, storage, and commercial relocation for Dedham, MA and Norfolk County—dispatched from 18 Lakeview Gardens, Natick, with transparent pricing.',
  howToName: `How to book Dedham movers with ${SITE.businessShortName}`,
  howToDescription:
    `Four steps to plan and complete a Dedham move with ${SITE.businessShortName}—from free quote to walkthrough and payment.`,
};

/** Unique vs Newton/Natick/Boston — opens with commercial & neighborhoods; checklist before services. */
const dedhamSectionOrder: CityPremiumSectionId[] = [
  'commercial',
  'neighborhoods',
  'movingInCity',
  'whyChoose',
  'howTo',
  'pricing',
  'moveTypes',
  'reviews',
  'localGuide',
  'prepTips',
  'midCta',
  'movingChecklist',
  'services',
  'faq',
  'related',
];

export const dedhamPremium: CityPremiumContent = {
  path: DEDHAM_PATH,
  imageSlug: 'dedham-movers',
  legacySlug: 'dedham-movers',
  keywords: dedhamKeywords,
  ogImageAlt: `Dedham, MA movers — ${SITE.businessShortName}`,
  schema: {
    cityName: 'Dedham',
    postalCode: '02026',
    officeIndex: 0,
    geo: { latitude: 42.2418, longitude: -71.1662 },
    areaServed: [
      { '@type': 'City', name: 'Dedham' },
      '02026',
      '02027',
      { '@type': 'State', name: 'Massachusetts' },
    ],
  },
  seo: dedhamSeo,
  breadcrumbLabel: 'Dedham Movers',
  sectionOrder: dedhamSectionOrder,
  hero: {
    title: 'Dedham Movers',
    subtitle:
      'Licensed movers in Dedham, MA—residential, commercial, packing, and long-distance service across Norfolk County, dispatched from our Natick headquarters.',
  },
  directAnswer: dedhamDirectAnswer,
  intro: {
    label: 'Dedham, MA',
    title: 'Movers in Dedham, MA — Norfolk County specialists',
    imageAlt: `Dedham, Massachusetts — ${SITE.businessShortName} service area`,
    trustLead: 'Dedham movers you can trust:',
    officeIndex: 0,
  },
  trustFeatures: dedhamTrustFeatures,
  services: dedhamServicesCopy,
  movingInCity: dedhamMovingInDedham,
  moveTypes: {
    label: 'Relocation options',
    title: 'Every type of Dedham move we plan',
    subtitle:
      'From downtown walk-ups to Route 1 office suites—scoped to your building rules and inventory.',
    items: dedhamMoveTypes,
    quoteButtonLabel: 'Get a Dedham moving quote',
    showPianoLink: true,
  },
  whyChoose: {
    label: 'Norfolk County service',
    title: `Why Dedham residents hire ${SITE.businessShortName}`,
    subtitle:
      'Route 1 corridor know-how, fair Natick-to-Dedham travel, and crews who respect building rules.',
    features: dedhamWhyChooseFeatures,
  },
  howTo: {
    label: 'Your timeline',
    title: 'From quote to keys: your Dedham move',
    subtitle:
      'Four steps coordinated from our Natick dispatch team—clear before the truck arrives.',
    steps: dedhamHowToSteps,
  },
  neighborhoods: {
    label: 'Dedham areas',
    title: 'Where we move in Dedham & nearby',
    subtitle:
      'Dedham Square to Oakdale to the Route 1 corridor—local knowledge of Norfolk County access and parking.',
    areas: dedhamNeighborhoods.map((area) => ({
      title: area.name,
      description: area.description,
    })),
    nearbyHeading: 'South Shore & MetroWest neighbors',
  },
  nearbyTowns: dedhamNearbyTowns,
  midCta: {
    title: 'Need Dedham movers this month?',
    description:
      'Free estimates · Licensed MDPU crews · Dispatch from 18 Lakeview Gardens, Natick',
  },
  pricing: {
    label: 'Rates & estimates',
    title: 'How much do Dedham movers cost?',
    subtitle: dedhamCostOverview,
    factors: dedhamPricingFactors,
  },
  commercial: dedhamCommercialCopy,
  localGuide: dedhamLocalGuide,
  prepTips: {
    label: 'Before the truck arrives',
    title: 'Dedham move-day prep checklist',
    subtitle:
      'Six steps that keep building managers, Route 1 dock staff, and your crew aligned.',
    tips: dedhamPrepTips,
  },
  movingChecklist: true,
  reviews: true,
  faq: {
    title: 'Dedham movers FAQ',
    label: 'Questions about Dedham moves',
    groupName: 'dedham-faq',
    items: dedhamFaqs,
  },
  relatedLinks: dedhamRelatedLinks,
  relatedTitle: 'More moving services for Dedham',
  finalCta: {
    title: 'Book your Dedham movers today.',
    description:
      'Free estimates · Licensed & insured · Serving Dedham from 18 Lakeview Gardens, Natick, MA',
  },
};

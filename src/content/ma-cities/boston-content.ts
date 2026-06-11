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
import { NEWTON_PATH } from './newton-content';

export const BOSTON_PATH = '/boston-ma-movers';

const bostonDirectAnswer =
  `${SITE.businessName} is a licensed, insured Boston moving company serving all neighborhoods from Back Bay to Seaport. We provide residential moves, apartment relocations, commercial office moves, packing, storage, and long-distance service—with transparent pricing, permit coordination, and crews trained for Boston's walk-ups, elevators, and parking restrictions.`;

const bostonTrustFeatures = [
  `Licensed MDPU #${SITE.businessLicenses.MDPU}`,
  `US DOT ${SITE.businessLicenses.DOT}`,
  'Greater Boston headquarters',
  'Fully insured · COI available',
  'Free moving estimates',
  '4.98★ average (243+ reviews)',
];

const bostonWhyChooseFeatures = [
  {
    name: 'Boston neighborhood expertise',
    description:
      "Back Bay brownstones, South End walk-ups, Seaport high-rises, North End narrow streets—every Boston neighborhood has unique access challenges. Our crews know resident parking zones, freight elevator protocols, and building-specific COI requirements before arrival.",
    icon: TruckDeliveryIcon,
  },
  {
    name: 'Licensed & insured for MA moves',
    description:
      `We hold MDPU license ${SITE.businessLicenses.MDPU}, US DOT ${SITE.businessLicenses.DOT}, and comprehensive cargo, motor vehicle, and general liability coverage. Certificates of insurance meet requirements for Boston condo associations, commercial landlords, and university housing.`,
    icon: LicenseIcon,
  },
  {
    name: 'Student & professional move specialists',
    description:
      "Boston's academic and professional populations drive September and month-end peaks. We coordinate moves for BU, Northeastern, Suffolk students and young professionals across Allston, Brighton, and downtown corridors—with flexible scheduling and studio-to-penthouse experience.",
    icon: CalendarTimeIcon,
  },
  {
    name: 'Transparent Boston moving rates',
    description:
      'Local Boston moves bill in 15-minute increments for labor plus documented travel time. Long-distance and interstate quotes include fuel, tolls, and insurance upfront. Review our <a href="/pricing" aria-label="Pricing page">pricing page</a> for rate transparency—no surprise charges on move day.',
    icon: Receipt2Icon,
  },
  {
    name: 'Permit & parking coordination',
    description:
      "Resident parking permits, temporary no-parking zones, loading dock reservations—Boston moves require advance logistics. Share your address and building rules when booking; we secure permits, coordinate elevator access, and plan staging to minimize delays.",
    icon: ShieldCheckIcon,
  },
  {
    name: 'Full-service moving solutions',
    description:
      'Add <a href="/packing-services" aria-label="Professional packing">professional packing</a>, <a href="/storage-solutions" aria-label="Storage solutions">climate-controlled storage</a> between closings, or <a href="/piano-moving" aria-label="Specialty handling">specialty handling</a> for pianos, art, and antiques. One coordinator manages your entire Boston timeline—from packing to final placement.',
    icon: TruckDeliveryIcon,
  },
];

const bostonHowToSteps: MovingStep[] = [
  {
    stepNumber: '01',
    title: 'Request your Boston moving quote',
    description:
      "Share origin and destination addresses (neighborhood or ZIP), home size, and target move date. We note Boston-specific details—walk-up floors, elevator availability, parking permit needs, and whether your building requires a certificate of insurance.",
  },
  {
    stepNumber: '02',
    title: 'Receive estimate & secure your date',
    description:
      "Your coordinator confirms crew size, truck type, travel assumptions, and any add-ons like packing or storage. Reserve your Boston move with a deposit and receive prep guidance tailored to your neighborhood—Back Bay, South End, Seaport, or surrounding areas.",
  },
  {
    stepNumber: '03',
    title: 'Move day: professional loading & transport',
    description:
      "Uniformed, background-checked crews arrive with blankets, dollies, and floor protection. We navigate Boston's streets, secure parking, coordinate elevators, and load your belongings safely. Transit to your new address with the same care—placing furniture by room and reassembling items as quoted.",
  },
  {
    stepNumber: '04',
    title: 'Final walkthrough & payment',
    description:
      'Review completed work, confirm all items are placed correctly, and note any concerns on the bill of lading. Pay by cash, card, or certified check per your estimate. Local Boston balances are due when the job is complete.',
  },
];

const bostonServicesCopy = {
  label: 'Boston moving services',
  title: 'Movers Boston trusts for apartments, homes & offices',
  subtitle:
    `${SITE.businessName} delivers licensed crews, packing, storage, and long-distance options across every Boston neighborhood—from downtown high-rises to triple-deckers in Dorchester, with transparent pricing and permit coordination.`,
};

const bostonMovingInBoston = {
  title: 'Moving in Boston, Massachusetts—what to expect',
  subtitle:
    "Navigating Boston's neighborhoods, parking rules, and building requirements with experienced local movers.",
  paragraphs: [
    "Boston is one of America's most historic and densely packed cities—narrow streets laid out centuries before modern moving trucks, diverse housing stock from Beacon Hill row houses to Seaport glass towers, and neighborhood-specific parking and permitting rules that change by ZIP code. Whether you are relocating within the city, moving to Boston from another state, or leaving for the suburbs, understanding local logistics is essential for a smooth experience.",
    `${SITE.businessName} serves <strong>all Boston neighborhoods</strong>: Back Bay, Beacon Hill, South End, North End, Seaport, Downtown, Allston, Brighton, Dorchester, Roxbury, Jamaica Plain, Charlestown, East Boston, and surrounding communities. Our crews know which streets require resident parking permits, which buildings demand advance freight elevator reservations, and which condo associations require certificates of insurance weeks before move day.`,
    "Boston moves often involve <strong>multi-story walk-ups, narrow stairwells, and limited truck staging</strong>. If you are in a brownstone with no elevator, expect longer labor hours as crews hand-carry furniture up steep staircases. High-rise buildings in the Seaport or Fenway typically require elevator bookings and COIs—share these details when you <a href='/book' aria-label='Request a free quote'>request a quote</a> so we build accurate timelines and secure building access before arrival.",
    "Boston's <strong>academic and professional calendars</strong> create predictable demand peaks. September 1st is the busiest moving day of the year—students flooding Allston, Brighton, Mission Hill, and Fenway apartments. Month-end Saturdays and summer lease turnovers also fill quickly. Book three to four weeks ahead during peak season; earlier scheduling in off-peak months secures preferred crews and trucks.",
    `We coordinate <a href='/local-moving' aria-label='Local moving services'>local Boston moves</a>, <a href='/interstate-moving' aria-label='Long-distance moving'>long-distance relocations</a> nationwide, <a href='/packing-services' aria-label='Packing services'>full-service packing</a>, and <a href='/storage-solutions' aria-label='Storage solutions'>short or long-term storage</a> between closings. One ${SITE.businessName} coordinator manages your entire timeline—whether you are downsizing from Brookline to a Back Bay condo or relocating a South End office to Cambridge.`,
    "Parking and permits are non-negotiable in Boston. Many neighborhoods require temporary no-parking permits obtained through the city's transportation department. Some buildings provide loading zones; others require street staging with advance coordination. Tell us your exact addresses, building rules, and any landlord requirements when booking—we handle permit applications, elevator reservations, and COI paperwork so move day runs on schedule.",
  ],
  imageAlt: `${SITE.businessName} — Boston, MA professional movers`,
};
const bostonLocalGuide = {
  label: 'Boston moving guide',
  title: 'Essential Boston moving tips from local crews',
  subtitle:
    'Parking permits, neighborhood logistics, and timing—practical advice from movers who work in Boston every day.',
  paragraphs: [
    "Boston's street grid and parking enforcement are notoriously strict. If your move requires on-street truck staging, apply for a temporary no-parking permit through the Boston Transportation Department at least 48 hours in advance—preferably a week during busy months. Permit approval is not instant; late applications can force last-minute rescheduling or fines. Share your move date and addresses early so we coordinate permits on your behalf or guide you through the application.",
    "Neighborhood-specific parking rules vary widely. Beacon Hill and North End streets are narrow with resident-only zones; Back Bay and South End often require metered or permit parking outside your building. Seaport high-rises provide loading docks with scheduled time slots—miss your window and crews may wait hours for the next opening. Allston and Brighton triple-deckers typically have driveway or street access, but September peak competition can complicate staging.",
    "Elevator buildings—especially luxury towers in the Seaport, Fenway, and downtown—require advance freight elevator reservations and certificates of insurance naming the building as additional insured. COI templates vary by property manager; some want 30-day notice, others accept one week. When you <a href='/book' aria-label='Book your Boston move'>book your Boston move</a>, attach your landlord's COI form so we issue compliant certificates before move day. Walk-up buildings bypass elevator logistics but add labor time—budget for longer hours if you are moving a two- or three-bedroom up narrow staircases.",
    "Boston's academic calendar drives the busiest moving season. Late August through early September sees students and families flooding Allston, Brighton, Mission Hill, Fenway, and surrounding college neighborhoods. Month-end Saturdays year-round also fill quickly due to lease turnover conventions. If you need a September 1st move, book by mid-July—crews and trucks are finite during peak demand. Off-peak winter and mid-month dates offer more flexibility and often faster scheduling.",
    "Weather considerations: Boston winters bring snow, ice, and salt tracked into buildings. Crews use extra floor runners and door jamb protection when conditions are slippery. Summer heat and humidity can slow load times for walk-ups without air conditioning—hydration breaks are factored into estimates. If you are comparing <a href='/pricing' aria-label='Moving prices'>moving quotes</a>, ask how weather delays are handled and whether rates change for challenging conditions.",
    "Boston's dense layout means short geographic distances can involve long transit times during rush hour. A move from South End to Cambridge may be three miles but take 40 minutes during peak traffic. Travel time on local hourly jobs is prorated and documented—ask your coordinator how route and timing affect your estimate. Long-distance moves from Boston to other states use flat-rate quotes with fuel, tolls, and delivery windows confirmed upfront.",
    "Downsizing, estate, and senior moves are common as Boston residents transition from family homes to condos or relocate closer to children in the suburbs. We coordinate partial packing, donation pickups, and storage for items that will not fit your next space. Our crews work at your pace—no rush when you need extra time sorting belongings or coordinating family members during the process.",
    "Commercial office moves in Boston's Financial District, Seaport, and Back Bay corridors require after-hours or weekend scheduling to minimize business downtime. We label workstations by employee, protect IT equipment, and stage furniture per your floor plan so teams can resume work quickly. Share floor plans, employee counts, and COI requirements early for accurate crew sizing and logistics planning.",
  ],
};
const bostonMoveTypes = [
  {
    title: 'Apartment & condo moves',
    description:
      "Studio to multi-bedroom relocations in walk-ups, mid-rise, and high-rise buildings. COI coordination, elevator reservations, and padded common areas for Boston's diverse housing stock—from historic brownstones to modern Seaport towers.",
  },
  {
    title: 'Residential & family homes',
    description:
      'Whole-home moves for single-family houses, duplexes, and townhomes. Furniture disassembly, blanket wrapping, and room-by-room placement at your new Boston or Greater Boston address—coordinated with one crew from start to finish.',
  },
  {
    title: 'Student & college moves',
    description:
      'Fast-turnaround relocations for BU, Northeastern, Suffolk, and other Boston university students. Flexible scheduling around academic calendars, dorm move-ins, and September 1st lease cycles—ideal for studios and shared apartments.',
  },
  {
    title: 'Office & commercial relocation',
    description:
      'Desks, files, workstations, and equipment for Boston businesses. Labeling systems, after-hours or weekend slots, and minimal downtime for Financial District, Seaport, and Back Bay offices relocating within the city or to suburbs.',
  },
  {
    title: 'Long-distance & interstate moves',
    description:
      'Licensed long-distance service from Boston to anywhere in the United States. Flat-rate quotes with fuel, tolls, and insurance included—coordinated pickup and delivery windows for cross-country or regional relocations.',
  },
  {
    title: 'Packing, crating & storage',
    description:
      'Full-home packing, fragile-only packs, wardrobe cartons, and climate-controlled storage between closings or during home renovations. Bundle with your Boston move for seamless coordination and one timeline.',
  },
  {
    title: 'Senior & downsizing moves',
    description:
      'Patient-paced moves for Boston seniors transitioning to condos, assisted living, or smaller homes. Partial packing, donation coordination, and storage for items not immediately needed—handled with care and respect.',
  },
  {
    title: 'Specialty & piano moving',
    description:
      `Upright pianos, baby grands, artwork, antiques, and fragile valuables requiring extra care. Custom crating and specialized handling available—coordinate through your ${SITE.businessName} crew for full-service protection.`
  },
];

const bostonNeighborhoods = [
  {
    name: 'Back Bay & Beacon Hill',
    description:
      'Historic brownstones, high-rent districts, narrow streets, and resident parking zones. Moves often involve walk-up stairs, limited staging, and strict building rules requiring advance COIs and elevator coordination.',
  },
  {
    name: 'South End & Fenway',
    description:
      'Victorian row houses, trendy condos, and proximity to universities. Walk-ups and mid-rise buildings with neighborhood parking permits—expect permit coordination and longer carries for upper floors.',
  },
  {
    name: 'Seaport & Downtown',
    description:
      'Modern luxury towers with freight elevators, loading docks, and strict COI requirements. Advance reservations essential—buildings enforce time slots and require certificates of insurance weeks before move day.',
  },
  {
    name: 'Allston, Brighton & Mission Hill',
    description:
      'Student-heavy neighborhoods with September 1st moving chaos. Triple-deckers, walk-ups, and shared apartments—book early for peak season and expect competitive parking during college move-in.',
  },
  {
    name: 'North End & Charlestown',
    description:
      "Boston's oldest neighborhoods with narrow, winding streets and limited truck access. Crews often stage farther from buildings and hand-carry items—factor extra labor time into estimates.",
  },
  {
    name: 'Dorchester, Roxbury & Jamaica Plain',
    description:
      'Diverse residential neighborhoods with mix of single-families, multi-families, and walk-ups. Street parking typically easier than downtown, but neighborhood-specific permit rules still apply.',
  },
  {
    name: 'East Boston & Charlestown',
    description:
      'Waterfront and commuter-accessible neighborhoods with growing condo developments. Tunnel and bridge access considerations for routing—share exact addresses for accurate travel time estimates.',
  },
];
const bostonNearbyTowns: RelatedLink[] = [
  {
    href: '/cambridge-movers',
    label: 'Cambridge movers',
    description: 'Across the Charles River—Harvard, MIT, and Kendall Square.',
  },
  {
    href: '/brookline-movers',
    label: 'Brookline movers',
    description: 'Walk-ups and elevator buildings bordering Boston.',
  },
  {
    href: '/somerville-movers',
    label: 'Somerville movers',
    description: 'North of Boston with walkable squares and triple-deckers.',
  },
  {
    href: NEWTON_PATH,
    label: 'Newton movers',
    description: 'West on the Green Line—village neighborhoods and suburban homes.',
  },
  {
    href: '/quincy-movers',
    label: 'Quincy movers',
    description: 'South Shore access with Red Line connection to Boston.',
  },
  {
    href: '/natick-ma-movers',
    label: 'Natick movers (full guide)',
    description: `${SITE.businessName} headquarters—MetroWest and Route 9 corridor.`,
  },
];

const bostonRelatedLinks: RelatedLink[] = [
  {
    href: '/local-moving',
    label: 'Local moving services',
    description: 'Hourly Boston and Greater Boston crews.',
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
    description: 'Climate-controlled storage between homes.',
  },
  {
    href: '/piano-moving',
    label: 'Piano moving',
    description: 'Specialty handling for upright and grand pianos.',
  },
  {
    href: '/pricing',
    label: 'Moving prices',
    description: 'Transparent rates for local and long-distance moves.',
  },
  {
    href: '/book',
    label: 'Book your Boston move',
    description: 'Free, no-obligation estimate online.',
  },
];

const bostonPricingFactors = [
  {
    title: 'Home size & inventory',
    description:
      'Studio apartments require fewer hours than three-bedroom brownstones or penthouse condos. Heavy items like pianos, safes, and gym equipment may require additional crew members—share full inventory when requesting estimates.',
  },
  {
    title: 'Labor & travel time',
    description:
      'Local Boston moves bill in 15-minute increments for on-site labor plus prorated round-trip travel from our warehouse. Downtown traffic and neighborhood-specific routing affect transit time—your coordinator confirms assumptions before booking.',
  },
  {
    title: 'Building access & floors',
    description:
      'Walk-up apartments take longer than freight-elevator buildings. Third-floor walk-ups in Allston require more labor hours than ground-floor condos in Seaport. Stair flights, hallway turns, and loading dock availability all affect duration and cost.',
  },
  {
    title: 'Parking & permits',
    description:
      'Boston neighborhoods with strict resident parking require temporary permits—factor permit fees and coordination time into your budget. Buildings with loading docks streamline staging; street parking in tight neighborhoods adds complexity and potential delays.',
  },
  {
    title: 'Season & move date',
    description:
      'September 1st, month-end Saturdays, and summer lease turnovers are peak demand—earlier booking improves crew availability and rate consistency. Off-peak winter and mid-month dates often allow more flexible scheduling.',
  },
  {
    title: 'Add-on services',
    description:
      `Packing, storage, and specialty handling are quoted separately. Bundling through ${SITE.businessName} simplifies billing, scheduling, and coordination—one vendor from packing through final placement.`
  },
];

const bostonCostOverview =
  'Boston local moves typically charge hourly with transparent travel time from our Greater Boston warehouse. Long-distance and interstate relocations use flat-rate quotes including fuel, mileage, tolls, and insurance. Request a free estimate with your addresses, home size, and move date—we confirm crew size, truck type, and any add-ons before you reserve.';

const bostonCommercialCopy = {
  label: 'Commercial moving',
  title: 'Office & commercial movers in Boston',
  subtitle:
    'Relocate Boston businesses with minimal downtime—labeled workstations, protected equipment, and weekend options.',
  paragraphs: [
    `Boston's business districts—Financial District, Seaport, Back Bay, and emerging neighborhoods like the Innovation District—host corporations, startups, professional services, and nonprofits that cannot afford multi-day disruptions. ${SITE.businessName} plans commercial relocations with workstation labeling, IT-sensitive handling, and after-hours or weekend loading so your team resumes work quickly in your new space.`,
    "We coordinate certificates of insurance with landlords, reserve freight elevators in mixed-use buildings, and align truck staging with Boston's neighborhood parking rules. Share your target move-in date, employee count, floor plans, and any specialty equipment—server racks, medical devices, lab instruments—so we size crews and materials correctly. Your coordinator walks through every step from initial walk-through to final placement, ensuring minimal downtime and clear communication.",
  ],
  imageAlt: 'Commercial office moving in Boston, Massachusetts',
};

const bostonPrepTips = [
  'Apply for temporary no-parking permits through Boston Transportation Department at least 48 hours before move day—one week during peak season.',
  `Reserve freight elevators and loading docks with your building manager at least two weeks in advance; share reservation confirmations with your ${SITE.businessName} coordinator.`,
  'Label boxes by room and note fragile items on multiple sides—crews place cartons in matching rooms at your new Boston address.',
  'Measure large furniture, doorways, and stairwell turns; share dimensions with your coordinator for disassembly planning.',
  'Obtain certificates of insurance if your condo association or landlord requires them—provide COI templates when you book so we issue compliant documents before move day.',
  'Set aside valuables, documents, medications, and overnight essentials in a bag that travels with you—not on the moving truck.',
  'Confirm resident parking zones and neighborhood restrictions at both origin and destination addresses—share details with your coordinator for accurate staging plans.',
];
const bostonFaqs: Faq[] = [
  {
    question: 'How much do Boston movers cost?',
    answer: `<p>Local Boston moves are billed hourly in 15-minute increments for labor plus prorated travel. Studio and one-bedroom apartments typically require a few hours; larger homes and multi-floor buildings take longer. Walk-ups add labor time compared to elevator buildings. Long-distance moves from Boston use flat-rate quotes with fuel, tolls, and insurance included. <a href="/pricing" aria-label="See moving prices">See moving prices</a> or <a href="/book" aria-label="Request a free quote">request a free quote</a> for your specific move.</p>`,
  },
  {
    question: `Are ${SITE.businessName} crews licensed and insured in Boston?`,
    answer: `<p>Yes. We are licensed with the Massachusetts Department of Public Utilities (MDPU #${SITE.businessLicenses.MDPU}), US DOT ${SITE.businessLicenses.DOT}, and carry comprehensive cargo, motor vehicle, and general liability insurance. Certificates of insurance are available for Boston condo associations, landlords, and commercial buildings requiring additional insured coverage.</p>`,
  },
  {
    question: 'Do you handle Boston apartment buildings and walk-ups?',
    answer:
      "<p>Yes. Share your building's elevator reservation rules, COI requirements, and parking restrictions when you book. Our crews pad common areas, follow freight-elevator time windows, and coordinate with building management for smooth move days—whether you are in a Back Bay brownstone, Seaport high-rise, or Allston triple-decker.</p>",
  },
  {
    question: 'Do you help with parking permits for Boston moves?',
    answer:
      '<p>Yes. Boston neighborhoods often require temporary no-parking permits for moving trucks. Share your addresses when booking and we guide you through permit applications or coordinate directly with the Boston Transportation Department to secure street staging access before move day.</p>',
  },
  {
    question: 'Can you move students and young professionals in Boston?',
    answer:
      '<p>Yes. We specialize in student moves for BU, Northeastern, Suffolk, and other Boston universities—especially during the busy September 1st cycle. Studio, one-bedroom, and shared apartment relocations are common; we offer flexible scheduling around academic calendars and quick turnarounds for lease overlaps.</p>',
  },
  {
    question: 'Do you offer packing and storage for Boston moves?',
    answer:
      '<p>Yes. Add <a href="/packing-services" aria-label="Professional packing">professional packing</a>, wardrobe cartons, and <a href="/storage-solutions" aria-label="Storage solutions">climate-controlled storage</a> between closings or during renovations. One coordinator bundles services on your Boston timeline for seamless execution.</p>',
  },
  {
    question: 'How far in advance should I book movers in Boston?',
    answer:
      '<p>Book three to four weeks ahead for most local Boston moves. September 1st, month-end Saturdays, and summer lease turnovers fill fastest—earlier booking during peak season secures your preferred crew and truck. Off-peak winter and mid-month dates offer more flexibility.</p>',
  },
  {
    question: 'Can you move me from Boston to another state?',
    answer:
      '<p>Yes. <a href="/interstate-moving" aria-label="Long-distance moving">Long-distance moves</a> from Boston to anywhere in the United States use flat-rate quotes with fuel, mileage, tolls, and insurance included. Your coordinator confirms delivery windows, inventory, and timing before pickup day.</p>',
  },
  {
    question: 'What Boston neighborhoods do you serve?',
    answer:
      '<p>We serve all Boston neighborhoods including Back Bay, Beacon Hill, South End, North End, Seaport, Downtown, Fenway, Allston, Brighton, Dorchester, Roxbury, Jamaica Plain, Charlestown, East Boston, and surrounding communities. See neighborhood details on this page or call for specific access questions.</p>',
  },
  {
    question: 'What other Greater Boston towns do you cover?',
    answer:
      '<p>We regularly serve Cambridge, Brookline, Somerville, Newton, Quincy, and all of Greater Boston. Explore linked city pages or our <a href="/local-moving" aria-label="Local moving services">local moving</a> hub for service areas and neighborhood-specific guidance.</p>',
  },
];

const bostonKeywords = [
  'movers Boston',
  'Boston movers',
  'Boston MA moving company',
  'moving company Boston',
  'local movers Boston',
  'best movers Boston MA',
  'affordable movers Boston',
  'licensed movers Boston',
  'residential movers Boston',
  'apartment movers Boston',
  'commercial movers Boston',
  'Back Bay movers',
  'South End movers Boston',
  'Seaport movers',
  'Beacon Hill movers',
  'Allston Brighton movers',
  'North End movers Boston',
  'Fenway movers',
  'Boston moving services',
  `${SITE.businessName} Boston`,
  'professional movers Boston MA',
  'Boston apartment moving',
  'student movers Boston',
].join(', ');

const bostonSeo = {
  title: `Boston, MA Movers | ${SITE.businessName}`,
  description:
    `${SITE.businessName} provides local and long-distance moving services in Boston, MA, with packing, storage, and free estimates.`,
  serviceName: 'Boston Moving Services',
  serviceDescription:
    'Licensed local and long-distance moving, apartment relocations, packing, storage, and commercial office moves for Boston, MA—serving all neighborhoods with transparent pricing, permit coordination, and experienced crews.',
  howToName: `How to book Boston movers with ${SITE.businessName}`,
  howToDescription:
    `Four steps to plan and complete a Boston move with ${SITE.businessName}—from free quote to final walkthrough and payment.`,
};
/** Optimized section order for SEO: neighborhoods early, reviews before FAQ. */
const bostonSectionOrder: CityPremiumSectionId[] = [
  'whyChoose',
  'neighborhoods',
  'movingInCity',
  'howTo',
  'moveTypes',
  'pricing',
  'midCta',
  'localGuide',
  'commercial',
  'prepTips',
  'services',
  'movingChecklist',
  'reviews',
  'faq',
  'related',
];

export const bostonPremium: CityPremiumContent = {
  path: BOSTON_PATH,
  imageSlug: 'boston-movers',
  legacySlug: 'boston-movers',
  keywords: bostonKeywords,
  ogImageAlt: `Boston, MA movers — ${SITE.businessName}`,
  schema: {
    cityName: 'Boston',
    postalCode: '02108',
    geo: { latitude: 42.3601, longitude: -71.0589 },
    areaServed: [
      { '@type': 'City', name: 'Boston' },
      { '@type': 'PostalCode', name: '02108' },
      { '@type': 'PostalCode', name: '02109' },
      { '@type': 'PostalCode', name: '02110' },
      { '@type': 'PostalCode', name: '02111' },
      { '@type': 'PostalCode', name: '02113' },
      { '@type': 'PostalCode', name: '02114' },
      { '@type': 'PostalCode', name: '02115' },
      { '@type': 'PostalCode', name: '02116' },
      { '@type': 'PostalCode', name: '02118' },
      { '@type': 'PostalCode', name: '02119' },
      { '@type': 'PostalCode', name: '02120' },
      { '@type': 'PostalCode', name: '02121' },
      { '@type': 'PostalCode', name: '02122' },
      { '@type': 'PostalCode', name: '02124' },
      { '@type': 'PostalCode', name: '02125' },
      { '@type': 'PostalCode', name: '02126' },
      { '@type': 'PostalCode', name: '02127' },
      { '@type': 'PostalCode', name: '02128' },
      { '@type': 'PostalCode', name: '02129' },
      { '@type': 'PostalCode', name: '02130' },
      { '@type': 'PostalCode', name: '02131' },
      { '@type': 'PostalCode', name: '02132' },
      { '@type': 'PostalCode', name: '02134' },
      { '@type': 'PostalCode', name: '02135' },
      { '@type': 'PostalCode', name: '02136' },
      { '@type': 'PostalCode', name: '02210' },
      { '@type': 'State', name: 'Massachusetts' },
    ],
  },
  seo: bostonSeo,
  breadcrumbLabel: 'Boston Movers',
  sectionOrder: bostonSectionOrder,
  hero: {
    title: 'Boston, MA Movers',
    subtitle: "Local and long-distance moving services for homes and businesses throughout Boston and the Greater Boston area."
  },
  directAnswer: bostonDirectAnswer,
  intro: {
    label: 'Boston, MA',
    title: 'Your Boston moving company—licensed & local',
    imageAlt: `Boston, Massachusetts — ${SITE.businessName}`,
    trustLead: 'Boston movers you can trust:',
    officeIndex: 0,
  },
  trustFeatures: bostonTrustFeatures,
  services: bostonServicesCopy,
  movingInCity: bostonMovingInBoston,
  moveTypes: {
    label: 'What we move',
    title: 'Boston move types we handle',
    subtitle:
      'Apartments, homes, offices, student relocations, and specialty moves—tailored to your neighborhood and building requirements.',
    items: bostonMoveTypes,
    quoteButtonLabel: 'Get a Boston moving quote',
    showPianoLink: true,
  },
  whyChoose: {
    label: 'Why Boston residents choose us',
    title: `Why choose ${SITE.businessName} for your Boston move?`,
    subtitle:
      "Neighborhood expertise, transparent pricing, and licensed crews trained for Boston's unique moving challenges.",
    features: bostonWhyChooseFeatures,
  },
  howTo: {
    label: 'Your Boston move',
    title: `How a Boston move with ${SITE.businessName} works`,
    subtitle:
      'Four clear steps from estimate to walkthrough—coordinated by experienced local teams.',
    steps: bostonHowToSteps,
  },
  neighborhoods: {
    label: 'Neighborhoods & districts',
    title: 'Boston neighborhoods we serve',
    subtitle:
      "From Back Bay brownstones to Seaport high-rises—local knowledge of Boston's diverse neighborhoods, parking rules, and building requirements.",
    areas: bostonNeighborhoods.map((area) => ({
      title: area.name,
      description: area.description,
    })),
    nearbyHeading: 'Greater Boston communities',
  },
  nearbyTowns: bostonNearbyTowns,
  midCta: {
    title: 'Moving in Boston this season?',
    description:
      'Free estimates · Licensed MDPU & US DOT crews · All neighborhoods · Permit coordination',
  },
  pricing: {
    label: 'Moving costs',
    title: 'How much do Boston movers cost?',
    subtitle: bostonCostOverview,
    factors: bostonPricingFactors,
  },
  commercial: bostonCommercialCopy,
  localGuide: bostonLocalGuide,
  prepTips: {
    label: 'Move-day checklist',
    title: 'Prepare for your Boston move',
    subtitle:
      'Seven essential steps for smooth Boston moves—permits, building coordination, and neighborhood logistics.',
    tips: bostonPrepTips,
  },
  movingChecklist: true,
  reviews: true,
  faq: {
    title: 'Boston moving FAQ',
    label: 'Questions about Boston moves',
    groupName: 'boston-faq',
    items: bostonFaqs,
  },
  relatedLinks: bostonRelatedLinks,
  relatedTitle: 'Moving services for Boston residents',
  finalCta: {
    title: 'Book your Boston movers today.',
    description:
      'Free estimates · Licensed & insured · All neighborhoods · Permit assistance',
  },
};

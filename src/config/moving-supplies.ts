export type PropertyType = 'apartment' | 'house';

export type SupplyKey =
  | 'Small boxes'
  | 'Medium boxes'
  | 'Large boxes'
  | 'Wardrobe boxes'
  | 'Dish pack boxes'
  | 'Bubble wrap'
  | 'Packing paper 10lb'
  | 'Packing paper 25lb'
  | 'Tape';

export const SUPPLY_UNIT_PRICES: Record<SupplyKey, number> = {
  'Small boxes': 4,
  'Medium boxes': 6,
  'Large boxes': 8,
  'Wardrobe boxes': 12,
  'Dish pack boxes': 6,
  'Bubble wrap': 8,
  'Packing paper 10lb': 15,
  'Packing paper 25lb': 30,
  Tape: 4.5,
};

export const SUPPLY_HINTS: Partial<Record<SupplyKey, string>> = {
  'Small boxes': 'Books, decor, pantry items',
  'Medium boxes': 'Clothes, toys, office supplies',
  'Large boxes': 'Linens, lamps, bulky items',
  'Wardrobe boxes': 'Hanging clothes — suits, dresses, coats',
  'Dish pack boxes': 'Plates, glasses, and kitchenware',
  'Bubble wrap': 'Fragile items and electronics',
  'Packing paper 10lb': 'Wrapping dishes and filling gaps',
  'Packing paper 25lb': 'Wrapping dishes and filling gaps',
  Tape: 'Seal boxes and reinforce bottoms',
};

export type MoveSupplyProfile = {
  id: string;
  propertyType: PropertyType;
  label: string;
  description: string;
  items: Partial<Record<SupplyKey, number>>;
};

export const MOVE_SUPPLY_PROFILES: MoveSupplyProfile[] = [
  {
    id: 'studio',
    propertyType: 'apartment',
    label: 'Studio',
    description: 'Compact studio with kitchenette and minimal storage.',
    items: {
      'Small boxes': 10,
      'Medium boxes': 5,
      'Large boxes': 3,
      'Wardrobe boxes': 2,
      'Packing paper 10lb': 1,
      Tape: 3,
    },
  },
  {
    id: '1br-apt',
    propertyType: 'apartment',
    label: '1 Bedroom',
    description: 'Typical one-bedroom apartment layout.',
    items: {
      'Small boxes': 13,
      'Medium boxes': 10,
      'Large boxes': 5,
      'Wardrobe boxes': 2,
      'Dish pack boxes': 3,
      'Bubble wrap': 2,
      'Packing paper 10lb': 2,
      Tape: 2,
    },
  },
  {
    id: '2br-apt',
    propertyType: 'apartment',
    label: '2 Bedrooms',
    description: 'Two-bedroom apartment with more closets and living space.',
    items: {
      'Small boxes': 17,
      'Medium boxes': 13,
      'Large boxes': 8,
      'Wardrobe boxes': 3,
      'Dish pack boxes': 4,
      'Bubble wrap': 2,
      'Packing paper 25lb': 2,
      Tape: 3,
    },
  },
  {
    id: '3br-apt',
    propertyType: 'apartment',
    label: '3 Bedrooms',
    description: 'Larger apartment — multiple closets and storage areas.',
    items: {
      'Small boxes': 25,
      'Medium boxes': 16,
      'Large boxes': 12,
      'Wardrobe boxes': 4,
      'Dish pack boxes': 5,
      'Bubble wrap': 3,
      'Packing paper 25lb': 2,
      Tape: 4,
    },
  },
  {
    id: '3br-plus-apt',
    propertyType: 'apartment',
    label: '3+ Bedrooms',
    description: 'Spacious apartment or loft with extra rooms.',
    items: {
      'Small boxes': 30,
      'Medium boxes': 20,
      'Large boxes': 15,
      'Wardrobe boxes': 5,
      'Dish pack boxes': 6,
      'Bubble wrap': 4,
      'Packing paper 25lb': 3,
      Tape: 6,
    },
  },
  {
    id: '2br-house',
    propertyType: 'house',
    label: '2 Bedrooms',
    description: 'Starter home with garage or basement storage.',
    items: {
      'Small boxes': 40,
      'Medium boxes': 30,
      'Large boxes': 20,
      'Wardrobe boxes': 4,
      'Dish pack boxes': 6,
      'Bubble wrap': 4,
      'Packing paper 25lb': 2,
      Tape: 8,
    },
  },
  {
    id: '3br-house',
    propertyType: 'house',
    label: '3 Bedrooms',
    description: 'Family-sized home with attic, garage, or yard items.',
    items: {
      'Small boxes': 50,
      'Medium boxes': 40,
      'Large boxes': 20,
      'Wardrobe boxes': 6,
      'Dish pack boxes': 8,
      'Bubble wrap': 5,
      'Packing paper 25lb': 3,
      Tape: 10,
    },
  },
  {
    id: '4br-house',
    propertyType: 'house',
    label: '4 Bedrooms',
    description: 'Large home — plan extra time for packing common areas.',
    items: {
      'Small boxes': 60,
      'Medium boxes': 50,
      'Large boxes': 30,
      'Wardrobe boxes': 8,
      'Dish pack boxes': 10,
      'Bubble wrap': 6,
      'Packing paper 25lb': 4,
      Tape: 12,
    },
  },
];

export type SupplyExtraId = 'kitchen' | 'closet' | 'office';

export const SUPPLY_EXTRAS: {
  id: SupplyExtraId;
  label: string;
  description: string;
  items: Partial<Record<SupplyKey, number>>;
}[] = [
    {
      id: 'kitchen',
      label: 'Big kitchen',
      description: 'Extra dishes, small appliances, pantry',
      items: { 'Dish pack boxes': 2, 'Bubble wrap': 1, 'Packing paper 10lb': 1 },
    },
    {
      id: 'closet',
      label: 'Lots of clothes',
      description: 'Walk-in closets or seasonal wardrobes',
      items: { 'Wardrobe boxes': 2, 'Medium boxes': 4 },
    },
    {
      id: 'office',
      label: 'Home office',
      description: 'Desk, files, monitors, and cables',
      items: { 'Small boxes': 4, 'Medium boxes': 2, 'Bubble wrap': 1 },
    },
  ];

export function getSupplyTotal(items: Partial<Record<SupplyKey, number>>): number {
  let total = 0;
  for (const [key, qty] of Object.entries(items)) {
    const price = SUPPLY_UNIT_PRICES[key as SupplyKey];
    if (price && qty) total += price * qty;
  }
  return total;
}

export function mergeSupplyItems(
  base: Partial<Record<SupplyKey, number>>,
  ...extras: Partial<Record<SupplyKey, number>>[]
): Partial<Record<SupplyKey, number>> {
  const merged = { ...base };
  for (const extra of extras) {
    for (const [key, qty] of Object.entries(extra)) {
      const supplyKey = key as SupplyKey;
      merged[supplyKey] = (merged[supplyKey] ?? 0) + (qty ?? 0);
    }
  }
  return merged;
}

export const SUPPLY_DISPLAY_ORDER: SupplyKey[] = [
  'Small boxes',
  'Medium boxes',
  'Large boxes',
  'Wardrobe boxes',
  'Dish pack boxes',
  'Bubble wrap',
  'Packing paper 10lb',
  'Packing paper 25lb',
  'Tape',
];

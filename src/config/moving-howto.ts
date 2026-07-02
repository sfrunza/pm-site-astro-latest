import { SITE } from "./site";

export type MovingStep = {
  stepNumber: string;
  title: string;
  description: string;
};

export const movingHowToSteps: MovingStep[] = [
  {
    stepNumber: '01',
    title: 'Call or Book Online',
    description:
      `Call ${SITE.contactPhone} or book your move online. We'll give you a transparent, no-obligation estimate in minutes.`,
  },
  {
    stepNumber: '02',
    title: 'Book Your Move Date',
    description:
      'Choose a date and time that works for you. We offer flexible scheduling including weekends and evenings.',
  },
  {
    stepNumber: '03',
    title: 'Professional Move Day',
    description:
      'Our crew arrives on time, fully equipped. We protect your floors, walls, and furniture before anything moves.',
  },
  {
    stepNumber: '04',
    title: 'Delivery Guarantee',
    description:
      'We place every box and piece of furniture exactly where you want it, and reassemble anything we took apart. Done.',
  },
];

export const movingHowToSchemaSteps = movingHowToSteps.map((step) => ({
  name: step.title,
  text: step.description,
}));

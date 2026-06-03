export type MovingStep = {
  stepNumber: string;
  title: string;
  description: string;
};

export const movingHowToSteps: MovingStep[] = [
  {
    stepNumber: '01',
    title: 'Get a Free Quote',
    description:
      "Fill out our quick online form or call us. We'll give you a transparent, no-obligation estimate in minutes.",
  },
  {
    stepNumber: '02',
    title: 'Book Your Move Date',
    description:
      'Choose a date and time that works for you. We offer flexible scheduling including weekends and evenings.',
  },
  {
    stepNumber: '03',
    title: 'We Pack & Load',
    description:
      'Our crew arrives on time, fully equipped. We protect your floors, walls, and furniture before anything moves.',
  },
  {
    stepNumber: '04',
    title: 'Settle Into Your New Home',
    description:
      'We unload, place furniture exactly where you want it, and reassemble anything we took apart. Done.',
  },
];

export const movingHowToSchemaSteps = movingHowToSteps.map((step) => ({
  name: step.title,
  text: step.description,
}));

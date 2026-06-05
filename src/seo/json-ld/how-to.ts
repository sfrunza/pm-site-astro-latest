import { SITE } from '@/config/site';

export function buildHowToJsonLd(
  pathname: string,
  name: string,
  description: string,
  steps: { name: string; text: string }[],
): Record<string, unknown> {
  const url = `${SITE.url}${pathname}`;
  return {
    '@type': 'HowTo',
    '@id': `${url}#howto`,
    url,
    name,
    description,
    totalTime: 'PT8H',
    tool: [{ '@type': 'HowToTool', name: 'Moving blankets, dollies, and straps' }],
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

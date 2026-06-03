const WORDS_PER_MINUTE = 200;

export function countWords(text: string): number {
  const stripped = text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#*_~\[\]()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!stripped) return 0;
  return stripped.split(' ').filter(Boolean).length;
}

export function getReadingTimeMinutes(text: string): number {
  const words = countWords(text);
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function formatReadingTime(text: string): string {
  const minutes = getReadingTimeMinutes(text);
  return `${minutes} min read`;
}

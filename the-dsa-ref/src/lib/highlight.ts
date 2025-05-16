import { createHighlighter } from 'shiki';

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;

export async function highlightCode(code: string, lang: string = 'ts') {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({ themes: ['nord'], langs: ['javascript'] });
  }

  const highlighter = await highlighterPromise;
  return highlighter.codeToHtml(code, { lang, theme: 'nord' });
}
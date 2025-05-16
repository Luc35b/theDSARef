'use client';

import { useEffect, useState } from 'react';
import { highlightCode } from '@/lib/highlight';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'typescript' }: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    const highlight = async () => {
      const result = await highlightCode(code.trim(), language);
      setHighlightedCode(result);
    };
    highlight();
  }, [code, language]);

  return (
    <div className="rounded-md overflow-hidden my-4">
      <div 
        className="!m-0 p-4 bg-[#2E3440]"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
}

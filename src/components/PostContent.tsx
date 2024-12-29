import React from 'react';
import ReactMarkdown from 'react-markdown';

interface PostContentProps {
  markdown: string;
}

export function PostContent({ markdown }: PostContentProps) {
  return (
    <article className="prose prose-indigo max-w-none">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
  );
}
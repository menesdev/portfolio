import { marked } from 'marked';

// Configure marked options
marked.setOptions({
  gfm: true, // GitHub Flavored Markdown
  breaks: true, // Convert \n to <br>
  sanitize: true, // Sanitize HTML tags
});

export const parseMarkdown = (markdown: string): string => {
  return marked(markdown);
};

export const extractExcerpt = (markdown: string, maxLength: number = 160): string => {
  // Remove markdown syntax and get plain text
  const text = markdown
    .replace(/#+\s/g, '') // Remove headers
    .replace(/(?:__|[*#])|\[(.*?)\]\(.*?\)/g, '$1') // Remove bold, italic, links
    .replace(/\n/g, ' ') // Replace newlines with spaces
    .trim();

  // Get first few sentences
  return text.length > maxLength
    ? `${text.slice(0, maxLength)}...`
    : text;
};
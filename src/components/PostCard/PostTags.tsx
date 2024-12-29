import React from 'react';

interface PostTagsProps {
  tags?: string[];
}

export function PostTags({ tags }: PostTagsProps) {
  if (!tags?.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map(tag => (
        <span 
          key={tag}
          className="px-2 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
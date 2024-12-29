import React from 'react';
import { Calendar } from 'lucide-react';

interface PostMetaProps {
  author: string;
  date: string;
}

export function PostMeta({ author, date }: PostMetaProps) {
  return (
    <div className="flex items-center text-sm text-gray-500">
      <Calendar className="h-4 w-4 mr-2" />
      <time>{new Date(date).toLocaleDateString()}</time>
      <span className="mx-2">•</span>
      <span>{author}</span>
    </div>
  );
}
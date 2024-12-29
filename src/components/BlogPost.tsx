import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Post } from '../utils/markdown';

interface BlogPostProps {
  post: Post;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="prose lg:prose-xl mx-auto px-4">
      <header className="mb-8">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="flex items-center text-gray-600">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <time>{new Date(post.date).toLocaleDateString()}</time>
        </div>
      </header>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={post.imageUrl} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-indigo-600 transition-colors">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-2" />
          <time>{new Date(post.date).toLocaleDateString()}</time>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        {post.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="px-2 py-1 text-xs bg-indigo-50 text-indigo-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
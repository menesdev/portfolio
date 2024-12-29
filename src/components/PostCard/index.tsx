import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import { PostMeta } from './PostMeta';
import { PostTags } from './PostTags';

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
        <PostMeta author={post.author} date={post.date} />
        <PostTags tags={post.tags} />
      </div>
    </article>
  );
}
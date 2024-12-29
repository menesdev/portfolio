import React from 'react';
import { PostCard } from './PostCard';
import { usePosts } from '../hooks/usePosts';
import { Loader } from 'lucide-react';

export function PostGrid() {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader className="h-8 w-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { PostCard } from './PostCard';
import { usePosts } from '../hooks/usePosts';
import { Loader } from 'lucide-react';

export function FeaturedPosts() {
  const { posts, loading, error } = usePosts();
  const featuredPosts = posts.slice(0, 2);

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
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Posts</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hand-picked articles worth reading
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="relative">
              <PostCard post={post} />
              <div className="absolute top-4 right-4">
                <span className="px-4 py-1 bg-indigo-600 text-white text-sm font-semibold rounded-full">
                  Featured
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            View all posts
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
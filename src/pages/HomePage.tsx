import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedPosts } from '../components/FeaturedPosts';
import { PostGrid } from '../components/PostGrid';

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Latest Articles
            </h2>
            <p className="mt-3 text-xl text-gray-500">
              Discover insights and tutorials about web development
            </p>
          </div>
          <PostGrid />
        </div>
      </section>
    </>
  );
}
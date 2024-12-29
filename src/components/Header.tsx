import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <Logo className="h-10 w-10 transform group-hover:rotate-12 transition-transform duration-200" />
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                menesdev
              </h1>
              <p className="text-sm text-gray-500">Full Stack Developer</p>
            </div>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
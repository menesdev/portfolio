import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Twitter } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white" />
      </div>
      <div className="relative pt-24 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Mustafa
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              A passionate full-stack developer crafting beautiful and functional web experiences.
              Exploring the world of web development through tutorials, insights, and best practices.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/projects"
                className="rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:from-indigo-500 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="text-sm font-semibold leading-6 text-gray-900 flex items-center group"
              >
                Contact Me{' '}
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="mt-10 flex justify-center space-x-6">
              <a
                href="https://github.com/menesdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/menesdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Github, ExternalLink, Loader } from 'lucide-react';
import { useProjects } from '../hooks/useProjects';

export function ProjectsPage() {
  const { projects, loading, error } = useProjects();

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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.githubUrl} className="flex items-center text-gray-700 hover:text-indigo-600">
                  <Github className="h-5 w-5 mr-2" />
                  Code
                </a>
                <a href={project.liveUrl} className="flex items-center text-gray-700 hover:text-indigo-600">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
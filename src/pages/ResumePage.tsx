import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Resume</h1>
      
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Briefcase className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-semibold">Work Experience</h2>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
            <p className="text-gray-600">Tech Corp • 2020 - Present</p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>Led development of multiple React applications</li>
              <li>Implemented CI/CD pipelines</li>
              <li>Mentored junior developers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center mb-6">
          <GraduationCap className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">BSc Computer Science</h3>
          <p className="text-gray-600">University of Technology • 2016 - 2020</p>
        </div>
      </section>

      <section>
        <div className="flex items-center mb-6">
          <Award className="h-6 w-6 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-semibold">Skills</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Docker'].map((skill) => (
            <div key={skill} className="bg-white p-4 rounded-lg shadow text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
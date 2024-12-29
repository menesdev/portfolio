import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PenLine, Home, Briefcase, Gamepad2, Mail } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  const links = [
    { name: 'Home', to: '/', icon: Home },
    { name: 'Projects', to: '/projects', icon: Briefcase },
    { name: 'Resume', to: '/resume', icon: PenLine },
    { name: 'Mini-Game', to: '/game', icon: Gamepad2 },
    { name: 'Contact', to: '/contact', icon: Mail },
  ];

  return (
    <nav className="flex space-x-6">
      {links.map(({ name, to, icon: Icon }) => (
        <Link
          key={name}
          to={to}
          className={`flex items-center space-x-2 transition-colors ${
            location.pathname === to
              ? 'text-indigo-600'
              : 'text-gray-600 hover:text-indigo-600'
          }`}
        >
          <Icon className="h-5 w-5" />
          <span>{name}</span>
        </Link>
      ))}
    </nav>
  );
}
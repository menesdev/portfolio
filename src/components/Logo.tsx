import React from 'react';

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* First M stroke */}
      <path
        d="M20 80V20H35L50 60L65 20H80V80"
        className="stroke-indigo-600"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Second M stroke with gradient */}
      <path
        d="M20 80V20H35L50 60L65 20H80V80"
        className="stroke-purple-600 opacity-40"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
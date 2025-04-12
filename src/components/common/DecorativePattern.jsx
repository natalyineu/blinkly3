import React, { useId } from 'react';

const DecorativePattern = ({ className }) => {
  const patternId = useId(); // Generate unique ID for each pattern
  
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <div className="w-full h-full opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id={`pattern-circles-${patternId}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill={`url(#pattern-circles-${patternId})`} />
        </svg>
      </div>
    </div>
  );
};

export default DecorativePattern; 
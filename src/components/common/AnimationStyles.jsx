import React from 'react';

// Animation utility classes to be reused throughout the app
const AnimationStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    .animate-fade-in {
      animation: fadeIn 0.6s ease-out forwards;
    }
    .animate-fade-in-fast {
      animation: fadeIn 0.3s ease-out forwards;
    }
    .animate-fade-in-slow {
      animation: fadeIn 1.2s ease-out forwards;
    }
    .animate-fade-out {
      animation: fadeOut 0.8s ease-out forwards;
    }
    @keyframes ellipsis {
      0% { content: '.'; }
      33% { content: '..'; }
      66% { content: '...'; }
    }
    .animate-ellipsis::after {
      content: '.';
      animation: ellipsis 1.5s infinite steps(1);
    }
  `}} />
);

export default AnimationStyles; 
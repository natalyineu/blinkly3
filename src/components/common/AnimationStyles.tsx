"use client";

import React from 'react';

const AnimationStyles = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
        
        .animate-delay-100 {
          animation-delay: 100ms;
        }
        
        .animate-delay-300 {
          animation-delay: 300ms;
        }
        
        .animate-delay-500 {
          animation-delay: 500ms;
        }
      `
    }} />
  );
};

export default AnimationStyles; 
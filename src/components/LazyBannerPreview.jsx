import React from 'react';

// This component is lazy loaded to demonstrate code splitting
export default function LazyBannerPreview({ data, input }) {
  return (
    <div className="animate-fade-in">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-40 flex items-center justify-center">
        <span className="text-white text-xl font-bold px-4 text-center">{input}</span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{data.headline}</h3>
        <p className="text-gray-600 text-sm mb-3">{data.subheadline}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 text-sm rounded transition-colors duration-200">
          {data.cta}
        </button>
      </div>
    </div>
  );
} 
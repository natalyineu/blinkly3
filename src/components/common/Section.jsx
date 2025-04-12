import React from 'react';

export const Section = ({ title, icon, children, delay = 0, isActive = true, isLoading = false, compact = false }) => {
  const Icon = icon;
  
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out ${compact ? 'mb-4' : 'mb-6'} ${
      isActive ? 'opacity-100 scale-100' : 'opacity-70 scale-98'
    }`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white px-4 py-3 flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-800 flex items-center">
          <div className="bg-blue-50 p-1.5 rounded-md text-blue-600 mr-2">
            <Icon className="h-4 w-4" />
          </div>
          {title}
        </h2>
        {isLoading && (
          <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
        )}
      </div>
      <div className={`${compact ? 'p-4' : 'p-5'} relative`}>
        {children}
      </div>
    </div>
  );
}; 
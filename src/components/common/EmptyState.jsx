import React from 'react';
import { Image, AlertTriangle } from 'lucide-react';

const EmptyState = ({ onExampleClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden py-10 px-6 text-center animate-fade-in">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
          <Image className="w-10 h-10 text-blue-500" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Start creating your ad</h3>
      <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
        Enter your product or service name to generate AI-powered ad content.
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button 
          onClick={() => onExampleClick("Fitness App")}
          className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors duration-200"
        >
          Fitness App
        </button>
        <button 
          onClick={() => onExampleClick("Online Course")}
          className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors duration-200"
        >
          Online Course
        </button>
        <button 
          onClick={() => onExampleClick("Smart Home Device")}
          className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors duration-200"
        >
          Smart Home Device
        </button>
      </div>
      <div className="text-xs text-gray-400 flex justify-center items-center">
        <AlertTriangle className="w-3 h-3 mr-1" /> 
        Results are simulated for demonstration purposes
      </div>
    </div>
  );
};

export default EmptyState; 
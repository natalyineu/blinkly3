"use client";

import React from 'react';
import { MoveRight } from 'lucide-react';

interface InputSectionProps {
  input: string;
  setInput: (input: string) => void;
  isLoading: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  handleExampleClick: (example: string) => void;
  error: string | null;
  hasSeenTip: boolean;
}

const InputSection: React.FC<InputSectionProps> = ({
  input,
  setInput,
  isLoading,
  handleSubmit,
  handleExampleClick,
  error,
  hasSeenTip
}) => {
  // Example products and brands
  const examples = [
    "Ergonomic office chair",
    "Eco-friendly water bottle",
    "Wireless earbuds",
    "Smart home security",
    "Plant-based protein"
  ];
  
  return (
    <div className="w-full bg-white rounded-xl shadow-sm p-6 border border-gray-200">
      <div className="mb-4">
        <h2 className="text-lg font-medium text-gray-900">Generate Ad</h2>
        <p className="text-sm text-gray-500 mt-1">
          Enter your product, service, or URL to generate AI-powered ad copy and banners
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="mt-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. Organic coffee beans, handmade jewelry, etc."
              className={`w-full p-3 border ${error ? 'border-red-300' : 'border-gray-300'} 
                rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 
                placeholder-gray-400 text-sm`}
              disabled={isLoading}
            />
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600">{error}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center py-3 px-4 
            border border-transparent rounded-md shadow-sm text-sm font-medium 
            text-white bg-blue-600 hover:bg-blue-700 focus:outline-none 
            focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              Generate Ad
              <MoveRight className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </form>
      
      {!hasSeenTip && (
        <div className="mt-5 pt-4 border-t border-gray-100">
          <div className="bg-blue-50 rounded-lg p-3 text-xs text-blue-800">
            <p className="font-medium mb-1">💡 Pro tip</p>
            <p>For best results, be specific about your product and target audience.</p>
          </div>
        </div>
      )}
      
      <div className="mt-5 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 mb-2 font-medium">Try an example:</p>
        <div className="flex flex-wrap gap-2">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example)}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-full transition-colors"
              disabled={isLoading}
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputSection; 
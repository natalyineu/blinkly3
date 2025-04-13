"use client";

import React from 'react';
import { Rocket } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  examples?: string[];
  onExampleClick?: (example: string) => void;
  showTip?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  examples = [],
  onExampleClick,
  showTip = false
}) => {
  return (
    <div className="mt-6 border border-gray-200 bg-white rounded-xl p-6 shadow-sm">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 rounded-full bg-blue-50 p-3">
          <Rocket className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        
        {examples.length > 0 && (
          <div className="w-full space-y-2">
            <p className="text-xs text-gray-500 mb-2 font-medium">Try an example:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => onExampleClick?.(example)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-full transition-colors"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {showTip && (
          <div className="mt-5 w-full pt-4 border-t border-gray-100">
            <div className="bg-blue-50 rounded-lg p-3 text-xs text-blue-800">
              <p className="font-medium mb-1">💡 Pro tip</p>
              <p>For best results, be specific about your brand and target audience.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmptyState; 
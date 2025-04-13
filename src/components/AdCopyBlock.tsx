"use client";

import React from 'react';
import { Copy, Check } from 'lucide-react';

interface AdCopy {
  headline: string;
  description: string;
  cta: string;
}

interface AdCopyBlockProps {
  adCopy: AdCopy[];
  handleCopy: (text: string, index: number) => void;
  copyStatus: {
    success: boolean;
    error: Error | null;
    index: number | null;
  };
  animationStage: number;
}

const AdCopyBlock: React.FC<AdCopyBlockProps> = ({
  adCopy,
  handleCopy,
  copyStatus,
  animationStage
}) => {
  return (
    <div className="mt-6 bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-base font-medium text-gray-900">Ad Copy</h3>
        <p className="mt-1 text-sm text-gray-500">Ready-to-use copy for your campaigns</p>
      </div>
      
      <div>
        {adCopy.map((ad, index) => {
          const fullText = `${ad.headline}\n\n${ad.description}\n\n${ad.cta}`;
          const isCopied = copyStatus.success && copyStatus.index === index;
          
          return (
            <div
              key={index}
              className={`p-6 ${index !== adCopy.length - 1 ? 'border-b border-gray-200' : ''} 
                ${animationStage >= 2 ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${100 + (index * 150)}ms` }}
            >
              <div className="flex justify-between items-start">
                <div className="space-y-2 flex-1">
                  <h4 className="font-medium text-gray-900">{ad.headline}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{ad.description}</p>
                  <div className="bg-gray-100 inline-block px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                    {ad.cta}
                  </div>
                </div>
                
                <button
                  onClick={() => handleCopy(fullText, index)}
                  className="ml-4 p-2 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100 transition-colors"
                  title="Copy to clipboard"
                >
                  {isCopied ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdCopyBlock; 
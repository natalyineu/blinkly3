"use client";

import React from 'react';
import { BrainCircuit } from 'lucide-react';

interface AIInsightsProps {
  insights: string;
  animationStage: number;
}

const AIInsights: React.FC<AIInsightsProps> = ({ insights, animationStage }) => {
  return (
    <div 
      className={`w-full bg-blue-50 rounded-xl p-5 border border-blue-100 
        ${animationStage >= 1 ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="flex items-start">
        <div className="mr-3 mt-1">
          <BrainCircuit className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-sm font-medium text-blue-800 mb-1">AI Insights</h3>
          <p className="text-sm text-blue-700 leading-relaxed">{insights}</p>
        </div>
      </div>
    </div>
  );
};

export default AIInsights; 
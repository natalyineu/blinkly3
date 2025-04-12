import React, { forwardRef } from 'react';
import { BarChart2, ThumbsUp, TrendingUp, Target, CheckCircle } from 'lucide-react';
import { Section } from './common/Section';
import ErrorBoundary from './common/ErrorBoundary';

const AIInsights = forwardRef(({ results, isLoading, animationStage }, ref) => {
  return (
    <ErrorBoundary>
      <div className={`transform transition-all duration-500 ease-out ${animationStage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} ref={ref}>
        <Section title="AI Insights" icon={BarChart2} isActive={!!results || isLoading} isLoading={isLoading} compact={true}>
          <div className="space-y-2.5">
            {isLoading ? (
              <div className="animate-pulse space-y-2">
                <div className="h-3.5 bg-gray-200 rounded w-full"></div>
                <div className="h-3.5 bg-gray-200 rounded w-5/6"></div>
                <div className="h-3.5 bg-gray-200 rounded w-4/6"></div>
              </div>
            ) : results ? (
              <div className="relative pt-5 pr-5">
                <div className="absolute top-0 right-0">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <ThumbsUp className="mr-1 h-3 w-3" /> 97% match
                  </span>
                </div>
                <div className="space-y-2.5">
                  <p className="text-gray-700 leading-relaxed text-sm font-medium">
                    {results.insights}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 pt-3 border-t border-gray-100">
                    <div className="bg-blue-50 rounded-lg p-2 flex items-center">
                      <div className="rounded-full bg-blue-100 p-1.5 mr-2 flex-shrink-0">
                        <TrendingUp className="text-blue-600 h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-blue-900">High CTR</div>
                        <div className="text-xs text-blue-700">Predicted 5.2%</div>
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-2 flex items-center">
                      <div className="rounded-full bg-purple-100 p-1.5 mr-2 flex-shrink-0">
                        <Target className="text-purple-600 h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-purple-900">Targeted</div>
                        <div className="text-xs text-purple-700">Primary audience</div>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-2 flex items-center">
                      <div className="rounded-full bg-green-100 p-1.5 mr-2 flex-shrink-0">
                        <CheckCircle className="text-green-600 h-3.5 w-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-green-900">On Brand</div>
                        <div className="text-xs text-green-700">92% confidence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-4 text-center">
                <BarChart2 className="text-gray-300 text-2xl mb-2" />
                <p className="text-gray-500 text-xs max-w-md">
                  Generate to see AI-powered insights for your ad campaign
                </p>
              </div>
            )}
          </div>
        </Section>
      </div>
    </ErrorBoundary>
  );
});

AIInsights.displayName = 'AIInsights';

export default AIInsights; 
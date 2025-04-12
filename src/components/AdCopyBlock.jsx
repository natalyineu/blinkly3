import React, { useRef } from 'react';
import { Copy, Award, Target, CheckCircle, AlertTriangle, Zap, Camera } from 'lucide-react';
import { Section } from './common/Section';
import ErrorBoundary from './common/ErrorBoundary';
import { exportTextAdAsPNG } from '../utils/exportUtils';

const AdCopyBlock = ({ 
  results, 
  isLoading, 
  animationStage, 
  handleCopy,
  copyStatus,
  handleRegenerate 
}) => {
  // Create refs for each ad
  const adRefs = useRef([]);
  
  return (
    <ErrorBoundary>
      <div className={`transform transition-all duration-500 ease-out ${animationStage >= 2 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
        <Section title="Generated Ad Copy" icon={Copy} isActive={!!results || isLoading} isLoading={isLoading} compact={true}>
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="animate-pulse space-y-2">
                <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3.5 bg-gray-200 rounded w-full"></div>
                <div className="h-3.5 bg-gray-200 rounded w-3/4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/3 mt-3"></div>
              </div>
              <div className="animate-pulse space-y-2">
                <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3.5 bg-gray-200 rounded w-full"></div>
                <div className="h-3.5 bg-gray-200 rounded w-3/4"></div>
                <div className="h-8 bg-gray-200 rounded w-1/3 mt-3"></div>
              </div>
            </div>
          ) : results ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
                {results.adCopy.map((copy, index) => (
                  <div 
                    key={index} 
                    className="animate-fade-in border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-gray-50 transform hover:-translate-y-1 hover:scale-[1.01] mb-3 sm:mb-0 relative"
                  >
                    <div 
                      ref={el => adRefs.current[index] = el} 
                      className="relative"
                    >
                      <div className="badge-container absolute top-0 right-0 z-10">
                        {index === 0 && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            <Award className="mr-1 h-3 w-3" /> Best Match
                          </span>
                        )}
                        {index === 1 && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <Target className="mr-1 h-3 w-3" /> Alternative
                          </span>
                        )}
                      </div>
                      <div className="pt-6 mb-1.5">
                        <h3 className="font-bold text-blue-800 text-lg tracking-tight">{copy.headline}</h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {copy.description}
                      </p>
                      <div className="flex items-center mt-2 pt-2 border-t border-gray-100">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 flex items-center">
                          <Zap className="mr-1.5 h-3 w-3" /> {copy.cta}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-100">
                      <button 
                        className="text-blue-600 hover:text-blue-800 px-2 py-1 text-xs flex items-center rounded hover:bg-blue-50 transition-colors duration-200" 
                        onClick={(e) => {
                          e.preventDefault();
                          handleCopy(index, copy.headline, copy.description);
                        }}
                        aria-label={`Copy ad copy version ${index + 1}`}
                      >
                        {copyStatus[index] ? (
                          <span className="animate-fade-in-fast"><CheckCircle className="mr-1 h-3 w-3 text-green-500" /> Copied!</span>
                        ) : (
                          <><Copy className="mr-1 h-3 w-3" /> Copy text</>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Controls */}
              <div className="flex flex-wrap justify-between items-center pt-4 border-t border-gray-100">
                <div className="flex space-x-2 mb-2 sm:mb-0">
                  <button 
                    onClick={() => exportTextAdAsPNG(adRefs.current[0], 'ad-copy-best-match', 0)} 
                    className="inline-flex items-center px-2 py-1.5 text-xs font-medium rounded text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                    title="Export as PNG"
                  >
                    <Camera className="mr-1 h-3 w-3" /> Export Best Match
                  </button>
                  
                  <button 
                    onClick={() => exportTextAdAsPNG(adRefs.current[1], 'ad-copy-alternative', 1)}
                    className="inline-flex items-center px-2 py-1.5 text-xs font-medium rounded text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                    title="Export as PNG"
                  >
                    <Camera className="mr-1 h-3 w-3" /> Export Alternative
                  </button>
                </div>
                
                <button 
                  onClick={handleRegenerate} 
                  className="inline-flex items-center px-2 py-1.5 text-xs font-medium rounded text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                >
                  <Zap className="mr-1 h-3 w-3" /> Regenerate Variants
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <Copy className="text-gray-300 text-2xl mb-2" />
              <p className="text-gray-500 text-xs max-w-md">
                Generate ad copy with AI that converts visitors into customers.
              </p>
            </div>
          )}
        </Section>
      </div>
    </ErrorBoundary>
  );
};

export default AdCopyBlock; 
import React from 'react';
import { Search, AlertTriangle, Zap, Send, Cpu } from 'lucide-react';
import { Section } from './common/Section';
import ErrorBoundary from './common/ErrorBoundary';

const InputSection = ({ 
  input, 
  setInput, 
  error, 
  isLoading, 
  hasSeenTip, 
  handleSubmit 
}) => {
  return (
    <div className="w-full sm:w-1/2 sm:max-w-xl mb-5 sm:mb-0 relative">
      <ErrorBoundary>
        <Section title="Create Your Ad" icon={Cpu} compact={true}>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="product-input" className="block text-sm font-medium text-gray-700 mb-1 tracking-tight">
                Enter your product, service or website
              </label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  id="product-input"
                  className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-medium"
                  placeholder="e.g. Fitness App, Online Course, etc."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={isLoading}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 sm:text-sm">
                    <Send className="h-4 w-4" />
                  </span>
                </div>
              </div>
              {error && (
                <p className="mt-1 text-xs text-red-600 flex items-center font-medium">
                  <AlertTriangle className="mr-1 flex-shrink-0 h-3 w-3" /> {error}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                For best results, be specific about your product or service
              </p>
            </div>
            <div className="flex items-center justify-end space-x-3">
              <button
                type="submit"
                className={`px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm text-sm font-medium flex items-center justify-center transition-all duration-300 ${
                  isLoading ? 'opacity-80 cursor-not-allowed' : 'hover:bg-blue-700 hover:shadow-md'
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="mr-1.5 animate-spin">
                      <svg className="h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                    Generating<span className="animate-ellipsis">...</span>
                  </>
                ) : (
                  <>
                    <Zap className="mr-1.5 h-3.5 w-3.5" />
                    Generate Ad
                  </>
                )}
              </button>
            </div>
          </form>
        </Section>
        
        {/* Pro tip outside the card - only shown once */}
        {!hasSeenTip && (
          <div 
            className="hidden sm:block absolute -bottom-4 right-4 transform transition-all duration-500 ease-out animate-fade-in-slow"
            style={{ 
              opacity: isLoading ? '0' : '1', 
              transform: isLoading ? 'translateY(-5px)' : 'translateY(0)',
              pointerEvents: 'none'
            }}
          >
            <div className="bg-blue-100 text-blue-800 text-xs font-medium py-1.5 px-4 rounded-full shadow-sm whitespace-nowrap">
              Pro tip: Be specific with your product name
            </div>
          </div>
        )}
      </ErrorBoundary>
    </div>
  );
};

export default InputSection; 
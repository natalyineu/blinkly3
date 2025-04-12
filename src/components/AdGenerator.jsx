import React, { useState, useEffect, useRef } from 'react';
import { Rocket } from 'lucide-react';
import ErrorBoundary from './common/ErrorBoundary';
import InputSection from './InputSection';
import AIInsights from './AIInsights';
import AdCopyBlock from './AdCopyBlock';
import BannerSection from './BannerSection';
import SocialPreview from './SocialPreview';
import EmptyState from './common/EmptyState';
import AnimationStyles from './common/AnimationStyles';
import { copyToClipboard } from '../utils/clipboardUtils';

// Mock API call to simulate backend processing
const mockGenerateAd = async (input) => {
  return new Promise((resolve, reject) => {
    // Randomly fail sometimes to test error handling
    if (Math.random() < 0.05) {
      reject(new Error('API request failed'));
      return;
    }
    
    setTimeout(() => {
      resolve({
        insights: `Based on "${input}", we've analyzed market trends and identified key selling points. Your target audience responds well to messages highlighting quality, innovation, and value.`,
        adCopy: [
          {
            headline: `Experience the Power of ${input}`,
            description: `Discover why ${input} is revolutionizing the industry with its innovative approach and unmatched quality. Join thousands of satisfied customers who have already made the switch.`,
            cta: 'Shop Now'
          },
          {
            headline: `${input}: The Smart Choice`,
            description: `Why settle for less when you can have the best? ${input} delivers superior results with less effort. Try it today and see the difference for yourself.`,
            cta: 'Get Started'
          }
        ],
        banner: {
          headline: `Premium ${input}`,
          subheadline: 'Crafted for those who demand excellence',
          cta: 'Learn More'
        }
      });
    }, 1500); // Simulate network delay
  });
};

export default function AdGenerator() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);
  const [copyStatus, setCopyStatus] = useState({ success: false, error: null, index: null });
  const [animationStage, setAnimationStage] = useState(0); // Controls staggered animations
  const [hasSeenTip, setHasSeenTip] = useState(false);
  const [regenerationCount, setRegenerationCount] = useState(0); // Track regenerations
  const resultsRef = useRef(null);
  
  // Mock variations for regenerate function
  const adCopyVariations = [
    [
      {
        headline: variation => `Experience the Power of ${variation}`,
        description: variation => `Discover why ${variation} is revolutionizing the industry with its innovative approach and unmatched quality. Join thousands of satisfied customers who have already made the switch.`,
        cta: 'Shop Now'
      },
      {
        headline: variation => `${variation}: The Smart Choice`,
        description: variation => `Why settle for less when you can have the best? ${variation} delivers superior results with less effort. Try it today and see the difference for yourself.`,
        cta: 'Get Started'
      }
    ],
    [
      {
        headline: variation => `Introducing ${variation}`,
        description: variation => `Transform your experience with ${variation}, designed to exceed expectations and deliver results. See why it's becoming the #1 choice in the industry.`,
        cta: 'Learn More'
      },
      {
        headline: variation => `Unlock the Potential of ${variation}`,
        description: variation => `${variation} offers premium features that help you achieve your goals faster. Join our growing community of satisfied users today.`,
        cta: 'Join Now'
      }
    ],
    [
      {
        headline: variation => `${variation} - Elevate Your Experience`,
        description: variation => `Designed for those who demand excellence, ${variation} combines cutting-edge technology with user-friendly features. The result is an unparalleled experience.`,
        cta: 'Explore'
      },
      {
        headline: variation => `The Future is Here with ${variation}`,
        description: variation => `Stay ahead of the curve with ${variation}. Our innovative approach sets new standards in the industry, giving you the competitive edge.`,
        cta: 'Get Access'
      }
    ]
  ];
  
  const ctaVariations = ['Get Started', 'Learn More', 'Try Now', 'Explore', 'Sign Up', 'Discover'];
  const themeColors = ['blue', 'purple', 'teal', 'green', 'orange'];
  
  useEffect(() => {
    // Reset animation stage when loading starts
    if (isLoading) {
      setAnimationStage(0);
    }
    
    // Set animation stages with delays when results arrive
    if (results && !isLoading) {
      const timer1 = setTimeout(() => setAnimationStage(1), 100);
      const timer2 = setTimeout(() => setAnimationStage(2), 600);
      const timer3 = setTimeout(() => setAnimationStage(3), 1000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isLoading, results]);
  
  // Clear error message when input changes
  useEffect(() => {
    if (error) {
      setError(null);
    }
  }, [input, error]);
  
  const handleExampleClick = (exampleInput) => {
    setInput(exampleInput);
    handleGenerate(exampleInput);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!input.trim()) {
      setError('Please enter a product name or URL');
      return;
    }
    
    handleGenerate(input);
  };
  
  const handleGenerate = async (inputText) => {
    // Hide tip after first generation
    setHasSeenTip(true);
    
    try {
      setIsLoading(true);
      setError(null);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Get the variation set based on regeneration count
      const variationIndex = regenerationCount % adCopyVariations.length;
      const variations = adCopyVariations[variationIndex];
      
      // Randomly select CTAs and colors for variety
      const randomCta1 = ctaVariations[Math.floor(Math.random() * ctaVariations.length)];
      const randomCta2 = ctaVariations[Math.floor(Math.random() * ctaVariations.length)];
      const randomTheme = themeColors[Math.floor(Math.random() * themeColors.length)];
      
      // Generate mock data with the current variation set
      const data = {
        insights: `Based on "${inputText}", we've analyzed market trends and identified key selling points. Your target audience responds well to messages highlighting quality, innovation, and value.`,
        adCopy: [
          {
            headline: variations[0].headline(inputText),
            description: variations[0].description(inputText),
            cta: variations[0].cta || randomCta1
          },
          {
            headline: variations[1].headline(inputText),
            description: variations[1].description(inputText),
            cta: variations[1].cta || randomCta2
          }
        ],
        banner: {
          headline: `Premium ${inputText}`,
          subheadline: 'Crafted for those who demand excellence',
          cta: 'Learn More',
          theme: randomTheme
        }
      };
      
      setResults(data);
      
      // Scroll to results after generation
      setTimeout(() => {
        if (resultsRef.current) {
          resultsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 600);
    } catch (err) {
      setError('Failed to generate ad. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleRegenerate = () => {
    setRegenerationCount(prev => prev + 1);
    handleGenerate(input);
  };

  const handleCopy = (text, index) => {
    copyToClipboard(
      text,
      () => {
        setCopyStatus({ success: true, error: null, index });
        setTimeout(() => setCopyStatus({ success: false, error: null, index: null }), 2000);
      },
      (err) => {
        setCopyStatus({ success: false, error: err, index });
        setTimeout(() => setCopyStatus({ success: false, error: null, index: null }), 3000);
      }
    );
  };

  return (
    <ErrorBoundary>
      <div className="container mx-auto px-6 py-5 max-w-[1260px] font-sans">
        {/* Add animation styles */}
        <AnimationStyles />
        
        {/* AdRocket Branding Header */}
        <header className="mb-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-8 h-8 rounded-lg shadow-md flex items-center justify-center text-white">
                <Rocket className="w-5 h-5" />
              </div>
              <h1 className="text-xl font-extrabold text-blue-600 tracking-tight">
                AdRocket
              </h1>
            </div>
            <p className="text-xs text-gray-600 font-medium">
              AI-powered ad generation
            </p>
          </div>
        </header>
        
        {/* Top blocks container - side by side on desktop */}
        <div className="flex flex-col sm:flex-row sm:space-x-5 mb-5">
          {/* Input Section */}
          <InputSection 
            input={input}
            setInput={setInput}
            error={error}
            isLoading={isLoading}
            hasSeenTip={hasSeenTip}
            handleSubmit={handleSubmit}
          />

          {/* AI Insights Section */}
          <div className="w-full sm:flex-1">
            <AIInsights 
              results={results}
              isLoading={isLoading}
              animationStage={animationStage}
              ref={resultsRef}
            />
          </div>
        </div>
        
        <div className="space-y-5">
          {(!results && !isLoading) ? (
            // Empty State when no results
            <EmptyState onExampleClick={handleExampleClick} />
          ) : (
            <>
              {/* Ad Copy Block */}
              <AdCopyBlock 
                results={results}
                isLoading={isLoading}
                animationStage={animationStage}
                handleCopy={handleCopy}
                copyStatus={copyStatus}
                handleRegenerate={handleRegenerate}
              />

              {/* Banner Section */}
              <BannerSection 
                input={input}
                results={results}
                isLoading={isLoading}
                animationStage={animationStage}
              />
            </>
          )}
        </div>
        
        {/* Social Media Preview Section */}
        {results && !isLoading && (
          <SocialPreview input={input} results={results} />
        )}
        
        {/* Floating tip icon */}
        <div className="fixed top-4 right-4 z-50">
          <div className="group relative">
            <button className="bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </button>
            <div className="absolute right-0 top-full mt-2 w-64 p-4 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-right">
              <h4 className="font-semibold text-sm text-gray-800 mb-2">Usage Tips</h4>
              <ul className="text-xs text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1.5">•</span>
                  <span>Enter product name with descriptive adjectives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1.5">•</span>
                  <span>Use "Regenerate" to explore different variations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1.5">•</span>
                  <span>Copy ad text to use in your campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-1.5">•</span>
                  <span>Try sample inputs for inspiration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <ErrorBoundary>
          <footer className="mt-8 pt-3 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-xs font-medium mb-3">
              © {new Date().getFullYear()} AdRocket. All rights reserved.
            </p>
            
            {/* MetaMask Support Button */}
            <div className="mb-3">
              <a 
                href="https://metamask.app.link/send/0x55d398326f99059fF775485246999027B3197955@56/transfer?address=0x5a8440AFcfF014aA69AbA8Ab6426B6Ce627DDBBF&uint256=5e18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full hover:bg-orange-200 transition-colors duration-200 text-xs font-medium"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" className="mr-1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                Support this project via MetaMask
              </a>
            </div>
            
            {/* Inspirational Message */}
            <p className="text-gray-500 text-xs mb-3">
              ✨ Inspired by media strategists. Built with AI.
            </p>
          </footer>
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
} 
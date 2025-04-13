"use client";

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

interface AdCopy {
  headline: string;
  description: string;
  cta: string;
}

interface Banner {
  headline: string;
  subheadline: string;
  cta: string;
  theme?: string;
}

interface GeneratedData {
  insights: string;
  adCopy: AdCopy[];
  banner: Banner;
}

// Mock API call to simulate backend processing
const mockGenerateAd = async (input: string): Promise<GeneratedData> => {
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
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<GeneratedData | null>(null);
  const [copyStatus, setCopyStatus] = useState<{
    success: boolean;
    error: Error | null;
    index: number | null;
  }>({ success: false, error: null, index: null });
  const [animationStage, setAnimationStage] = useState(0); // Controls staggered animations
  const [hasSeenTip, setHasSeenTip] = useState(false);
  const [regenerationCount, setRegenerationCount] = useState(0); // Track regenerations
  const resultsRef = useRef<HTMLDivElement>(null);
  
  // Mock variations for regenerate function
  const adCopyVariations = [
    [
      {
        headline: (variation: string) => `Experience the Power of ${variation}`,
        description: (variation: string) => `Discover why ${variation} is revolutionizing the industry with its innovative approach and unmatched quality. Join thousands of satisfied customers who have already made the switch.`,
        cta: 'Shop Now'
      },
      {
        headline: (variation: string) => `${variation}: The Smart Choice`,
        description: (variation: string) => `Why settle for less when you can have the best? ${variation} delivers superior results with less effort. Try it today and see the difference for yourself.`,
        cta: 'Get Started'
      }
    ],
    [
      {
        headline: (variation: string) => `Introducing ${variation}`,
        description: (variation: string) => `Transform your experience with ${variation}, designed to exceed expectations and deliver results. See why it's becoming the #1 choice in the industry.`,
        cta: 'Learn More'
      },
      {
        headline: (variation: string) => `Unlock the Potential of ${variation}`,
        description: (variation: string) => `${variation} offers premium features that help you achieve your goals faster. Join our growing community of satisfied users today.`,
        cta: 'Join Now'
      }
    ],
    [
      {
        headline: (variation: string) => `${variation} - Elevate Your Experience`,
        description: (variation: string) => `Designed for those who demand excellence, ${variation} combines cutting-edge technology with user-friendly features. The result is an unparalleled experience.`,
        cta: 'Explore'
      },
      {
        headline: (variation: string) => `The Future is Here with ${variation}`,
        description: (variation: string) => `Stay ahead of the curve with ${variation}. Our innovative approach sets new standards in the industry, giving you the competitive edge.`,
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
  
  const handleExampleClick = (exampleInput: string) => {
    setInput(exampleInput);
    handleGenerate(exampleInput);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) {
      setError('Please enter a product name or URL');
      return;
    }
    
    handleGenerate(input);
  };
  
  const handleGenerate = async (inputText: string) => {
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
      const data: GeneratedData = {
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

  const handleCopy = (text: string, index: number) => {
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
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            handleExampleClick={handleExampleClick}
            error={error}
            hasSeenTip={hasSeenTip}
          />
          
          {/* Empty section if no results yet */}
          {!results && !isLoading && (
            <div className="w-full mt-5 sm:mt-0">
              <EmptyState
                title="Generate Your First Ad"
                description="Enter your product or service to get AI-generated ad copy, banners, and social media previews."
                showTip={true}
                examples={[
                  "Organic coffee beans",
                  "Online yoga classes",
                  "Smart home devices"
                ]}
                onExampleClick={handleExampleClick}
              />
            </div>
          )}
        </div>
        
        {/* Results section */}
        {(isLoading || results) && (
          <div ref={resultsRef}>
            {/* Loading state */}
            {isLoading && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                <div className="animate-pulse inline-block">
                  <div className="h-12 w-12 rounded-full bg-blue-100 p-3 mx-auto mb-4">
                    <svg className="animate-spin text-blue-600 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Generating Your Ad</h3>
                  <p className="text-sm text-gray-500">Our AI is crafting personalized content for "{input}"...</p>
                </div>
              </div>
            )}
            
            {/* Results content */}
            {!isLoading && results && (
              <div>
                {/* AI Insights */}
                <AIInsights 
                  insights={results.insights} 
                  animationStage={animationStage} 
                />
                
                {/* Regenerate button */}
                <div className="mt-4 text-right">
                  <button
                    onClick={handleRegenerate}
                    className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Regenerate
                  </button>
                </div>
                
                {/* Ad Copy */}
                <AdCopyBlock
                  adCopy={results.adCopy}
                  handleCopy={handleCopy}
                  copyStatus={copyStatus}
                  animationStage={animationStage}
                />
                
                {/* Banner Preview */}
                <BannerSection
                  banner={results.banner}
                  animationStage={animationStage}
                />
                
                {/* Social Previews */}
                <SocialPreview
                  headline={results.adCopy[0].headline}
                  description={results.adCopy[0].description}
                  animationStage={animationStage}
                />
              </div>
            )}
          </div>
        )}
        
        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-gray-500">
          <p>© 2024 AdRocket · AI-powered ad generation</p>
        </footer>
      </div>
    </ErrorBoundary>
  );
} 
"use client";

import React, { useRef } from 'react';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';

interface Banner {
  headline: string;
  subheadline: string;
  cta: string;
  theme?: string;
}

interface BannerSectionProps {
  banner: Banner;
  animationStage: number;
}

const BannerSection: React.FC<BannerSectionProps> = ({ banner, animationStage }) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  
  // Theme color map
  const themeColors: Record<string, { bg: string, accent: string, text: string }> = {
    blue: {
      bg: 'bg-gradient-to-r from-blue-600 to-blue-500',
      accent: 'bg-blue-400',
      text: 'text-white'
    },
    purple: {
      bg: 'bg-gradient-to-r from-purple-600 to-purple-500',
      accent: 'bg-purple-400',
      text: 'text-white'
    },
    teal: {
      bg: 'bg-gradient-to-r from-teal-500 to-teal-400',
      accent: 'bg-teal-300',
      text: 'text-white'
    },
    green: {
      bg: 'bg-gradient-to-r from-green-600 to-green-500',
      accent: 'bg-green-400',
      text: 'text-white'
    },
    orange: {
      bg: 'bg-gradient-to-r from-orange-500 to-orange-400',
      accent: 'bg-orange-300',
      text: 'text-white'
    }
  };
  
  // Default to blue if no theme is specified
  const theme = banner.theme && themeColors[banner.theme] ? banner.theme : 'blue';
  const colors = themeColors[theme];
  
  const handleDownload = async () => {
    if (!bannerRef.current) return;
    
    try {
      const canvas = await html2canvas(bannerRef.current, {
        scale: 2, // Higher resolution
        logging: false,
        backgroundColor: null
      });
      
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'ad-banner.png';
      link.click();
    } catch (err) {
      console.error('Error generating banner image:', err);
    }
  };
  
  return (
    <div className="mt-6 bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h3 className="text-base font-medium text-gray-900">Ad Banner</h3>
          <p className="mt-1 text-sm text-gray-500">Display ad preview</p>
        </div>
        <button
          onClick={handleDownload}
          className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Download className="h-4 w-4 mr-1" />
          Download
        </button>
      </div>
      
      <div className="p-6">
        <div 
          className={`${animationStage >= 3 ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '200ms' }}
        >
          {/* Banner preview container */}
          <div
            ref={bannerRef}
            className={`w-full h-[250px] ${colors.bg} rounded-lg overflow-hidden p-8 flex flex-col justify-between ${colors.text} shadow-md relative`}
          >
            <div>
              <h4 className="text-3xl font-bold mb-2">{banner.headline}</h4>
              <p className="text-lg opacity-90">{banner.subheadline}</p>
            </div>
            
            <div>
              <button className={`${colors.accent} text-white px-5 py-2 rounded-md font-medium shadow-sm hover:opacity-90 transition-opacity`}>
                {banner.cta}
              </button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white opacity-10"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white opacity-5"></div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Click the download button to save this banner image
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection; 
import React, { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import { Target, Shield, Zap as ZapIcon } from 'lucide-react';
import { Section } from '../common/Section';
import ErrorBoundary from '../common/ErrorBoundary';
import MobileMockWrapper from './MobileMockWrapper';
import PreviewNewsSite from './PreviewNewsSite';
import PreviewGoogleAd from './PreviewGoogleAd';
import { StaticBanner } from './PreviewMobileMock';
import ExportButton from './ExportButton';

// Array of banner configurations for rotation
const bannerTemplates = [
  {
    title: "Boost Your Marketing",
    subtitle: "Advanced targeting and analytics for businesses that want to grow.",
    ctaText: "Get Started",
    icon: Target,
    backgroundColor: "blue"
  },
  {
    title: "Secure Your Data",
    subtitle: "Enterprise-grade protection for your most valuable business assets.",
    ctaText: "Learn More",
    icon: Shield,
    backgroundColor: "purple"
  },
  {
    title: "Speed Up Performance",
    subtitle: "Lightning-fast solutions that keep your business running at peak efficiency.",
    ctaText: "Power Up",
    icon: ZapIcon,
    backgroundColor: "teal"
  }
];

const SocialPreview = ({ 
  platform, 
  input, 
  adContent, 
  newsContent,
  bannerContent,
  expanded,
  className = '',
  ...props 
}) => {
  // Create ref for the banner
  const bannerRef = useRef(null);
  
  // State to track the current banner template
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  
  // Effect to set up initial banner index
  useEffect(() => {
    // Set to random index on initial load
    if (currentBannerIndex === 0) {
      const randomIndex = Math.floor(Math.random() * bannerTemplates.length);
      setCurrentBannerIndex(randomIndex);
    }
  }, []);
  
  // Get the current banner template
  const currentBanner = bannerTemplates[currentBannerIndex];
  
  // Create the banner content
  const bannerElement = (
    <div ref={bannerRef}>
      <StaticBanner 
        title={currentBanner.title}
        subtitle={currentBanner.subtitle}
        ctaText={currentBanner.ctaText}
        icon={currentBanner.icon}
        backgroundColor={currentBanner.backgroundColor}
        product={input?.headline || input || "Product"}
        scale={1}
      />
    </div>
  );

  // Handle display modes based on available content
  const shouldShowNytPreview = platform === "nyt" || !platform;
  const shouldShowGoogleAdPreview = platform === "googlead" || !platform;
  
  // Format ad content for Google ad
  const formattedAdContent = adContent?.length > 0 ? adContent : [{
    headline: `Experience the Best ${input?.headline || input || 'Solution'}`,
    description: `Discover why our ${(input?.headline || input || 'product').toLowerCase()} is revolutionizing the industry with innovative features and unmatched quality.`,
    cta: "Learn More"
  }];

  // Ensure we pass the correct input format
  const processedInput = typeof input === 'string' ? { headline: input } : input;

  const nytPreviewContent = shouldShowNytPreview && (
    <div className="mb-8 mx-auto">
      <h3 className="text-lg font-medium mb-2 text-gray-700">NY Times</h3>
      <PreviewNewsSite 
        input={processedInput} 
        banner={bannerContent || bannerElement} 
      />
    </div>
  );

  const googleAdPreviewContent = shouldShowGoogleAdPreview && (
    <div className="mb-8 mx-auto">
      <h3 className="text-lg font-medium mb-2 text-gray-700">Google Ad</h3>
      <PreviewGoogleAd input={processedInput?.headline || 'Product Solution'} adCopy={formattedAdContent} />
    </div>
  );
  
  return (
    <div className={`max-w-screen-xl mx-auto p-4 ${className}`} {...props}>
      <div className={`grid grid-cols-1 ${expanded ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-8`}>
        {nytPreviewContent}
        {googleAdPreviewContent}
      </div>
    </div>
  );
};

export default SocialPreview; 
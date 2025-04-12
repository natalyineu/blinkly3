import React, { useId, useRef } from 'react';
import { Image, Target, Shield, Zap, Eye, Copy, Download, Rocket, ArrowRight, Camera } from 'lucide-react';
import { Section } from './common/Section';
import ErrorBoundary from './common/ErrorBoundary';
import { exportBannerAsPNG } from '../utils/exportUtils';

// Helper for banner templates
const StaticBanner = ({ 
  title = "Boost Your Reach", 
  subtitle = "High-performance ads that convert", 
  ctaText = "Learn More", 
  icon: Icon = Rocket,
  backgroundColor = "blue",
  product = ""
}) => {
  // Generate unique ID for SVG patterns
  const patternId = useId();
  const gradientId = useId();
  const circleId = useId();
  
  // Get background and accent colors based on theme
  const getThemeColors = () => {
    switch(backgroundColor) {
      case 'purple':
        return {
          primary: 'from-purple-600 to-indigo-700',
          accent: 'from-purple-400 to-pink-500',
          glow: 'bg-purple-500',
          button: 'text-purple-700 hover:text-purple-800',
          iconBox: 'bg-purple-400 bg-opacity-20'
        };
      case 'green':
        return {
          primary: 'from-green-500 to-emerald-600',
          accent: 'from-green-400 to-teal-500',
          glow: 'bg-green-500',
          button: 'text-green-700 hover:text-green-800',
          iconBox: 'bg-green-400 bg-opacity-20'
        };
      case 'orange':
        return {
          primary: 'from-orange-500 to-amber-600',
          accent: 'from-orange-400 to-yellow-500',
          glow: 'bg-orange-500',
          button: 'text-orange-600 hover:text-orange-700',
          iconBox: 'bg-orange-400 bg-opacity-20'
        };
      case 'teal':
        return {
          primary: 'from-teal-500 to-cyan-600',
          accent: 'from-teal-400 to-blue-500',
          glow: 'bg-teal-500',
          button: 'text-teal-700 hover:text-teal-800',
          iconBox: 'bg-teal-400 bg-opacity-20'
        };
      case 'yellow':
        return {
          primary: 'from-yellow-400 to-amber-500',
          accent: 'from-yellow-300 to-orange-400',
          glow: 'bg-yellow-500',
          button: 'text-amber-600 hover:text-amber-700',
          iconBox: 'bg-yellow-400 bg-opacity-20'
        };
      default: // blue
        return {
          primary: 'from-blue-600 to-indigo-700',
          accent: 'from-blue-400 to-indigo-500',
          glow: 'bg-blue-500',
          button: 'text-blue-700 hover:text-blue-800',
          iconBox: 'bg-blue-400 bg-opacity-20'
        };
    }
  };
  
  const colors = getThemeColors();
  
  // Generate dynamic title and subtitle based on product name if available
  const displayTitle = product ? 
    (title.includes("Your") ? 
      title.replace("Your", product) : 
      (title.includes("Marketing") ? 
        `${product} Marketing` : 
        (title.includes("Data") ? 
          `${product} Data Security` : 
          (title.includes("Performance") ? 
            `${product} Performance` : 
            `${product} ${title}`)))) : 
    title;
  
  // Carefully replace only specific business-related terms with the product name
  let displaySubtitle = subtitle;
  if (product) {
    // Create a more precise replacement that won't affect other parts of the text
    const businessTerms = {
      "businesses that want to grow": `${product.toLowerCase()} users that want the best`,
      "business assets": `${product.toLowerCase()} data`,
      "business running": `${product.toLowerCase()} running`,
      "solutions that keep your": `features that keep your`,
    };
    
    // Apply each replacement if found
    Object.entries(businessTerms).forEach(([term, replacement]) => {
      if (subtitle.includes(term)) {
        displaySubtitle = subtitle.replace(term, replacement);
      }
    });
  }
  
  return (
    <div 
      className={`w-[300px] h-[600px] bg-gradient-to-br ${colors.primary} rounded-2xl shadow-lg hover:shadow-xl flex flex-col items-start justify-between p-8 relative overflow-hidden transition-all duration-500 ease-out transform hover:scale-[1.02] hover:translate-y-[-4px] hover:shadow-2xl group sm:scale-100 max-sm:scale-90 max-sm:mx-auto cursor-pointer hover:ring-2 hover:ring-opacity-20 hover:ring-white`}
    >
      {/* Background glow */}
      <div 
        className={`absolute left-1/2 -top-10 w-40 h-40 ${colors.glow} blur-[80px] opacity-30 rounded-full transform -translate-x-1/2 transition-all duration-700 group-hover:opacity-50 group-hover:blur-[100px]`}
      ></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-radial from-white via-transparent to-transparent"></div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 300 600" preserveAspectRatio="none">
          <defs>
            <radialGradient id={`radial-${gradientId}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.05" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <pattern id={`dots-${patternId}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.5" fill="white" fillOpacity="0.3" />
              <circle cx="10" cy="10" r="0.5" fill="white" fillOpacity="0.3" />
              <circle cx="18" cy="18" r="0.5" fill="white" fillOpacity="0.3" />
            </pattern>
            <linearGradient id={`accent-${gradientId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id={`diagonal-${gradientId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.05" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id={`circle-mask-${circleId}`}>
              <rect width="100%" height="100%" fill="white" />
              <circle cx="250" cy="50" r="100" fill="black" />
            </mask>
          </defs>
          
          {/* Dot pattern */}
          <rect width="100%" height="100%" fill={`url(#dots-${patternId})`} />
          
          {/* Diagonal gradient line */}
          <rect x="-300" y="300" width="900" height="30" fill={`url(#diagonal-${gradientId})`} transform="rotate(-35)" opacity="0.4" />
          
          {/* Decorative accent shapes */}
          <circle cx="250" cy="50" r="100" fill={`url(#accent-${gradientId})`} opacity="0.6" />
          <circle cx="50" cy="450" r="120" fill={`url(#radial-${gradientId})`} opacity="0.4" />
          <circle cx="270" cy="520" r="40" fill="white" fillOpacity="0.03" />
        </svg>
      </div>
      
      {/* Floating decorative icon */}
      <div className="absolute right-0 top-20 opacity-5 transform translate-x-12 transition-all duration-700 ease-in-out group-hover:translate-x-8">
        <Icon className="w-64 h-64 text-white" />
      </div>
      
      {/* Content area */}
      <div className="flex flex-col items-start max-w-[250px] z-10 mt-2">
        {/* Icon container with glow effect */}
        <div className="mb-6 relative">
          <div className={`absolute inset-0 ${colors.glow} filter blur-md opacity-50 scale-125 rounded-xl transition-all duration-300 group-hover:opacity-70 group-hover:scale-150`}></div>
          <div className={`relative ${colors.iconBox} p-3.5 rounded-xl backdrop-blur-sm shadow-lg transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-3`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>
        
        {/* Text content */}
        <h2 className="text-white text-3xl font-bold mb-4 tracking-tight drop-shadow-sm transition-all duration-300 transform group-hover:translate-x-1">
          {displayTitle}
        </h2>
        
        <p className="text-white text-opacity-90 text-base leading-relaxed mb-4">
          {displaySubtitle}
        </p>
        
        {/* Decorative divider */}
        <div className="w-12 h-1 bg-white bg-opacity-30 rounded-full mb-2"></div>
      </div>
      
      {/* CTA area */}
      <div className="self-start z-10 transform transition-all duration-500 group-hover:translate-y-[-4px]">
        <button className={`bg-white ${colors.button} px-6 py-3 rounded-lg font-medium flex items-center transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-2xl`}>
          {ctaText}
          <span className="ml-2 transform transition-all duration-300 group-hover:translate-x-1">
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </div>
      
      {/* AdRocket advertisement label */}
      <div className="absolute bottom-2.5 right-3 z-10">
        <span className="text-[9px] text-white text-opacity-65 font-light">
          AdRocket advertisement
        </span>
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r opacity-30 rounded-b-2xl overflow-hidden transition-all duration-500 group-hover:opacity-50 bg-gradient-to-r"></div>
      
      {/* Animated corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colors.accent} rotate-45 transform translate-x-12 -translate-y-12 opacity-30 transition-all duration-500 group-hover:opacity-50`}></div>
      </div>
    </div>
  );
};

// Helper to convert Tailwind color classes to actual CSS colors
function getColorFromClass(colorClass) {
  const colorMap = {
    'text-blue-700': '#1d4ed8',
    'text-purple-700': '#7e22ce',
    'text-green-700': '#15803d',
    'text-teal-700': '#0f766e',
    'text-orange-700': '#c2410c',
    'text-amber-700': '#b45309',
    'text-red-700': '#b91c1c',
    'text-indigo-700': '#4338ca',
  };
  
  return colorMap[colorClass] || '#1d4ed8'; // Default to blue
};

// Helper function to replace business terms with product-specific ones
const replaceBizTerms = (product, defaultTerm) => {
  if (!product) return defaultTerm;
  
  // If we have a product name, use it to enhance the term
  return defaultTerm;
};

const BannerSection = ({ 
  input,
  results,
  isLoading,
  animationStage
}) => {
  // Create refs for each banner
  const banner1Ref = useRef(null);
  const banner2Ref = useRef(null);
  const banner3Ref = useRef(null);
  
  return (
    <ErrorBoundary>
      <div className={`transform transition-all duration-700 ease-out ${animationStage >= 3 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}>
        <Section title={input ? `${input} Banners` : "Banner Templates"} icon={Image} isActive={true} compact={false}>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h3 className="text-sm font-medium text-gray-800">
                {input ? `${input} Banner Templates (300x600)` : "Static Banner Templates (300x600)"}
              </h3>
              <p className="text-xs text-gray-600">
                {input ? `Reusable banner components for your ${input.toLowerCase()} campaign.` : 
                "Reusable banner components that can be customized for different campaigns."}
              </p>
            </div>
            
            {/* Banner Templates Grid */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-1 justify-center sm:justify-between flex-wrap sm:px-[5%]">
              
              {/* Banner Template 1 */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div ref={banner1Ref}>
                  <StaticBanner 
                    title="Boost Your Marketing"
                    subtitle="Advanced targeting and analytics for businesses that want to grow."
                    ctaText="Get Started"
                    icon={Target}
                    backgroundColor="blue"
                    product={input || ""}
                  />
                </div>
              </div>
              
              {/* Banner Template 2 */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div ref={banner2Ref}>
                  <StaticBanner 
                    title="Secure Your Data"
                    subtitle="Enterprise-grade protection for your most valuable business assets."
                    ctaText="Learn More"
                    icon={Shield}
                    backgroundColor="purple"
                    product={input || ""}
                  />
                </div>
              </div>
              
              {/* Banner Template 3 */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div ref={banner3Ref}>
                  <StaticBanner 
                    title="Speed Up Performance"
                    subtitle="Lightning-fast solutions that keep your business running at peak efficiency."
                    ctaText="Power Up"
                    icon={Zap}
                    backgroundColor="teal"
                    product={input || ""}
                  />
                </div>
              </div>
              
            </div>
            
            {/* Template Selection Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="text-xs text-gray-600">
                {input ? (
                  <><span className="font-medium">Pro tip:</span> Dynamic banners using your <span className="font-medium">{input}</span> data</>
                ) : (
                  <><span className="font-medium">Pro tip:</span> Try entering a product name above to generate customized banners</>
                )}
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => exportBannerAsPNG(banner1Ref.current, `${input || 'blue'}-banner`)}
                  className="inline-flex items-center px-2 py-1.5 text-xs font-medium rounded text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Camera className="mr-1 h-3 w-3" /> Blue
                </button>
                <button 
                  onClick={() => exportBannerAsPNG(banner2Ref.current, `${input || 'purple'}-banner`)}
                  className="inline-flex items-center px-2 py-1.5 text-xs font-medium rounded text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Camera className="mr-1 h-3 w-3" /> Purple
                </button>
                <button 
                  onClick={() => exportBannerAsPNG(banner3Ref.current, `${input || 'teal'}-banner`)}
                  className="inline-flex items-center px-2 py-1.5 text-xs font-medium rounded text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Camera className="mr-1 h-3 w-3" /> Teal
                </button>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Banner Actions Section */}
      <ErrorBoundary>
        <div className={`transform transition-all duration-700 ease-out ${animationStage >= 3 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}`}>
          {results && !isLoading && (
            <div className="mt-3 flex flex-wrap sm:flex-nowrap justify-between items-center p-2.5 bg-gray-50 rounded-lg">
              <div className="text-gray-700 text-xs flex items-center mb-2 sm:mb-0">
                <Eye className="mr-1.5 h-3 w-3 text-blue-500" /> <span className="font-medium">Premium banner ready</span>
              </div>
            </div>  
          )}
        </div>
      </ErrorBoundary>
    </ErrorBoundary>
  );
};

export default BannerSection; 
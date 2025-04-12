import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Target, Shield, Zap as ZapIcon } from 'lucide-react';

// StaticBanner component for mobile mock display
const StaticBanner = ({ 
  title = "Boost Your Marketing", 
  subtitle = "High-performance ads that convert", 
  ctaText = "Learn More", 
  icon: Icon = ZapIcon,
  backgroundColor = "blue",
  product = "",
  scale = 1
}) => {
  // Use built-in IDs for patterns
  const id = Math.random().toString(36).substring(2, 10);
  
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
      case 'teal':
        return {
          primary: 'from-teal-500 to-cyan-600',
          accent: 'from-teal-400 to-blue-500',
          glow: 'bg-teal-500',
          button: 'text-teal-700 hover:text-teal-800',
          iconBox: 'bg-teal-400 bg-opacity-20'
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
      style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
      className={`w-[300px] h-[600px] bg-gradient-to-br ${colors.primary} rounded-2xl shadow-lg flex flex-col items-start justify-between p-8 relative overflow-hidden mx-auto transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer group rounded`}
    >
      {/* Background glow */}
      <div 
        className={`absolute left-1/2 -top-10 w-40 h-40 ${colors.glow} blur-[80px] opacity-30 rounded-full transform -translate-x-1/2]`}
      ></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 opacity-20 bg-gradient-radial from-white via-transparent to-transparent"></div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 300 600" preserveAspectRatio="none">
          <defs>
            <radialGradient id={`radial-${id}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.05" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <pattern id={`dots-${id}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.5" fill="white" fillOpacity="0.3" />
              <circle cx="10" cy="10" r="0.5" fill="white" fillOpacity="0.3" />
              <circle cx="18" cy="18" r="0.5" fill="white" fillOpacity="0.3" />
            </pattern>
            <linearGradient id={`accent-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id={`diagonal-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.05" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Dot pattern */}
          <rect width="100%" height="100%" fill={`url(#dots-${id})`} />
          
          {/* Diagonal gradient line */}
          <rect x="-300" y="300" width="900" height="30" fill={`url(#diagonal-${id})`} transform="rotate(-35)" opacity="0.4" />
          
          {/* Decorative accent shapes */}
          <circle cx="250" cy="50" r="100" fill={`url(#accent-${id})`} opacity="0.6" />
          <circle cx="50" cy="450" r="120" fill={`url(#radial-${id})`} opacity="0.4" />
          <circle cx="270" cy="520" r="40" fill="white" fillOpacity="0.03" />
        </svg>
      </div>
      
      {/* Floating decorative icon */}
      <div className="absolute right-0 top-20 opacity-5 transform translate-x-12">
        <Icon className="w-64 h-64 text-white" />
      </div>
      
      {/* Content area */}
      <div className="flex flex-col items-start max-w-[250px] z-10 mt-2">
        {/* Icon container with glow effect */}
        <div className="mb-6 relative">
          <div className={`absolute inset-0 ${colors.glow} filter blur-md opacity-50 scale-125 rounded-xl`}></div>
          <div className={`relative ${colors.iconBox} p-3.5 rounded-xl backdrop-blur-sm shadow-lg`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>
        
        {/* Text content */}
        <h2 className="text-white text-3xl font-bold mb-4 tracking-tight drop-shadow-sm font-sans">
          {displayTitle}
        </h2>
        
        <p className="text-white text-opacity-90 text-base leading-relaxed mb-4 font-sans">
          {displaySubtitle}
        </p>
        
        {/* Decorative divider */}
        <div className="w-12 h-1 bg-white bg-opacity-30 rounded-full mb-2"></div>
      </div>
      
      {/* CTA area */}
      <div className="self-start z-10">
        <button className={`bg-white ${colors.button} px-6 py-3 rounded-lg font-medium flex items-center shadow-lg font-sans`}>
          {ctaText}
          <span className="ml-2">
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
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r opacity-30 rounded-b-2xl overflow-hidden bg-gradient-to-r"></div>
      
      {/* Animated corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colors.accent} rotate-45 transform translate-x-12 -translate-y-12 opacity-30`}></div>
      </div>
    </div>
  );
};

// Instagram or mobile device frame preview component
const PreviewMobileMock = ({ 
  title, 
  subtitle, 
  ctaText, 
  icon, 
  backgroundColor = "blue",
  product = "",
  scale = 1 
}) => {
  return (
    <StaticBanner
      title={title}
      subtitle={subtitle}
      ctaText={ctaText}
      icon={icon}
      backgroundColor={backgroundColor}
      product={product}
      scale={scale}
    />
  );
};

export { StaticBanner, PreviewMobileMock };
export default PreviewMobileMock; 
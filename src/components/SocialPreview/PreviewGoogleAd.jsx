import React from 'react';

// Google-style contextual ad component - optimized for small screens
const ContextualAd = ({ headline, description, cta }) => {
  // Create a mock URL based on headline
  const mockUrl = headline ? 
    `www.${headline.toLowerCase().replace(/[^a-z0-9]/g, '')}.com/${cta.toLowerCase().replace(/\s+/g, '-')}` : 
    'www.example.com/product';
  
  return (
    <div className="mb-2 sm:mb-3.5 max-w-full hover:shadow-sm transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-start">
            <a href="#" className="text-[12px] sm:text-[16px] font-normal text-[#1a0dab] hover:underline line-clamp-1 block">{headline}</a>
            <div className="ml-0.5 sm:ml-1 text-[7px] sm:text-[11px] text-gray-500 rounded px-0.5 sm:px-1 leading-3 sm:leading-5 bg-gray-100 border border-gray-200">Ad</div>
          </div>
          <div className="text-[9px] sm:text-[13px] text-[#006621] mt-0.5">{mockUrl}</div>
          <p className="text-[9px] sm:text-[13px] text-[#4d5156] mt-0.5 line-clamp-2 leading-tight sm:leading-snug">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Google Search Results mock
const PreviewGoogleAd = ({ adCopy, input }) => {
  const searchQuery = input || "product solution";
  
  return (
    <div className="w-full max-w-[480px] h-auto rounded-lg border border-gray-200 shadow-md bg-white overflow-hidden">
      {/* Browser Header - More compact for mobile */}
      <div className="bg-gray-100 border-b border-gray-200 px-1.5 sm:px-3 py-0.5 sm:py-2 flex items-center space-x-1 sm:space-x-2">
        <div className="flex space-x-1 sm:space-x-1.5">
          <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
          <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
          <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-md border border-gray-300 px-1 sm:px-2 py-0.5 sm:py-1 text-[7px] sm:text-xs text-gray-600 w-11/12 sm:w-4/5 truncate text-center flex items-center justify-center">
            <div className="w-1 h-1 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-0.5 sm:mr-1.5 flex-shrink-0"></div>
            <span className="truncate">google.com/search?q={searchQuery.toLowerCase().replace(/\s+/g, '+')}</span>
          </div>
        </div>
      </div>
      
      {/* Google Search Content - No fixed height, overflow visible */}
      <div className="px-1.5 sm:px-4 py-1.5 sm:py-3 bg-white h-auto overflow-visible">
        {/* Google Logo and Search Bar - Smaller on mobile */}
        <div className="flex flex-col items-center mb-1.5 sm:mb-4">
          <div className="mb-1.5 sm:mb-3 flex items-end">
            <span className="text-blue-500 text-base sm:text-2xl font-bold">G</span>
            <span className="text-red-500 text-base sm:text-2xl font-bold">o</span>
            <span className="text-yellow-500 text-base sm:text-2xl font-bold">o</span>
            <span className="text-blue-500 text-base sm:text-2xl font-bold">g</span>
            <span className="text-green-500 text-base sm:text-2xl font-bold">l</span>
            <span className="text-red-500 text-base sm:text-2xl font-bold">e</span>
          </div>
          <div className="w-full flex items-center">
            <div className="flex-1 bg-white rounded-full border border-gray-300 px-2 sm:px-4 py-1 sm:py-2 text-[9px] sm:text-sm text-gray-800 flex items-center shadow-sm truncate">
              <span className="truncate">{searchQuery}</span>
              <div className="ml-auto flex items-center space-x-1 sm:space-x-2 text-gray-500 flex-shrink-0">
                <svg width="10" height="10" className="sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <svg width="10" height="10" className="sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            <button className="ml-1 sm:ml-2 px-2 sm:px-4 py-1 sm:py-2 bg-blue-50 text-blue-600 rounded-md text-[9px] sm:text-sm flex-shrink-0">Search</button>
          </div>
        </div>
        
        {/* Tabs - Optimized for small screens */}
        <div className="flex text-[8px] sm:text-[13px] border-b border-gray-200 pb-0.5 sm:pb-2 mb-1.5 sm:mb-4 overflow-x-auto sm:overflow-visible">
          <div className="mr-2 sm:mr-5 text-blue-600 border-b-2 border-blue-600 pb-0.5 sm:pb-2 -mb-0.5 sm:-mb-2 font-medium flex items-center whitespace-nowrap">
            <svg className="w-2 h-2 sm:w-3.5 sm:h-3.5 mr-0.5 sm:mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            All
          </div>
          <div className="mr-2 sm:mr-5 text-gray-600 flex items-center whitespace-nowrap">
            <svg className="w-2 h-2 sm:w-3.5 sm:h-3.5 mr-0.5 sm:mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>
            News
          </div>
          <div className="mr-2 sm:mr-5 text-gray-600 flex items-center whitespace-nowrap">
            <svg className="w-2 h-2 sm:w-3.5 sm:h-3.5 mr-0.5 sm:mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            Images
          </div>
          <div className="text-gray-600 flex items-center whitespace-nowrap">
            <svg className="w-2 h-2 sm:w-3.5 sm:h-3.5 mr-0.5 sm:mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            Videos
          </div>
        </div>
        
        {/* Result Stats - Smaller for mobile */}
        <div className="text-[8px] sm:text-[13px] text-gray-500 mb-1.5 sm:mb-4">
          About 284,000,000 results (0.45 seconds)
        </div>
        
        {/* Ads Section - Optimized for small screens */}
        <div className="mb-1.5 sm:mb-4 pb-1.5 sm:pb-3 border-b border-gray-200">
          <div className="text-[8px] sm:text-[12px] text-gray-500 mb-0.5 sm:mb-2 pl-0.5">Ads · <span className="text-[7px] sm:text-[11px]">Why these ads?</span></div>
          {adCopy && adCopy.length > 0 ? (
            <ContextualAd 
              headline={adCopy[0].headline}
              description={adCopy[0].description}
              cta={adCopy[0].cta}
            />
          ) : (
            <ContextualAd 
              headline={`Experience the Best ${input || 'Solution'}`}
              description={`Discover why our ${input ? input.toLowerCase() : 'product'} is revolutionizing the industry with innovative features and unmatched quality.`}
              cta="Learn More"
            />
          )}
        </div>
        
        {/* Organic Results - Small mobile optimized */}
        <div>
          <div className="mb-1.5 sm:mb-4">
            <a href="#" className="text-[12px] sm:text-[16px] text-[#1a0dab] hover:underline block truncate">
              {input || 'Product'} - Official Website | Premium Solutions
            </a>
            <div className="text-[9px] sm:text-[13px] text-[#006621] mt-0.5 truncate">www.official{(input || 'product').toLowerCase().replace(/\s+/g, '')}.com</div>
            <p className="text-[9px] sm:text-[13px] text-[#4d5156] mt-0.5 leading-tight sm:leading-snug line-clamp-2">
              Official site for {input || 'product'}. Trusted by millions of users worldwide. Award-winning solutions for all your needs.
            </p>
          </div>
          
          {/* Additional organic result for mobile */}
          <div className="mb-1.5 sm:mb-4">
            <a href="#" className="text-[12px] sm:text-[16px] text-[#1a0dab] hover:underline block truncate">
              {input || 'Product'} Reviews | Top Industry Analysis
            </a>
            <div className="text-[9px] sm:text-[13px] text-[#006621] mt-0.5 truncate">www.techreviews.com/{(input || 'product').toLowerCase().replace(/\s+/g, '')}-review</div>
            <p className="text-[9px] sm:text-[13px] text-[#4d5156] mt-0.5 leading-tight sm:leading-snug line-clamp-2">
              Expert analysis of {input || 'product'} features and capabilities. Compare to alternatives and see why it's rated 4.8/5 by our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewGoogleAd; 
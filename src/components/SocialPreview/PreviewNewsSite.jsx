import React from 'react';

/**
 * A component that renders a news site preview with a main article and advertisement
 */
const PreviewNewsSite = ({ input, banner }) => {
  const headline = input?.headline || 'How This Revolutionary Product Changes Everything';
  const productName = input?.headline || 'Revolutionary Product';
  
  return (
    <div className="w-full max-w-[580px] h-auto sm:h-[500px] rounded-lg border border-gray-200 shadow-md bg-white overflow-hidden">
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
            <span className="truncate">www.nytimes.com/article/{headline.toLowerCase().replace(/\s+/g, '-')}</span>
          </div>
        </div>
      </div>

      {/* News Site Content - Mobile optimized with reduced height */}
      <div className="max-h-[420px] sm:max-h-none overflow-auto">
        {/* Desktop Layout */}
        <div className="hidden sm:block py-4 px-5">
          {/* Header */}
          <div className="text-center border-b border-gray-200 pb-3 mb-4">
            <div className="font-serif text-4xl mb-4">The New York Times</div>
            <div className="flex justify-between text-xs text-gray-600 mb-3">
              <div>Monday, January 1, 2023</div>
              <div>Today's Paper</div>
              <div>64°F New York</div>
            </div>
          </div>

          {/* Article Content */}
          <div className="flex gap-6">
            <div className="flex-1">
              <h1 className="font-serif text-3xl font-bold mb-3">{headline}</h1>
              <h2 className="font-serif text-xl text-gray-700 mb-3">New innovation disrupts the industry standard</h2>
              <div className="text-xs text-gray-500 mb-4">By JOHN SMITH</div>
              
              <div className="text-sm leading-relaxed mb-4">
                <p className="mb-3">
                  The industry landscape is rapidly evolving with innovative solutions like {productName} leading the transformation. Recent market analysis shows businesses implementing this technology are reporting significant advantages in both operational efficiency and customer satisfaction.
                </p>
                <p className="mb-3">
                  "We've seen a 40% increase in productivity since adopting {productName}," notes Sarah Johnson, CTO at TechForward. "What really sets it apart is how seamlessly it integrates with existing systems while providing powerful new capabilities."
                </p>
                <p className="mb-3">
                  Market researchers predict companies investing in similar technologies will see ROI within the first quarter of implementation, with cost savings averaging 23% across departments. This has caught the attention of industry leaders looking to gain competitive advantages.
                </p>
                <p>
                  The development team behind {productName} continues to release updates based on user feedback, with their latest version addressing key challenges that have traditionally plagued the industry. Experts predict adoption rates will accelerate through 2024.
                </p>
              </div>
            </div>
            <div className="w-[200px]">
              {/* Banner with realistic NY Times styling */}
              {banner && (
                <div className="flex flex-col items-center">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1 text-center font-sans font-normal">
                    Advertisement
                  </div>
                  <div className="w-full border border-gray-200 bg-gray-50 rounded overflow-hidden">
                    <div className="w-full h-[250px] flex items-center justify-center overflow-hidden">
                      <div className="transform scale-[0.4] origin-center">
                        {banner}
                      </div>
                    </div>
                    <div className="w-full text-center bg-white py-1 border-t border-gray-200">
                      <div className="text-[8px] font-sans text-gray-700 font-medium">Sponsored</div>
                    </div>
                  </div>
                  
                  {/* Additional sidebar content */}
                  <div className="w-full mt-4 pt-3 border-t border-gray-200">
                    <div className="text-[10px] text-gray-600 font-sans font-medium mb-2">MOST POPULAR</div>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <div className="text-gray-500 font-bold mr-2 text-xs">1.</div>
                        <div className="text-[11px] text-gray-800 leading-tight font-serif">Latest insights on {productName} transform industry forecasts</div>
                      </div>
                      <div className="flex items-start">
                        <div className="text-gray-500 font-bold mr-2 text-xs">2.</div>
                        <div className="text-[11px] text-gray-800 leading-tight font-serif">Technology leaders discuss future innovations in annual conference</div>
                      </div>
                      <div className="flex items-start">
                        <div className="text-gray-500 font-bold mr-2 text-xs">3.</div>
                        <div className="text-[11px] text-gray-800 leading-tight font-serif">Market outlook: How {productName} is changing consumer behavior</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Layout - More compact for small screens */}
        <div className="sm:hidden p-1.5">
          {/* Header - Reduced */}
          <div className="text-center border-b border-gray-200 pb-1 mb-1.5">
            <div className="font-serif text-lg mb-1">The New York Times</div>
            <div className="flex justify-between text-[7px] text-gray-600 mb-1">
              <div>Jan 1, 2023</div>
              <div>Today's Paper</div>
              <div>64°F NYC</div>
            </div>
          </div>

          {/* Article Content with Ad - Optimized for very small screens */}
          <div className="flex flex-col">
            <h1 className="font-serif text-sm font-bold mb-1">{headline}</h1>
            <h2 className="font-serif text-xs text-gray-700 mb-1">New innovation disrupts the industry</h2>
            <div className="text-[8px] text-gray-500 mb-1.5">By JOHN SMITH</div>
            
            <div className="flex gap-1.5">
              {/* Article text column - Removed max-height and overflow to eliminate scroll */}
              <div className="flex-1">
                <div className="text-[9px] leading-tight space-y-1">
                  <p>
                    The industry landscape is rapidly evolving with innovative solutions like {productName} leading the transformation. Recent market analysis shows businesses implementing this technology are reporting significant advantages.
                  </p>
                  <p>
                    "We've seen a 40% increase in productivity since adopting {productName}," notes Sarah Johnson, CTO at TechForward.
                  </p>
                  <p>
                    Market researchers predict companies investing in similar technologies will see ROI within the first quarter of implementation, with cost savings averaging 23%.
                  </p>
                  <p>
                    The development team continues to release updates based on user feedback, addressing key industry challenges.
                  </p>
                  <p>
                    Companies that have adopted {productName} report an average growth rate 15% higher than competitors, according to industry analysts.
                  </p>
                </div>
              </div>
              
              {/* Advertisement column - More realistic styling for mobile */}
              <div className="w-[90px]">
                {/* Banner with NY Times style */}
                {banner && (
                  <div className="flex flex-col items-center">
                    <div className="text-[5px] text-gray-500 uppercase tracking-wider mb-0.5 text-center font-sans font-normal">
                      Advertisement
                    </div>
                    <div className="w-full border border-gray-200 bg-gray-50 rounded overflow-hidden">
                      <div className="w-full h-[150px] flex items-center justify-center overflow-hidden">
                        <div className="transform scale-[0.22] origin-center">
                          {banner}
                        </div>
                      </div>
                      <div className="w-full text-center bg-white py-1 border-t border-gray-200">
                        <div className="text-[5px] font-sans text-gray-700 font-medium">Sponsored</div>
                      </div>
                    </div>
                    <div className="w-full mt-1.5 pt-1.5 border-t border-gray-200">
                      <div className="text-[5px] text-gray-500 mb-1 font-sans font-medium">MOST POPULAR</div>
                      <div className="space-y-1">
                        <div className="text-[6px] text-gray-800 leading-tight font-serif">Latest insights on {productName} trends</div>
                        <div className="text-[6px] text-gray-800 leading-tight font-serif">Industry leaders discuss future of technology</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewNewsSite; 
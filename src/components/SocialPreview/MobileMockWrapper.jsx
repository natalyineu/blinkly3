import React from 'react';

// iPhone device mockup for mobile view
const MobileMockWrapper = ({ children }) => {
  return (
    <div className="block md:hidden relative w-full max-w-[430px] mx-auto transform scale-100 origin-top">
      {/* iPhone 14 Pro mockup frame */}
      <div className="relative rounded-[44px] overflow-hidden border-[11px] border-black bg-black shadow-xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-10 flex items-center justify-center overflow-hidden">
          <div className="w-16 h-4 bg-black rounded-lg relative flex items-center">
            <div className="absolute left-3 w-2 h-2 rounded-full bg-gray-700"></div>
            <div className="absolute right-3 w-2 h-2 rounded-full bg-gray-700"></div>
          </div>
        </div>
        
        {/* Screen */}
        <div className="relative rounded-[32px] overflow-hidden bg-white">
          {/* Status bar */}
          <div className="flex justify-between items-center px-5 py-1 bg-white text-black text-xs font-medium">
            <div>10:42</div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-2.5 bg-black rounded-sm relative">
                <div className="absolute right-0.5 top-0.5 w-0.5 h-1.5 bg-white rounded-sm"></div>
              </div>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M3 16.5L12 7.5L21 16.5" stroke="currentColor" strokeWidth="2" />
              </svg>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M2 9.5C2 6.5 4.5 4 7.5 4C10.5 4 12 6.5 13 6.5C14 6.5 15.5 4 18.5 4C21.5 4 22 7 22 9.5C22 15 12 20 12 20C12 20 2 15 2 9.5Z" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
          
          {/* Content */}
          <div className="bg-white max-h-[800px] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMockWrapper; 
import React from 'react';
import { Camera } from 'lucide-react';
import { exportElementAsPNG } from '../../utils/exportUtils';

const ExportButton = ({ targetRef, fileName, type }) => {
  const handleExport = async () => {
    if (!targetRef.current) return;
    
    // Default options for html2canvas
    const options = {
      scale: 2,
      backgroundColor: null,
      logging: false,
      useCORS: true,
      allowTaint: true
    };
    
    exportElementAsPNG(targetRef.current, fileName || 'export', options);
  };
  
  return (
    <div className="mt-1 mb-3">
      <button 
        onClick={handleExport}
        className="bg-blue-100 text-blue-700 hover:bg-blue-200 rounded px-3 py-1.5 text-xs flex items-center shadow-sm transition-colors"
        title="Download as PNG"
      >
        <Camera className="w-3 h-3 mr-1.5" />
        Download PNG
      </button>
    </div>
  );
};

export default ExportButton; 
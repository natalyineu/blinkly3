"use client";

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface SocialPreviewProps {
  headline: string;
  description: string;
  animationStage: number;
}

const SocialPreview: React.FC<SocialPreviewProps> = ({
  headline,
  description,
  animationStage
}) => {
  // A shortened version of the description for display in previews
  const shortDescription = description.length > 100
    ? `${description.substring(0, 100)}...`
    : description;
  
  return (
    <div className="mt-6 bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-base font-medium text-gray-900">Social Media Previews</h3>
        <p className="mt-1 text-sm text-gray-500">How your ad might appear on social platforms</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Facebook preview */}
        <div 
          className={`border border-gray-200 rounded-md overflow-hidden shadow-sm 
            ${animationStage >= 3 ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '250ms' }}
        >
          <div className="bg-[#4267B2] text-white px-4 py-2 flex items-center">
            <Facebook className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Facebook</span>
          </div>
          <div className="p-4">
            <div className="h-32 bg-gray-100 rounded-sm mb-3"></div>
            <h4 className="font-medium text-[#1877F2] text-sm mb-1">{headline}</h4>
            <p className="text-xs text-gray-600 mb-2">{shortDescription}</p>
            <div className="text-xs text-gray-400">yourwebsite.com</div>
          </div>
        </div>
        
        {/* Twitter preview */}
        <div 
          className={`border border-gray-200 rounded-md overflow-hidden shadow-sm 
            ${animationStage >= 3 ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '300ms' }}
        >
          <div className="bg-[#1DA1F2] text-white px-4 py-2 flex items-center">
            <Twitter className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Twitter</span>
          </div>
          <div className="bg-white p-4">
            <div className="flex items-start">
              <div className="bg-gray-200 w-10 h-10 rounded-full mr-3"></div>
              <div>
                <div className="flex items-center">
                  <span className="font-bold text-sm">Your Brand</span>
                  <span className="text-gray-500 text-xs ml-1">@yourbrand · 1h</span>
                </div>
                <p className="text-sm mt-1">{shortDescription}</p>
                <div className="mt-3 border border-gray-200 rounded-md overflow-hidden">
                  <div className="h-28 bg-gray-100"></div>
                  <div className="p-3">
                    <p className="text-sm font-medium">{headline}</p>
                    <p className="text-xs text-gray-500 mt-1">yourwebsite.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Instagram preview */}
        <div 
          className={`border border-gray-200 rounded-md overflow-hidden shadow-sm 
            ${animationStage >= 3 ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '350ms' }}
        >
          <div className="bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#FFDC80] text-white px-4 py-2 flex items-center">
            <Instagram className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Instagram</span>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
              <span className="text-sm font-medium">yourbrand</span>
            </div>
            <div className="h-40 bg-gray-100 rounded-sm mb-2"></div>
            <div className="flex items-center space-x-3 mt-2 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <p className="text-sm">
              <span className="font-medium">yourbrand</span> {shortDescription.substring(0, 80)}...
            </p>
          </div>
        </div>
        
        {/* LinkedIn preview */}
        <div 
          className={`border border-gray-200 rounded-md overflow-hidden shadow-sm 
            ${animationStage >= 3 ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '400ms' }}
        >
          <div className="bg-[#0077B5] text-white px-4 py-2 flex items-center">
            <Linkedin className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">LinkedIn</span>
          </div>
          <div className="p-4">
            <div className="flex items-start mb-3">
              <div className="w-12 h-12 bg-gray-200 rounded mr-3"></div>
              <div>
                <p className="font-medium text-sm">Your Brand</p>
                <p className="text-xs text-gray-500">Sponsored · <span className="text-blue-600">Follow</span></p>
              </div>
            </div>
            <p className="text-sm mb-3">{shortDescription}</p>
            <div className="border border-gray-200 rounded-md overflow-hidden">
              <div className="h-32 bg-gray-100"></div>
              <div className="p-3 bg-gray-50">
                <p className="font-medium text-sm text-gray-900">{headline}</p>
                <p className="text-xs text-gray-500 mt-1">yourwebsite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPreview; 
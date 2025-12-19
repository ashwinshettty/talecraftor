import React from 'react';
import { Link } from 'react-router-dom';
import traexImage from '../assets/traex.png';
import traexSymbol from '../assets/traexsymbol.png';
import traexDesign from '../assets/traexdesign.png';
import traexSize from '../assets/traexsize.png';
import traexFont from '../assets/traex font.png';
import traexDesignDimension from '../assets/traexdesigndiamision.png';
import traexDesignCard from '../assets/traexdesigncard.png';
import traexLogoGrid from '../assets/traexlogogrid.png';
import traexCloths from '../assets/traexcloths.png';
import traexId from '../assets/traexid.png';
import traexBigScreen from '../assets/traexbigscreen.png';
import traexEmail from '../assets/traxeeamail.png';
import traexPhone from '../assets/traexphone.png';
import traexBuild from '../assets/traexbuild.png';

const Traex = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left Column - Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center py-8 md:py-0 md:ml-[-70px]">
            <img 
              src={traexImage} 
              alt="Traex" 
              className="w-full h-auto max-w-sm md:max-w-none md:w-[90vh] md:h-[90vh] object-cover"
            />
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full md:w-1/2 px-0 md:px-12 flex items-center md:ml-[-10px]">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-sm font-semibold text-[#F87666] uppercase tracking-wider mb-2">
                FULL CASE STUDY
              </h2>
              <h1 className="text-4xl font-bold text-[#143642] mb-6">
                Traex
              </h1>
                
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm font-medium text-gray-500">Date</p>
                  <p className="text-lg text-[#F87666]">7 August 2023</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Category</p>
                  <p className="text-lg text-[#F87666]">Branding</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Industry </p>
                  <p className="text-lg text-[#F87666]">Real Estate</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Client </p>
                  <p className="text-lg text-[#F87666]">Traex</p>
                </div>
                
              </div>
              
              <Link 
                to="/contact" 
                className="inline-block bg-[#F87666] hover:bg-[#143642] text-white font-medium py-3 px-8 rounded-md transition duration-300 text-center w-full sm:w-auto mb-8 md:mb-0"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {/* <div className="sticky bottom-8 flex justify-end pr-8 pb-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#F87666] hover:bg-[#143642] text-white p-3 rounded-full shadow-lg transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div> */}

      {/* Full width images section */}
      <div className="w-full space-y- bg-transparent">
        <img src={traexSymbol} alt="Traex Symbol" className="w-full h-auto" />
        <img src={traexDesign} alt="Traex Design" className="w-full h-auto" />
        <img src={traexSize} alt="Traex Size Guide" className="w-full h-auto" />
        <img src={traexFont} alt="Traex Font" className="w-full h-auto" />
        <img src={traexDesignDimension} alt="Traex Design Dimensions" className="w-full h-auto" />
        <img src={traexDesignCard} alt="Traex Design Card" className="w-full h-auto" />
        <img src={traexLogoGrid} alt="Traex Logo Grid" className="w-full h-auto" />
        <img src={traexCloths} alt="Traex Clothes" className="w-full h-auto" />
        <img src={traexId} alt="Traex ID" className="w-full h-auto" />
        <img src={traexBigScreen} alt="Traex Big Screen" className="w-full h-auto" />
        <img src={traexEmail} alt="Traex Email" className="w-full h-auto" />
        <img src={traexPhone} alt="Traex Phone" className="w-full h-auto" />
        <img src={traexBuild} alt="Traex Build" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Traex;
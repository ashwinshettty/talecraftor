import React from 'react';
import { Link } from 'react-router-dom';
import restinsImage from '../assets/restins.png';
import restinsBanner from '../assets/restinsbanner.png';
import restinsLogo from '../assets/restinslogo.png';
import restinsCard from '../assets/restincard.png';
import restinsTypes from '../assets/restintypes.png';
import restinsCofounder from '../assets/restincofounder.png';
import restinsDesign from '../assets/restindesign.png';
import restinsId from '../assets/restinid.png';
import restinsPhone from '../assets/restinsphone.png';
import restinsBag from '../assets/restinsbag.png';
import restinsCloths from '../assets/restinscloths.png';
import restinsBand from '../assets/restinsband.png';

const Restins = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-0 py-16 mx-0">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2 ml-0 lg:ml-[-20px]">
            <img 
              src={restinsImage} 
              alt="Restins" 
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2 px-0 lg:px-12 flex items-center">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-sm font-semibold text-[#F87666] uppercase tracking-wider mb-2">
                FULL CASE STUDY
              </h2>
              <h1 className="text-4xl font-bold text-[#143642] mb-6">
                Restins
              </h1>
                
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm font-medium text-gray-500">Date</p>
                  <p className="text-lg text-[#F87666]">10 November 2021</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Category</p>
                  <p className="text-lg text-[#F87666]">Branding </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Industry</p>
                  <p className="text-lg text-[#F87666]">Technology</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Client</p>
                  <p className="text-lg text-[#F87666]">Restins</p>
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

      {/* Full width images section */}
      <div className="w-full space-y-4 bg-transparent">
        <img src={restinsBanner} alt="Restins Banner" className="w-full h-auto" />
        <img src={restinsLogo} alt="Restins Logo" className="w-full h-auto" />
        <img src={restinsCard} alt="Restins Card" className="w-full h-auto" />
        <img src={restinsTypes} alt="Restins Types" className="w-full h-auto" />
        <img src={restinsCofounder} alt="Restins Cofounder" className="w-full h-auto" />
        <img src={restinsDesign} alt="Restins Design" className="w-full h-auto" />
        <img src={restinsId} alt="Restins ID" className="w-full h-auto" />
        <img src={restinsPhone} alt="Restins Phone" className="w-full h-auto" />
        <img src={restinsBag} alt="Restins Bag" className="w-full h-auto" />
        <img src={restinsCloths} alt="Restins Cloths" className="w-full h-auto" />
        <img src={restinsBand} alt="Restins Band" className="w-full h-auto" />
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
    </div>
  );
};

export default Restins;
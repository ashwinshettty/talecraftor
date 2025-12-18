import React from 'react';
import { Link } from 'react-router-dom';
import furniCraftImage from '../assets/Furnicraft.png';
import funcraftHome from '../assets/webdesignassets/funcrafthome.png';

const FurniCraft = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="w-full px-0 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Main Image */}
          <div className="w-full lg:w-1/2 ml-0 lg:ml-[-20px]">
            <img 
              src={furniCraftImage} 
              alt="FurniCraft" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Project Details */}
          <div className="w-full lg:w-1/2 mt-11">
            <h2 className="text-sm font-semibold text-[#F87666] uppercase tracking-wider mb-10">
              FULL CASE STUDY
            </h2>
            
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#143642] mb-6">
              FurniCraft
            </h1>
           
            
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Date</h3>
                <p className="text-[#143642]">12 January 2023</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Category</h3>
                <p className="text-[#143642]">Website Design & Development</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Industry</h3>
                <p className="text-[#143642]">
                Manufacturing</p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-[#F87666]">Client</h3>
                <p className="text-[#143642]">FurniCraft</p>
              </div>
              
              <Link 
                to="/contact" 
                className="inline-block bg-[#F87666] hover:bg-[#143642] text-white font-medium py-3 px-8 rounded-md transition duration-300 text-center w-full md:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Web Design Images Section */}
        <div className="mt-16">
          <div className="w-full">
            <img 
              src={funcraftHome} 
              alt="FurniCraft Homepage Design" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Back to Top Button */}
        {/* <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-[#F87666] hover:bg-[#e06b5c] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default FurniCraft;
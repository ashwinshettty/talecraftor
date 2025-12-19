import React from 'react';
import { Link } from 'react-router-dom';
import difyImage from '../assets/dify.png';
import difyMove from '../assets/difymove.png';
import difyTm from '../assets/difytm.png';
import difyProduct from '../assets/difyproduct.png';
import difyChair from '../assets/difychair.png';
import difyBanner from '../assets/dify banner.png';
import difyCard from '../assets/dify card.png';
import difyWatch from '../assets/difywatch.png';
import difyChip from '../assets/difychip.png';
import difyBag from '../assets/difybag.png';
import difyLaptop from '../assets/dify loptop.png';
import difyCardTable from '../assets/difycardtable.png';

const Dify = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left Column - Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center py-8 md:py-0 md:ml-[-70px]">
            <img 
              src={difyImage} 
              alt="Dify" 
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
                Dify
              </h1>
                
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm font-medium text-gray-500">Date</p>
                  <p className="text-lg text-[#F87666]">1 March 2021</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Category</p>
                  <p className="text-lg text-[#F87666]">Branding</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Industry</p>
                  <p className="text-lg text-[#F87666]">Fintech</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Client</p>
                  <p className="text-lg text-[#F87666]">Dify</p>
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
        <img src={difyMove} alt="Dify Movement" className="w-full h-auto" />
        <img src={difyTm} alt="Dify Trademark" className="w-full h-auto" />
        <img src={difyProduct} alt="Dify Product" className="w-full h-auto" />
        <img src={difyChair} alt="Dify Chair" className="w-full h-auto" />
        <img src={difyBanner} alt="Dify Banner" className="w-full h-auto" />
        <img src={difyCard} alt="Dify Card" className="w-full h-auto" />
        <img src={difyWatch} alt="Dify Watch" className="w-full h-auto" />
        <img src={difyChip} alt="Dify Chip" className="w-full h-auto" />
        <img src={difyBag} alt="Dify Bag" className="w-full h-auto" />
        <img src={difyLaptop} alt="Dify Laptop" className="w-full h-auto" />
        <img src={difyCardTable} alt="Dify Card Table" className="w-full h-auto" />
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

export default Dify;
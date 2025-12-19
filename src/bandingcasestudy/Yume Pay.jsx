import React from 'react';
import { Link } from 'react-router-dom';
import yumeImage from '../assets/yume.png';
import yumeHandLogo from '../assets/yumehandlogo.png';
import yumeArt from '../assets/yumeart.png';
import yumePerson from '../assets/yume person.png';
import yumeBoosterBusiness from '../assets/yumeboosterbusiness.png';
import yumeBuilding from '../assets/yumebuilding.png';
import yumeLogo from '../assets/yumelogo.png';
import yumeUI from '../assets/yumeui.png';
import yumePoster from '../assets/yumeposter.png';
import yumeDesign from '../assets/yumedesign.png';

const YumePay = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Main Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src={yumeImage} 
              alt="Yume Pay" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Project Details */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-11">
          <h2 className="text-sm font-semibold text-[#F87666] uppercase tracking-wider mb-10">
                FULL CASE STUDY
              </h2>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-[#143642] mb-6">
              Yume Pay
            </h1>
            
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Date</h3>
                <p className="text-[#143642]">13 December 2023</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Category</h3>
                <p className="text-[#143642]">Branding</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Industry</h3>
                <p className="text-[#143642]">Fintech</p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-[#F87666]">Client</h3>
                <p className="text-[#143642]">Yume </p>
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

        {/* Full Width Branding Images Section */}
        <div className="mt-16 space-y-8">
          <div className="w-full">
            <img 
              src={yumeHandLogo} 
              alt="Yume Hand Logo" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={yumeArt} 
              alt="Yume Art" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={yumePerson} 
              alt="Yume Person" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={yumeBoosterBusiness} 
              alt="Yume Booster Business" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={yumeBuilding} 
              alt="Yume Building" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={yumeLogo} 
              alt="Yume Logo" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={yumeUI} 
              alt="Yume UI" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={yumePoster} 
              alt="Yume Poster" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={yumeDesign} 
              alt="Yume Design" 
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

export default YumePay;
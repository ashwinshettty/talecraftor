import React from 'react';
import { Link } from 'react-router-dom';
import nurtruImage from '../assets/nurtru.png';
import nurtruHand from '../assets/nurtruhand.png';
import nurtruArt from '../assets/nurtruart.png';
import nurtruLogo from '../assets/nurtrulogo.png';
import nurtruBlackLogo from '../assets/nurtrublacklogo.png';
import nurtruColorHex from '../assets/nurtrucolorhexcode.png';
import nurtruBuilding from '../assets/nurtrubliuding.png';
import nurtruBag from '../assets/nurtrubag.png';
import nurtruCards from '../assets/nurtrucards.png';
import nurtruAppBar from '../assets/nurtruappbar.png';
import nurtruPoster from '../assets/nurtruposter.png';
import nurtruBlackCard from '../assets/nurtrublackcard.png';
import nurtruId from '../assets/nurtruid.png';
import nurtruWatch from '../assets/nurtruwatch.png';
import nurtruBoosterCard from '../assets/nurtruboostercard.png';
import nurtruRate from '../assets/nurtrurate.png';
import nurtruWallPoster from '../assets/nurtruwallposter.png';
import nurtruPosterMetro from '../assets/nurtrupostermetro.png';

const Nurtru = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left Column - Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center ml-8 md:ml-[-70px]">
            <img 
              src={nurtruImage} 
              alt="Nurtru" 
              className="w-[90vh] h-[95vh] object-cover"
            />
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full md:w-1/2 px-6 md:px-12 flex items-center ml-8 md:ml-[-10px]">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-sm font-semibold text-[#F87666] uppercase tracking-wider mb-2">
                FULL CASE STUDY
              </h2>
              <h1 className="text-4xl font-bold text-[#143642] mb-6">
                Nurtru
              </h1>
                <p className="text-lg text-[#143642] mb-6">Nurtru is a dynamic digital marketing agency dedicated to helping businesses thrive in the digital age. With a focus on innovation, strategy, and results, they provide comprehensive solutions tailored to meet your unique needs.</p>
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm font-medium text-gray-500">Date</p>
                  <p className="text-lg text-[#F87666]">15 August 2023</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Category</p>
                  <p className="text-lg text-[#F87666]">Branding & Design</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Industry</p>
                  <p className="text-lg text-[#F87666]">Advertising </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Client</p>
                  <p className="text-lg text-[#F87666]">Nurtru</p>
                </div>
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
      </div>

      {/* Full width images section */}
      <div className="w-full space-y-4 bg-transparent">
        <img src={nurtruHand} alt="Nurtru Hand" className="w-full h-auto" />
        <img src={nurtruArt} alt="Nurtru Art" className="w-full h-auto" />
        <img src={nurtruLogo} alt="Nurtru Logo" className="w-full h-auto" />
        <img src={nurtruBlackLogo} alt="Nurtru Black Logo" className="w-full h-auto" />
        <img src={nurtruColorHex} alt="Nurtru Color Hex Codes" className="w-full h-auto" />
        <img src={nurtruBuilding} alt="Nurtru Building" className="w-full h-auto" />
        <img src={nurtruBag} alt="Nurtru Bag" className="w-full h-auto" />
        <img src={nurtruCards} alt="Nurtru Cards" className="w-full h-auto" />
        <img src={nurtruAppBar} alt="Nurtru App Bar" className="w-full h-auto" />
        <img src={nurtruPoster} alt="Nurtru Poster" className="w-full h-auto" />
        <img src={nurtruBlackCard} alt="Nurtru Black Card" className="w-full h-auto" />
        <img src={nurtruId} alt="Nurtru ID" className="w-full h-auto" />
        <img src={nurtruWatch} alt="Nurtru Watch" className="w-full h-auto" />
        <img src={nurtruBoosterCard} alt="Nurtru Booster Card" className="w-full h-auto" />
        <img src={nurtruRate} alt="Nurtru Rate" className="w-full h-auto" />
        <img src={nurtruWallPoster} alt="Nurtru Wall Poster" className="w-full h-auto" />
        <img src={nurtruPosterMetro} alt="Nurtru Metro Poster" className="w-full h-auto" />
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

export default Nurtru;
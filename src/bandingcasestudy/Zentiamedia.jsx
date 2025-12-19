import React from 'react';
import { Link } from 'react-router-dom';
import zenitImage from '../assets/zenit.png';
import wifiImage from '../assets/wifi.png';
import zentiLogoImage from '../assets/zentilogodesign.png';
import zenImage from '../assets/zen.png';
import zenitPhoneImage from '../assets/zenitphone.png';
import zenitCardImage from '../assets/zenitcard.png';
import zenitWatchImage from '../assets/zenitwatch.png';
import zenitLaptopImage from '../assets/zenitlaptop.png';
import zenitHostImage from '../assets/zenithost.png';
import zenitBuildingImage from '../assets/zenitbuilding.png';
import zenitBannerImage from '../assets/zenitbanner.png';
import zenitFlagImage from '../assets/zenitflag.png';

const Zentiamedia = () => {
  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left Column - Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center py-8 md:py-0 md:ml-[-90px]">
            <img 
              src={zenitImage} 
              alt="Zenit Media" 
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
                Zenit Media
              </h1>
              <p className="text-lg text-[#143642] mb-6">
              Zenit Media is an internet service provider company with the goal of leveling up affordable fast internet for all people in various regions.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm font-medium text-gray-500">Date</p>
                  <p className="text-lg text-[#F87666]">10 March 2023</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Category</p>
                  <p className="text-lg text-[#F87666]">Branding & Identity</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Industry</p>
                  <p className="text-lg text-[#F87666]">Telecommunications</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Client   </p>
                  <p className="text-lg text-[#F87666]">Zenit Media </p>
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
      
      {/* Full width images */}
      <div className="w-full max-w-none py-12 space-y-4">
        <div className="w-full overflow-hidden">
          <img src={wifiImage} alt="WiFi Design" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={zentiLogoImage} alt="Logo Design" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={zenImage} alt="Zen Design" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={zenitPhoneImage} alt="Phone Mockup" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={zenitCardImage} alt="Business Card" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={zenitWatchImage} alt="Watch Mockup" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={zenitLaptopImage} alt="Laptop Mockup" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={zenitHostImage} alt="Hosting Service" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={zenitBuildingImage} alt="Building Display" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={zenitBannerImage} alt="Banner Design" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={zenitFlagImage} alt="Flag Design" className="w-full h-auto mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Zentiamedia;
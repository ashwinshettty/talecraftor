import React from 'react';
import { Link } from 'react-router-dom';
import bankoImage from '../assets/bako.png';
import bankoColorCode from '../assets/webdesignassets/Bankocolorcode.png';
import bankoBuild from '../assets/webdesignassets/Bankobuild.png';
import bankoBanking from '../assets/webdesignassets/Bankobanking.png';
import bankoMakeTheMost from '../assets/webdesignassets/Bankomakethemost.png';
import bankoSkip from '../assets/webdesignassets/Bankoskip.png';
import bankoBoost from '../assets/webdesignassets/Bankoboost.png';
import bankoPeace from '../assets/webdesignassets/Bankopeace.png';
import bankoFooter from '../assets/webdesignassets/Bankofooter.png';

const Banko = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="w-full max-w-full px-0 py-16 mx-0">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Main Image */}
          <div className="w-full lg:w-1/2 ml-0 lg:ml-[-20px]">
            <img 
              src={bankoImage} 
              alt="Banko" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Project Details */}
          <div className="w-full lg:w-1/2 mt-11">
            <h2 className="text-sm font-semibold text-[#F87666] uppercase tracking-wider mb-10">
              FULL CASE STUDY
            </h2>
            
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#143642] mb-6">
              Banko
            </h1>
           
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Date</h3>
                <p className="text-[#143642]">17 June 2019</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Category</h3>
                <p className="text-[#143642]">Website Design & Development</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Industry</h3>
                <p className="text-[#143642]">Banking & Finance</p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-[#F87666]">Client</h3>
                <p className="text-[#143642]">Banko</p>
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
        <div className="mt-16 space-y-">
          <div className="w-full">
            <img 
              src={bankoColorCode} 
              alt="Banko Color Scheme" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={bankoBuild} 
              alt="Banko Build Feature" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={bankoBanking} 
              alt="Banko Banking Services" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={bankoMakeTheMost} 
              alt="Banko Make the Most Feature" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={bankoSkip} 
              alt="Banko Skip Feature" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={bankoBoost} 
              alt="Banko Boost Feature" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={bankoPeace} 
              alt="Banko Peace of Mind" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={bankoFooter} 
              alt="Banko Footer" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banko;
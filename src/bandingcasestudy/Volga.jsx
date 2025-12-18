import React from 'react';
import { Link } from 'react-router-dom';
import volgaImage from '../assets/volga.png';
import volgabrand from '../assets/volgabrand.png';
import volgadesign from '../assets/volgadesign.png';
import volgaoldnew from '../assets/volgaoldnew.png';
import volgalogo from '../assets/volgalogo.png';
import volgastm from '../assets/volgatm.png';
import volgalogodesign from '../assets/volgalogodesgin.png';
import volgasize from '../assets/volgasize.png';
import volgapattern from '../assets/volgapattern.png';
import volgacolorsystem from '../assets/volgacolor system.png';
import volgacolorpalette from '../assets/volgacolorpalette.png';
import volgamonochrome from '../assets/volgamonochrome.png';
import volgatypo from '../assets/volgatypo.png';
import volgaprimaryfont from '../assets/volgaprimaryfont.png';
import volgaaplication from '../assets/volgaaplication.png';
import volgacard from '../assets/volgacard.png';
import volgacarddesign from '../assets/volgacarddesign.png';
import volgabanner from '../assets/volgabanner.png';
import volgalopphon from '../assets/volgalopphon.png';
import volgaflag from '../assets/volgaflag.png';
import volgathankyou from '../assets/volgathankyou.png';

const Volga = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left Column - Image with Blue Background */}
          <div className="w-full md:w-1/2 flex items-center justify-center ml-8 md:ml-[-70px]">
            <img 
              src={volgaImage} 
              alt="Volga Real Estate" 
              className="w-auto h-[80vh] object-cover"
            />
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full md:w-1/2 px-6 md:px-12 flex items-center ml-8 md:ml-[-70px]">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-sm font-semibold text-[#F87666] uppercase tracking-wider mb-2">
                FULL CASE STUDY
              </h2>
              <h1 className="text-4xl font-bold text-[#143642] mb-6">
                Volga
              </h1>
              
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm font-medium text-gray-500">Date</p>
                  <p className="text-lg text-[#F87666]">27 August 2023</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Category</p>
                  <p className="text-lg text-[#F87666]">Branding & Identity</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Industry</p>
                  <p className="text-lg text-[#F87666]">Technology Solution </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Client   </p>
                  <p className="text-lg text-[#F87666]">Volga </p>
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
      <div className="w-full max-w-none space-y-4 py-12">
        <img src={volgabrand} alt="Volga Brand" className="w-full h-auto" />
        <img src={volgadesign} alt="Volga Design" className="w-full h-auto" />
        <img src={volgaoldnew} alt="Volga Old vs New" className="w-full h-auto" />
        <img src={volgalogo} alt="Volga Logo" className="w-full h-auto" />
        <img src={volgastm} alt="Volga TM" className="w-full h-auto" />
        <img src={volgalogodesign} alt="Volga Logo Design" className="w-full h-auto" />
        <img src={volgasize} alt="Volga Logo Sizing" className="w-full h-auto" />
        <img src={volgapattern} alt="Volga Pattern" className="w-full h-auto" />
        <img src={volgacolorsystem} alt="Volga Color System" className="w-full h-auto" />
        <img src={volgacolorpalette} alt="Volga Color Palette" className="w-full h-auto" />
        <img src={volgamonochrome} alt="Volga Monochrome" className="w-full h-auto" />
        <img src={volgatypo} alt="Volga Typography" className="w-full h-auto" />
        <img src={volgaprimaryfont} alt="Volga Primary Font" className="w-full h-auto" />
        <img src={volgaaplication} alt="Volga Application" className="w-full h-auto" />
        <img src={volgacard} alt="Volga Card" className="w-full h-auto" />
        <img src={volgacarddesign} alt="Volga Card Design" className="w-full h-auto" />
        <img src={volgabanner} alt="Volga Banner" className="w-full h-auto" />
        <img src={volgalopphon} alt="Volga Laptop & Phone" className="w-full h-auto" />
        <img src={volgaflag} alt="Volga Flag" className="w-full h-auto" />
        <img src={volgathankyou} alt="Volga Thank You" className="w-full h-auto" />
      </div>

      {/* Back to Top Button */}
      <div className="sticky bottom-8 flex justify-end pr-8 pb-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#F87666] hover:bg-[#143642] text-white p-3 rounded-full shadow-lg transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Volga;
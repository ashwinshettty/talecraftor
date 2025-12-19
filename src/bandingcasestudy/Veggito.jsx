import React from 'react';
import { Link } from 'react-router-dom';
import veggitoImage from '../assets/veggito.png';
import veggitoburger from '../assets/veggitoburger.png';
import veggitologo from '../assets/veggitologo.png';
import veggitoburgerlogo from '../assets/veggitoburgerlogo.png';
import veggitobgrun from '../assets/veggitobgrun.png';
import veggitovlogo from '../assets/veggitovlogo.png';
import veggitoseacher from '../assets/veggitoseacher.png';
import veggitothreev from '../assets/veggitothreev.png';
import veggitobluid from '../assets/veggito bluid.png';
import veggitoCharacter from '../assets/veggitocharacter.png';
import veggitoListColor from '../assets/veggitolistcolor.png';
import veggitobeasty from '../assets/veggitobeasty.png';
import veggitopaper from '../assets/veggito paper.png';
import veggitocard from '../assets/veggitocard.png';
import veggitodrink from '../assets/veggitodrink.png';
import veggitovan from '../assets/veggitovan.png';
import veggitobox from '../assets/veggitobox.png';
import veggitodrinkcup from '../assets/veggitodrinkcup.png';

const Veggito = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left Column - Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center md:py-0 md:ml-[-90px]">
            <img 
              src={veggitoImage} 
              alt="Veggito" 
              className="w-full h-auto max-w-sm md:max-w-none md:w-[90vh] md:h-[90vh] object-cover"
            />
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full md:w-1/2 px-0 md:px-12 flex items-center md:ml-[-10px]">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-sm font-semibold text-[#F87666] uppercase tracking-wider mb-2">
                FULL CASE STUDY
              </h2>
                 <h1 className="text-4xl font-bold text-[#143642] ">
                Veggito
              </h1>
              <p className="text-lg text-[#143642] m">
              Veggito, the brand’s mascot and ambassador, is accompanied by his friends Refrito and Batatita, forming 
               a combo full of flavor, health, and consciousness.
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm font-medium text-gray-500">Date</p>
                  <p className="text-lg text-[#F87666]"> 7 January 2024</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Category</p>
                  <p className="text-lg text-[#F87666]">Branding & Identity</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Industry</p>
                  <p className="text-lg text-[#F87666]">Food & Beverage</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Client</p>
                  <p className="text-lg text-[#F87666]">Veggito</p>
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
          <img src={veggitoburger} alt="Veggito Burger" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitologo} alt="Veggito Logo" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitoburgerlogo} alt="Veggito Burger Logo" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitobgrun} alt="Veggito Background" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitovlogo} alt="Veggito V Logo" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitoseacher} alt="Veggito Seacher" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitothreev} alt="Veggito Three V" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitobluid} alt="Veggito Build" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitoCharacter} alt="Veggito Character" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitoListColor} alt="Veggito Color List" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitobeasty} alt="Veggito Beasty" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitopaper} alt="Veggito Paper" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitocard} alt="Veggito Card" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitodrink} alt="Veggito Drink" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitovan} alt="Veggito Van" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitobox} alt="Veggito Box" className="w-full h-auto mx-auto" />
        </div>
        <div className="w-full overflow-hidden">
          <img src={veggitodrinkcup} alt="Veggito Drink Cup" className="w-full h-auto mx-auto" />
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
    </div>
  );
};

export default Veggito;
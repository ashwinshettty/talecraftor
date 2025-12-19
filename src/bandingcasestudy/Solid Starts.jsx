import React from 'react';
import { Link } from 'react-router-dom';
import solidImage from '../assets/solid.png';
import solidLogo from '../assets/solidlogo.png';
import solidArt from '../assets/solidart.png';
import solidHexCode from '../assets/solidhexcode.png';
import solidUrban from '../assets/solidurban.png';
import solidUI from '../assets/solidui.png';
import solidBuilding from '../assets/solidbuilding.png';
import solidInfra from '../assets/solidinfra.png';
import solidPoster from '../assets/solidposter.png';
import solidBanner from '../assets/solidbanner.png';
import solidDigitalPoster from '../assets/soliddigitalposter.png';
import solidInside from '../assets/solidinside.png';
import solidFlag from '../assets/solidflag.png';

const SolidStarts = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Main Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src={solidImage} 
              alt="Solid Starts" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Project Details */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-11">
            <h2 className="text-sm font-semibold text-[#F87666] uppercase tracking-wider mb-10">
              FULL CASE STUDY
            </h2>
            
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#143642] mb-6">
              Solid Starts
            </h1>
            <p className="text-[#143642] mb-6">Solid Starts is a startup company specializing in business consulting services. Catering to small and medium-sized enterprises, the company delivers innovative and tailored solutions aimed at establishing strong and sustainable business foundations.</p>
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Date</h3>
                <p className="text-[#143642]">25 February 2024</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Category</h3>
                <p className="text-[#143642]">Branding</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Industry</h3>
                <p className="text-[#143642]">Consulting</p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-[#F87666]">Client</h3>
                <p className="text-[#143642]">Solid Starts</p>
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
              src={solidLogo} 
              alt="Solid Starts Logo" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={solidArt} 
              alt="Solid Starts Art" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={solidHexCode} 
              alt="Solid Starts Color Palette" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={solidUrban} 
              alt="Solid Starts Urban Design" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={solidUI} 
              alt="Solid Starts UI Design" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={solidBuilding} 
              alt="Solid Starts Building" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={solidInfra} 
              alt="Solid Starts Infrastructure" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={solidPoster} 
              alt="Solid Starts Poster" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={solidBanner} 
              alt="Solid Starts Banner" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={solidDigitalPoster} 
              alt="Solid Starts Digital Poster" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={solidInside} 
              alt="Solid Starts Interior" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={solidFlag} 
              alt="Solid Starts Flag" 
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

export default SolidStarts;
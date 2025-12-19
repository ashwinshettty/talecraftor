import React from 'react';
import { Link } from 'react-router-dom';
import focalImage from '../assets/focal.png';
import focalHome1 from '../assets/webdesignassets/Focalhome.png';
import focalHome2 from '../assets/webdesignassets/Focalhome2.png';
import focalHome3 from '../assets/webdesignassets/focalhome3.png';
import focalHome4 from '../assets/webdesignassets/Focalhome4.png';
import focalHome5 from '../assets/webdesignassets/Focalhome5.png';
import focalHome6 from '../assets/webdesignassets/focalhome6.png';
import focalHome7 from '../assets/webdesignassets/Focalhome7.png';
import focalHome8 from '../assets/webdesignassets/Focalhome8.png';
import focalHome9 from '../assets/webdesignassets/Focalhome9.png';
import focalHome10 from '../assets/webdesignassets/Focalhome10.png';

const Focal = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-0 py-16 mx-0">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Main Image */}
          <div className="w-full lg:w-1/2 ml-0 lg:ml-[-20px]">
            <img 
              src={focalImage} 
              alt="Focal" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Project Details */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-11">
            <h2 className="text-sm font-semibold text-[#F87666] uppercase tracking-wider mb-10">
              FULL CASE STUDY
            </h2>
            
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#143642] mb-6">
              Focal
            </h1>
           
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Date</h3>
                <p className="text-[#143642]">12th May 2018</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Category</h3>
                <p className="text-[#143642]">Website Design & Development</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Industry</h3>
                <p className="text-[#143642]">Eyewear</p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-[#F87666]">Client</h3>
                <p className="text-[#143642]">Focal</p>
              </div>
              
              <Link 
                to="/contact" 
                className="inline-block bg-[#F87666] hover:bg-[#143642] text-white font-medium py-3 px-8 rounded-md transition duration-300 text-center w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Web Design Images Section */}
        <div className="mt-16 space-y-">
          <img src={focalHome1} alt="Focal Home 1" className="w-full h-auto" />
          <img src={focalHome2} alt="Focal Home 2" className="w-full h-auto" />
          <img src={focalHome3} alt="Focal Home 3" className="w-full h-auto" />
          <img src={focalHome4} alt="Focal Home 4" className="w-full h-auto" />
          <img src={focalHome5} alt="Focal Home 5" className="w-full h-auto" />
          <img src={focalHome6} alt="Focal Home 6" className="w-full h-auto" />
          <img src={focalHome7} alt="Focal Home 7" className="w-full h-auto" />
          <img src={focalHome8} alt="Focal Home 8" className="w-full h-auto" />
          <img src={focalHome9} alt="Focal Home 9" className="w-full h-auto" />
          <img src={focalHome10} alt="Focal Home 10" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Focal;
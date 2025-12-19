import React from 'react';
import { Link } from 'react-router-dom';
import ameliaImage from '../assets/amelia.png';
import ameliaHome1 from '../assets/webdesignassets/Ameliahome.png';
import ameliaHome2 from '../assets/webdesignassets/Ameliahome2.png';
import ameliaHome3 from '../assets/webdesignassets/Ameliahome3.png';
import ameliaHome4 from '../assets/webdesignassets/Ameliahome4.png';
import ameliaHome5 from '../assets/webdesignassets/Ameliahome5.png';
import ameliaHome6 from '../assets/webdesignassets/Ameliahome6.png';
import ameliaHome7 from '../assets/webdesignassets/Ameliahome7.png';
import ameliaHome8 from '../assets/webdesignassets/Ameliahome8.png';
import ameliaHome9 from '../assets/webdesignassets/Ameliahome9.png';
import ameliaHome10 from '../assets/webdesignassets/Ameliahome10.png';

const Amelia = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-0 py-16 mx-0">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Main Image */}
          <div className="w-full lg:w-1/2 ml-0 lg:ml-[-20px]">
            <img 
              src={ameliaImage} 
              alt="Amelia" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Project Details */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-11">
            <h2 className="text-sm font-semibold text-[#F87666] uppercase tracking-wider mb-10">
              FULL CASE STUDY
            </h2>
            
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#143642] mb-6">
              Amelia
            </h1>
           
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Date</h3>
                <p className="text-[#143642]">28 November 2023</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Category</h3>
                <p className="text-[#143642]">Website Design & Development</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Industry</h3>
                <p className="text-[#143642]">Photography</p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-[#F87666]">Client</h3>
                <p className="text-[#143642]">Amelia </p>
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
          <img src={ameliaHome1} alt="Amelia Home 1" className="w-full h-auto" />
          <img src={ameliaHome2} alt="Amelia Home 2" className="w-full h-auto" />
          <img src={ameliaHome3} alt="Amelia Home 3" className="w-full h-auto" />
          <img src={ameliaHome4} alt="Amelia Home 4" className="w-full h-auto" />
          <img src={ameliaHome5} alt="Amelia Home 5" className="w-full h-auto" />
          <img src={ameliaHome6} alt="Amelia Home 6" className="w-full h-auto" />
          <img src={ameliaHome7} alt="Amelia Home 7" className="w-full h-auto" />
          <img src={ameliaHome8} alt="Amelia Home 8" className="w-full h-auto" />
          <img src={ameliaHome9} alt="Amelia Home 9" className="w-full h-auto" />
          <img src={ameliaHome10} alt="Amelia Home 10" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Amelia;
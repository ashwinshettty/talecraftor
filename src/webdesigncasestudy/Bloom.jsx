import React from 'react';
import { Link } from 'react-router-dom';
import bloomImage from '../assets/bloom.png';
import bloomColorCode from '../assets/webdesignassets/Bloomcolorcode.png';
import bloomDress from '../assets/webdesignassets/Bloomdress.png';
import bloomEverydaySteal from '../assets/webdesignassets/Bloomeverydaysteal.png';
import bloomCustomerSay from '../assets/webdesignassets/Bloomcustomersay.png';
import bloomCustomerLove from '../assets/webdesignassets/Bloomcoustomerlove.png';
import bloomFreshUpdate from '../assets/webdesignassets/Bloomgetfreshupdate.png';

const Bloom = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="w-full max-w-full px-0 py-16 mx-0">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Main Image */}
          <div className="w-full lg:w-1/2 ml-0 lg:ml-[-20px]">
            <img 
              src={bloomImage} 
              alt="Bloom" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Project Details */}
          <div className="w-full lg:w-1/2 mt-11">
            <h2 className="text-sm font-semibold text-[#F87666] uppercase tracking-wider mb-10">
              FULL CASE STUDY
            </h2>
            
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#143642] mb-6">
              Bloom
            </h1>
           
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Date</h3>
                <p className="text-[#143642]">14 January 2023</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Category</h3>
                <p className="text-[#143642]">Website Design & Development</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Industry</h3>
                <p className="text-[#143642]">Fashion</p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-[#F87666]">Client</h3>
                <p className="text-[#143642]">Bloom</p>
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
        <div className="mt-16 space-y-4">
          <div className="w-full">
            <img 
              src={bloomColorCode} 
              alt="Bloom Color Scheme" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={bloomDress} 
              alt="Bloom Dress Collection" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={bloomEverydaySteal} 
              alt="Bloom Everyday Steal Section" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={bloomCustomerSay} 
              alt="Customer Testimonials" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={bloomCustomerLove} 
              alt="Why Customers Love Bloom" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={bloomFreshUpdate} 
              alt="Get Fresh Updates Section" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bloom;
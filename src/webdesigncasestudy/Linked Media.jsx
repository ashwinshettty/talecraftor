import React from 'react';
import { Link } from 'react-router-dom';
import linkedMediaImage from '../assets/linkedmedia.png';
import linkedMediaHome from '../assets/webdesignassets/Linked Mediahome.png';
import linkedMediaLaptop from '../assets/webdesignassets/Linked Medialoptopview.png';
import linkedMediaFont from '../assets/webdesignassets/Linked Mediafont.png';
import linkedMediaSize from '../assets/webdesignassets/Linked Mediasize.png';
import linkedMediaDesign from '../assets/webdesignassets/Linked Mediadesgin.png';
import linkedMediaClientSay from '../assets/webdesignassets/Linked Mediaclientsay .png';
import linkedMediaFooter from '../assets/webdesignassets/Linked Mediafooter.png';

const LinkedMedia = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="w-full max-w-full px-0 py-16 mx-0">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Main Image */}
          <div className="w-full lg:w-1/2 ml-0 lg:ml-[-20px]">
            <img 
              src={linkedMediaImage} 
              alt="Linked Media" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Project Details */}
          <div className="w-full lg:w-1/2 mt-11">
            <h2 className="text-sm font-semibold text-[#F87666] uppercase tracking-wider mb-10">
              FULL CASE STUDY
            </h2>
            
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#143642] mb-6">
              Linked Media
            </h1>
           
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Date</h3>
                <p className="text-[#143642]">19 September 2023</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Category</h3>
                <p className="text-[#143642]">Website Design & Development</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#F87666]">Industry</h3>
                <p className="text-[#143642]">Advertisement</p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-[#F87666]">Client</h3>
                <p className="text-[#143642]">Linked Media</p>
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
              src={linkedMediaHome} 
              alt="Linked Media Homepage" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={linkedMediaLaptop} 
              alt="Linked Media Laptop View" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={linkedMediaFont} 
              alt="Linked Media Typography" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={linkedMediaSize} 
              alt="Linked Media Responsive Sizes" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={linkedMediaDesign} 
              alt="Linked Media Design Elements" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={linkedMediaClientSay} 
              alt="Client Testimonial" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <img 
              src={linkedMediaFooter} 
              alt="Linked Media Footer" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedMedia;
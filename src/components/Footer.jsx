import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import footerlogo from '../assets/footerlogo.png';
const Footer = () => {
  return (
    <div className="bg-[#143642] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Logo and Text */}
          <div className="space-y-6 mb-30">
            <div className="flex items-center space-x-4">
              <img 
                src={footerlogo} 
                alt="Talecraftor AI" 
                className="h-12 w-auto"
              />
              <div className="text-white">
                <div className="text-2xl font-bold text-[#F87666]">Talecraftor AI</div>
                <div className="text-sm text-gray-300">Your Tale, Our Craft</div>
              </div>
            </div>
            
          </div>

          {/* Middle Column - Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#F87666]">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors underline">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors underline">Privacy Policy</a></li>
                </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#F87666]">Connect</h3>
              <ul className="space-y-4">
                {/* <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a></li> */}
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#F87666]">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 mt-1 mr-3 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">10 Clear View Drive, Mansfield Center,
                Connecticut - 06250</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mt-1 mr-3 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@talecraftor.us" className="text-gray-300 hover:text-white transition-colors">General Inquiries: contact@talecraftor.us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-[#F87666] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-white text-sm">© {new Date().getFullYear()} Talecraftor AI. All rights reserved.</p>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;

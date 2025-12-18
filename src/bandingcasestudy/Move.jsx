import React from 'react';
import { Link } from 'react-router-dom';
import moveImage from '../assets/move.png';
import moveTM from '../assets/movestm.png';
import moveColors from '../assets/movescolor.png';
import moveMovement from '../assets/move movement.png';
import moveColoring from '../assets/movecoloring.png';
import moveKeys from '../assets/movekeys.png';
import movePoster from '../assets/movesposter.png';
import moveBanner from '../assets/movesbanner.png';
import moveCard from '../assets/movescard.png';
import moveApparel from '../assets/movescloths.png';
import moveTickets from '../assets/movestickets.png';
import moveBuilding from '../assets/movesbuilding.png';
import moveWebsite from '../assets/moveswebsite.png';

const Move = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left Column - Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center ml-8 md:ml-[-70px]">
            <img 
              src={moveImage} 
              alt="Move" 
              className="w-[90vh] h-[90vh] object-cover"
            />
          </div>
          
          {/* Right Column - Content */}
          <div className="w-full md:w-1/2 px-6 md:px-12 flex items-center ml-8 md:ml-[-10px]">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-sm font-semibold text-[#F87666] uppercase tracking-wider mb-2">
                FULL CASE STUDY
              </h2>
              <h1 className="text-4xl font-bold text-[#143642] mb-6">
                Move
              </h1>
                
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm font-medium text-gray-500">Date</p>
                  <p className="text-lg text-[#F87666]"> 23 June 2024</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Category</p>
                  <p className="text-lg text-[#F87666]">Branding & Identity</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Industry</p>
                  <p className="text-lg text-[#F87666]">Tourism</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Client</p>
                  <p className="text-lg text-[#F87666]">Move</p>
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
      <div className="w-full space-y-4 bg-transparent">
        <img src={moveTM} alt="Move TM" className="w-full h-auto" />
        <img src={moveColors} alt="Move Colors" className="w-full h-auto" />
        <img src={moveMovement} alt="Move Movement" className="w-full h-auto" />
        <img src={moveColoring} alt="Move Coloring" className="w-full h-auto" />
        <img src={moveKeys} alt="Move Keys" className="w-full h-auto" />
        <img src={movePoster} alt="Move Poster" className="w-full h-auto" />
        <img src={moveBanner} alt="Move Banner" className="w-full h-auto" />
        <img src={moveCard} alt="Move Business Card" className="w-full h-auto" />
        <img src={moveApparel} alt="Move Apparel" className="w-full h-auto" />
        <img src={moveTickets} alt="Move Tickets" className="w-full h-auto" />
        <img src={moveBuilding} alt="Move Building" className="w-full h-auto" />
        <img src={moveWebsite} alt="Move Website" className="w-full h-auto" />
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

export default Move;
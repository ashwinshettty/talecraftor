import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/TalecraftorAIlogo.png';
import ClientFormModal from './components/clientformModal';

export default function Navbar() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const navigateToWebsiteProjects = () => {
    navigate('/websites');
    setIsDropdownOpen(false);
  };

  const navigateToNewProjects = () => {
    navigate('/new-projects');
    setIsDropdownOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !isMobileMenuOpen) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="bg-[#FFF8F0]  fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Talecraftor AI Logo" className="h-10 w-auto" />
          <h1 className="text-xl font-bold text-gray-800">Talecraftor AI</h1>
        </a>
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link to="/" className="hover:text-[#F87666] transition-colors">Home</Link>
          <Link to="/websites" className="hover:text-[#F87666] transition-colors">Website</Link>
          <Link to="/new-projects" className="hover:text-[#F87666] transition-colors">Branding</Link>
          <a href="#" className="hover:text-[#F87666] transition-colors">Become a Craftor</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={openModal}
            className="bg-[#F87666] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#143642] transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg"
          >
            Get Started
          </button>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#FFF8F0] px-6 pb-4 space-y-4">
          <Link to="/" className="block hover:text-[#F87666] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/websites" className="block hover:text-[#F87666] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Website</Link>
          <Link to="/new-projects" className="block hover:text-[#F87666] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Branding</Link>
          <a href="#" className="block hover:text-[#F87666] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Become a Craftor</a>
          <button 
            onClick={() => { openModal(); setIsMobileMenuOpen(false); }}
            className="w-full text-center bg-[#F87666] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#143642] transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg"
          >
            Get Started
          </button>
        </div>
      )}

      <ClientFormModal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
}
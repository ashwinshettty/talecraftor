import { useState } from 'react';
import logo from './assets/TalecraftorAIlogo.png';
import ClientFormModal from './components/clientformModal';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Talecraftor AI Logo" className="h-12 w-auto" />
        <div>
          <h1 className="text-xl font-bold text-primary-dark">Talecraftor AI</h1>
          <p className="text-sm text-[#F87666]">Your Tale, Our Craft</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 text-primary-dark font-medium">
        {/* <a href="#" className="hover:text-[#F87666]">Home</a>
        <a href="#" className="hover:text-[#F87666]">Craftfolio</a>
        <a href="#" className="hover:text-[#F87666]">Become a Craftor</a> */}
      </div>
      <div className="hidden md:flex items-center gap-4">
        <button 
          onClick={openModal}
          className="bg-[#F87666] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#143642] shadow-md transition-colors border border-[#143642]"
        >
          Get Started
        </button>
        <ClientFormModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      <button className="md:hidden text-primary-dark">☰</button>
    </nav>
  );
}
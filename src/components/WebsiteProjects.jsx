import React from 'react';
import { Link } from 'react-router-dom';
import FurnicraftImg from '../assets/Furnicraft.png';
import VelobankImg from '../assets/Velobank.png';
import EtherapyImg from '../assets/etharepy.png';
import LinkedmediaImg from '../assets/linkedmedia.png';
import BakoImg from '../assets/bako.png';
import BloomImg from '../assets/bloom.png';
import AmeliaImg from '../assets/amelia.png';
import FocalImg from '../assets/focal.png';
import JointojoyImg from '../assets/jointojoy.png';
import FurnImg from '../assets/furn.png';

const WebsiteProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Furnicraft - Manufacturing',
      category: 'UI/UX Design',
      image: FurnicraftImg,
      alt: 'Furnicraft Website',
      link: '#'
    },
    {
      id: 2,
      title: 'Velobank - Fintech',
      category: 'UI/UX Design',
      image: VelobankImg,
      alt: 'Velobank Website',
      link: '#'
    },
    {
      id: 3,
      title: 'eTherapy - Healthcare',
      category: 'UI/UX Design',
      image: EtherapyImg,
      alt: 'eTherapy Healthcare Platform',
      link: '#'
    },
    {
      id: 4,
      title: 'Linked Media - E-commerce Growth',
      category: 'UI/UX Design',
      image: LinkedmediaImg,
      alt: 'Linked Media Advertisement Agency',
      link: '#'
    },
    {
      id: 5,
      title: 'Bako - Bakery & Cafe',
      category: 'UI/UX Design',
      image: BakoImg,
      alt: 'Bako Bakery & Cafe Website',
      link: '#'
    },
    {
      id: 6,
      title: 'Bloom - Floral Shop',
      category: 'UI/UX Design',
      image: BloomImg,
      alt: 'Bloom Floral Shop Website',
      link: '#'
    },
    {
      id: 7,
      title: 'Amelia - Fashion Boutique',
      category: 'UI/UX Design',
      image: AmeliaImg,
      alt: 'Amelia Fashion Boutique Website',
      link: '#'
    },
    {
      id: 8,
      title: 'Focal - Photography Studio',
      category: 'UI/UX Design',
      image: FocalImg,
      alt: 'Focal Photography Studio Website',
      link: '#'
    },
    {
      id: 9,
      title: 'Join to Joy - Event Management',
      category: 'UI/UX Design',
      image: JointojoyImg,
      alt: 'Join to Joy Event Management Platform',
      link: '#'
    },
    {
      id: 10,
      title: 'Furn - Modern Furniture',
      category: 'UI/UX Design',
      image: FurnImg,
      alt: 'Furn Modern Furniture Store',
      link: '#'
    }
  ];

  return (
    <section className="py-20 bg-[#FFF8F0]">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <span className="inline-block text-[#F87666] text-sm font-semibold tracking-wider mb-4 uppercase">WEBSITE PROJECTS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#143642] mb-6">Portfolio of Dynamic Websites</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.alt} 
                  className="w-full h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#143642] mb-1">{project.title}</h3>
                <p className="text-[#143642] text-sm mb-4">{project.category}</p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-[#F87666] font-semibold text-sm hover:text-blue-600 transition-colors"
                >
                  View Full Project
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action Section */}
        <div className="mt-20 bg-[#F87666] rounded-xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Need help with a Web Development Project?</h3>
          <Link 
            to="/contact"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/contact';
              setTimeout(() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="inline-block bg-white text-[#F87666] font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#143642] hover:text-white transition-colors duration-300"
          >
            Drop us a line
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebsiteProjects;

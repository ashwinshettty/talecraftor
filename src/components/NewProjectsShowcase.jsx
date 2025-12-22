import React from 'react';
import { Link } from 'react-router-dom';
import ZenitImg from '../assets/zenit.png';
import VolgaImg from '../assets/volga.png';
import VeggitoImg from '../assets/veggito.png';
import TraexImg from '../assets/traex.png';
import MoveImg from '../assets/move.png';
import DifyImg from '../assets/dify.png';
import RestinsImg from '../assets/restins.png';
import NurtruImg from '../assets/nurtru.png';
import YumeImg from '../assets/yume.png';
import SolidImg from '../assets/solid.png';

const NewProjectsShowcase = () => {
  const projects = [
    {
      id: 1,
      title: 'Zenit Media - Telecommunications',
      category: 'UI/UX Design',
      image: ZenitImg,
      alt: 'Zenit Design Studio Website',
      link: '/zentiamedia'
    },
    {
      id: 2,
      title: 'Volga - Technology Solutions',
      category: 'Web Development',
      image: VolgaImg,
      alt: 'Volga Digital Agency Website',
      link: '/volga'
    },
    {
      id: 3,
      title: 'Veggito - Plant-Based Foods',
      category: 'Branding & Web Design',
      image: VeggitoImg,
      alt: 'Veggito Plant-Based Foods Brand',
      link: '/veggito'
    },
    {
      id: 4,
      title: 'Traex - Logistics Solutions',
      category: 'Branding & UI/UX',
      image: TraexImg,
      alt: 'Traex Logistics Solutions',
      link: '/traex'
    },
    {
      id: 5,
      title: 'Move - Relocation Services',
      category: 'Branding & Web Design',
      image: MoveImg,
      alt: 'Move Relocation Services',
      link: '/move'
    },
    {
      id: 6,
      title: 'Dify - AI Solutions',
      category: 'UI/UX & Development',
      image: DifyImg,
      alt: 'Dify AI Solutions Platform',
      link: '/dify'
    },
    {
      id: 7,
      title: 'Restins - Insurance Services',
      category: 'Branding & Web Design',
      image: RestinsImg,
      alt: 'Restins Insurance Services',
      link: '/restins'
    },
    {
      id: 8,
      title: 'Nurtru - Health & Wellness',
      category: 'UI/UX & Branding',
      image: NurtruImg,
      alt: 'Nurtru Health & Wellness Platform',
      link: '/nurtru'
    },
    {
      id: 9,
      title: 'Yume - Japanese Cuisine',
      category: 'Branding & Web Design',
      image: YumeImg,
      alt: 'Yume Japanese Restaurant Branding',
      link: '/yume-pay'
    },
    {
      id: 10,
      title: 'Solid - Construction Solutions',
      category: 'UI/UX & Development',
      image: SolidImg,
      alt: 'Solid Construction Solutions',
      link: '/solid-starts'
    }
  ];

  return (
    <section className="py-20 bg-[#FFF8F0]">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <span className="inline-block text-[#F87666] text-sm font-semibold tracking-wider mb-4 uppercase">
          Branding Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#143642] mb-6">Making Every Brand Popular​</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="overflow-hidden rounded-t-xl">
                <img 
                  src={project.image} 
                  alt={project.alt} 
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="bg-[#FFF8F0] p-6 rounded-b-xl">
                <h3 className="text-xl font-semibold text-[#143642] mb-1">{project.title}</h3>
                <p className="text-[#143642] text-sm mb-4">{project.category}</p>
                <Link 
                  to={project.link}
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center text-[#F87666] font-semibold text-sm hover:text-[#143642] transition-colors"
                >
                  View full project
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
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
            className="inline-block bg-white text-[#F87666] hover:
            bg-[#143642] hover:text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#143642] transition-colors duration-300"
          >
            Drop us a line
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewProjectsShowcase;

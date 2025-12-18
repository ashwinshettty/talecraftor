import React, { useState } from "react";
// import Navbar from "./Navbar";
import hassleImg from "./assets/hassle.png";
import innovationImg from "./assets/innovation.png";
import customizationImg from "./assets/customization.png";
import seamlessImg from "./assets/seamless.png";
import tailoredImg from "./assets/Tailored.png";
import endToEndImg from "./assets/Endtoend.png";
import dedicatedSupportImg from "./assets/deducatedSupport.png";
import intelligentImg from "./assets/Intelligent.png";
import craftedImg from "./assets/crafted.png";
import metaImg from "./assets/meta.png";
import deltaImg from "./assets/Delta.png";
import techmedImg from "./assets/techmed.png";
import powercoreImg from "./assets/powercore.png";
import strongestImg from "./assets/strongest.png";
import cogImg from "./assets/cog.png";
import atImg from "./assets/At.png";
import bondImg from "./assets/bond.png";
import deenaImg from "./assets/deena.png";
import tomImg from "./assets/tom.png";
import tillyGreenImg from "./assets/TillyGreen.png";
import elevateImg from "./assets/Elevate.png";
import comprehensiveImg from "./assets/Comprehen.png";
import integratedImg from "./assets/Integrated.png";
import unboundedImg from "./assets/Unbounded.png";
import ClientFormModal from "./components/clientformModal";
// import Footer from "./components/Footer";

export default function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Re-enable scrolling when modal is closed
  };

  return (
    <div className="bg-[#FFF6EC]">
      <section className="min-h-screen flex items-center pt-[18%] md:pt-0">
        <div className="max-w-7xl w-full mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center md:order-last">
            <img src={hassleImg} alt="Hassle-free website building" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-dark leading-tight">
            From idea to launch: SaaS platforms, mobile apps, and tech services
             
            </h1>
            <p className="mt-6 text-primary-dark max-w-lg">
              Your vision, your software – we bring it to life. No tech expertise
              required. With AI, we deliver cost‑effective solutions faster than
              ever. Plus, your dedicated expert is with you at every step.
              Get your free demo today!
            </p>
            <button 
              onClick={openModal}
              className="md:hidden mt-8 bg-[#F87666] hover:bg-[#143642] text-white px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg"
            >
              Get Started
            </button>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-12">
              <div className="flex items-center gap-3">
                <img src={innovationImg} alt="Innovation & Reliability" className="h-10 w-auto" />
                <div>
                  <p className="font-semibold text-sm text-primary-dark">Innovation &</p>
                  <p className="text-sm text-primary-dark">Reliability</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={customizationImg} alt="Customization & Scalability" className="h-10 w-auto" />
                <div>
                  <p className="font-semibold text-sm text-primary-dark">Customization &</p>
                  <p className="text-sm text-primary-dark">Scalability</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={seamlessImg} alt="Seamless Collaboration" className="h-10 w-auto" />
                <div>
                  <p className="font-semibold text-sm text-primary-dark">Seamless</p>
                  <p className="text-sm text-primary-dark">Collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F87666] py-32 text-white mt-16">
        <div className="relative">
          <svg
            className="absolute top-0 left-0 w-full transform -translate-y-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,50 300,20 500,40 C700,60 900,30 1100,35 C1300,40 1400,20 1440,10 L1440,0 L0,0 Z"
              fill="#F87666"
            />
          </svg>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div className="pt-10">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Empowering Digital
                <br />
                Innovation
              </h2>
            </div>
            <div>
              <p className="max-w-md text-primary-dark">
                Talecraftor AI is committed to revolutionizing the digital landscape
                through cutting-edge website & app development, enabling businesses
                to achieve their full potential in the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#F87666]">
            Our Offerings
          </h2>
          <p className="mt-4 max-w-2xl text-primary-dark">
            Our solutions are meticulously crafted to meet the unique needs of our
            clients, ensuring seamless integration and unparalleled performance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="">
              <img src={tailoredImg} alt="Tailored Workflows" className="w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-dark mb-2">Tailored Workflows</h3>
                <p className="text-sm text-primary-dark">
                  We specialize in creating tailored workflows that streamline processes, optimize efficiency, and drive success for our clients.
                </p>
              </div>
            </div>

            <div className="">
              <img src={endToEndImg} alt="End-to-End Solutions" className="w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-dark mb-2">End-to-End Solutions</h3>
                <p className="text-sm text-primary-dark">
                  Our end-to-end solutions encompass every aspect of app development, from ideation to deployment, ensuring a comprehensive and cohesive approach.
                </p>
              </div>
            </div>

            <div className="">
              <img src={dedicatedSupportImg} alt="Dedicated Support" className="w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-dark mb-2">Dedicated Support</h3>
                <p className="text-sm text-primary-dark">
                  We are dedicated to providing exceptional customer support, ensuring that our clients receive the assistance they need at every stage of their website & app development journey.
                </p>
              </div>
            </div>

            <div className="">
              <img src={intelligentImg} alt="Intelligent Automation" className="w-full  object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-dark mb-2">Intelligent Automation</h3>
                <p className="text-sm text-primary-dark">
                  We leverage intelligent automation tools to enhance productivity, minimize manual intervention, and expedite the app development process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F87666] py-20 text-primary-dark">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img src={craftedImg} alt="Crafted for Excellence" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Crafted for Excellence,
              <br />
              by Innovators
            </h2>
            <p className="mt-6 max-w-lg">
              Our solutions are meticulously crafted by our team of innovators, ensuring that every website & app we develop reflects a dedication to excellence and innovation.
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex items-center gap-3 ">
                <img src={comprehensiveImg} alt="Comprehensive Toolkit" className="w-12 h-12" />
                <p className="font-semibold text-sm">Comprehensive Toolkit</p>
              </div>
              <div className="flex items-center gap-3 ">
                <img src={integratedImg} alt="Integrated File Management" className="w-12 h-12" />
                <p className="font-semibold text-sm">Integrated File Management</p>
              </div>
              <div className="flex items-center gap-3 ">
                <img src={unboundedImg} alt="Unbounded Design Freedom" className="w-12 h-12" />
                <p className="font-semibold text-sm">Unbounded Design Freedom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-left">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <h2 className="text-4xl font-bold text-primary-dark">Trusted by Industry Pioneers</h2>
          <p className="mt-4 max-w-2xl text-primary-dark">
            Our expertise and commitment to excellence have earned the trust of industry pioneers, positioning us as a leading force in the app
            <br />
            development landscape.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mt-16 items-start text-center">
            <div className="flex flex-col items-center gap-4">
              <img src={metaImg} alt="Meta Definer" className="h-13" />
              <p className="font-medium text-sm text-black">META DEFINER</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src={deltaImg} alt="Delta Tech" className="h-13" />
              <p className="font-medium text-sm text-black">Delta Tech</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src={techmedImg} alt="TechMed" className="h-13" />
              <p className="font-medium text-sm text-black">TechMed</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src={powercoreImg} alt="Power Core" className="h-13" />
              <p className="font-medium text-sm text-black">Power Core</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src={strongestImg} alt="Strongest Link" className="h-13" />
              <p className="font-medium text-sm text-black">Strongest Link</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src={cogImg} alt="COG Industry" className="h-13" />
              <p className="font-medium text-sm text-black">COG INDUSTRY</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src={atImg} alt="A.T. Motion" className="h-13" />
              <p className="font-medium text-sm text-black">A.T. MOTION</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img src={bondImg} alt="BOND" className="h-13" />
              <p className="font-medium text-sm text-black">BOND</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F87666] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-primary-dark">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            
            <div className="border-2 border-black rounded-lg p-6 bg-[#FFF6EC] text-primary-dark relative flex flex-col justify-between min-h-[16rem]">
              <div>
                <div className="absolute -top-2 left-4 flex gap-1.5">
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                </div>
                <p className="pt-4 text-sm">"Talecraftor AI's innovative solutions have transformed our business, allowing us to achieve unparalleled success in the digital realm."</p>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div className="text-primary-dark text-sm">
                  <p className="font-bold">Deena Levies,</p>
                  <p>Tech Innovators Inc.</p>
                </div>
                {/* <img src={deenaImg} alt="Deena Levies" className="h-24" /> */}
              </div>
            </div>

            <div className="border-2 border-black rounded-lg p-6 bg-[#FFF6EC] text-primary-dark relative flex flex-col justify-between min-h-[16rem]">
              <div>
                <div className="absolute -top-2 left-4 flex gap-1.5">
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                </div>
                <p className="pt-4 text-sm">"The exceptional expertise of the Talecraftor AI team has propelled our website to new heights, garnering widespread acclaim and user satisfaction."</p>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div className="text-primary-dark text-sm">
                  <p className="font-bold">Tom Smithson,</p>
                  <p>Digital Frontier Solutions</p>
                </div>
                {/* <img src={tomImg} alt="Tom Smithson" className="h-24" /> */}
              </div>
            </div>

            <div className="border-2 border-black rounded-lg p-6 bg-[#FFF6EC] text-primary-dark relative flex flex-col justify-between min-h-[16rem]">
              <div>
                <div className="absolute -top-2 left-4 flex gap-1.5">
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                </div>
                <p className="pt-4 text-sm">"Talecraftor AI's commitment to innovation and quality is truly unparalleled, setting a new standard for app development excellence."</p>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div className="text-primary-dark text-sm">
                  <p className="font-bold">Tilly Green,</p>
                  <p>TechVision Enterprises</p>
                </div>
                {/* <img src={tillyGreenImg} alt="Tilly Green" className="h-24" /> */}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FFF6EC]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl text-primary-dark mb-8">
          Elevate your website & app development journey with Talecraftor AI's transformative solutions, designed to maximize productivity and drive success.
          </h2>
          <button 
            onClick={openModal}
            className="bg-[#F87666] hover:bg-[#143642] text-white px-8 py-3 rounded-md font-medium text-lg mb-12 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-lg"
          >
            Get Started
          </button>
          <div className="flex justify-center mt-8 w-full">
            <img 
              src={elevateImg} 
              alt="Elevate your development journey" 
              className="w-full max-w-9xl h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Client Form Modal */}
      <ClientFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
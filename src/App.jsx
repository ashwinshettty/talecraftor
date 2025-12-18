import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import WebsiteProjects from "./components/WebsiteProjects";
import NewProjectsShowcase from "./components/NewProjectsShowcase";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Zentiamedia from "./bandingcasestudy/Zentiamedia";
import Volga from "./bandingcasestudy/Volga";
import Veggito from './bandingcasestudy/Veggito';
import Traex from './bandingcasestudy/Traex';
import Move from './bandingcasestudy/Move';
import Dify from './bandingcasestudy/Dify';
import Restins from './bandingcasestudy/Restins';
import Nurtru from './bandingcasestudy/Nurtru';
import YumePay from './bandingcasestudy/Yume Pay';
import SolidStarts from './bandingcasestudy/Solid Starts';
import FurniCraft from './webdesigncasestudy/FurniCraft';
import Velobank from './webdesigncasestudy/Velobank';
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/websites" element={<WebsiteProjects />} />
            <Route path="/new-projects" element={<NewProjectsShowcase />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/zentiamedia" element={<Zentiamedia />} />
            <Route path="/volga" element={<Volga />} />
            <Route path="/veggito" element={<Veggito />} />
            <Route path="/traex" element={<Traex />} />
            <Route path="/move" element={<Move />} />
            <Route path="/dify" element={<Dify />} />
            <Route path="/restins" element={<Restins />} />
            <Route path="/nurtru" element={<Nurtru />} />
            <Route path="/yume-pay" element={<YumePay />} />
            <Route path="/solid-starts" element={<SolidStarts />} />
            <Route path="/furnicraft" element={<FurniCraft />} />
            <Route path="/velobank" element={<Velobank />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;

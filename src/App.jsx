import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import WebsiteProjects from "./components/WebsiteProjects";
import NewProjectsShowcase from "./components/NewProjectsShowcase";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;

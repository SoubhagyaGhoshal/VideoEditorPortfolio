import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Marquee from './components/Marquee';

function App() {
  return (
    <div className="min-h-screen bg-primary text-white overflow-x-hidden relative">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-50"></div>

      <Navbar />
      <Hero />
      <Marquee text="VIDEO EDITING • MOTION GRAPHICS • STORYTELLING • COLOR GRADING •" speed={20} />
      <Portfolio />
      <Marquee text="LET'S WORK TOGETHER • ELEVATE YOUR CONTENT • BOOK A CALL •" direction="right" speed={25} />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;

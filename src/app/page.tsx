import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Projects } from '../components/sections/Projects';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';
import HeroSection from '@/components/3d/HeroSection';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';

function App() {
  return (
    <div className="overflow-y-auto">
      <Navbar/>
      <Hero/>
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;


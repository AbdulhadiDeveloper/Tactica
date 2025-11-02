// src/App.js

import React from 'react';
// Local App.jsx (Probable Error Source)
import Navbar from '../components/Navbar'; // <--- Yeh line hatani padegi!
import "../src/App.css"
import AboutHero from '../components/AboutHero';
import TeamCollage from '../components/TeamCollage';
import TextSection from '../components/TextSection';
import MissionSection from '../components/MissonSection';
import TwoColSection from '../components/TwoColSection';
import PromiseSection from '../components/PromiseSection';


function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Navbar ko top par rakha */}
      <Navbar />
      
      <main>
        {/* 2. Hero/Introduction Section is second */}
        <AboutHero /> 
        <TeamCollage/>
        <TextSection/>
        <MissionSection/>
        <TwoColSection/>
        <PromiseSection/>
        
      </main>
      
      {/* Footer component yahaan aayega */}
    </div>
  );
}

export default App;
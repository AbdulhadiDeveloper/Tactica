// src/components/AboutHero.js

import React from 'react';
import Button from '../small-comp/Button.jsx';
// Assuming Button component is available and imported in your main App.jsx

const AboutHero = () => {
  return (
    // Section Container: Uses large padding for height, centered text
    <section className="py-10 lg:py-22 bg-white">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 text-center">
        
        {/* Subtitle */}
        <p className="text-base uppercase tracking-widest text-black mb-6">
          About Tactica
        </p>
        
        {/* Main Headline/Introductory Paragraph */}
        {/* Font size is large and lines are centered for impact */}
        <p className="mt-4 max-w-5xl mx-auto text-4xl sm:text-5xl lg:text-5xl font-meduim text-gray-900 leading-tight">
          WHATEVER STAGE YOUR BUSINESS IS AT, THE TACTICA EXPERTS WILL MEET YOU THERE, TO HELP YOUR BUSINESSES OF ANY SIZE.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
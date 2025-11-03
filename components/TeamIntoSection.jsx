import React from 'react';

const TeamIntroSection = () => {
  return (
    // Section Container: Vertical padding, centers text
    <section className="py-16 lg:py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl font-lg text-black mb-6 leading-tight">
          Great work starts with a great team to work with
        </h2>
        
        {/* Paragraph 1 */}
        <p className="text-md text-black leading-relaxed max-w-3xl mx-auto">
          With as much care as you put in to build your team, we've brought together only the best in their field to join us in ours. We're proud to present you with experts who not only know what they are doing, but are always looking for ways to improve and advance.
        </p>
      </div>
    </section>
  );
};

export default TeamIntroSection;

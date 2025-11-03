import React from 'react';

const ContentHub = () => {
  return (
    // Section Container: Uses light beige background and large vertical padding
    <section className="py-24 bg-orange-100 mt-12"> 
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        
        {/* Main Layout: Two columns on desktop, stack on mobile */}
        <div className="flex flex-col sm:justify-center lg:flex-row justify-between items-start gap-12">
          
          {/* Left Column: Content Headline and Details (w-full on mobile, w-1/2 on desktop) */}
          <div className="w-[200px] lg:w-[300px]">
            <h2 className="text-5xl font-semibold text-black mb-6">
              Content hub
            </h2>
            <p className="text-lg text-black leading-relaxed lg:w-[270px] max-w-lg">
              Elevate your knowledge of digital channels and sales through our expert digital marketing guides. Each of these guides has tens and hundres of articles covering various topics in each marketing discipline.
            </p>
          </div>

          {/* Right Column: CTA Button (Right-aligned on desktop, Full width on mobile) */}
          <div className="w-full lg:w-1/2 flex mt-auto sm:justify-end justify-start pt-16 lg:pt-0">
            
            <a 
              href="#read-more"
              className="px-12 py-3 border border-black text-lg font-small rounded-full 
                         bg-transparent text-black hover:bg-orange-600 hover:text-white transition duration-300 "
            >
              Read More
            </a>

          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default ContentHub;

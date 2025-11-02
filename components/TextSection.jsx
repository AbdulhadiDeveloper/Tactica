// src/components/TextSection.js

import React from 'react';

const TextSection = () => {
  return (
    // 💡 FIX: Add 'hidden' to hide on small/medium screens, and 'lg:block' to show on large screens.
    <section className="hidden lg:block py-12 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20">
        
        {/* Two-Column Content Grid: Collapses to 1 column on mobile/tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            
            {/* Left Column (Expertise & Experience) */}
            <div>
                <p className="text-lg text-black leading-relaxed">
                    Our team of 40+ digital marketing experts has delivered a diverse range of complex SEO, Social Media, and Web projects for corporate clients in Europe and U.S. It continues to provide innovative quality content solutions for all forms of projects that focus primarily on digital growth. The executive team at Tactica is a group of highly experienced Marketing, Digital Marketing and Business Development experts with over 8 years of experience in the Digital Marketing and SEO industries. Over the years, they have consulted and worked with everyone from Fortune 500 companies to small businesses on how best to utilize the internet to achieve quantifiable results.
                </p>
            </div>

            {/* Right Column (Flexibility & Process) */}
            <div>
                <p className="text-lg text-black leading-relaxed">
                    We can offer the flexibility that our customer base requires, whilst at the same time utilizing our highly trained professionals to offer you an extremely professional and efficient service. With you in every step of the way, from idea creation and model development straight through to design and implementation, we will make your transition into growth-optimized e-business as smooth and swift as possible.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TextSection;
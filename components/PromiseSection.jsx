import React, { useState } from 'react';

const PromiseSection = () => {
  
  // 1. State to track the currently active item ID (starts with 1 open)
  const [activeId, setActiveId] = useState(1); 
  
  // Handler function to toggle the expansion: closes if already open, otherwise opens new item.
  const handleToggle = (id) => {
      setActiveId(prevId => (prevId === id ? null : id));
  };
  
  const promiseGoals = [
    "Generate qualified sales leads",
    "Build a strong brand presence online",
    "Establish authority in their respective markets",
    "Upgrade marketing and business development processes"
  ];
  
  // Removed hardcoded 'active' property from data
  const promiseDetails = [
    { 
        id: 1, 
        headline: "Top-Ranked Digital Marketing Agency", 
        text: "Our results speak volumes. And these results earned us our top-ranking status in digital marketing. Our commitment to delivering measurable results combined with our proven growth strategies have helped many of our clients consistently breakthrough their online visibility and generate the desired growth.",
    },
    { 
        id: 2, 
        headline: "In-House Talents in Multiverse Industries", 
        text: "We are a selective agency when it comes to the people we bring to the team. We carefully curate our team, selecting only top of the line professionals with backgrounds in different industries and niches. Our goal is to gather a group of experts capable of creating comprehensive and innovative strategies that bring positive results, pushing businesses to the forefront of their respective industries.",
    },
    { 
        id: 3, 
        headline: "Driven by ROI, not Egos", 
        text: "Being in an industry often motivated by personal motives and self-importance, our approach is unique. We prioritize Return on Investment above egos. Our mission revolves around delivering concrete and inspiring outcomes rather than feeding individual egos. By anchoring ourselves in measurable results, we ensure every strategy, every decision is made with the sole purpose of benefiting our clients.",
    }
  ];
  
  // Arrow Icon (Updated to use the 'active' prop for potential rotation effect)
  const ArrowIcon = ({ active }) => (
    <svg 
      className={`w-12 h-12 flex-shrink-0 ml-4 text-black transition duration-2000 ${active ? 'rotate-45 text-orange-600' : ''}`} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
    </svg>
  );

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Flex Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* 1. LEFT COLUMN: Our Promise & Bullet Points */}
          <div className="w-full lg:w-5/12">
            
            {/* Heading Block */}
            <h3 className="text-3xl lg:text-5xl font-medium text-black mb-6">
              Our Promise
            </h3>
            <p className="text-xl font-small text-black mb-8">
              Client Growth Is Always Our Priority
            </p>
            
            {/* Goals List (Simple Bullets) */}
            <ul className="space-y-3 list-none p-0 text-lg text-black">
              {promiseGoals.map((goal, index) => (
                <li key={index} className="relative pl-6">
                  {/* Custom bullet point styling */}
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-orange-600 font-bold text-xl">•</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
          
          {/* 2. RIGHT COLUMN: Details (Numbered Sections) */}
          <div className="w-full lg:w-5/12 ml-7">
            {/* Outer container provides the bottom line, items provide the top line */}
            <div className="border-b border-black"> 
              {promiseDetails.map((item, index) => {
                // Check if this item is the currently active one
                const isActive = item.id === activeId; 
                
                return (
                <div key={item.id} className="pt-4 border-t border-black">
                  
                  {/* Header Row: Number, Headline, Arrow (Clickable Area) */}
                  <div 
                    className="flex items-start justify-between py-4 cursor-pointer"
                    onClick={() => handleToggle(item.id)} // Bind click handler
                  >
                    
                    {/* Number Circle */}
                    <div 
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-6 font-bold text-black transition-all duration-300 
                      ${isActive ? 'bg-orange-600 border-2 border-black text-base' : 'bg-white border-2 border-black text-black text-lg'}`}
                    >
                      {item.id}
                    </div>
                    
                    {/* Headline */}
                    <h4 className={`text-xl font-bold w-full transition duration-300 ${isActive ? 'text-black' : 'text-black hover:text-orange-600 font-semibold'}`}>
                      {item.headline}
                    </h4>
                    
                    {/* Arrow Icon */}
                    <ArrowIcon active={isActive} />
                  </div>

                  {/* Expanded Content (Conditional rendering based on activeId) */}
                  {isActive && ( // Render only if active
                      <div className="pl-14 pb-6 transition-all duration-2000"> 
                          <p className="text-base text-black leading-relaxed">
                              {item.text}
                          </p>
                      </div>
                  )}
                  
                </div>
              )})}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PromiseSection;

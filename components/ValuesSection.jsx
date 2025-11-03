import React, { useState } from 'react';

const ValuesSection = () => {
    // State to track which value is currently expanded/active
    const [activeValue, setActiveValue] = useState('Integrity'); 

    // Helper component for the Join Us button
    const JoinUsButton = () => (
        <button className="bg-orange-600 text-black border border-black font-semibold px-8 py-3 rounded-full flex items-center space-x-2 
                        hover:bg-black hover:text-white transition duration-300 mt-6 ">
            <span>Join Us</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
    );

    const valuesData = [
        { 
            name: 'Integrity', 
            details: 'Integrity is our core value. We are committed to honesty, transparency, and doing what is right, even when no one is watching. Firstly, we Tacticians like to hold ourselves to high ethical standards and secondly we aim to establish and maintain trust with our customers, partners, and within our team.',
            imageUrl: 'https://seotactica.com/wp-content/uploads/2023/09/Rectangle-4413.png'
        },
        { 
            name: 'Accountability', 
            details: 'We take pride in being responsible for what we do, good or bad. We own up our actions and make things right. We do have a commitment to following through on our promises and being reliable for our team and our clients.',
            imageUrl: 'https://seotactica.com/wp-content/uploads/2023/09/DSC_7976.webp'
        },
        { 
            name: 'Transparency', 
            details: 'We strive to share information as honestly and openly as possible, fostering trust by keeping things clear and straightforward. We believe in being upfront in our communication and not be vague and ambiguous.',
            imageUrl: 'https://seotactica.com/wp-content/uploads/2023/09/DSC_7916.webp'
        },
        { 
            name: 'Collaboration', 
            details: 'We strongly believe that our success comes when we combine the range of perspectives and the collective efforts of our team. By prioritizing open communication, teamwork, and a shared vision, we strive to create an environment in which collaboration thrives, enabling us to achieve extraordinary outcomes as a group.',
            imageUrl: 'https://seotactica.com/wp-content/uploads/2023/09/DSC_7802.webp'
        },
    ];

    const activeItem = valuesData.find(item => item.name === activeValue);

    // Pill Styling Helper
    const pillBase = "px-[45px] py-[10px] rounded-full border border-black cursor-pointer flex-shrink-0 transition-all duration-300 font-semibold text-medium hover:z-20";

    return (
        <section className="py-10 lg:py-[80px] px-[10px] lg:px-[80px] bg-[#EDEDED] mx-15 border border-black rounded-[45px] ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- Main Container: Split into Left (w-1/3) and Right (w-2/3) --- */}
                <div className="flex flex-col lg:flex-row justify-between relative mb-8">
                    
                    {/* Left: Headline and Intro Text */}
                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                        <h3 className="text-4xl lg:text-5xl font-semibold text-black mb-4">
                            Our Values
                        </h3>
                        <p className="text-base text-black mb-6 max-w-xs">
                            We are driven by our values which are an incredibly important part of how we operate. We stand by four key pillars to success
                        </p>
                        <JoinUsButton />
                    </div>

                    {/* --- Right: SINGLE DIV FOR ALL PILLS AND DETAILS (w-2/3) --- */}
                    <div className="w-full lg:w-2/3 relative">

                        {/* A. PILL CHAIN (Top part of the right div) */}
                       <div className="h-40 relative hidden lg:flex items-center justify-end mb-20">
                            {/* Wrapper for the pills: Aligned right, NO overall rotation */}
                            <div className="flex absolute bottom-0 right-0">
                                {valuesData.map((item, index) => {
                                    // 💡 Alternating rotation logic: Even index (0, 2) is positive (rotate-3), Odd index (1, 3) is negative (-rotate-3)
                                    const rotationClass = index % 2 === 0 ? 'transform rotate-10' : 'transform -rotate-10'; 

                                    return (
                                        <div 
                                            key={item.name}
                                            // Use negative margin-left for overlapping effect
                                            className={`relative -ml-10 first:ml-0 z-[${10 - index}] transition-transform duration-300 hover:scale-105`}
                                            onClick={() => setActiveValue(item.name)}
                                        >
                                            <div
                                                // Apply alternating rotation and pill styling
                                                className={`${pillBase} ${rotationClass} ${
                                                    activeValue === item.name 
                                                        ? 'bg-orange-600 text-black border-orange-600' // Active orange style
                                                        : 'bg-white text-black ' // Default white style
                                                }`}
                                            >
                                                {item.name}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                                 <div className="w-full lg:hidden mt-8 flex flex-col items-start gap-4">
                            {/* Mobile Join Us Button (Placed before pills for vertical stack order) */}
           
                            
                            {/* Vertical Stack of Pills */}
                            {valuesData.map((item) => (
                                <div 
                                    key={item.name}
                                    className="w-full"
                                    onClick={() => setActiveValue(item.name)}
                                >
                                    <div
                                        // PillBase and full-width styling for the stack
                                        className={`${pillBase} w-full text-center ${
                                            activeValue === item.name 
                                                 ? 'bg-orange-600 text-black border-orange-600' // Active orange style
                                                        : 'bg-white text-black ' // Default white style 
                                        }`}
                                    >
                                        {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>

                       

                        {/* C. EXPANDED CONTENT (Bottom part of the right div) - UPDATED STYLING */}
                        {/* Added py-8 bg-white to the container to ensure the entire expanded section has a clean background */}
                            


                            {/* Left: Detail Content */}
                            <div className='ml-10'>
                                <h4 className="text-2xl font-lg text-black mb-4">
                                    {activeItem.name}
                                </h4>
                                <p className="text-md text-black leading-relaxed">
                                    {activeItem.details}
                                </p>
                            </div>

                            {/* Right: Image */}
                            <div className="ml-10 mt-5 rounded-xl overflow-hidden shadow-xl">
                                <img 
                                    src={activeItem.imageUrl} 
                                    alt={activeItem.name} 
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/999999/FFFFFF?text=Value+Image" }}
                                />
                            </div>
                            

                    </div>
                    {/* End of Right Div (w-2/3) */}

                </div>

            </div>
        </section>
    );
};

export default ValuesSection;

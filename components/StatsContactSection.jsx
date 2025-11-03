import React from 'react';

const statsData = [
    { value: '350K', label: 'Hours of consulting' },
    { value: '50+', label: 'Digital marketing experts on staff' },
    { value: '200+', label: 'Projects managed' },
];

const StatsContactSection = () => {
    // Placeholder image for the team member (Blendrit Elezaj)
    const memberImageUrl = 'https://seotactica.com/wp-content/uploads/2023/09/blendrit.webp'; 
    
    // Large Arrow Icon for the submit button
    const ArrowIcon = () => (
        <svg className="w-8 h-8 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
    );
    
    return (
        <section className="bg-orange-600 py-10 lg:py-12 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Layout: Split into two columns on large screens, stack on mobile */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
                    
                    {/* --- LEFT COLUMN: Contact and Input Area --- */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6">
                        
                        {/* Member Image and CTA Text */}
                        <div className="flex items-center space-x-4 mb-4">
                            
                            {/* Circular Image */}
                            <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden">
                                <img
                                    src={memberImageUrl}
                                    alt="Blendrit Elezaj"
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/96x96/FFFFFF/333333?text=BE' }}
                                />
                            </div>

                            {/* CTA Text */}
                            <div className="text-lg font-medium">
                                Ready to speak with a marketing expert?<br/>
                                <span className="text-xl">Get in touch</span>
                            </div>
                        </div>

                        {/* Input and Submit Button */}
                        <form className="flex w-full max-w-lg gap-2 rounded-full overflow-hidden">
                            <input
                                type="url"
                                placeholder="Enter your website"
                                className="flex-grow p-4 text-orange-600 bg-white border-none rounded-full focus:ring-0 focus:outline-none placeholder-gray-500"
                            />
                            {/* Custom Large Arrow Button */}
                            <button
                                type="submit"
                                className="bg-white text-orange-600 p-4 w-16 flex items-center justify-center rounded-full hover:bg-gray-100 transition duration-200"
                                aria-label="Submit website"
                            >
                                <ArrowIcon />
                            </button>
                        </form>
                        
                        {/* Name Label */}
                        <p className="text-sm font-medium pt-2">
                            © Blendrit Elezaj
                        </p>
                    </div>

                    {/* --- RIGHT COLUMN: Statistics --- */}
                    <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-end items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8 mt-10 lg:mt-0">
                        
                        {statsData.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                {/* Large Metric Number */}
                                <h3 className="text-4xl font-bold mb-4">
                                    {stat.value}
                                </h3>
                                
                                {/* Pill Label */}
                                <div className="px-8 py-2 border-1 border-white rounded-full text-sm font-lg transition duration-300 cursor-pointer">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsContactSection;

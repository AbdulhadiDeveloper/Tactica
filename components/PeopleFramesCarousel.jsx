import React, { useState, useEffect } from 'react';

const carouselItems = [
    { type: 'image', src: 'https://seotactica.com/wp-content/uploads/2023/10/img-carousel-1.jpg', alt: 'Team Member 1' },
    { type: 'image', src: 'https://seotactica.com/wp-content/uploads/2023/10/img-carousel-2.jpg', alt: 'Team Member 2' },
    { type: 'image', src: 'https://seotactica.com/wp-content/uploads/2023/10/img-carousel-3.jpg', alt: 'Team Member 3' },
    { type: 'image', src: 'https://seotactica.com/wp-content/uploads/2023/10/img-carousel-3.jpg', alt: 'Team Member 4' },
    { type: 'image', src: 'https://seotactica.com/wp-content/uploads/2023/10/img-carousel-5.jpg', alt: 'Team Member 5' },
];

const PeopleFramesCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    };

    // Auto-advance feature (optional, but good for carousels)
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    // Helper to get classes for each item based on its position relative to activeIndex
    const getItemClasses = (index) => {
        let classes = "absolute inset-0 transition-all duration-500 ease-in-out flex justify-center"; // Added justify-center for alignment
        // Calculate offset, handling wrapping (circular movement)
        let offset = index - activeIndex;

        // Ensure offset wraps correctly for a smooth circular carousel illusion
        if (offset > carouselItems.length / 2) {
            offset -= carouselItems.length;
        } else if (offset < -carouselItems.length / 2) {
            offset += carouselItems.length;
        }

        // Apply classes based on offset
        if (offset === 0) {
            // Active item (Center and full scale)
            classes += " opacity-100 scale-100 rotate-0 translate-x-0 z-20"; 
        } else if (offset === 1) {
            // Next item to right (More pronounced stagger)
            classes += " opacity-70 scale-[0.85] rotate-12 translate-x-[45%] z-10"; 
        } else if (offset === -1) {
            // Prev item to left (More pronounced stagger)
            classes += " opacity-70 scale-[0.85] -rotate-12 translate-x-[-45%] z-10"; 
        } else if (offset === 2) {
            // Second next item (Further recess)
            classes += " opacity-30 scale-[0.75] rotate-12 translate-x-[75%] z-0"; 
        } else if (offset === -2) {
            // Second prev item (Further recess)
            classes += " opacity-30 scale-[0.75] -rotate-12 translate-x-[-75%] z-0"; 
        } else {
            // Far away items, hidden off-screen
            classes += " opacity-0 scale-70 translate-x-0 z-0"; 
        }
        return classes;
    };

    return (
        <section className="py-16 bg-white relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative h-[100px] sm:h-[150px] md:h-[250px] overflow-hidden">
                    {carouselItems.map((item, index) => (
                        <div
                            key={index}
                            // CRITICAL FIX: Limiting the item width to create space for offset
                            className={`absolute inset-0 h-full transform origin-center ${getItemClasses(index)}`}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                // Setting explicit width on the image to control the base size
                                className="w-[100px] sm:w-[150px] md:w-[250px] h-full object-cover rounded-lg shadow-xl" 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/600x400/cccccc/333333?text=Frame+${index + 1}`;
                                }}
                            />
                            {/* You can add a Play icon for videos if type === 'video' */}
                        </div>
                    ))}

                    {/* Navigation Arrows (Optional, can be added for manual control) */}
                    {/* <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">‹</button>
                    <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">›</button> */}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-8 space-x-2">
                    {carouselItems.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                                index === activeIndex ? 'bg-orange-600' : 'bg-gray-300'
                            }`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PeopleFramesCarousel;

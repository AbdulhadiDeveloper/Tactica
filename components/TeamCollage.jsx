// src/components/TeamCollage.js

import React from 'react';

const TeamCollage = () => {
    // This is the URL ID for the image you uploaded.
    const collageImageUrl = 'https://seotactica.com/wp-content/uploads/2024/10/about-1024x466.png'; 

    return (
        // Section Container: Just for spacing, no relative/absolute
        <section className="py-12 bg-white"> 
            {/* 💡 FIX: Inner div par horizontal padding (px-6) add kiya */}
            <div className="max-w-full overflow-hidden px-6 sm:px-8 lg:px-22"> 
                <img 
                    src={collageImageUrl} 
                    alt="Tactica Team Collage" 
                    // Image ko 100% width maintain rakhega aur center mein aa jayega
                    className="w-full h-auto object-cover filter grayscale" 
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/1200x600/f0f0f0/666666?text=Image+Missing" }}
                />
            </div>
        </section>

        
    );
};

export default TeamCollage;
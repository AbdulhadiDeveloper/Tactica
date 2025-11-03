import React from 'react';

// Helper component for social icons (using SVGs for clarity)


const SocialIcon = ({ href, icon, label }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-8 h-8 rounded-full border border-gray-500 text-gray-400 flex items-center justify-center 
                   hover:text-white hover:border-white transition duration-200"
        aria-label={`Follow on ${label}`}
    >
        {icon}
    </a>
);

// Inline SVG paths for social icons
const Icons = {
    Facebook: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
    Instagram: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112 8a4 4 0 014 3.37zM17.5 6.5h.01"/></svg>,
    LinkedIn: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6.5A2.5 2.5 0 116.5 4 2.5 2.5 0 014 6.5z"/></svg>,
};

const Footer = () => {
    const navItemClasses = "text-white text-sm transition duration-200";

    return (
        <div className="bg-black text-white pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- Main 4-Column Grid (Stacks on Mobile) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 pb-12">
                    
                    {/* COLUMN 1: Logo & CTA */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className='w-48'> 
                            <img src="https://seotactica.com/wp-content/uploads/2023/10/WHITE_LOGO_TACTICA.webp" alt="" />
                        </div>
                        
                        <div className="text-3xl font-bold leading-snug">
                            Want to<br/>collaborate with<br/>us
                        </div>
                        
                        <button className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-full flex items-center space-x-2  transition duration-300">
                            <span>Let's talk</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </button>
                        
                        <div className="pt-4">
                            <span className="text-gray-400 mr-4">Follow us:</span>
                            <div className="flex space-x-3 mt-2">
                                <SocialIcon href="#" icon={Icons.Facebook} label="Facebook" />
                                <SocialIcon href="#" icon={Icons.Instagram} label="Instagram" />
                                <SocialIcon href="#" icon={Icons.LinkedIn} label="LinkedIn" />
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 2: Services Menu */}
                    <div className="flex flex-col space-y-3">
                        <h5 className="text-lg text-[#FFFFFF80] font-medium mb-2">Services</h5>
                        <a href="#" className={navItemClasses}>SEO</a>
                        <a href="#" className={navItemClasses}>Web Development</a>
                        <a href="#" className={navItemClasses}>Social Media</a>
                        <a href="#" className={navItemClasses}>PPC</a>
                        <a href="#" className={navItemClasses}>Graphic Design</a>
                    </div>

                    {/* COLUMN 3: Company Menu */}
                    <div className="flex flex-col space-y-3">
                        <h5 className="text-lg text-[#FFFFFF80] font-medium mb-2">Company</h5>
                        <a href="#" className={navItemClasses}>About</a>
                        <a href="#" className={navItemClasses}>Our Professional Services</a>
                        <a href="#" className={navItemClasses}>Our Work: Proven Success Across Industries</a>
                        <a href="#" className={navItemClasses}>Learn</a>
                        <a href="#" className={navItemClasses}>Contact Us</a>
                    </div>

                    {/* COLUMN 4: Content Hub (Nested Structure) */}
                    <div className="flex flex-col space-y-4">
                        <h5 className="text-lg text-[#FFFFFF80] font-medium mb-2">Content Hub</h5>
                        
                        <p className="text-sm font-semibold text-white">PPC Content Hub</p>
                        <a href="#" className={navItemClasses}>What is a good ROAS: How to Maximize Your Potential</a>

                        <p className="text-sm font-semibold text-white">Social Media Marketing Content Hub</p>
                        <a href="#" className={navItemClasses}>Healthcare Social Media Marketing</a>

                        <p className="text-sm font-semibold text-white">Graphic Design Content Hub</p>
                        <a href="#" className={navItemClasses}>9 Alternative Careers for Graphic Designers</a>
                        
                        <a href="#" className="text-white transition duration-200 pt-2 text-sm">View more</a>
                    </div>

                </div>

                {/* --- Copyright Bottom Bar --- */}
                <div className="pt-6 pb-4 border-t border-gray-700">
                    <p className="text-sm text-gray-400">© Copyright 2024 - Tactica</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

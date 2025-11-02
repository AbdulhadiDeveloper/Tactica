import React, { useState } from 'react';
import Button from '../small-comp/Button.jsx';
import './Custom.css'


const ArrowIcon = () => (
    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
);
// Dropdown Icon: isOpen state se rotate hoga
const DropdownIcon = ({ isOpen }) => (
    <svg className={`ml-1 w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
);

const serviceLinks = [
    { name: 'SEO', href: '#' },
    { name: 'Social Media Marketing', href: '#' },
    { name: 'PPC', href: '#' },
    { name: 'Web Development', href: '#' },
    { name: 'Graphic Design', href: '#' },
];


// =================================================================
// 3. Main Navbar Component (Corrected)
// =================================================================

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu
  const [isServicesOpen, setIsServicesOpen] = useState(false); // 💡 Services Dropdown State Added

  const navItems = [
    { name: 'About', href: '#', active: true, dropdown: false }, 
    { name: 'Services', href: '#', active: false, dropdown: true }, 
    { name: 'Our Work', href: '#', active: false, dropdown: false },
    { name: 'Learn', href: '#', active: false, dropdown: false },
  ];

  return (
    <nav className="px-14 sticky top-0 bg-white shadow-md z-50 h-[75px]">
      
      {/* Inner Container: Full Height (h-full) aur Vertical Centering (items-center) */}
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        
        {/* Logo (Fixed height 45px) */}
        <a href="/" className="flex-shrink-0">
          <img 
                src="https://seotactica.com/wp-content/uploads/2023/09/LOGO_TACTICA.webp" 
                className='h-[45px] w-auto p-1' 
                alt="Tactica Logo" 
            />
        </a>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-4 items-center">
          {navItems.map((item) => (
            // Dropdown container
            <div 
                key={item.name} 
                className={`h-full flex items-center ${item.dropdown ? 'relative' : ''}`} 
                // Services dropdown open/close handlers
                onMouseEnter={() => item.dropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.dropdown && setIsServicesOpen(false)}
            >
                {/* Link Element */}
                <a 
                    href={item.href} 
                    className={`flex items-center font-normal transition duration-300 p-2 ${
                        item.active || (item.dropdown && isServicesOpen) ? 'text-orange-600' : 'text-gray-900 hover:text-orange-600'
                    }`}
                    onClick={(e) => item.dropdown && e.preventDefault()} // Dropdown link click hone par page reload nahi hoga
                >
                    {item.name}
                    {/* Dropdown Icon */}
                    {item.dropdown && <DropdownIcon isOpen={isServicesOpen} />}
                </a>

                {/* --- Services Dropdown Menu (Desktop) --- */}
                {item.name === 'Services' && isServicesOpen && (
                    <div 
                        // Dropdown box ki positioning aur styling
                        className="absolute top-full left-0 mt-0 w-60 bg-white shadow-xl rounded-lg border border-gray-100 z-50 overflow-hidden text-left py-2"
                    >
                        {serviceLinks.map((service, index) => (
                            <a 
                                key={index}
                                href={service.href}
                                className="block px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-600 font-medium transition duration-200"
                            >
                                {service.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
          ))}
          
          {/* CTA Button: Black Border applied */}
          <Button 
            variant="primary"
            borderColor="border-black"
            className='!text-black custom '
          >
            Let's talk <ArrowIcon />
          </Button>
        
        </div>
        
        <div className="flex items-center lg:hidden space-x-4"> 
            {/* Mobile Let's Talk Button */}
            <Button 
                variant="primary"
                size="small"
                borderColor="border-black"
                className='!text-black custom'
            >
                Let's talk
            </Button>
            
            {/* Mobile Menu Toggle (Hamburger) */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-gray-700 hover:text-orange-700 focus:outline-none p-2"
                aria-label="Toggle Menu"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                )}
            </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden mt-4 space-y-2 pb-2 px-4 bg-white shadow-lg`}>
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href} 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-md"
          >
            {item.name}
          </a>
        ))}
      </div>

    </nav>
  );
};

export default Navbar;
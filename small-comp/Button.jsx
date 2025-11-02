// src/components/Button.js (Updated with Custom Color Support)


import React from 'react';

const Button = ({ 
    children, 
    // Default style: 'primary' (Orange solid)
    variant = 'primary', 
    // Default size: 'medium'
    size = 'medium', 
    onClick, 
    // Custom Color Props (Optional)
    bgColor,      
    borderColor,  
    // High-priority Customization Prop (Tailwind classes ko override karne ke liye)
    className = '' 
}) => {
  
  // 1. Base Styles (Jo har button par honge)
  const baseStyles = 'font-semibold rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 inline-flex items-center justify-center';

  // 2. Size Styles
  let sizeStyles = '';
  if (size === 'large') {
    sizeStyles = 'px-8 py-3 text-lg'; 
  } else { 
    // Default: medium
    sizeStyles = 'px-6 py-2'; 
  }

  // 3. Variant Styles (Main Colour Theme: Orange)
  let variantStyles = '';
  if (variant === 'secondary') {
    // White background, Orange border
    variantStyles = 'bg-white text-orange-600 border border-orange-600 hover:bg-orange-50 focus:ring-orange-500';
  } else { 
    // Default: Primary (Solid Orange)
    variantStyles = 'bg-orange-600 text-black hover:bg-orange-700 focus:ring-orange-500 shadow-lg border border-black'; 
  }

  // 4. Custom Color Overrides (Agar props diye gaye hain)
  let finalBg = bgColor ? bgColor : '';
  let finalBorder = borderColor ? `border border-2 ${borderColor}` : '';
  
  // 5. Final Class Assembly
  // Internal classes ko pehle jodda, phir external className ko aakhir mein joda (Override ke liye)
  const internalClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${finalBg} ${finalBorder}`;
  const finalClasses = `${internalClasses} ${className}`;

  return (
    <button
      className={finalClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button
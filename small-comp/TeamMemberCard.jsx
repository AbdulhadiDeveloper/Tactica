import React, { useState } from 'react';

const TeamMemberCard = ({ defaultImage, name, position }) => {
  // Removed isHovered state as it's no longer needed

  // The image source is always the default image
  const currentImage = defaultImage;

  return (
    <div
      // Main container styling (removed all hover effects)
      className="w-[300px]  flex-shrink-0 bg-white border border-black overflow-hidden 
                 cursor-pointer transition-transform duration-300"
      // Removed onMouseEnter and onMouseLeave handlers
    >
      {/* Image Area */}
      <div className="relative h-[360px] overflow-hidden">
        <img
          src={currentImage}
          alt={`${name} - ${position}`}
          // The image is always displayed in color (no grayscale)
          className={`w-full h-full object-cover transition-all duration-500 ease-in-out filter-none`}
          onError={(e) => { e.target.onerror = null; e.target.src = {currentImage} }}
        />
      </div>

      {/* Text Content */}
      <div className=" text-center">
        <h4 className="text-xl font-bold text-black py-4 border-y border-black">{name}</h4>
        <p className="text-medium text-black  font-small py-4  ">{position}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;

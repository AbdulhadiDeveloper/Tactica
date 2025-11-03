import React from 'react';

const JoinTeamSection = () => {
  return (
    <section className="bg-orange-600 py-16 lg:py-24 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-semibold mb-8 leading-tight uppercase">
          Come join our team & let's
          <br />
           get tactical!
        </h2>
        
        {/* Button */}
        <button 
          className="bg-white text-black font-small px-10 py-4 rounded-full border-1 border-black 
                     hover:bg-black hover:text-white transition duration-300 text-small"
        >
          See job vacancies
        </button>

      </div>
    </section>
  );
};

export default JoinTeamSection;

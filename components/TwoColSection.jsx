import React from "react";

const TwoColSection = () => {
  // Placeholder image URL
  const imageUrl =
    "https://placehold.co/600x400/E8F5E9/000000?text=Growth+Chart";
  const imageAlt = "Digital Growth Chart";

  // Static layout parameters
  // Keeping these classes ensures responsiveness (stacks on mobile, side-by-side on desktop)
  const directionClasses = "flex-col lg:flex-row";

  return (
    <section className={`py-16 lg:py-24 bg-orange-600`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Flex Container (Responsive: Stacks on mobile, row on desktop) */}
        <div
          className={`flex ${directionClasses} gap-10 lg:gap-16 items-center`}
        >
          {/* 1. LEFT/CONTENT COLUMN (Main Content) */}
          <div className="w-full lg:w-1/2">
            {/* Simple Heading */}
            <h3 className="text-4xl lg:text-5xl font-semibold text-white mb-6">
              We keep the focus on
              <br />
              driving results.
            </h3>

            {/* Simple Paragraphs */}
            <p className="text-lg text-white leading-relaxed mt-4">
              Tactica crafts a personalized growth strategy that aligns with the
              needs of your business. Our approach combines tools and techniques
              that will surely and consistently lead us to accomplish your
              business goals.
            </p>

            {/* Simple Button */}
            <div className="mt-8">
              <button className="bg-white text-orange-600 px-6 py-3 text-medium rounded-full font-semibold hover:bg-orange-600 border border-white hover:text-white transition">
                Our Portfolio
              </button>
            </div>
          </div>

          {/* 2. RIGHT/IMAGE COLUMN (Image Display) */}
          <div className="w-1/2 lg:w-1/2">
            <div className="rounded-xl overflow-hidden">
              <img
                src={"https://seotactica.com/wp-content/uploads/2023/11/Group-639.png"}
                alt={imageAlt}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColSection;

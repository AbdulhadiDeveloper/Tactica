import React, { useState, useEffect } from "react";
import Button from "../small-comp/Button";

// --- Carousel Image Data ---
const carouselImages = [
  {
    src: "https://seotactica.com/wp-content/uploads/2023/12/team-work-2-1.jpg",
    alt: "Team Work 1",
  },
  {
    src: "https://seotactica.com/wp-content/uploads/2023/12/team-work-3-1.jpg",
    alt: "Team Work 2",
  },
  {
    src: "https://seotactica.com/wp-content/uploads/2023/12/team-work-1-1.jpg",
    alt: "Team Work 3",
  },
];

const MissionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const SocialButton = ({ children, platform }) => {
    return (
      <a
        href={`#${platform.toLowerCase()}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-2 px-6 py-2 bg-black text-white rounded-full 
                           font-small hover:bg-orange-600 hover:text-black transition duration-300 "
        aria-label={`Follow us on ${platform}`}
      >
        <span>{platform}</span>
        {children}
      </a>
    );
  };

  // Icon URLs
  const smileyIconUrl =
    "https://seotactica.com/wp-content/uploads/2023/09/Group-630.png";
  const megaphoneIconUrl =
    "https://seotactica.com/wp-content/uploads/2023/09/image-1-9.png";

  return (
    // Desktop Only: Use hidden by default and lg:block to display
    <section className=" block py-20 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* --- 1. OUTER CONTAINER: FLEXBOX IMPLEMENTATION --- */}
        <div className="flex  h-lg-[1150px] h-800px gap-8 m-[20px] g:gap-8 flex-col lg:flex-row">
          {/* 2. div1: LEFT COLUMN (Orange Content Block) - w-1/2 */}
          <div
            // w-1/2 aur h-full (parent height ka 100%) diya
            className="w-lg-[520px] w-full lg:w-1/2 lg:px-[50px] lg:pb-[50px] lg:h-full flex-shrink-0 bg-orange-600 rounded-[40px] px-[50px] pb-[50px] text-white relative overflow-hidden flex flex-col justify-between h-full"
          >
            {/* Smiley Icon with Blue/White Ring (Positioning fixed) */}
            <div className="absolute self-end mt-5 w-25 h-25 rounded-full flex items-center justify-center">
              <img
                src={smileyIconUrl}
                alt="Smiley Icon"
                // W-full aur h-full taaki icon container ke andar theek se fit ho
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/128x128/A0A0A0/FFFFFF?text=Icon";
                }}
              />
            </div>

            {/* Top Text Content (mt-16 se start kiya) */}
            <div className="mt-34">
              <p className="text-base leading-relaxed mb-6 font-normal">
                Founded in the year 2018 with a keen focus on the dynamic realm
                of Search Engine Optimization, Tactica embarked on its journey
                as a pioneering force in the digital landscape. Over the course
                of its transformative evolution, Tactica has transcended its
                origins to emerge as a comprehensive and all-encompassing
                digital marketing agency, redefining the paradigms of excellence
                in the industry.
              </p>
              <p className="text-base leading-relaxed mt-6 font-normal flex-lg-none">
                Our inception as an SEO-centric entity was but a precursor to
                the grand tapestry of expertise we have woven over time. Today,
                we stand proudly as a multifaceted powerhouse, equipped with an
                arsenal of skills and proficiencies that span the entire
                spectrum of digital marketing. From the moment a client steps
                into our collaborative ecosystem, they are ushered into a realm
                where their industry affiliation holds no bounds – a testament
                to our commitment to universal excellence.
              </p>
              <p className="text-base leading-relaxed mt-6 font-normal">
                Within our hallowed ranks, a collective of seasoned digital
                marketers, visionary developers, innovative designers, and
                eloquent writers converge, forming an interdisciplinary symphony
                of talent poised to orchestrate digital endeavors of any
                magnitude. No project is deemed too intricate, no challenge too
                formidable. With a blend of experience and audacity, we
                undertake every task with the unwavering determination to
                surpass expectations.
              </p>
            </div>

            {/* Mission Title at the bottom */}
            <h3 className="text-5xl font-medium mb-2 mb-lg-10">Our Mission</h3>
          </div>

          {/* 3. RIGHT STACK CONTAINER - flex flex-col w-1/2 */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* 3a. TOP ROW: Work Philosophy Card (w-1/2) & Carousel (w-1/2) - flex-row */}
            <div className="flex w-full h-auto lg:h-1/2 gap-4 flex-col lg:flex-row">
              {/* Work Philosophy Card (w-1/2, h-full of the top row) */}
              <div className="w-full lg:w-1/2 bg-white rounded-[40px] p-8 border border-black relative overflow-hidden ">
                {/* Megaphone Icon (Image URL used) */}
                <div className="absolute top-4 right-4 w-25 h-25 flex items-center justify-center overflow-hidden">
                  <img
                    src={megaphoneIconUrl}
                    alt="Megaphone Icon"
                    className="w-25 h-25 object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://seotactica.com/wp-content/uploads/2023/09/image-1-9.png";
                    }}
                  />
                </div>
                <h3 className="text-5xl font-meduim text-black mb-4 mt-32">
                  Work Philosophy
                </h3>
                <p className="text-md text-black leading-relaxed">
                  We strive to provide a tailored digital growth solution that
                  meets the specific needs of each client.
                </p>
              </div>

              <div className="w-full lg:w-1/2 relative rounded-[40px] overflow-hidden border border-black min-h-[300px]">
                {" "}
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/400x600/cccccc/333333?text=Slide+${
                        index + 1
                      }`;
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="w-full p-8 flex flex-col justify-between relative">
              {/* Top CTA / Follow us! Pill */}
              <div className="flex items-start justify-between">
                <h4 className="text-3xl font-normal text-black leading-tight">
                  Get updated with
                  <br />
                  everything on our team
                </h4>
                {/* Follow us! Pill (Yellow/Blue/LightBlue style) */}
                <div className="w-20 h-20 absolute ">
                  {/* You will provide the image URL here */}
                  <img
                    src="https://seotactica.com/wp-content/uploads/2023/09/Group-458-1.png"
                    alt="Team Update"
                    className="w-[50px] h-[50px] ml-[315px] mt-2 object-cover rounded-md"
                  />
                </div>
                <button className="bg-[#B9F7FF] border border-black text-black px-[35px] py-[10px] rounded-full text-sm mr-[35px] mt-3 ">
                  Follow us!
                </button>
              </div>

              {/* Social Media Buttons */}
              <div className="flex flex-wrap gap-4 mt-8 ">
                {/* Using the defined SocialButton function */}
                <SocialButton platform="Facebook">
                  <span className="text-xl text-white">f</span>
                </SocialButton>
                <SocialButton platform="Instagram">
                  <span className="text-xl text-white">i</span>
                </SocialButton>
                <SocialButton platform="LinkedIn">
                  <span className="text-xl text-white">in</span>
                </SocialButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

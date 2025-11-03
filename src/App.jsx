// src/App.js

import React from 'react';
// Local App.jsx (Probable Error Source)
import Navbar from '../components/Navbar'; 
import "../src/App.css"
import AboutHero from '../components/AboutHero';
import TeamCollage from '../components/TeamCollage';
import TextSection from '../components/TextSection';
import MissionSection from '../components/MissonSection';
import TwoColSection from '../components/TwoColSection';
import PromiseSection from '../components/PromiseSection';
import ValuesSection from '../components/ValuesSection';
import TeamIntroSection from '../components/TeamIntoSection';
import JoinTeamSection from '../components/JoinTeamSection';
import InstagramCTA from '../components/InstagramCTA';
import PeopleFramesCarousel from '../components/PeopleFramesCarousel';
import TeamGridSection from '../components/TeamGridSection';
import ContentHub from '../components/ContentHub';
import BlogSection from '../components/BlogSection';
import StatsContactSection from '../components/StatsContactSection';
import Footer from '../components/footer';


function App() {

  const mainTeamData = [ [
    { name: "Rilind Elezaj", position: "Co-founder", image: "https://seotactica.com/wp-content/uploads/2024/02/rilindi.webp" },
    { name: "Blendrit Elezaj", position: "Co-founder", image: "https://seotactica.com/wp-content/uploads/2024/09/DSC00609-scaled-1366x2048.jpg" },
    { name: "Fatjon Kabashi", position: "Head of Social Media", image: "https://seotactica.com/wp-content/uploads/2024/02/DSC_5996.webp" },
    { name: "Kujtim Aliu", position: "Graphic Design Team Lead", defaultImage: "https://seotactica.com/wp-content/uploads/2024/02/DSC_5264.webp" }
  ],

  [
    { name: "Ardian Orllati", position: "Head of Project Coordinators", image: "https://seotactica.com/wp-content/uploads/2024/02/ardian-normal.webp" },
    { name: "Rinor Gërvalla", position: "Head of Sales", image: "https://seotactica.com/wp-content/uploads/2024/02/DSC_5041.webp" },
    { name: "Edmond Shala", position: "Head of SEO", image: "https://seotactica.com/wp-content/uploads/2024/02/DSC_7283.webp" },
    { name: "Yllka Etemi", position: "HR & Office Manager", defaultImage: "https://seotactica.com/wp-content/uploads/2024/02/DSC_5133.webp" }
  ],
  [
    { name: "Dilara Kaçaniku", position: "Junior Graphic Designer", image: "https://seotactica.com/wp-content/uploads/2024/09/dilara1-scaled-1366x2048.jpg" },
    { name: "Gerta Salihi", position: "Senior Social Media Manager", image: "https://seotactica.com/wp-content/uploads/2024/02/DSC_5616.webp" },
    { name: "Genti Canaj", position: "Motion Graphics Designer", image: "https://seotactica.com/wp-content/uploads/2024/02/DSC_5857.webp" },
    { name: "Ardit Fushtica", position: "Senior Social Media Manager", defaultImage: "https://seotactica.com/wp-content/uploads/2024/02/DSC_5927.webp" }
  ],
  [
    { name: "Pëllumb Ymeri", position: "Junior Content Strategist", image: "https://seotactica.com/wp-content/uploads/2024/02/DSC_6232.webp" },
    { name: "Altin Elshani", position: "SEO Specialist", image: "https://seotactica.com/wp-content/uploads/2024/02/DSC_6294.webp" },
    { name: "Dea Januzi", position: "Project Coordinator", image: "https://seotactica.com/wp-content/uploads/2024/02/DSC_7456.webp" },
    { name: "Ferdeze Pista", position: "Outreach Specialist", defaultImage: "https://seotactica.com/wp-content/uploads/2024/02/Ferdeze.webp" }
  ],
  [
    { name: "Genta Dashi", position: "Outreach Specialist", image: "https://seotactica.com/wp-content/uploads/2024/02/image_123650291-2.webp" },
    { name: "Erinda Elezaj", position: "Business Analyst", image: "https://seotactica.com/wp-content/uploads/2024/02/erinda1.webp" },
    { name: "Diana Bajraktari", position: "Senior Content Strategist", image: "https://seotactica.com/wp-content/uploads/2024/02/Diana-Bajraktari.webp" },
    { name: "Erion Murati", position: "Social Media Manager", defaultImage: "https://seotactica.com/wp-content/uploads/2024/02/Erion-Murati.webp" }
  ],
  [
    { name: "Rinesa Berisha", position: "Project Coordinator", image: "https://seotactica.com/wp-content/uploads/2024/02/Rinesa-Berisha.webp" },
    { name: "Ermal Toplica", position: "Project Coordinator", image: "https://seotactica.com/wp-content/uploads/2024/09/Ermali1-scaled-1366x2048.jpg" },
    { name: "Ebru Zhita", position: "Senior Content Strategist", image: "https://seotactica.com/wp-content/uploads/2024/09/Ebru1-scaled-1366x2048.jpg" },
    { name: "Gent Selani", position: "Senior Graphic Designer", defaultImage: "https://seotactica.com/wp-content/uploads/2024/09/Gent-Selani-scaled-1436x1536.jpg" }
  ],
  [
    { name: "Nita Demiri", position: "UI/UX Designer", image: "https://seotactica.com/wp-content/uploads/2024/09/nita1-scaled-1366x2048.jpg" },
    { name: "Erzon Sokoli", position: "Videographer", image: "https://seotactica.com/wp-content/uploads/2024/09/erzon1-scaled-1366x2048.jpg" },
    { name: "Rona Jashari", position: "Link Building Outreach Intern", image: "https://seotactica.com/wp-content/uploads/2024/09/erzon1-scaled-1366x2048.jpg" },
    { name: "Dëbora Jerliu", position: "Link Building Outreach Intern", defaultImage: "https://seotactica.com/wp-content/uploads/2024/09/debora1-scaled-1366x2048.jpg" }
  ],
  [
    { name: "Liza Hasi", position: "Link Building Outreach Intern", image: "https://seotactica.com/wp-content/uploads/2024/09/liza1-scaled-1366x2048.jpg" },
    { name: "Enes Topalli", position: "Link Building Outreach Intern", image: "https://seotactica.com/wp-content/uploads/2024/09/enes1-scaled-1366x2048.jpg" },
    { name: "Endri Berisha", position: "Link Building Outreach Intern", image: "https://seotactica.com/wp-content/uploads/2024/09/DSC00259-scaled-1366x2048.jpg" },
    { name: "Anita Mjeku", position: "SEO Intern", defaultImage: "https://seotactica.com/wp-content/uploads/2024/09/DSC00251-scaled-1366x2048.jpg" }
  ],
  [
    { name: "Diellza Hyseni", position: "SEO Intern", image: "https://seotactica.com/wp-content/uploads/2024/09/DSC00284-scaled-1366x2048.jpg" },
    { name: "Era Gashi", position: "SEO Intern", image: "https://seotactica.com/wp-content/uploads/2024/09/DSC00278-scaled-1366x2048.jpg" },
  ]
  
];




  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Navbar ko top par rakha */}
      <Navbar />
      
      <main>
        {/* 2. Hero/Introduction Section is second */}
        <AboutHero /> 
        <TeamCollage/>
        <TextSection/>
        <MissionSection/>
        <TwoColSection/>
        <PromiseSection/>
        <ValuesSection/>
        <TeamIntroSection/>
        <JoinTeamSection/>
        <InstagramCTA/>
        <PeopleFramesCarousel/>
        <TeamGridSection teamMembers={mainTeamData[0]} />
        <TeamGridSection teamMembers={mainTeamData[1]} />
        <TeamGridSection teamMembers={mainTeamData[2]} />        
        <TeamGridSection teamMembers={mainTeamData[3]} />
        <TeamGridSection teamMembers={mainTeamData[4]} />
        <TeamGridSection teamMembers={mainTeamData[5]} />
        <TeamGridSection teamMembers={mainTeamData[6]} />
        <TeamGridSection teamMembers={mainTeamData[7]} />
        <TeamGridSection teamMembers={mainTeamData[8]} />
        <ContentHub/>
        <BlogSection/>
        <StatsContactSection/>

      </main>
      
      <Footer/>
    </div>
  );
}

export default App;
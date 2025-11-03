import React from 'react';
import TeamMemberCard from '../small-comp/TeamMemberCard.jsx'; // Adjust path as needed

// Component now accepts teamMembers prop from the parent component (App.jsx)
const TeamGridSection = ({ teamMembers }) => {
    // Ensure teamMembers is an array before mapping. If null/undefined, it defaults to an empty array.
    const dataToRender = Array.isArray(teamMembers) ? teamMembers : []; 
    
    // Helper to determine the image URL, accounting for 'image' or 'defaultImage'
    const resolveImageUrl = (member) => member.defaultImage || member.image;

    return (
        <section className="py-2 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-wrap justify-start -mx-4 -mt-8">
                    
                    {dataToRender.map((member, index) => {
                        // Create a unique key by combining name, position, and index (simulating nanoid for uniqueness)
                        const uniqueKey = `${member.name}-${member.position}-${index}`;
                        
                        const imageUrl = resolveImageUrl(member);

                        return (
                            <div
                                // This outer div manages the responsive columns and spacing
                                key={uniqueKey} 
                                className="flex-shrink-0 w-full sm:w-1/2  xl:w-1/4  px-4 pt-8"
                            >
                                <TeamMemberCard
                                    // The key prop remains on the container div
                                    defaultImage={imageUrl} 
                                    hoverImage={imageUrl} 
                                    name={member.name}
                                    position={member.position}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TeamGridSection;

import React, { useState } from 'react';

const blogContent = [
    {
        category: 'Graphic Design',
        title: 'Graphic design is not just about creating pretty pictures...',
        details: 'Graphic design is not just about creating pretty pictures; it\'s about creating a strong visual identity that can attract and engage your target audience.',
        imageUrl: 'https://seotactica.com/wp-content/uploads/2023/10/Layer_1-1.png',
        articles: [
            'Key Principles of Minimalist Graphic Design',
            '8 Best Graphic Design Books to Elevate Your Skills',
            'How & When To Outsource Graphic Design',
            'Other Articles',
        ]
    },
    {
        category: 'Link Building',
        title: 'Link building is an indispensable part of any effective SEO strategy...',
        details: 'Link building is an indispensable part of any effective SEO strategy that can have a significant impact on your website’s search engine rankings, traffic, and revenue.',
        imageUrl: 'https://seotactica.com/wp-content/uploads/2023/09/Isolation_Mode-1-1.png',
        articles: [
            'Referring Domains vs Backlinks: Understanding the Difference',
            'How To Get Wikipedia Backlinks',
            '7 Tips on Getting High PR Dofollow Backlinks for Your Website',
            'Other Articles',
        ]
    },
    {
        category: 'PPC',
        title: 'Are you looking for a way to quickly generate leads and sales for your business?',
        details: 'Are you looking for a way to quickly generate leads and sales for your business?',
        imageUrl: 'https://seotactica.com/wp-content/uploads/2023/10/Isolation_Mode-2.png',
        articles: [
            'How to Do Small Business PPC Management',
            'PPC Audit Checklist: A Guide to a Strategic Approach',
            'What Are Google Ads KPIs & How to Track Them',
            'Other Articles',
        ]
    },
    {
        category: 'UI/UX Design',
        title: 'Web design is the backbone of any successful online presence.',
        details: 'Web design is the backbone of any successful online presence.',
        imageUrl: 'https://seotactica.com/wp-content/uploads/2023/09/9bf22f1b-06f4-4d03-a834-66328884db3e_WEB_DESIGN-GUIDES1.png',
        articles: [
            'Why is Web Design Important?',
            '10 Benefits of Responsive Web Design',
            'Website vs Blog: Which One Is Right for Your Business',
            'Other Articles',
        ]
    },
    {
        category: 'Content Marketing',
        title: 'Web design is the backbone of any successful online presence.',
        details: 'Content marketing’s objective is to create and distribute valuable, relevant, and consistent content to attract and retain a specific audience',
        imageUrl: 'https://seotactica.com/wp-content/uploads/2023/10/Isolation_Mode-3.png',
        articles: [
            'How Content Marketing in Healthcare Can Help You Grow',
            'Content Marketing for eCommerce',
            'How to Get More Qualified Leads with Content Marketing for Real Estate',
            'Other Articles',
        ]
    },
    {
        category: 'On-Page SEO',
        title: 'Web design is the backbone of any successful online presence.',
        details: 'Search engine optimization (SEO) is an essential component of digital marketing that focuses on optimizing your website and content to improve your search engine rankings, increase organic traffic, and ultimately enhance your online visibility and revenue.',
        imageUrl: 'https://seotactica.com/wp-content/uploads/2023/10/Isolation_Mode-4-300x159.png',
        articles: [
            'Referring Domains vs Backlinks: Understanding the Difference',
            'How To Get Wikipedia Backlinks',
            '7 Tips on Getting High PR Dofollow Backlinks for Your Website',
            'Other Articles',
        ]
    },

];

let BlogContent2 = [
       {
        category: 'Digital Marketing Career',
        title: 'Web design is the backbone of any successful online presence.',
        details: 'Digital marketing has become an essential component of business strategy in today’s world.',
        imageUrl: 'https://seotactica.com/wp-content/uploads/2023/10/Layer_1-2.png',
        articles: [
            '6 Best Cold Email Software for 2023',
            'Key Principles of Minimalist Graphic Design',
            '8 Best Graphic Design Books to Elevate Your Skills',
            'Other Articles',
        ]
    },
    {
        category: 'Career',
        title: 'Web design is the backbone of any successful online presence.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imageUrl: 'https://seotactica.com/wp-content/uploads/2023/09/Layer_1-4.png',
        articles: [
            '6 Best Cold Email Software for 2023',
            'Key Principles of Minimalist Graphic Design',
            '8 Best Graphic Design Books to Elevate Your Skills',
            'Other Articles',
        ]
    },
    {
        category: 'Social media marketing',
        title: 'Web design is the backbone of any successful online presence.',
        details: 'Social media marketing is a game-changer for businesses looking to build their brand and drive conversions.',
        imageUrl: 'https://seotactica.com/wp-content/uploads/2023/09/d3dff46f-b966-4909-961d-23ce2bed6f28_SOCIAL_MEDIA-Guides1.png',
        articles: [
            'Social Media Marketing Pros And Cons',
            'How to Promote a New Website on Social Media',
            'How to Generate Leads on Facebook',
            'Other Articles',
        ]
    },
]

const BlogSection = () => {
    const [activeCategory, setActiveCategory] = useState(blogContent[0].category);

    const activeItem = blogContent.find(item => item.category === activeCategory) || blogContent[0];

    // Base styling for category pills
    const pillBase = "px-6 py-2 rounded-full font-semibold cursor-pointer transition duration-300 flex-shrink-0 whitespace-nowrap";

    return (
        <section className="py-2 bg-orange-100 pb-[100px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- 1. Category Pills Navigation --- */}

                <div className="flex overflow-x-auto pb-4 space-x-3">
                    {blogContent.map((item) => (
                        <div
                            key={item.category}
                            onClick={() => setActiveCategory(item.category)}
                            className={`${pillBase} ${
                                activeCategory === item.category
                                   ? 'bg-orange-600 text-black border border-black'
                                    : 'bg-white text-black border border-black hover:bg-orange-600'
                            }`}
                        >
                            {item.category}
                        </div>
                    ))}
                </div>

                 <div className="flex overflow-x-auto pb-4 mb-12 space-x-3">
                    {BlogContent2.map((item) => (
                        <div
                            key={item.category}
                            onClick={() => setActiveCategory(item.category)}
                            className={`${pillBase} ${
                                activeCategory === item.category
                                   ? 'bg-orange-600 text-black border border-black'
                                    : 'bg-white text-black border border-black hover:bg-orange-600'
                            }`}
                        >
                            {item.category}
                        </div>
                    ))}
                </div>

                {/* --- 2. Content Display (Three Column Flexbox Layout) --- */}
                {/* Desktop: Three columns (Image, Details, Articles) | Mobile: Stacks Vertically */}
                <div className="flex flex-col lg:flex-row gap-8  border border-black bg-white p-5 rounded-[40px] py-[80px]">
                    
                    {/* DIV 1: Image (Takes approx 1/3 space on desktop) */}
                    <div className="sm:w-3/5 md:w-2/5 lg:w-1/5 mt-5  flex flex-col space-y-6 flex-shrink-0">
                        
                        {/* Image Placeholder */}
                        <div className=" overflow-hidden p-5" >
                            <img 
                                src={activeItem.imageUrl}
                                alt={activeItem.category}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/999999/FFFFFF?text=Image' }}
                            />
                        </div>
                        
                        {/* Intro Text (Moved to Div 2) */}
                    </div>

                    {/* DIV 2: Details (Takes approx 1/3 space on desktop) */}
                    <div className="w-full lg:w-1/3 flex flex-col space-y-6 mt-[60px]">
                        {/* Intro Text */}
                        <div>
                            <h4 className="text-5xl font-lg text-black mb-2">{activeItem.category}</h4>
                            <p className="text-small w-[300px] mt-3 text-black">{activeItem.details}</p>
                        </div>
                    </div>


                    {/* DIV 3: Article List (Takes approx 1/3 space on desktop) */}
                    <div className="w-full lg:w-2/4 pt-6 lg:pt-0">
                        <h4 className="text-5xl font-lg text-black mb-4">Articles</h4>
                        <div className="space-y-2">
                            {activeItem.articles.map((article, index) => (
                                <li key={index} className="pb-3 ">
                                    <a href="#" className="text-2xl text-black transition duration-200 block font-lg ">
                                        {article}
                                    </a>
                                </li>
                            ))}
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BlogSection;






import React, { useState, useEffect  } from 'react';

export const FeaturesSection: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextFeature = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
      setIsTransitioning(false);
    }, 250);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const prevFeature = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
      setIsTransitioning(false);
    }, 250);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const goToFeature = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentFeature(index);
      setIsTransitioning(false);
    }, 250);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setIsTransitioning(false);
      }, 250);
    }, 3500);

    return () => clearInterval(interval);
  }, [features.length, isPaused]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Everything you need for successful homeschooling
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          From lesson planning to progress tracking, HomeTribe has all the tools your family needs.
        </p>
      </div> */}
      
      {/* Feature Carousel */}
      <div 
        className="bg-white rounded-lg p-8 shadow-sm"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevFeature}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous feature"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToFeature(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentFeature ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextFeature}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next feature"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="text-center">
          <div 
            className={`transition-all duration-500 ease-in-out ${
              isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className={`w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center bg-${features[currentFeature].color}-100`}>
              {features[currentFeature].icon}
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {features[currentFeature].title}
            </h3>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {features[currentFeature].description}
            </p>
            
            <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center text-gray-500">
              [{features[currentFeature].mockup}]
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




const features = [
  {
    id: 1,
    title: "Lesson on Planning",
    description: "Create engaging lesson plans with our intuitive drag-and-drop interface. Organize subjects, set learning objectives, and track completion.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    color: "blue",
    mockup: "Lesson Planning Mockup"
  },
  {
    id: 2,
    title: "Progress Tracking",
    description: "Monitor your child's learning journey with detailed progress reports, achievement badges, and milestone celebrations.",
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "green",
    mockup: "Progress Dashboard Mockup"
  },
  {
    id: 3,
    title: "Community",
    description: "Connect with other homeschooling families, share resources, and join local meetups through our community platform.",
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "purple",
    mockup: "Community Hub Mockup"
  }
];
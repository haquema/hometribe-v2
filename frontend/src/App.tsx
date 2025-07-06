import { useState, useEffect } from 'react';

function App() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);


  const features = [
    {
      id: 1,
      title: "Lesson Planning",
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

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/logo.png" alt="HomeTribe" className="h-8" />
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">Sign up</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Log in
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Homeschooling made simple.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The all-in-one place to plan lessons, track progress, and build a community of learners. We've got all the tools to make your homeschooling a success!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="px-6 py-20 bg-gray-50">
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
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about HomeTribe and homeschooling.
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(0)}
                className="w-full text-left flex justify-between items-center py-4 focus:outline-none"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  How does HomeTribe help with lesson planning?
                </h3>
                <svg 
                  className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                    openFAQ === 0 ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-600 leading-relaxed pb-4">
                  HomeTribe provides intuitive tools to create, organize, and schedule lessons. You can set learning objectives, 
                  track progress, and adapt plans based on your child's pace and interests. Our drag-and-drop interface makes 
                  planning engaging and efficient.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(1)}
                className="w-full text-left flex justify-between items-center py-4 focus:outline-none"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Can I track my child's progress across different subjects?
                </h3>
                <svg 
                  className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                    openFAQ === 1 ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-600 leading-relaxed pb-4">
                  Absolutely! HomeTribe offers comprehensive progress tracking with detailed reports, achievement badges, 
                  and milestone celebrations. You can monitor performance across all subjects and identify areas that need 
                  more attention or acceleration.
                </p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(2)}
                className="w-full text-left flex justify-between items-center py-4 focus:outline-none"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Is HomeTribe suitable for different homeschooling styles?
                </h3>
                <svg 
                  className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                    openFAQ === 2 ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-600 leading-relaxed pb-4">
                  Yes! Whether you follow a structured curriculum, unschooling approach, or eclectic method, HomeTribe 
                  adapts to your family's unique style. Customize your experience to match your educational philosophy.
                </p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(3)}
                className="w-full text-left flex justify-between items-center py-4 focus:outline-none"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  How does the community feature work?
                </h3>
                <svg 
                  className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                    openFAQ === 3 ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-600 leading-relaxed pb-4">
                  Connect with other homeschooling families in your area or with similar interests. Share resources, 
                  organize meetups, and get support from experienced homeschoolers. Our community platform makes it 
                  easy to build lasting connections.
                </p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(4)}
                className="w-full text-left flex justify-between items-center py-4 focus:outline-none"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  What if I need help getting started?
                </h3>
                <svg 
                  className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                    openFAQ === 4 ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-600 leading-relaxed pb-4">
                  We offer comprehensive onboarding support, including video tutorials, live webinars, and a dedicated 
                  support team. Plus, our community is always ready to welcome new families and share their experiences.
                </p>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="pb-4">
              <button
                onClick={() => toggleFAQ(5)}
                className="w-full text-left flex justify-between items-center py-4 focus:outline-none"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Can I try HomeTribe before committing?
                </h3>
                <svg 
                  className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                    openFAQ === 5 ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-600 leading-relaxed pb-4">
                  Yes! Start with our free trial to explore all features. No credit card required. See how HomeTribe 
                  can transform your homeschooling journey before making any commitment.
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Newsletter/Waitlist Section */}
      <section className="px-6 py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join the HomeTribe Waitlist
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Be among the first to experience the future of homeschooling. Get early access, exclusive updates, 
            and special founding member benefits.
          </p>
          
          <div className="bg-white rounded-lg p-8 shadow-sm max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="updates"
                  name="updates"
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="updates" className="text-sm text-gray-600">
                  I'd like to receive updates about HomeTribe's launch and homeschooling tips.
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 font-semibold transition-colors"
              >
                Join the Waitlist
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Early access to features</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Founding member benefits</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Exclusive content</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
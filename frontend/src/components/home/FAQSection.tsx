import { useState } from 'react';

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
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
                className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${openFAQ === 0 ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openFAQ === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
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
                className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${openFAQ === 1 ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openFAQ === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
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
                className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${openFAQ === 2 ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openFAQ === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
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
                className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${openFAQ === 3 ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openFAQ === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
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
                className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${openFAQ === 4 ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openFAQ === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
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
                className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${openFAQ === 5 ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openFAQ === 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-gray-600 leading-relaxed pb-4">
                Yes! Start with our free trial to explore all features. No credit card required. See how HomeTribe 
                can transform your homeschooling journey before making any commitment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
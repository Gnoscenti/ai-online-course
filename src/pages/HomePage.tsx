import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedAvatar from '../components/layout/AnimatedAvatar'; // Ensure this path is correct

const HomePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimateHero(true);
  }, []);

  const handleEmailSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setEmail('');
      // Show success message instead of alert for better UX
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col">
      {/* Hero Section with enhanced animation and mobile optimization */}
      <section className={`relative flex flex-col items-center justify-center text-center px-4 md:px-6 pt-12 pb-24 transition-all duration-1000 ${animateHero ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/70 to-purple-900/50 z-0"></div>
        {/* Using inline SVG data URI instead of external file to avoid build issues */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] opacity-10 z-0"></div>
        <div className="z-10 flex flex-col items-center max-w-5xl mx-auto">
          {/* Enhanced animated avatar with glow effect */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <AnimatedAvatar size={180} className="shadow-2xl" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mt-8 leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent animate-gradient">
            AI Integration Course
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mt-4 text-blue-200">
            Master the Golden Age Mindset
          </h2>
          
          <p className="text-lg md:text-xl mt-6 max-w-2xl text-gray-300">
            Get the tools, insights, and strategies to integrate AI effectively in your business and career.
            Start your journey with our free trial today.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-6 w-full max-w-lg">
            <Link
              to="/signup"
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 flex items-center justify-center"
            >
              <span>Start Free Trial</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            
            <a
              href="#free-lesson"
              className="flex-1 border-2 border-blue-400 hover:border-blue-300 text-blue-300 hover:text-blue-200 px-8 py-4 rounded-xl text-lg font-bold transition transform hover:scale-105 flex items-center justify-center"
            >
              <span>Learn More</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">Why Choose Our Course?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/80 p-6 rounded-xl shadow-lg hover:shadow-blue-900/20 hover:shadow-xl transition-all">
              <div className="bg-blue-700/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Practical Insights</h3>
              <p className="text-gray-300">Learn actionable strategies you can implement immediately in your business or career.</p>
            </div>
            
            <div className="bg-gray-900/80 p-6 rounded-xl shadow-lg hover:shadow-blue-900/20 hover:shadow-xl transition-all">
              <div className="bg-blue-700/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Expert Guidance</h3>
              <p className="text-gray-300">Curated content from industry leaders who understand the AI landscape and its future.</p>
            </div>
            
            <div className="bg-gray-900/80 p-6 rounded-xl shadow-lg hover:shadow-blue-900/20 hover:shadow-xl transition-all">
              <div className="bg-blue-700/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Future-Proof Skills</h3>
              <p className="text-gray-300">Develop the mindset and capabilities needed to thrive in an AI-driven world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with enhanced styling */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-indigo-900/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Students Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">John Doe</h4>
                  <p className="text-sm text-gray-400">Tech Entrepreneur</p>
                </div>
              </div>
              <p className="italic text-gray-300">
                "This course shifted the way I approach AI integration. The lessons were actionable, clear, and opened my eyes to opportunities I was missing."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JS
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">Jane Smith</h4>
                  <p className="text-sm text-gray-400">Marketing Director</p>
                </div>
              </div>
              <p className="italic text-gray-300">
                "In a world of AI hype and noise, this course helps you cut through to what really matters. Worth every penny for the clarity it provides."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Section with improved UX */}
      <section id="free-lesson" className="py-16 px-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-blue-800/50">
            <h2 className="text-3xl font-bold mb-4 text-white">Get Your Free AI Investing Guide</h2>
            <p className="text-gray-300 mb-8">
              Enter your email to receive our exclusive "Top 7 AI Investing Mistakes to Avoid" PDF and a sample lesson.
            </p>
            
            {submitted ? (
              <div className="bg-green-900/50 text-green-200 p-4 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Thank you! Check your email for your free guide.</span>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 border border-gray-700 text-white"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Get Free Guide'
                  )}
                </button>
              </form>
            )}
            
            <p className="text-xs text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer with improved styling */}
      <footer className="py-12 bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-blue-400 mb-4">AI Integration Course</h3>
          <p className="text-gray-400 mb-6">Master AI Integration Today</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} AI Integration Course. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
};

export default HomePage;


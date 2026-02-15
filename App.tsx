import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import StickySubNav from './components/StickySubNav';
import Programs from './components/Programs';
import Stats from './components/Stats';
import WhyUCB from './components/WhyUCB';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import RFISidebar from './components/RFISidebar';
import BackgroundShapes from './components/BackgroundShapes';

function App() {
  return (
    <div className="min-h-screen bg-white relative selection:bg-ucb-orange selection:text-white overflow-hidden">
      <BackgroundShapes />
      <Navigation />
      <Hero />
      <StickySubNav />
      <Programs />
      <Stats />
      <WhyUCB />

      {/* Financial Aid Section (Inline for simplicity) */}
      <section id="financial-aid" className="py-24 bg-white border-y border-gray-100 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-ucb-orange font-bold tracking-widest uppercase text-sm mb-4 block">Affordability</span>
              <h2 className="font-display font-bold text-4xl text-ucb-blue mb-6">Your Education, More Affordable Than You Think</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Urban College is dedicated to keeping costs low. Through a combination of federal aid (Pell Grants), state scholarships, and institutional support, we ensure money isn't a barrier.
              </p>
              <div className="bg-blue-50 border-l-4 border-ucb-blue p-6 rounded-r-lg mb-8">
                <p className="text-ucb-black font-medium">
                  <span className="font-bold text-ucb-blue block text-xl mb-1">Did you know?</span>
                  Most eligible Urban College students pay $0 out-of-pocket for tuition.
                </p>
              </div>
              <button className="bg-ucb-blue text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition-colors shadow-lg hover:-translate-y-0.5 transform duration-300">
                Calculate Your Cost
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {['Scholarships', 'Financial Aid & Grants', 'Payment Plans'].map((item, i) => (
                <button key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between group hover:border-ucb-orange hover:shadow-md transition-all cursor-pointer">
                  <span className="font-bold text-lg text-ucb-black group-hover:text-ucb-blue transition-colors">{item}</span>
                  <span className="text-ucb-orange text-2xl group-hover:translate-x-2 transition-transform">→</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Faq />
      <Footer />
      <RFISidebar />

      {/* Floating Chat Button for Mobile/General */}
      <button className="fixed bottom-6 right-6 md:right-10 bg-ucb-emerald text-white p-4 rounded-full shadow-2xl z-40 hover:scale-110 transition-transform lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
      </button>
    </div>
  );
}

export default App;
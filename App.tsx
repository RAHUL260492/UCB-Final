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

function App() {
  return (
    <div className="min-h-screen bg-ucb-ivory selection:bg-ucb-copper selection:text-white">
      <Navigation />
      <Hero />
      <StickySubNav />
      <Programs />
      <Stats />
      <WhyUCB />
      
      {/* Financial Aid Section (Inline for simplicity) */}
      <section id="financial-aid" className="py-24 bg-ucb-ivory border-y border-ucb-champagne">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="font-display font-bold text-4xl text-ucb-dark mb-6">Your Education, More Affordable Than You Think</h2>
               <p className="text-lg text-gray-600 mb-8">
                 Urban College is dedicated to keeping costs low. Through a combination of federal aid (Pell Grants), state scholarships, and institutional support, we ensure money isn't a barrier.
               </p>
               <div className="bg-ucb-emerald/10 border-l-4 border-ucb-emerald p-6 rounded-r-lg mb-8">
                 <p className="text-ucb-dark font-medium">
                   <span className="font-bold text-ucb-emerald block text-xl mb-1">Did you know?</span>
                   Most eligible Urban College students pay $0 out-of-pocket for tuition.
                 </p>
               </div>
               <button className="bg-ucb-dark text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors">
                 Calculate Your Cost
               </button>
             </div>
             <div className="grid grid-cols-1 gap-4">
               {['Scholarships', 'Financial Aid & Grants', 'Payment Plans'].map((item, i) => (
                 <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between group hover:border-ucb-copper transition-colors cursor-pointer">
                   <span className="font-bold text-lg text-ucb-dark">{item}</span>
                   <span className="text-ucb-copper text-2xl group-hover:translate-x-2 transition-transform">→</span>
                 </div>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </button>
    </div>
  );
}

export default App;
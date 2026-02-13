import React, { useState } from 'react';
import { X, MessageSquare } from 'lucide-react';

const RFISidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-ucb-copper text-white py-4 px-2 rounded-l-md shadow-lg z-40 writing-vertical-rl font-bold tracking-wide hover:bg-red-700 transition-colors hidden lg:block"
        style={{ writingMode: 'vertical-rl' }}
      >
        REQUEST INFO
      </button>
    );
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 w-80 bg-ucb-champagne p-6 rounded-xl shadow-2xl border-2 border-ucb-copper z-50 hidden lg:block animate-fade-in-up">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-display font-bold text-lg text-ucb-dark">Get Started</h3>
        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-ucb-dark">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <form className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-ucb-dark uppercase mb-1">First Name</label>
          <input type="text" className="w-full px-3 py-2 rounded bg-white border border-gray-200 focus:outline-none focus:border-ucb-emerald" />
        </div>
        <div>
          <label className="block text-xs font-bold text-ucb-dark uppercase mb-1">Email</label>
          <input type="email" className="w-full px-3 py-2 rounded bg-white border border-gray-200 focus:outline-none focus:border-ucb-emerald" />
        </div>
        <div>
          <label className="block text-xs font-bold text-ucb-dark uppercase mb-1">Interested In</label>
          <select className="w-full px-3 py-2 rounded bg-white border border-gray-200 focus:outline-none focus:border-ucb-emerald">
            <option>Early Childhood Ed</option>
            <option>Human Services</option>
            <option>General Studies</option>
            <option>Certificate Programs</option>
          </select>
        </div>
        <button className="w-full bg-ucb-emerald text-white font-bold py-3 rounded hover:bg-emerald-800 transition-colors shadow-md">
          Request Info
        </button>
      </form>
    </div>
  );
};

export default RFISidebar;
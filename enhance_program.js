const fs = require('fs');

const path = './components/ProgramPageLayout.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Tagline Intro
content = content.replace(
  /<section className="py-4 md:py-6 relative overflow-hidden">/g,
  `<section className="py-4 md:py-6 relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">`
);
content = content.replace(
  /<h2 className="text-3xl md:text-4xl font-display font-bold text-ucb-blue mb-5 leading-tight">\{tagline\}<\/h2>/g,
  `<h2 className="text-3xl md:text-4xl font-display font-bold text-ucb-blue mb-3 leading-tight">{tagline}</h2>\n                        <div className="w-16 h-1 bg-gradient-to-r from-ucb-orange to-ucb-teal mx-auto rounded-full mb-6"></div>`
);

// 2. Achievements
content = content.replace(
  /className="h-full bg-white\/8 backdrop-blur-md rounded-2xl border border-white\/12 p-7 hover:bg-white\/12 transition-colors duration-300"/g,
  `className="h-full bg-white/8 backdrop-blur-md rounded-2xl border border-white/12 p-7 hover:bg-white/12 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.06)] transition-all duration-400"`
);

// 3. Stats Strip
content = content.replace(
  /className="group relative bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden"/g,
  `className="group relative bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-2xl hover:-translate-y-1 hover:border-ucb-blue/20 transition-all duration-400 overflow-hidden"`
);

// 4. Outcomes table
content = content.replace(
  /className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden"/g,
  `className="bg-gradient-to-br from-gray-50/50 to-white rounded-3xl border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.04)] overflow-hidden hover:border-ucb-teal/20 transition-all duration-500"`
);

// 5. Why Choose Us (Hardcoded array map features)
content = content.replace(
  /className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-400 border border-gray-100 hover:-translate-y-1 h-full"/g,
  `className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-ucb-blue/10 transition-all duration-400 border border-gray-100 hover:border-ucb-orange/30 hover:-translate-y-1 h-full relative overflow-hidden"`
);

// 6. Support Banner
content = content.replace(
  /className="bg-white rounded-3xl shadow-xl border-l-4 border-ucb-green p-7 md:p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start"/g,
  `className="bg-gradient-to-r from-white to-gray-50/50 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.05)] border border-gray-100 border-l-4 border-l-ucb-green p-7 md:p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start"`
);



fs.writeFileSync(path, content, 'utf8');
console.log('done running script');

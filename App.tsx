import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import RFISidebar from './components/RFISidebar';
import BackgroundShapes from './components/BackgroundShapes';
import Home from './pages/Home';
import About from './pages/About';
import AcademicPrograms from './pages/AcademicPrograms';
import Team from './pages/Team';
import President from './pages/President';
import Trustees from './pages/Trustees';
import Foundation from './pages/Foundation';
import AdmissionsOverview from './pages/AdmissionsOverview';
import InfoSessions from './pages/InfoSessions';
import FinancialServices from './pages/FinancialServices';
import TuitionPaymentOptions from './pages/TuitionPaymentOptions';
import FinancialAid from './pages/FinancialAid';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import News from './pages/News';
import Program from './pages/Program';
import LearningResourceCenter from './pages/LearningResourceCenter';
import StudentGovernment from './pages/StudentGovernment';
import MentalHealth from './pages/MentalHealth';
import Search from './pages/Search';
import Accreditation from './pages/Accreditation';
import Espanol from './pages/Espanol';
import Mandarin from './pages/Mandarin';
import Employment from './pages/Employment';

// ScrollToTop component to handle scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen bg-white relative selection:bg-ucb-orange selection:text-white">
        {/* Skip-to-content for keyboard navigation */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <BackgroundShapes />
        <Navigation />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mission" element={<About />} />
            <Route path="/president" element={<President />} />
            <Route path="/office-of-the-president" element={<President />} />
            <Route path="/trustees" element={<Trustees />} />
            <Route path="/board-of-trustees" element={<Trustees />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/urban-college-foundation" element={<Foundation />} />
            <Route path="/admissions" element={<AdmissionsOverview />} />
            <Route path="/admissions-overview" element={<AdmissionsOverview />} />
            <Route path="/info-sessions" element={<InfoSessions />} />
            <Route path="/infosession" element={<InfoSessions />} />
            <Route path="/information-sessions" element={<InfoSessions />} />
            <Route path="/financial-services-and-funding-options" element={<FinancialServices />} />
            <Route path="/financial-aid" element={<FinancialAid />} />
            <Route path="/tuition-and-fees" element={<FinancialAid />} />
            <Route path="/tuition-payment-options" element={<TuitionPaymentOptions />} />
            <Route path="/payment-methods" element={<TuitionPaymentOptions />} />
            <Route path="/programs" element={<AcademicPrograms />} />
            <Route path="/team" element={<Team />} />
            <Route path="/leadership" element={<Team />} />
            <Route path="/programs/:slug" element={<Program />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<BlogPost />} />
            <Route path="/learning-resource-center" element={<LearningResourceCenter />} />
            <Route path="/student-government" element={<StudentGovernment />} />
            <Route path="/mental-health" element={<MentalHealth />} />
            <Route path="/search" element={<Search />} />
            <Route path="/accreditation" element={<Accreditation />} />
            <Route path="/espanol" element={<Espanol />} />
            <Route path="/es" element={<Espanol />} />
            <Route path="/mandarin" element={<Mandarin />} />
            <Route path="/zh" element={<Mandarin />} />
            <Route path="/employment" element={<Employment />} />
            <Route path="/careers" element={<Employment />} />
          </Routes>
        </main>

        <Footer />
        <RFISidebar />

        {/* Floating Chat Button for Mobile/General */}
        <button className="fixed bottom-6 right-6 md:right-10 bg-ucb-emerald text-white p-4 rounded-full shadow-2xl z-40 hover:scale-110 transition-transform lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        </button>
      </div>
    </Router>
  );
}

export default App;
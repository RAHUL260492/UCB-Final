import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import RFISidebar from './components/RFISidebar';
import BackgroundShapes from './components/BackgroundShapes';
import Home from './pages/Home';
import BusinessCertificate from './pages/BusinessCertificate';
import CaseManagement from './pages/CaseManagement';
import ChildrensBehavioralHealth from './pages/ChildrensBehavioralHealth';
import DigitalMarketing from './pages/DigitalMarketing';
import ElderCare from './pages/ElderCare';
import EarlyChildhoodEducationCertificate from './pages/EarlyChildhoodEducationCertificate';
import GeneralStudiesCertificate from './pages/GeneralStudiesCertificate';
import HumanServicesCertificate from './pages/HumanServicesCertificate';
import ParaprofessionalEducator from './pages/ParaprofessionalEducator';
import ProjectManagement from './pages/ProjectManagement';
import EarlyChildhoodEducation from './pages/EarlyChildhoodEducation';
import GeneralStudiesAssociate from './pages/GeneralStudiesAssociate';
import HumanServicesAdministration from './pages/HumanServicesAdministration';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

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
      <div className="min-h-screen bg-white relative selection:bg-ucb-orange selection:text-white overflow-clip">
        {/* Skip-to-content for keyboard navigation */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <BackgroundShapes />
        <Navigation />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs/business-certificate" element={<BusinessCertificate />} />
            <Route path="/programs/case-management" element={<CaseManagement />} />
            <Route path="/programs/childrens-behavioral-health-certificate" element={<ChildrensBehavioralHealth />} />
            <Route path="/programs/digital-marketing-certificate" element={<DigitalMarketing />} />
            <Route path="/programs/elder-care" element={<ElderCare />} />
            <Route path="/programs/early-childhood-education-certificate" element={<EarlyChildhoodEducationCertificate />} />
            <Route path="/programs/general-studies-certificate" element={<GeneralStudiesCertificate />} />
            <Route path="/programs/human-services-certificate" element={<HumanServicesCertificate />} />
            <Route path="/programs/paraprofessional-educator-certificate" element={<ParaprofessionalEducator />} />
            <Route path="/programs/project-management-certificate" element={<ProjectManagement />} />
            <Route path="/programs/early-childhood-education" element={<EarlyChildhoodEducation />} />
            <Route path="/programs/general-studies-associate" element={<GeneralStudiesAssociate />} />
            <Route path="/programs/human-services-administration" element={<HumanServicesAdministration />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
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
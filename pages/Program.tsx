import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

// Import all static program pages
import BusinessCertificate from './BusinessCertificate';
import CaseManagement from './CaseManagement';
import ChildrensBehavioralHealth from './ChildrensBehavioralHealth';
import DigitalMarketing from './DigitalMarketing';
import EarlyChildhoodEducation from './EarlyChildhoodEducation';
import EarlyChildhoodEducationCertificate from './EarlyChildhoodEducationCertificate';
import ElderCare from './ElderCare';
import GeneralStudiesAssociate from './GeneralStudiesAssociate';
import GeneralStudiesCertificate from './GeneralStudiesCertificate';
import HumanServicesAdministration from './HumanServicesAdministration';
import HumanServicesCertificate from './HumanServicesCertificate';
import ParaprofessionalEducator from './ParaprofessionalEducator';
import ProjectManagement from './ProjectManagement';

const PROGRAM_COMPONENTS: Record<string, React.FC> = {
    'business-certificate': BusinessCertificate,
    'case-management': CaseManagement,
    'childrens-behavioral-health-certificate': ChildrensBehavioralHealth,
    'digital-marketing-certificate': DigitalMarketing,
    'early-childhood-education': EarlyChildhoodEducation,
    'early-childhood-education-certificate': EarlyChildhoodEducationCertificate,
    'elder-care': ElderCare,
    'general-studies-associate': GeneralStudiesAssociate,
    'general-studies-certificate': GeneralStudiesCertificate,
    'human-services-administration': HumanServicesAdministration,
    'human-services-certificate': HumanServicesCertificate,
    'paraprofessional-educator-certificate': ParaprofessionalEducator,
    'project-management-certificate': ProjectManagement,
};

const Program: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    
    if (!slug) {
        return <Navigate to="/" replace />;
    }
    
    const Component = PROGRAM_COMPONENTS[slug];
    
    if (!Component) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center max-w-md px-6">
                    <h2 className="text-2xl font-bold text-ucb-blue mb-4">Program Not Found</h2>
                    <p className="text-gray-600 mb-6">
                        The program page for "{slug}" was not found.
                    </p>
                    <Navigate to="/" replace />
                </div>
            </div>
        );
    }
    
    return <Component />;
};

export default Program;

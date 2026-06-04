import React, { useEffect } from 'react';
import { Users, Mail, Calendar, MessageSquare, Megaphone, Target, Award, Star } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';

const roles = [
    {
        title: "President",
        desc: "Oversees the smooth operation of Student Government, leads meetings, sets agendas, and works with the Director of Student Services to guide its yearly direction. They also represent SGA to students and staff.",
        icon: Award,
    },
    {
        title: "Vice President",
        desc: "Supports the President and ensures smooth communication and organization within Student Government. Responsibilities include maintaining records, managing meeting logistics, overseeing the calendar, and ensuring compliance.",
        icon: Star,
    },
    {
        title: "Ambassador of Student Success",
        desc: "Advocates for student needs by gathering feedback, running surveys, and supporting campus involvement. They also promote participation in student events and workshops.",
        icon: Target,
    },
    {
        title: "Ambassador of Academic Affairs",
        desc: "Representing student voices on academic issues by addressing concerns about courses, policies, and grading, while also sharing and helping develop academic resources.",
        icon: Megaphone,
    }
];

const members = [
    {
        name: "Miliecent Rodriguez",
        role: "Vice President",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bio: "“My name is Miliecent Rodriguez. I am a student of human services at Urban College of Boston. I am from the Dominican Republic.”",
        goals: "“Listen to the students' opinions about what Urban College can improve. I hope help students like me accomplish their dreams.”"
    },
    {
        name: "Alecia Hunt",
        role: "Co-Ambassador of Student Success",
        img: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa82?q=80&w=800&auto=format&fit=crop",
        bio: "“Hello Everyone! My name is Alecia. I am studying at Urban College because of the flexibility of online courses and the affordability! I also work at Urban College as a Learning Support Associate for the Learning Resource Center.”",
        goals: "“As Ambassador of Student Success I want to help students reach their full potential! I will be able to assist students with their needs, questions, or concerns.”"
    },
    {
        name: "Sophonia Cesarin",
        role: "Co-Ambassador of Student Success",
        img: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?q=80&w=800&auto=format&fit=crop",
        bio: "“My name is Sophonia Cesarin and I am from Haiti. I have been living in Boston, MA for a little over a year. I am studying Child Development at Urban College.”",
        goals: "“I hope to develop good relationships and foster a positive community among students.”"
    },
    {
        name: "Lani McEachern",
        role: "Ambassador of Academic Affairs",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
        bio: "“Hi, my name is Lani and I am studying General Studies at Urban College. I enjoy taking classes in English and Childcare. I am from China, but I live in Boston. I love bubble tea!”",
        goals: "“I want to help students that need help. Reach out via email or text if you have any questions! I can help with anything.”"
    }
];

const StudentGovernment: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="pt-24 lg:pt-32">
            <SEO
                title={PAGE_META.studentGovernment.title}
                description={PAGE_META.studentGovernment.description}
                canonicalPath={PAGE_META.studentGovernment.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Student Government', path: PAGE_META.studentGovernment.path },
                ])}
            />
            <PageHeader
                title="Student Government (SGA)"
                subtitle="The voice of the Student Body. We help identify and address student concerns while promoting communication and collaboration."
                breadcrumbs={[
                    { label: 'Student Services', path: '/#resources' },
                    { label: 'Student Government' }
                ]}
                imageSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Meet the Current Team */}
            <section className="py-16 md:py-24 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-ucb-black mb-6">Meet Your 2025-26 SGA Members</h2>
                        <p className="text-lg text-gray-600">Our dedicated student leaders work closely with administration to ensure your voices, actions, and decisions impact Urban College.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {members.map((member, idx) => (
                            <div key={idx} className="bg-white hover-lift rounded-3xl overflow-hidden border border-gray-100 flex flex-col md:flex-row shadow-sm">
                                <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
                                    <div className="absolute bottom-4 left-4 md:hidden">
                                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                        <p className="text-ucb-gold font-medium">{member.role}</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="hidden md:block mb-4">
                                            <h3 className="text-2xl font-bold text-ucb-black">{member.name}</h3>
                                            <p className="text-ucb-orange font-bold uppercase tracking-wide text-sm mt-1">{member.role}</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-gray-600 text-sm italic leading-relaxed">{member.bio}</p>
                                            </div>
                                            <div className="bg-ucb-blue/5 rounded-xl p-4 border-l-4 border-ucb-blue">
                                                <p className="text-xs text-ucb-blue font-bold uppercase tracking-wider mb-1">Goals</p>
                                                <p className="text-ucb-black text-sm font-medium leading-relaxed">{member.goals}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Roles & Terms */}
            <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-display font-bold text-ucb-black mb-8">SGA Roles</h2>
                            <div className="space-y-6">
                                {roles.map((role, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                                            <role.icon className="w-6 h-6 text-ucb-blue" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-ucb-black mb-2">{role.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{role.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-display font-bold text-ucb-black mb-8">Terms & Requirements</h2>
                            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                                <div className="flex gap-4 items-start">
                                    <Calendar className="w-6 h-6 text-ucb-orange shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-ucb-black">Monthly Meetings</h4>
                                        <p className="text-gray-600 text-sm mt-1">Members of the student government meet monthly to discuss initiatives and projects to improve the student experience.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <Award className="w-6 h-6 text-ucb-orange shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-ucb-black">Good Standing</h4>
                                        <p className="text-gray-600 text-sm mt-1">Members of student government must be in good academic and conduct standing with the college.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <Users className="w-6 h-6 text-ucb-orange shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-ucb-black">Active Presence</h4>
                                        <p className="text-gray-600 text-sm mt-1">They are encouraged to be present at Student Services Events and Workshops.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Get Involved CTA */}
            <section className="py-20 bg-ucb-blue text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                    </svg>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
                    <h2 className="text-4xl font-display font-bold mb-6">How to Get Involved</h2>
                    <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                        Want to make a difference at Urban College? Here's how you can participate in the Student Government Association.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <MessageSquare className="w-8 h-8 text-ucb-gold mb-4" />
                            <h3 className="font-bold mb-2">Join Meetings</h3>
                            <p className="text-sm text-blue-100">Check your Urban College email and Brightspace for invitations to SGA meetings open to all students.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <Megaphone className="w-8 h-8 text-ucb-gold mb-4" />
                            <h3 className="font-bold mb-2">Voice Ideas</h3>
                            <p className="text-sm text-blue-100">Reach out to us with any ideas or concerns. We are here to listen and advocate for you.</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <Award className="w-8 h-8 text-ucb-gold mb-4" />
                            <h3 className="font-bold mb-2">Run for Office</h3>
                            <p className="text-sm text-blue-100">Elections are held every May. Keep an eye on your email for election information for next year!</p>
                        </div>
                    </div>

                    <a href="mailto:studentgovernment@urbancollege.edu" className="inline-flex items-center gap-2 bg-ucb-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-ucb-orange-glow transition-all hover:scale-105 shadow-xl shadow-ucb-orange/30">
                        <Mail className="w-5 h-5" />
                        Email studentgovernment@urbancollege.edu
                    </a>
                </div>
            </section>
        </div>
    );
};

export default StudentGovernment;

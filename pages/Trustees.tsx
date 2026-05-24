import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import { 
    Users, ShieldCheck, DollarSign, Globe, Award, GraduationCap, 
    Briefcase, CheckCircle, ChevronRight, Heart, ArrowRight, BookOpen, Clock
} from 'lucide-react';

interface BoardMember {
    name: string;
    role: string;
    expertise: string;
    bio: string;
    education: string;
    avatarInitials: string;
    boardService?: string;
    readMorePath?: string;
}

const Trustees: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Home", path: "/" },
        { label: "About Urban College", path: "/about" },
        { label: "Board of Trustees" }
    ];

    const supportCards = [
        {
            title: "Strategic Vision",
            desc: "Setting the direction for Urban College's growth and impact in the higher education landscape.",
            icon: EyeIcon,
            color: "text-ucb-blue bg-blue-50"
        },
        {
            title: "Mission Stewardship",
            desc: "Ensuring every initiative aligns with our core commitment to accessible, multilingual education.",
            icon: Award,
            color: "text-ucb-orange bg-orange-50"
        },
        {
            title: "Financial Oversight",
            desc: "Maintaining strict fiscal responsibility and long-term institutional sustainability.",
            icon: DollarSign,
            color: "text-ucb-teal bg-teal-50"
        },
        {
            title: "Community Connection",
            desc: "Strengthening partnerships and collaborations that expand career opportunities for our students.",
            icon: Users,
            color: "text-ucb-emerald bg-emerald-50"
        }
    ];

    const expertiseAreas = [
        "Higher Education Leadership (University administration, academic affairs, accreditation)",
        "Workforce Development (Career pathways, employer partnerships, economic mobility)",
        "Finance & Operations (Institutional sustainability, strategic planning)",
        "Diversity, Equity & Inclusion (Equitable access, inclusive culture, community engagement)",
        "Law & Public Policy (Governance, compliance, advocacy)",
        "Nonprofit & Community Service (Anti-poverty initiatives, social services, community development)"
    ];

    const OFFICERS: BoardMember[] = [
        {
            name: "Joan Becker, Ed.D.",
            role: "Board Chair",
            expertise: "Higher Education Administration, Student Services, Academic Support",
            bio: "Dr. Joan Becker brings extensive higher education leadership experience, having served as Vice Provost for Academic Support Services and Undergraduate Studies at UMass Boston. She provided oversight for advising, career services, disability services, global programs, and pre-collegiate support programs. Joan currently consults for the Council for Opportunity in Education and UMass Boston.",
            education: "Ed.D. and Ed.M., Harvard Graduate School of Education; B.A., Wellesley College",
            avatarInitials: "JB"
        },
        {
            name: "Amelia Manning",
            role: "Vice Chair",
            expertise: "Operations, Strategy Execution, Academic Affairs",
            bio: "Amelia Manning brings deep expertise in operations, scaling student-centered services, and strategic execution. She has served in senior leadership roles in higher education, including as Chief Operating Officer at Southern New Hampshire University, where she oversaw Academics, Student Advisement, and Business Strategy. She specializes in delivering organizational visions and designing efficient institutional services.",
            education: "M.A., University of New Hampshire; B.A., Saint Michael's College",
            avatarInitials: "AM"
        },
        {
            name: "Kenneth Lee",
            role: "Treasurer",
            expertise: "Finance, Organizational Transformation, Nonprofit Management",
            bio: "Kenneth Lee serves as Chief Financial Officer of Southern New Hampshire University, overseeing finance, treasury, capital projects, and facilities. Previously, he was CFO of Big Brothers Big Sisters of Massachusetts Bay and VP of Global Business Services at Avery Dennison. Ken spent 17 years as a Partner at A.T. Kearney consulting firm.",
            education: "M.B.A., Harvard Business School; B.A. in Economics, Harvard University",
            avatarInitials: "KL"
        },
        {
            name: "Barbara Brittingham, Ph.D.",
            role: "Secretary",
            expertise: "Higher Education Accreditation, Institutional Quality, International Education",
            bio: "Dr. Barbara Brittingham is President Emerita of the New England Commission of Higher Education (NECHE), which accredits over 200 colleges and universities. She has worked with ministries and universities in over 25 countries on quality assurance. Barbara currently serves on the Boards of the National Student Clearinghouse and Wheaton College.",
            education: "Ph.D., University of Rhode Island",
            avatarInitials: "BB"
        }
    ];

    const TRUSTEES: BoardMember[] = [
        {
            name: "Constanza Cabello, Ed.D.",
            role: "Trustee",
            expertise: "Diversity, Equity & Inclusion, Organizational Leadership, Community Engagement",
            bio: "Dr. Constanza Cabello is a DEI leader passionate about developing equitable organizational cultures. She serves as Managing Director of Global Inclusion, Diversity, and Equity at State Street Corporation. Previously, she held senior diversity and community engagement roles in higher education and founded Cabello Consulting LLC.",
            education: "Ed.D. in Organizational Leadership, Northeastern University; M.S., Central Connecticut State University; B.S., University of Connecticut",
            avatarInitials: "CC"
        },
        {
            name: "Peter Ebb, Esq.",
            role: "Trustee | Former Board Chair (2012-2024)",
            expertise: "Labor & Employment Law, Education Law, Public Policy",
            bio: "Peter Ebb is a retired partner from Ropes & Gray, where he specialized in labor and employment litigation, education law, and public law. He served as practice group leader and chaired the firm's Conflict of Interest Committee. Peter previously worked as a law clerk for the Massachusetts Supreme Judicial Court and in the state legislature.",
            education: "J.D., Boston University School of Law; B.A., Harvard College",
            avatarInitials: "PE"
        },
        {
            name: "Mark A. Ouellette",
            role: "Trustee",
            expertise: "Global Sales Operations, Technology, Community Service",
            bio: "Mark Ouellette consults at Pitney Bowes, where he previously served as Senior Vice President of Global Sales Operations. He has served on SNHU's Board since 1997 and with several years as Board Chair. Mark also serves on the boards of the United Way of Western Connecticut, Prosperi-Key, and the Center for Communities.",
            education: "Board Service: SNHU Board (since 1997); United Way of Western Connecticut",
            avatarInitials: "MO"
        },
        {
            name: "Megan Stevens",
            role: "Trustee",
            expertise: "Workforce Development, Educational Equity, DEI Advocacy",
            bio: "Megan Stevens is Director of Leadership Advancement at AnitaB.org, leading apprenticeship and workforce development programs promoting gender equity in tech. She founded Always Making Progress (AMP), Inc., impacting over 350 students through academic enrichment and entrepreneurship programs. Megan co-founded SNHU's first Black employee resource group, BLAZE.",
            education: "M.B.A. in Leadership, SNHU; B.A., Ball State University",
            avatarInitials: "MS"
        },
        {
            name: "Jan Wyatt, Ph.D.",
            role: "Trustee",
            expertise: "Academic Programs, Accreditation, Curriculum Development",
            bio: "Dr. Jan Wyatt brings 18 years in higher education leadership. As Vice President of Academic Programs at SNHU, he leads teams delivering high-quality programs nationwide. He developed the award-winning Higher Education and Real-World Training (HEaRT) and Nursing Credentialing Center initiatives. Jan has held roles as Academic Dean, Vice Provost, and Department Chair.",
            education: "Ph.D. in Organization and Management, Capella University; M.B.A., SNHU; M.S. in Higher Ed Administration, Kaplan University; B.S. in Marketing, Florida International University",
            avatarInitials: "JW"
        }
    ];

    const EX_OFFICIO: BoardMember[] = [
        {
            name: "Dr. Yves Salomon-Fernández",
            role: "President, Urban College of Boston",
            expertise: "Multilingual Education, Academic Leadership, Strategic Operations",
            bio: "Dr. Salomon-Fernández leads Urban College with a deep commitment to accessible, multilingual education. She brings both operational leadership at the executive level and college presidencies in Massachusetts and New Jersey. A graduate of Boston Latin School who emigrated from Haiti, she embodies the transformative power of education.",
            education: "Ph.D., Boston College; M.Sc., London School of Economics; B.A., UMass Boston",
            avatarInitials: "YS",
            readMorePath: "/president"
        },
        {
            name: "Sharon Scott-Chandler, Esq.",
            role: "President & CEO, ABCD",
            expertise: "Nonprofit Leadership, Anti-Poverty Initiatives, Early Childhood Education",
            bio: "Sharon Scott-Chandler became President and CEO of Action for Boston Community Development (ABCD)—Urban College's founding organization—in 2022. She previously served as EVP/COO and VP of ABCD Head Start and Children's Services. Sharon also directed Child Care Choices of Boston and worked as an Assistant Attorney General for Massachusetts.",
            education: "J.D., Northeastern University School of Law; B.A., Tufts University",
            avatarInitials: "SS"
        }
    ];

    const REPRESENTATIVES: BoardMember[] = [
        {
            name: "Adzele Benoit",
            role: "Faculty Representative",
            expertise: "Social Work, Student Mentorship, Academic Instruction",
            bio: "Adzele has been a faculty member at Urban College since 2019. She is an Urban College alumna—a powerful testament to our mission. Her background includes work as a Project Coordinator, Youth Specialist, and in-home therapist.",
            education: "M.S.W. and B.S.W., Wheelock College; A.A., Urban College of Boston",
            avatarInitials: "AB"
        },
        {
            name: "Anneisha Thompson",
            role: "Student Representative",
            expertise: "Student Voices, Shared Governance, Campus Leadership",
            bio: "Anneisha represents the student voice on the Board of Trustees, ensuring that student perspectives inform governance decisions. Her participation reflects Urban College's commitment to student-centered leadership at every level of the institution.",
            education: "Student Leader, Urban College of Boston",
            avatarInitials: "AT"
        }
    ];

    return (
        <div className="pt-24 lg:pt-32">
            <PageHeader 
                title="Board of Trustees" 
                subtitle="Guiding our mission and shaping a future where education opens doors for everyone."
                breadcrumbs={breadcrumbs}
            />

            {/* Intro Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl text-center space-y-6">
                    <ScrollAnimation variant="fade-up">
                        <span className="inline-block px-3 py-1 bg-ucb-blue/10 text-ucb-blue text-[10px] font-bold uppercase tracking-wider rounded-full">
                            College Governance
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-ucb-blue mt-2">
                            Leaders Committed to Opening Pathways to Opportunity
                        </h2>
                        <div className="h-1 w-20 bg-ucb-orange rounded-full mx-auto mt-4"></div>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fade-up" className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-light space-y-4">
                        <p>
                            Urban College of Boston's Board of Trustees provides strategic leadership and governance oversight to ensure the college remains true to its mission of opening new pathways to opportunity for diverse learners.
                        </p>
                        <p>
                            Our trustees bring exceptional expertise from higher education, law, business, nonprofit leadership, and public service. Together, they shape the culture, mission, and vision of Urban College—ensuring that every decision we make centers on student success.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* How Our Board Supports UCB */}
            <section className="py-16 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <h2 className="text-2xl font-display font-bold text-ucb-blue">How Our Board Supports Urban College</h2>
                        <p className="text-gray-500 font-light text-sm mt-1">Four core pillars of trustee governance and stewardship.</p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportCards.map((card, i) => {
                            const Icon = card.icon;
                            return (
                                <ScrollAnimation key={i} variant="fade-up" delay={`${i * 0.08}s`} className="bg-white rounded-3xl p-6 border border-gray-100/80 shadow-sm">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${card.color}`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-display font-bold text-sm text-ucb-blue mb-2">{card.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed font-light">{card.desc}</p>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Collective Expertise Tag Box */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollAnimation variant="fade-up" className="bg-gradient-to-r from-ucb-blue/5 to-ucb-teal/5 border border-ucb-blue/10 rounded-3xl p-8 space-y-6">
                        <h3 className="text-xl font-display font-bold text-ucb-blue text-center">Collective Expertise</h3>
                        <p className="text-gray-600 text-sm font-light text-center leading-relaxed">
                            Our board members bring decades of leadership experience across sectors that directly support our students' success:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            {expertiseAreas.map((area, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-sm text-gray-700 font-light">
                                    <CheckCircle className="w-4 h-4 text-ucb-emerald mt-0.5 shrink-0" />
                                    <span>{area}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Board Officers */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Governance Leadership</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Board Officers</h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {OFFICERS.map((member, idx) => (
                            <ScrollAnimation key={idx} variant="slide-left" delay={`${(idx % 2) * 0.1}s`} className="flex">
                                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between w-full">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            {/* Stylized Initial Avatar */}
                                            <div className="w-12 h-12 rounded-xl bg-ucb-blue/10 text-ucb-blue font-display font-black text-lg flex items-center justify-center shrink-0">
                                                {member.avatarInitials}
                                            </div>
                                            <div>
                                                <h3 className="font-display font-bold text-base text-ucb-blue leading-snug">{member.name}</h3>
                                                <p className="text-xs font-bold text-ucb-orange leading-tight">{member.role}</p>
                                            </div>
                                        </div>

                                        <p className="text-xs font-bold text-ucb-teal uppercase tracking-wide flex items-center gap-1.5 bg-ucb-teal/5 px-2.5 py-1 rounded-lg">
                                            <Briefcase className="w-3.5 h-3.5" /> {member.expertise}
                                        </p>

                                        <p className="text-xs text-gray-500 leading-relaxed font-light">
                                            {member.bio}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                                        <GraduationCap className="w-3.5 h-3.5 text-ucb-blue" /> {member.education}
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trustees Section */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Institutional Guardians</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Trustees</h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {TRUSTEES.map((member, idx) => (
                            <ScrollAnimation key={idx} variant="slide-left" delay={`${(idx % 2) * 0.1}s`} className="flex">
                                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between w-full">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            {/* Stylized Avatar */}
                                            <div className="w-12 h-12 rounded-xl bg-ucb-teal/10 text-ucb-teal font-display font-black text-lg flex items-center justify-center shrink-0">
                                                {member.avatarInitials}
                                            </div>
                                            <div>
                                                <h3 className="font-display font-bold text-base text-ucb-blue leading-snug">{member.name}</h3>
                                                <p className="text-xs font-bold text-gray-400 leading-tight">{member.role}</p>
                                            </div>
                                        </div>

                                        <p className="text-xs font-bold text-ucb-orange uppercase tracking-wide flex items-center gap-1.5 bg-ucb-orange/5 px-2.5 py-1 rounded-lg">
                                            <Briefcase className="w-3.5 h-3.5" /> {member.expertise}
                                        </p>

                                        <p className="text-xs text-gray-500 leading-relaxed font-light">
                                            {member.bio}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                                        <GraduationCap className="w-3.5 h-3.5 text-ucb-blue" /> {member.education}
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ex Officio Members */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Institutional Representatives</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-blue">Ex Officio Members</h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {EX_OFFICIO.map((member, idx) => (
                            <ScrollAnimation key={idx} variant="slide-left" delay={`${(idx % 2) * 0.1}s`} className="flex">
                                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between w-full">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-ucb-blue/10 text-ucb-blue font-display font-black text-lg flex items-center justify-center shrink-0">
                                                {member.avatarInitials}
                                            </div>
                                            <div>
                                                <h3 className="font-display font-bold text-base text-ucb-blue leading-snug">{member.name}</h3>
                                                <p className="text-xs font-bold text-ucb-teal leading-tight">{member.role}</p>
                                            </div>
                                        </div>

                                        <p className="text-xs text-gray-500 leading-relaxed font-light">
                                            {member.bio}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                                            <GraduationCap className="w-3.5 h-3.5 text-ucb-blue" /> {member.education}
                                        </span>
                                        {member.readMorePath && (
                                            <Link 
                                                to={member.readMorePath}
                                                className="text-xs font-bold text-ucb-orange hover:text-ucb-orange-glow transition-colors flex items-center gap-1 shrink-0"
                                            >
                                                Read More About President Salomon-Fernández &rarr;
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Non-Voting Representatives */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <ScrollAnimation variant="fade-up">
                            <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Shared Governance</span>
                            <h2 className="text-3xl font-display font-bold text-ucb-blue">Non-Voting Representatives</h2>
                            <p className="text-gray-500 mt-2 font-light max-w-xl mx-auto text-sm leading-relaxed">
                                Urban College values the voice of our faculty and students in governance. These representatives bring essential perspectives to board discussions.
                            </p>
                        </ScrollAnimation>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {REPRESENTATIVES.map((member, idx) => (
                            <ScrollAnimation key={idx} variant="slide-left" delay={`${(idx % 2) * 0.1}s`} className="flex">
                                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between w-full">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-ucb-teal/10 text-ucb-teal font-display font-black text-lg flex items-center justify-center shrink-0">
                                                {member.avatarInitials}
                                            </div>
                                            <div>
                                                <h3 className="font-display font-bold text-base text-ucb-blue leading-snug">{member.name}</h3>
                                                <p className="text-xs font-bold text-ucb-teal leading-tight">{member.role}</p>
                                            </div>
                                        </div>

                                        <p className="text-xs text-gray-500 leading-relaxed font-light">
                                            {member.bio}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                                        <GraduationCap className="w-3.5 h-3.5 text-ucb-blue" /> {member.education}
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Callout */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <ScrollAnimation variant="fade-up">
                        <div className="bg-ucb-blue/5 border border-ucb-blue/20 rounded-3xl p-8 max-w-2xl mx-auto relative overflow-hidden">
                            <div className="absolute right-0 top-0 translate-y-1/2 translate-x-1/2 opacity-10">
                                <Globe className="w-64 h-64 text-ucb-blue" />
                            </div>
                            <h4 className="font-display font-bold text-lg text-ucb-blue mb-4">United by Our Mission</h4>
                            <p className="text-sm text-gray-600 leading-relaxed font-light">
                                Our Board of Trustees—like every member of the Urban College community—is united by a single purpose: opening new pathways to opportunity for our students. Their collective expertise, dedication, and strategic vision ensure that Urban College remains a place where diverse learners can transform their lives through education.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* CTA and Institutional Links */}
            <section className="py-16 bg-gradient-to-r from-ucb-blue to-blue-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Call to Actions */}
                        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                            <h2 className="text-3xl font-display font-extrabold leading-tight">Learn More</h2>
                            <p className="opacity-90 text-base font-light leading-relaxed max-w-xl">
                                Discover more about our leadership teams and how we support our institutional mission.
                            </p>
                            <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link 
                                    to="/president" 
                                    className="bg-white text-ucb-blue hover:bg-ucb-orange hover:text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-all shadow-md min-h-[44px] flex items-center"
                                >
                                    Meet Our President <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                                <Link 
                                    to="/team" 
                                    className="bg-ucb-orange text-white hover:bg-ucb-orange-glow font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md min-h-[44px] flex items-center"
                                >
                                    Explore Our Leadership
                                </Link>
                                <Link 
                                    to="/team" 
                                    className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-colors min-h-[44px] flex items-center"
                                >
                                    Support Our Mission <Heart className="w-3.5 h-3.5 ml-2 text-red-400 fill-red-400" />
                                </Link>
                                <Link 
                                    to="/foundation" 
                                    className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full text-xs uppercase tracking-wider transition-all min-h-[44px] flex items-center"
                                >
                                    Urban College Foundation
                                </Link>
                            </div>
                        </div>

                        {/* Navigation Links Grid */}
                        <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 space-y-4">
                            <h3 className="font-display font-bold text-lg border-b border-white/10 pb-3">
                                Related Pages
                            </h3>
                            <ul className="grid grid-cols-1 gap-2 text-sm">
                                <li>
                                    <Link to="/president" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Office of the President
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/team" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Administration & Leadership
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/foundation" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Urban College Foundation
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        About Urban College
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="flex items-center gap-2 hover:text-ucb-orange transition-colors py-1">
                                        <ChevronRight className="w-4 h-4 text-ucb-gold" />
                                        Accreditation
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Custom Eye icon
const EyeIcon: React.ElementType = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);

export default Trustees;

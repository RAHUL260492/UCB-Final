import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import { 
    Globe, BookOpen, Users, Calendar, Award, MessageCircle, ChevronRight, 
    ArrowRight, CheckCircle, ShieldAlert, Sparkles, Quote, HelpCircle, 
    Briefcase, Bookmark, Milestone, ClipboardCheck 
} from 'lucide-react';

const Mandarin: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "首页", path: "/" },
        { label: "中文版 / Aprende en Chino" }
    ];

    const stats = [
        { val: "59%", label: "为西班牙裔或拉丁裔" },
        { val: "55%", label: "以英语作为第二语言 (ESL)" },
        { val: "15%", label: "为非裔或非裔美国人" },
        { val: "6%", label: "为亚裔" },
        { val: "15-75", label: "我们学生的年龄范围" }
    ];

    const supportItems = [
        {
            title: "课程同步开设",
            desc: "英语课程与您的母语（普通话）课程同时开设，让您无障碍衔接学术进度。",
            icon: BookOpen
        },
        {
            title: "多语学术辅导",
            desc: "提供专业的英语、西班牙语和普通话双语学术辅导及课后答疑。",
            icon: MessageCircle
        },
        {
            title: "专门语言支持",
            desc: "提供针对英语语言发展的个性化辅导，专注词汇、会话与学术写作。",
            icon: Sparkles
        },
        {
            title: "循序渐进过渡",
            desc: "允许您先从母语课程开始，并在辅导下逐步过渡到全英语授课课程。",
            icon: Milestone
        }
    ];

    const programs = [
        { name: "Foundations of Early Childhood Education Certificate", path: "/programs/early-childhood-education-certificate", type: "证书课程" },
        { name: "Early Childhood Education Associate Degree", path: "/programs/early-childhood-education", type: "副学士学位" }
    ];

    const testimonials = [
        {
            quote: "我非常感谢城市学院，因为它帮助我顺利地从西班牙语过渡到英语学习。当我开始用英语上课时，我得到了我需要的支持和鼓励。如果你有梦想，就勇敢去追梦吧！我刚来这里的时候，一句英语都不会说，但我被鼓励继续学习，最终获得了人类服务专业的学位，并从事自己热爱的工作。",
            author: "校友 Ramona S.",
            role: "人类服务专业毕业生"
        },
        {
            quote: "学院的教职员工、老师、辅导员、顾问，甚至你的同学，都会支持你。他们会尽力帮助你。谢谢城市学院！我的英语口语能力大大提升，因为我刚来的时候一句英语都不会说，但现在我能听懂更多了。",
            author: "校友 Jacqueline P.",
            role: "城市学院毕业生"
        },
        {
            quote: "城市学院能够提供多种语言的教育，并通过多元化的思维方式，帮助学生以多种途径释放潜能。在城市学院，您通过教师、教材、教授以及与来自不同背景同学的互动，你将获得一套全面的工具和技能，使您成为更优秀的专业人士。",
            author: "董事会成员 Constanza C.",
            role: "双语教育提倡者"
        },
        {
            quote: "选择城市学院而不是其他社区学院是理所当然的。来城市学院的学生未必都是大学生，他们大多像我一样年纪较大。对很多学生来说，英语是他们的第二语言。但每个人都感觉得很自在，就像在家里一样……这是一个安全舒适的地方，无论说什么语言，每个人都能感受到被倾听。",
            author: "校友 Toy B.",
            role: "社区领袖兼创始人"
        }
    ];

    const steps = [
        { num: "01", title: "录取入学", desc: "被城市学院录取，开启您的双语学习旅程。" },
        { num: "02", title: "分级考试", desc: "进行英语语言分级考试，以便我们了解如何帮助您学习。" },
        { num: "03", title: "母语课程", desc: "首期修读母语授课（中文）课程，牢固掌握专业知识。" },
        { num: "04", title: "英语课程", desc: "在强大的语言辅导支持下，逐步过渡到英语授课课程。" },
        { num: "05", title: "自信毕业！", desc: "顺利结业并获得相应学位，收获极佳的英语沟通与职场自信。" }
    ];

    return (
        <div className="pt-24 lg:pt-32">
            <PageHeader
                title="一边学习英语一边获得学位"
                subtitle="以普通话开始学习，毕业时英语水平将得到提升。"
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Intro Hero Section */}
            <section className="py-16 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-display font-black text-ucb-blue mb-6 leading-tight">
                            以普通话开始学习，毕业时英语水平将得到提升
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                            城市学院珍视我们学院社区的多元文化。我们致力于提供包容、贴心的高等教育通道。
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <ScrollAnimation variant="fade-up">
                                <h3 className="text-2xl font-display font-bold text-ucb-black mb-4">珍视多元，共同成长</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        城市学院珍视我们学院社区的多元文化。我们的学生年龄范围从15岁到75岁，其中59%为西班牙裔或拉丁裔，15%为非裔或非裔美国人，6%为亚裔。55%的学生以英语作为第二语言。
                                    </p>
                                    <p>
                                        我们有许多教职员工同样是第一代大学生，也曾以英语为第二语言，并且凭借自身的努力取得了今天的成就。正因如此，他们充满热情，致力于帮助学生取得成功。
                                    </p>
                                    <p>
                                        我们的学生、教职员工丰富的文化背景和生活经验，创造了一个充满活力和丰富的学习环境，在这里，每个人都被鼓励做真实的自己，并为他们在教育和职业生涯中取得的成就而感到自豪。
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>

                        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                            {stats.slice(0, 4).map((stat, idx) => (
                                <ScrollAnimation 
                                    key={idx} 
                                    variant="fade-up" 
                                    delay={`${idx * 0.1}s`}
                                    className="bg-gray-50 border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col justify-center text-center hover:scale-105 transition-transform duration-300"
                                >
                                    <span className="text-3xl md:text-4xl font-display font-black text-ucb-orange mb-1">{stat.val}</span>
                                    <span className="text-xs text-gray-500 font-bold leading-normal uppercase tracking-wider">{stat.label}</span>
                                </ScrollAnimation>
                            ))}
                            <ScrollAnimation 
                                variant="fade-up" 
                                className="col-span-2 bg-gradient-to-r from-ucb-blue/5 to-ucb-teal/5 border border-ucb-blue/10 rounded-3xl p-5 shadow-sm text-center"
                            >
                                <span className="text-xl font-bold text-ucb-blue block mb-1">广泛的年龄跨度</span>
                                <span className="text-gray-600 text-sm font-medium">从15岁到75岁的学员在这里比肩共学。</span>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Framework */}
            <section className="py-16 bg-gray-50 border-y border-gray-100 relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">英语支持</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-black mb-4">城市学院如何支持英语学习者</h2>
                        <p className="text-gray-600">
                            我们提供全方位的学术支持和过渡策略，确保您在精通专业技能的同时扎实提升英语。
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {supportItems.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <ScrollAnimation 
                                    key={idx} 
                                    variant="fade-up" 
                                    delay={`${idx * 0.08}s`}
                                    className="bg-white rounded-3xl p-8 border border-gray-100/80 shadow-sm hover:shadow-md transition-shadow flex gap-5"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-ucb-blue/5 flex items-center justify-center shrink-0 border border-ucb-blue/10 text-ucb-blue">
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-lg text-ucb-black mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>

                    <ScrollAnimation variant="fade-up" className="bg-gradient-to-r from-ucb-blue to-blue-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                        <div className="relative z-10 grid md:grid-cols-12 gap-6 items-center">
                            <div className="md:col-span-8">
                                <h4 className="font-display font-bold text-2xl mb-3">提升英语能力，拓展更多就业机会</h4>
                                <p className="text-blue-100 leading-relaxed font-light text-sm md:text-base">
                                    除了母语之外，掌握英语也是一项宝贵的技能，它将为你打开更多的机遇之门！我们的目标是让你毕业时拥有更强的英语语言自信。
                                </p>
                            </div>
                            <div className="md:col-span-4 flex flex-col gap-3">
                                <div className="bg-white/10 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                                    <span className="text-xs font-bold uppercase tracking-widest text-ucb-gold block mb-1">证书课程学员</span>
                                    <span className="text-sm font-semibold text-white">毕业时即可具备英语会话能力</span>
                                </div>
                                <div className="bg-white/10 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                                    <span className="text-xs font-bold uppercase tracking-widest text-ucb-gold block mb-1">副学士学位学生</span>
                                    <span className="text-sm font-semibold text-white">具备英语口语和英语写作能力</span>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* ESL Process Timeline Graphic */}
            <section className="py-16 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">进阶路线</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-black mb-4">英语语言学习进阶图示</h2>
                        <p className="text-gray-600">
                            从入学分级到最后的双语自信毕业，每一步我们都与您并肩前行。
                        </p>
                    </ScrollAnimation>

                    <div className="relative">
                        {/* Desktop Connector Line */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden lg:block z-0" />
                        
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
                            {steps.map((step, idx) => (
                                <ScrollAnimation 
                                    key={idx} 
                                    variant="fade-up" 
                                    delay={`${idx * 0.12}s`}
                                    className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-center relative"
                                >
                                    <div className="w-10 h-10 rounded-full bg-ucb-blue text-white font-display font-bold text-sm flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-md relative z-10">
                                        {step.num}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-ucb-black mb-2 text-base leading-snug">{step.title}</h3>
                                        <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gray-50 border-y border-gray-100 relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">学员寄语</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-black mb-4">校友与社会各界评价</h2>
                        <p className="text-gray-600">
                            倾听来自毕业生、导师和董事会成员的真实回馈，感受陪伴与成长的力量。
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((t, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up" 
                                delay={`${idx * 0.1}s`}
                                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <Quote className="w-8 h-8 text-ucb-orange/30 shrink-0" />
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed italic font-light">
                                        “{t.quote}”
                                    </p>
                                </div>
                                <div className="pt-6 border-t border-gray-50 mt-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-ucb-blue/10 flex items-center justify-center text-ucb-blue font-bold text-sm shrink-0">
                                        {t.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-ucb-black text-sm">{t.author}</p>
                                        <p className="text-gray-400 text-xs">{t.role}</p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mandarin Programs Grid */}
            <section className="py-16 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">双语课程</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-black mb-4">开设汉语（普通话）授课的项目</h2>
                        <p className="text-gray-600">
                            通过中文辅导和授课，您可以报读以下专业学位或证书项目：
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {programs.map((prog, idx) => (
                            <ScrollAnimation 
                                key={idx} 
                                variant="fade-up" 
                                delay={`${idx * 0.05}s`}
                                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm hover:border-ucb-blue/30 transition-colors flex justify-between items-center group"
                            >
                                <div className="space-y-1">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-ucb-orange block">{prog.type}</span>
                                    <span className="font-bold text-ucb-black text-sm leading-snug block">{prog.name}</span>
                                </div>
                                <Link 
                                    to={prog.path}
                                    className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-ucb-blue hover:bg-ucb-blue hover:text-white transition-all shrink-0 shadow-sm"
                                    aria-label={`查看 ${prog.name}`}
                                >
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Assessment Booking Section */}
            <section className="py-16 bg-gray-50 border-t border-gray-100 relative z-10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <ScrollAnimation variant="fade-up" className="bg-white rounded-3xl border border-gray-200/60 p-8 md:p-12 shadow-xl space-y-6">
                        <ClipboardCheck className="w-16 h-16 text-ucb-orange mx-auto" />
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">了解您的英语分级</h3>
                        <p className="text-gray-600 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
                            为了解您的英语熟练度并安排匹配辅导，请预约进行英语语言分级评估考试。
                        </p>
                        <a 
                            href="https://outlook.office365.com/owa/calendar/LearningResourceCenter@URBANCOLLEGE.EDU/bookings/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-ucb-orange text-white px-8 py-4 rounded-full font-bold hover:bg-ucb-orange-glow hover:scale-105 transition-all shadow-lg text-base"
                        >
                            预约英语语言分级考试 <ExternalLinkIcon className="w-4 h-4" />
                        </a>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
};

// External link icon helper
const ExternalLinkIcon: React.FC<any> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
);

export default Mandarin;

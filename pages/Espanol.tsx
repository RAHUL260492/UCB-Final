import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollAnimation from '../components/ScrollAnimation';
import SEO from '../components/SEO';
import { PAGE_META, buildBreadcrumbJsonLd } from '../components/seo-data';
import { 
    Globe, BookOpen, Users, Calendar, Award, MessageCircle, ChevronRight, 
    ArrowRight, CheckCircle, ShieldAlert, Sparkles, Quote, HelpCircle, 
    Briefcase, Bookmark, Milestone, ClipboardCheck 
} from 'lucide-react';

const Espanol: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: "Inicio", path: "/" },
        { label: "Aprende en Español" }
    ];

    const stats = [
        { val: "59%", label: "Se identifica como hispano o latine" },
        { val: "55%", label: "Habla inglés como segundo idioma (ESL)" },
        { val: "15%", label: "Se identifica como negro o afroamericano" },
        { val: "6%", label: "Se identifica como asiático" },
        { val: "15-75", label: "Rango de edad de nuestros estudiantes" }
    ];

    const supportItems = [
        {
            title: "Cursos Paralelos",
            desc: "Ofrecemos cursos de inglés junto con cursos en tu idioma nativo para que no te retrases en tu carrera.",
            icon: BookOpen
        },
        {
            title: "Tutoría Multilingüe",
            desc: "Tutoría académica personalizada disponible en inglés, español y mandarín.",
            icon: MessageCircle
        },
        {
            title: "Tutoría Especializada",
            desc: "Tutoría de apoyo enfocada específicamente en el desarrollo y fortalecimiento del idioma inglés.",
            icon: Sparkles
        },
        {
            title: "Transición Gradual",
            desc: "Puedes comenzar tus estudios en español y avanzar progresivamente a tomar cursos en inglés a tu propio ritmo.",
            icon: Milestone
        }
    ];

    const programs = [
        { name: "Early Childhood Education Associate Degree", path: "/programs/early-childhood-education-associate-degree", type: "Grado Asociado" },
        { name: "Human Services Associate Degree", path: "/programs/human-services-administration-associate-degree", type: "Grado Asociado" },
        { name: "Business Certificate", path: "/programs/business-certificate", type: "Certificado" },
        { name: "Elder Care Certificate", path: "/programs/elder-care-certificate", type: "Certificado" },
        { name: "Children’s Behavioral Health Certificate", path: "/programs/childrens-behavioral-health-certificate", type: "Certificado" },
        { name: "Digital Marketing Certificate", path: "/programs/digital-marketing-certificate", type: "Certificado" },
        { name: "Foundations of Early Childhood Education Certificate", path: "/programs/foundations-early-childhood-education-certificate", type: "Certificado" },
        { name: "Human Services Certificate", path: "/programs/human-services-certificate", type: "Certificado" },
        { name: "Paraprofessional Educator Certificate", path: "/programs/paraprofessional-educator-certificate", type: "Certificado" },
        { name: "Project Management Certificate", path: "/programs/project-management-certificate", type: "Certificado" }
    ];

    const testimonials = [
        {
            quote: "Estoy agradecida con Urban College porque me ayudaron en mi transición del español al inglés. Cuando empecé a tomar clases en inglés, tuve el apoyo y el ánimo que necesitaba. Si tienes sueños, ¡adelante! Cuando llegué aquí no hablaba inglés, pero me motivaron a seguir estudiando, obtener mi título en Servicios Humanos y trabajar en algo que disfruto.",
            author: "Ramona S.",
            role: "Exalumna de Servicios Humanos",
            image: "/assets/images/testimonials/ramona-s.webp"
        },
        {
            quote: "El personal, los profesores, los tutores, los asesores, incluso tus compañeros… todos te apoyan en Urban College sin importar quién seas o de dónde vengas. Siempre intentan ayudarte. ¡Gracias Urban College! Ahora tengo más experiencia hablando inglés; cuando empecé aquí no hablaba nada, pero ahora entiendo mucho más.",
            author: "Jacqueline P.",
            role: "Exalumna",
            image: "/assets/images/testimonials/jacqueline-p.jpg"
        },
        {
            quote: "Urban College puede ofrecer educación en diferentes idiomas y ayudar a los estudiantes a descubrir su potencial de muchas maneras, fomentando una forma de pensar diversa. La educación que recibes aquí —de tus profesores, tus libros, tus clases y la interacción con compañeros de distintos orígenes— te brinda un conjunto de herramientas y habilidades que te convierten en un profesional más completo.",
            author: "Constanza C.",
            role: "Miembro de la Junta Directiva"
        },
        {
            quote: "Elegir Urban College sobre otros community colleges fue una decisión fácil. Las personas que asistían a Urban College no eran necesariamente quienes uno imagina como estudiantes universitarios. Había estudiantes adultos como yo. Para muchos, el inglés era su segundo idioma. Pero todos se sentían cómodos, se sentían en casa… un lugar seguro donde la gente siente que la escuchan, sin importar el idioma que hable.",
            author: "Toy B.",
            role: "Exalumna & Líder Comunitaria"
        }
    ];

    const steps = [
        { num: "01", title: "Admisión", desc: "Regístrate e inicia tu proceso de admisión personalizado en Urban College." },
        { num: "02", title: "Examen de Nivel", desc: "Evaluación diagnóstica de inglés para que sepamos exactamente cómo ayudarte a aprender." },
        { num: "03", title: "Cursos en Español", desc: "Comienza tus clases académicas en tu idioma nativo para avanzar en tu carrera." },
        { num: "04", title: "Cursos en Inglés", desc: "Transiciona gradualmente a materias en inglés mientras recibes apoyo y tutoría." },
        { num: "05", title: "¡Graduación!", desc: "Obtén tu certificado o título asociado y gradúate con confianza e inglés conversacional." }
    ];

    return (
        <div>
            <SEO
                title={PAGE_META.espanol.title}
                description={PAGE_META.espanol.description}
                canonicalPath={PAGE_META.espanol.path}
                jsonLd={buildBreadcrumbJsonLd([
                    { name: 'Home', path: '/' },
                    { name: 'Español', path: PAGE_META.espanol.path },
                ])}
            />
            <PageHeader
                title="Aprende en Español"
                subtitle="Obtén tu título universitario en tu idioma mientras fortaleces tus habilidades en inglés."
                breadcrumbs={breadcrumbs}
                imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop"
                imagePosition="center"
            />

            {/* Intro Hero Section */}
            <section className="py-16 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-display font-black text-ucb-blue mb-6 leading-tight">
                            Aprende inglés mientras obtienes tu título
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                            Comienza tus estudios en español y gradúate con mejores habilidades en el idioma inglés.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <ScrollAnimation variant="fade-up">
                                <h3 className="text-2xl font-display font-bold text-ucb-black mb-4">Celebrando la Diversidad Universitaria</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        En Urban College celebramos la diversidad de nuestra comunidad universitaria. Nuestros estudiantes tienen entre 15 y 75 años. El 55% de nuestros estudiantes habla inglés como segundo idioma. Muchos de nuestros profesores y personal también fueron los primeros en su familia en ir a la universidad, aprendieron inglés como segundo idioma y trabajaron duro para llegar a donde están hoy. Por eso están tan comprometidos con ayudar a nuestros estudiantes a tener éxito.
                                    </p>
                                    <p>
                                        Las culturas, experiencias y trayectorias de nuestros estudiantes, profesores y personal crean un ambiente dinámico y enriquecedor, donde todos pueden ser ellos mismos y celebrar cada paso que dan en su educación y sus carreras.
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
                                <span className="text-xl font-bold text-ucb-blue block mb-1">Rango de Edad</span>
                                <span className="text-gray-600 text-sm font-medium">Estudiantes de 15 a 75 años aprendiendo juntos.</span>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Framework */}
            <section className="py-16 bg-gray-50 border-y border-gray-100 relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Apoyo Integral</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-black mb-4">Cómo apoya Urban College a los estudiantes de inglés</h2>
                        <p className="text-gray-600">
                            Diseñamos servicios académicos específicos para garantizar tu éxito mientras transicionas al inglés académico y laboral.
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
                                <h4 className="font-display font-bold text-2xl mb-3">Fortalece tu inglés para más oportunidades laborales</h4>
                                <p className="text-blue-100 leading-relaxed font-light text-sm md:text-base">
                                    Hablar inglés además de tu idioma nativo es una habilidad valiosa que te abrirá muchas puertas. Nuestro objetivo es que te gradúes con más confianza en tus habilidades en inglés.
                                </p>
                            </div>
                            <div className="md:col-span-4 flex flex-col gap-3">
                                <div className="bg-white/10 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                                    <span className="text-xs font-bold uppercase tracking-widest text-ucb-gold block mb-1">Certificados</span>
                                    <span className="text-sm font-semibold text-white">Inglés conversacional</span>
                                </div>
                                <div className="bg-white/10 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                                    <span className="text-xs font-bold uppercase tracking-widest text-ucb-gold block mb-1">Grados Asociados</span>
                                    <span className="text-sm font-semibold text-white">Inglés conversacional y escritura académica</span>
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
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">El Proceso</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-black mb-4">Proceso de Aprendizaje de Inglés</h2>
                        <p className="text-gray-600">
                            Un camino estructurado y apoyado diseñado para llevarte desde la admisión hasta tu graduación con total confianza.
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
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Testimonios</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-black mb-4">Lo que dicen nuestros estudiantes</h2>
                        <p className="text-gray-600">
                            Escucha las historias reales de superación e integración lingüística de nuestros exalumnos y directivos.
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
                                    {(t as any).image ? (
                                        <img
                                            src={(t as any).image}
                                            alt={t.author}
                                            className="w-10 h-10 rounded-full object-cover shadow-sm border border-ucb-blue/10 shrink-0"
                                        />
                                    ) : (
                                        <div className="w-10 h-10 rounded-full bg-ucb-blue/10 flex items-center justify-center text-ucb-blue font-bold text-sm shrink-0">
                                            {t.author.charAt(0)}
                                        </div>
                                    )}
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

            {/* Spanish Programs Grid */}
            <section className="py-16 bg-white relative z-10">
                <div className="container mx-auto px-6 max-w-5xl">
                    <ScrollAnimation variant="fade-up" className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-ucb-orange font-bold tracking-widest uppercase text-xs mb-2 block">Nuestra Oferta</span>
                        <h2 className="text-3xl font-display font-bold text-ucb-black mb-4">Programas con cursos en español</h2>
                        <p className="text-gray-600">
                            Comienza tu formación profesional cursando materias en español en cualquiera de las siguientes carreras:
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                    aria-label={`Ver programa ${prog.name}`}
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
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-ucb-blue">¿Listo para dar el primer paso?</h3>
                        <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
                            Para saber qué nivel de inglés tienes y cómo podemos apoyarte mejor, por favor reserva una evaluación de inglés.
                        </p>
                        <a 
                            href="https://outlook.office365.com/owa/calendar/LearningResourceCenter@URBANCOLLEGE.EDU/bookings/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-ucb-orange text-white px-8 py-4 rounded-full font-bold hover:bg-ucb-orange-glow hover:scale-105 transition-all shadow-lg text-base"
                        >
                            Reserva tu Evaluación de Inglés <ExternalLinkIcon className="w-4 h-4" />
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

export default Espanol;

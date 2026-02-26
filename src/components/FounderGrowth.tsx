import { motion } from 'motion/react';
import { UserCheck, ShieldCheck, Zap, Target, TrendingUp, MessageSquare, Share2, MousePointer2 } from 'lucide-react';

import bgfounder from '../assets/bgfounder.png';
import angelo from '../assets/angelo.png';

export function FounderGrowth() {
    const pillars = [
        {
            icon: UserCheck,
            title: "Ativo de Marketing",
            desc: "O fundador é o principal ativo de marketing da empresa."
        },
        {
            icon: ShieldCheck,
            title: "Autoridade Pessoal",
            desc: "Gera confiança imediata e inquestionável no mercado."
        },
        {
            icon: Zap,
            title: "Ciclo de Venda Reduzido",
            desc: "A confiança pré-estabelecida acelera a tomada de decisão."
        },
        {
            icon: Target,
            title: "Demanda Qualificada",
            desc: "O posicionamento atrai o cliente ideal de forma orgânica."
        }
    ];

    const application = [
        { icon: TrendingUp, label: "Construção de Autoridade" },
        { icon: MessageSquare, label: "Estratégia de Conteúdo" },
        { icon: Share2, label: "Amplificação com Tráfego" },
        { icon: MousePointer2, label: "Conversão Estruturada" }
    ];

    return (
        <section id="sobre" className="py-32 px-6 bg-black text-white relative overflow-hidden">
            {/* Decorative Shapes */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-mars-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-6">
                            <span className="text-xs font-mono tracking-widest uppercase text-mars-accent">Estratégia de Liderança</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
                            Founder-Led <br />
                            <span className="text-gradient-accent">Growth</span>
                        </h2>
                        <p className="text-xl text-white/60 mb-12 font-light leading-relaxed max-w-lg">
                            O crescimento da sua empresa é impulsionado pelo posicionamento estratégico do fundador. Transformamos liderança em tração.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                            {pillars.map((item, i) => (
                                <div key={i} className="space-y-3">
                                    <item.icon className="w-6 h-6 text-mars-accent" />
                                    <h4 className="font-semibold text-lg">{item.title}</h4>
                                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 squircle-lg glass border border-white/5 bg-white/5">
                            <h3 className="text-lg font-bold mb-6 text-mars-accent uppercase tracking-widest text-sm">Como a G2 aplica isso:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {application.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-mars-accent/10 flex items-center justify-center flex-shrink-0">

                                            <item.icon className="w-4 h-4 text-mars-accent" />
                                        </div>
                                        <span className="text-sm font-medium text-white/80">{item.label}</span>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </motion.div>
                    {/* Background Image behind the photo */}
                    <img src={bgfounder} className='absolute -inset-10 w-[calc(100%+30rem)] h-[calc(100%+30rem)] object-contain opacity-30 z-[-1]' alt="Background Shape" />
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >



                        {/* Founder Photo Container */}

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />

                        <div className="relative aspect-[4/5] md:aspect-[3/4] squircle-lg overflow-hidden border border-white/10 group">

                            <img
                                src={angelo}
                                alt="Founder"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />

                            {/* Floating Quote on Image */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="glass p-6 squircle-lg border border-white/10 backdrop-blur-xl"
                                >
                                    <p className="text-lg md:text-xl font-serif italic text-white leading-relaxed">
                                        "Empresas crescem quando o fundador se torna referência."
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-mars-accent/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-mars-blue/20 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
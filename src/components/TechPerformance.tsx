import { motion } from 'motion/react';
import { Cpu, Layout, Rocket, Settings, Link, Brain, CheckCircle2 } from 'lucide-react';

export function TechPerformance() {
    const techStack = [
        {
            icon: Layout,
            title: "Sites Estratégicos",
            desc: "Desenvolvimento focado em experiência e conversão."
        },
        {
            icon: Rocket,
            title: "Landing Pages",
            desc: "Estruturas de alta performance para campanhas específicas."
        },
        {
            icon: Settings,
            title: "Plataformas Digitais",
            desc: "Estruturação completa do seu ecossistema online."
        },
        {
            icon: Link,
            title: "Automação & CRM",
            desc: "Integrações inteligentes que eliminam gargalos de vendas."
        },
        {
            icon: Brain,
            title: "IA Aplicada",
            desc: "Inteligência artificial para ganho real de eficiência operacional."
        }
    ];

    return (
        <section className="py-32 px-6 bg-white text-black relative overflow-hidden">
            {/* TUI Grid for white section */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 mb-6"
                    >
                        <Cpu className="w-4 h-4 text-mars-accent" />
                        <span className="text-xs font-mono tracking-widest uppercase text-black/60">Infraestrutura & Código</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Tecnologia & <span className="text-mars-accent">Alta Performance</span>
                    </h2>
                    <p className="text-black/60 max-w-2xl mx-auto text-lg">
                        A G2 é orientada por dados, automação e IA. Construímos a base tecnológica necessária para sustentar o seu crescimento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techStack.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 squircle bg-gray-50 border border-gray-200 flex flex-col gap-4 group hover:bg-black hover:text-white transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-mars-accent/10 flex items-center justify-center group-hover:bg-mars-accent transition-colors">
                                <item.icon className="w-6 h-6 text-mars-accent group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-gray-500 group-hover:text-white/60 transition-colors">{item.desc}</p>
                            <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                <CheckCircle2 className="w-3 h-3 text-mars-accent" />
                                <span>Implementado</span>
                            </div>
                        </motion.div>
                    ))}

                    {/* Special CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="p-8 squircle bg-mars-accent text-white flex flex-col justify-center items-center text-center gap-4"
                    >
                        <h3 className="text-2xl font-bold">Escala & Previsibilidade</h3>
                        <p className="text-white/80 text-sm">
                            Sua operação digital rodando sem falhas, 24/7.
                        </p>
                        <a
                            href="https://api.whatsapp.com/send/?phone=5567996709422&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 px-6 py-3 bg-black text-white squircle-full font-bold text-sm hover:bg-black/80 transition-colors inline-block"
                        >
                            Solicitar Auditoria Tech
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
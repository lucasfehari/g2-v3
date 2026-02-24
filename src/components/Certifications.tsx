import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle, Star } from 'lucide-react';

export function Certifications() {
    const certs = [
        {
            name: "SEMPRE",
            desc: "Padrão de excelência em processos e atendimento estratégico.",
            icon: ShieldCheck
        },
        {
            name: "RD Station",
            desc: "Parceiro certificado em Inbound Marketing e Automação.",
            icon: CheckCircle
        },
        {
            name: "Cinepro",
            desc: "Certificação em produção de conteúdo audiovisual de alta performance.",
            icon: Star
        }
    ];

    return (
        <section className="py-32 px-6 bg-black text-white relative overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-mars-accent/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-6"
                    >
                        <Award className="w-4 h-4 text-mars-accent" />
                        <span className="text-xs font-mono tracking-widest uppercase text-white/60">Autoridade Técnica</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                        Certificações
                    </h2>
                    <p className="text-white/60 max-w-xl mx-auto text-lg">
                        Nosso compromisso com a qualidade é validado pelas maiores instituições do mercado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certs.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 squircle bg-[#0a0a0a] border border-white/10 flex flex-col items-center text-center gap-6 group hover:border-mars-accent/30 transition-all duration-500"
                        >
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-mars-accent/10 group-hover:border-mars-accent/30 transition-all">
                                <cert.icon className="w-10 h-10 text-white/20 group-hover:text-mars-accent transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3 tracking-tight">{cert.name}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">{cert.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <p className="text-sm font-mono uppercase tracking-[0.2em] text-white/30">
                        Padrão Elevado • Confiabilidade • Performance
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
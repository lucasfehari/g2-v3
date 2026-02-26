import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle, Star } from 'lucide-react';
import sinaproLogo from '../assets/certificado-sinaproms.svg';
import cenpLogo from '../assets/certificado-cenp.png';
import rdstationLogo from '../assets/rd-station.svg';
export function Certifications() {
    const certs = [
        {
            name: "CENP",
            desc: "Padrão de excelência em processos e atendimento estratégico.",
            logo: cenpLogo
        },
        {
            name: "RD Station",
            desc: "Parceiro certificado em Inbound Marketing e Automação.",
            logo: rdstationLogo
        },
        {
            name: "Sinapro MS",
            desc: "Certificação em produção de conteúdo audiovisual de alta performance.",
            logo: sinaproLogo
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
                            <img src={cert.logo} alt={cert.name} className="h-16 w-auto object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-500" />
                            <div>
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
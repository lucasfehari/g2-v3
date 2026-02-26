import { motion } from 'motion/react';

export function DataSection() {
    return (
        <section className="py-32 px-6 bg-black text-white relative border-t tui-line">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-6">
                            <span className="w-2 h-2 rounded-full bg-mars-accent animate-pulse" />
                            <span className="text-xs font-mono tracking-widest uppercase text-white/80">Monitoramento em Tempo Real</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Decisões Baseadas em <span className="font-serif italic font-light text-white/60">Dados</span>
                        </h2>
                        <p className="text-white/60 text-lg mb-8">
                            Cada campanha é rigorosamente monitorada por nossos dashboards de BI. Otimizamos cada centavo investido para maximizar o seu retorno.
                        </p>

                        <div className="space-y-6">
                            {[
                                { label: "Leads Gerados (Mês)", value: "45.2K", mono: true },
                                { label: "ROAS Médio Global", value: "8.4x", mono: true },
                                { label: "Marcas Atendidas", value: "+500mil", mono: false }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center justify-between border-b tui-line pb-4">
                                    <span className="text-white/60 uppercase tracking-widest text-sm">{stat.label}</span>
                                    <span className={`text-xl ${stat.mono ? 'font-mono' : 'font-medium'}`}>{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[500px] squircle glass-dark p-8 flex flex-col">
                        <div className="flex justify-between items-center mb-8">
                            <span className="font-mono text-xs text-white/40 uppercase">Funil de Conversão</span>
                            <span className="font-mono text-xs text-mars-accent uppercase">Otimizado</span>
                        </div>

                        {/* Abstract visualization */}
                        <div className="flex-1 relative flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="w-64 h-64 rounded-full border border-white/10 border-dashed relative"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-mars-blue rounded-full shadow-[0_0_20px_rgba(244,131,18,0.5)]" />
                            </motion.div>
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute w-40 h-40 rounded-full border border-white/20 relative"
                            >
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-mars-accent rounded-full shadow-[0_0_20px_rgba(193,0,0,0.5)]" />
                            </motion.div>
                            <div className="absolute w-12 h-12 bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,0.8)]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
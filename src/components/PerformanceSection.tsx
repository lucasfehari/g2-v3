import { motion } from 'motion/react';
import { Zap, Activity, Battery, Wind, Weight, Cpu } from 'lucide-react';

export function PerformanceSection() {
    return (
        <section className="py-32 px-6 bg-black text-white relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mars-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-mars-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Top Header Area */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold tracking-tight max-w-xl leading-[1.1]"
                    >
                        Todos os <span className="text-mars-accent">Level Ups</span> que sua Marca Esperava
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full md:w-96 h-48 squircle overflow-hidden border border-white/5"
                    >
                        <img
                            src="https://picsum.photos/seed/tech/800/400"
                            alt="Performance Tech"
                            className="object-cover w-full h-full opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4">
                            <span className="text-[10px] font-mono text-mars-accent uppercase tracking-widest">G2 Infrastructure v3.0</span>
                        </div>
                    </motion.div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    {/* Much More Powerful Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-1 h-64 squircle glass-dark p-8 flex flex-col justify-center border border-white/10 group hover:border-mars-accent/30 transition-colors"
                    >
                        <h3 className="text-2xl font-medium text-white/90">Muito Mais</h3>
                        <span className="text-4xl font-bold text-mars-accent uppercase tracking-tighter">Poderoso</span>
                    </motion.div>

                    {/* Stats Card (CPU, GPU, RAM) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-3 h-64 squircle glass-dark p-8 flex items-center justify-around border border-white/10 relative overflow-hidden"
                    >
                        {/* Background subtle gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-mars-accent/5 via-transparent to-mars-blue/5" />

                        <div className="flex flex-col items-center gap-2 relative z-10">
                            <div className="flex items-baseline gap-1">
                                <span className="text-6xl font-bold text-mars-accent tracking-tighter">7x</span>
                                <span className="text-xs font-mono text-white/40 uppercase vertical-text rotate-180">Power</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Cpu className="w-4 h-4 text-white/20" />
                                <span className="text-xs font-mono text-white/60 uppercase tracking-widest">CPU Power</span>
                            </div>
                        </div>

                        <div className="w-px h-12 bg-white/10" />

                        <div className="flex flex-col items-center gap-2 relative z-10">
                            <div className="flex items-baseline gap-1">
                                <span className="text-6xl font-bold text-mars-accent tracking-tighter">40x</span>
                                <span className="text-xs font-mono text-white/40 uppercase">Power</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-white/20" />
                                <span className="text-xs font-mono text-white/60 uppercase tracking-widest">GPU Power</span>
                            </div>
                        </div>

                        <div className="w-px h-12 bg-white/10" />

                        <div className="flex flex-col items-center gap-2 relative z-10">
                            <div className="flex items-baseline gap-1">
                                <span className="text-6xl font-bold text-mars-accent tracking-tighter">6x</span>
                                <span className="text-xs font-mono text-white/40 uppercase">RAM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-white/20" />
                                <span className="text-xs font-mono text-white/60 uppercase tracking-widest">Data RAM</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Row - 4 Cards */}

                    {/* No Noise */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="h-48 squircle glass-dark p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <h4 className="text-xl font-medium">Sem</h4>
                            <span className="text-2xl font-bold text-white/40 group-hover:text-white transition-colors">Ruído</span>
                        </div>
                        <div className="absolute right-[-20px] bottom-[-20px] opacity-20 group-hover:opacity-40 transition-opacity">
                            <div className="w-32 h-32 rounded-full border-[1px] border-white/30 flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full border-[1px] border-white/20 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full border-[1px] border-white/10" />
                                </div>
                            </div>
                        </div>
                        <Wind className="w-5 h-5 text-white/20" />
                    </motion.div>

                    {/* No Heat */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="h-48 squircle glass-dark p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <h4 className="text-xl font-medium">Sem</h4>
                            <span className="text-2xl font-bold text-white/40 group-hover:text-white transition-colors">Atrito</span>
                        </div>
                        <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-bl from-mars-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Activity className="w-5 h-5 text-mars-blue/40" />
                    </motion.div>

                    {/* Battery Life */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="h-48 squircle glass-dark p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <h4 className="text-xl font-medium">50%+</h4>
                            <span className="text-2xl font-bold text-white/40 group-hover:text-white transition-colors">Retenção</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Battery className="w-5 h-5 text-mars-accent" />
                            <div className="h-1.5 w-12 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '80%' }}
                                    className="h-full bg-mars-accent"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Lighter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="h-48 squircle glass-dark p-6 flex flex-col justify-between border border-white/10 relative overflow-hidden group"
                    >
                        <div className="relative z-10">
                            <h4 className="text-xl font-medium">20%+</h4>
                            <span className="text-2xl font-bold text-white/40 group-hover:text-white transition-colors">Eficiência</span>
                        </div>
                        <div className="flex flex-col">
                            <Weight className="w-5 h-5 text-white/20 mb-2" />
                            <span className="text-[10px] font-mono text-white/30 uppercase">*Comparado ao mercado</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
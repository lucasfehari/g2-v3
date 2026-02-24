import { motion } from 'motion/react';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
            {/* Background Video / Animated Element Container */}
            <div className="absolute bottom-0 right-0 w-full lg:w-[70%] h-full z-0">
                <div className="relative w-full h-full overflow-hidden">
                    {/* Gradients to blend the video seamlessly */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10" />

                    {/* Animated Background Placeholder (Video) */}
                    <motion.div
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 3 }}
                        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full relative"
                    >
                        {/* User: Replace this img with your <video autoPlay muted loop playsInline src="..." /> */}
                        <video className=' opacity-40 md:opacity-100 filter-opacity-50 w-full h-full object-cover ' autoPlay muted loop playsInline src="src/assets/BACKG2.mp4" />
                        {/* Dynamic light leaks */}
                        <motion.div
                            animate={{
                                opacity: [0.2, 0.4, 0.2],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-mars-accent/10 blur-[150px] rounded-full pointer-events-none"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="flex items-center gap-4 mb-12"
                        >
                            <div className="w-12 h-[1px] bg-mars-accent" />
                            <span className="text-mars-accent font-mono text-[10px] font-bold tracking-[0.5em] uppercase">
                                G2 Intelligence v3.0
                            </span>
                        </motion.div>

                        <h1 className="text-7xl md:text-[120px] font-bold tracking-tighter mb-12 leading-[0.8] text-white">
                            Think <span className="text-white/10">Smarter,</span><br />
                            Live <span className="text-gradient-accent">Easier.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/40 mb-16 leading-relaxed max-w-xl font-light">
                            Transformamos a complexidade do marketing digital em resultados previsíveis através de infraestrutura e inteligência.
                        </p>

                        <div className="flex flex-wrap items-center gap-10">
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "#D10000" }}
                                whileTap={{ scale: 0.98 }}
                                className="px-14 py-6 rounded-full bg-mars-accent text-white font-bold text-[11px] uppercase tracking-[0.2em] shadow-2xl transition-all"
                            >
                                Discover More
                            </motion.button>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 group cursor-pointer"
                            >
                                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500">
                                    <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-white border-b-[7px] border-b-transparent ml-1 group-hover:border-l-black transition-colors" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-colors">
                                    Watch Process
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Navigation / Info inspired by high-end editorial sites */}
            <div className="absolute bottom-12 left-0 right-0 px-12 z-30 flex justify-between items-end">
                <div className="hidden md:block">
                    <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] mb-2">Location</p>
                    <p className="text-[11px] font-bold text-white/60 uppercase tracking-widest">Campo Grande • MS</p>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-4"
                >
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] vertical-text">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-mars-accent to-transparent" />
                </motion.div>

                <div className="hidden md:block text-right">
                    <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] mb-2">Status</p>
                    <p className="text-[11px] font-bold text-mars-accent uppercase tracking-widest animate-pulse">System Online</p>
                </div>
            </div>
        </section>
    );
}
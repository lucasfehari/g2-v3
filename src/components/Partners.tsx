import { motion } from 'motion/react';

import logo1 from '../assets/logoClientes/client-1.png';
import logo2 from '../assets/logoClientes/client-2.png';
import logo3 from '../assets/logoClientes/client-3.png';
import logo4 from '../assets/logoClientes/client-4.png';
import logo5 from '../assets/logoClientes/client-5.png';
import logo6 from '../assets/logoClientes/client-6.png';
import logo7 from '../assets/logoClientes/client-7.png';
import logo8 from '../assets/logoClientes/client-8.png';
import logo9 from '../assets/logoClientes/client-9.png';

const partners = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9
];

export function Partners() {
    return (
        <section className="py-12 border-y tui-line bg-black/50 backdrop-blur-md overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

            <div className="container mx-auto px-6 mb-8 text-center relative z-20">
                <h2 className="text-white/50 text-[10px] font-mono tracking-[0.4em] uppercase">
                    Marcas que confiam na G2
                </h2>
            </div>

            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex items-center gap-24 px-12"
                >
                    {[...partners, ...partners, ...partners].map((partner, i) => (
                        <div key={i} className="flex items-center justify-center group shrink-0">
                            <img
                                src={partner}
                                alt={`Client Logo ${i}`}
                                className="h-10 md:h-12 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
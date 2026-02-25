import { motion } from 'motion/react';
import { Hexagon, Triangle, Circle, Square, Diamond, Star } from 'lucide-react';

import fehariLogo from '../assets/logoParceiros/fehari.svg';
import luaazulLogo from '../assets/logoParceiros/logoluaazul.png';
import bgred from '../assets/bg-red.png';

const clients = [
    { name: 'Nara PROD.' },
    { name: 'Daive' },
    { name: 'Fehari Studio', logo: fehariLogo },
    { name: 'luaazul', logo: luaazulLogo },

];

export function ClientsSection() {
    // Duplicamos o array para criar o efeito de loop infinito perfeito
    const duplicatedClients = [...clients, ...clients, ...clients];

    return (

        <section className="py-24 px-6 bg-black text-white relative overflow-hidden border-y tui-line">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <img src={bgred} alt="" className="w-full h-full object-cover blur-sm" />
            </div>
            {/* Background Glow */}

            <div className="container mx-auto max-w-7xl mb-16 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Marcas que <span className="text-gradient-accent">Confiam</span> na G2
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-lg">
                    Aceleramos o crescimento das empresas mais inovadoras do mercado.
                </p>
            </div>

            <div className="relative w-full overflow-hidden flex">
                {/* Gradient masks for smooth fade on edges */}


                <motion.div
                    animate={{ x: ["0%", "-33.3333%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="flex items-center gap-6 px-3"
                >
                    {duplicatedClients.map((client, i) => {
                        return (
                            <div
                                key={i}
                                className="flex-shrink-0 w-56 h-36   flex flex-col items-center justify-center gap-4 group hover:bg-white/10 transition-colors cursor-pointer relative overflow-hidden"
                            >
                                {/* Subtle hover glow inside the card */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {client.logo ? (
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="h-16 w-auto max-w-[80%] object-contain opacity-50 group-hover:opacity-100 transition-all duration-300 relative z-10"
                                    />
                                ) : (
                                    <>
                                        {client.icon && (
                                            <client.icon className="w-10 h-10 text-white/30 group-hover:text-mars-accent transition-colors duration-300 relative z-10" />
                                        )}
                                        <span className="text-xl font-semibold text-white/50 group-hover:text-white transition-colors duration-300 tracking-wide relative z-10">
                                            {client.name}
                                        </span>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
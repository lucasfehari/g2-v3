import { useState } from 'react';
import { motion } from 'motion/react';
import logog2 from '../assets/logog2.png';

const navItems = ['Início', 'Planos', 'Parceiros', 'Clientes', 'Sobre'];

export function Header() {
    const [activeItem, setActiveItem] = useState('Início');

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-6xl flex items-center justify-between"
            >
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <img className="w-24 md:w-48 h-auto" src={logog2} alt="" srcset="" />
                </div>

                {/* Navigation - Minimal Pill */}
                <nav className="hidden md:flex items-center gap-1 glass-dark squircle-full border border-white/10 px-2 py-1.5 shadow-xl">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => setActiveItem(item)}
                            className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 relative ${activeItem === item
                                ? 'text-white'
                                : 'text-white/40 hover:text-white'
                                }`}
                        >
                            {activeItem === item && (
                                <motion.div
                                    layoutId="nav-pill-bg"
                                    className="absolute inset-0 bg-white/5 rounded-full"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{item}</span>
                        </button>
                    ))}
                </nav>

                {/* Action Button */}
                <a
                    href="https://api.whatsapp.com/send/?phone=5567996709422&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-full bg-mars-accent text-white text-[11px] font-bold uppercase tracking-widest hover:bg-mars-accent/90 transition-all hover:shadow-[0_0_20px_rgba(193,0,0,0.4)] active:scale-95 text-center inline-block"
                >
                    Fale Conosco
                </a>
            </motion.div>
        </header>
    );
}
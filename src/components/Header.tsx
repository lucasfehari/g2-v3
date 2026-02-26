import React, { useState } from 'react';
import { motion } from 'motion/react';
import logog2 from '../assets/logog2.png';

const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Planos', href: '#planos' },
    { name: 'Parceiros', href: '#parceiros' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Sobre', href: '#sobre' }
];

export function Header() {
    const [activeItem, setActiveItem] = useState('Início');

    // Smooth scroll handler
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
        e.preventDefault();
        setActiveItem(name);
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleScroll(e, item.name, item.href)}
                            className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 relative ${activeItem === item.name
                                ? 'text-white'
                                : 'text-white/40 hover:text-white'
                                }`}
                        >
                            {activeItem === item.name && (
                                <motion.div
                                    layoutId="nav-pill-bg"
                                    className="absolute inset-0 bg-white/5 rounded-full"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </a>
                    ))}
                </nav>

                {/* Action Button */}
                <a
                    href="https://api.whatsapp.com/send/?phone=556796956777&text&type=phone_number&app_absent=0"
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
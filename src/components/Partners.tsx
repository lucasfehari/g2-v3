import { motion } from 'motion/react';

const partners = [
    "GOOGLE", "META", "TIKTOK", "LINKEDIN", "HUBSPOT", "SALESFORCE", "ADOBE", "SHOPIFY"
];

export function Partners() {
    return (
        <section className="py-12 border-y tui-line bg-black/50 backdrop-blur-md overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex items-center gap-16 px-8"
                >
                    {[...partners, ...partners, ...partners].map((partner, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                            <span className="text-2xl font-bold text-white/20 group-hover:text-white/60 transition-colors tracking-widest">
                                {partner}
                            </span>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-mars-accent/50 transition-colors" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
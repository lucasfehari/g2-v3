import { motion } from 'motion/react';

import rdStationLogo from '../assets/rd-station.svg';
import activeCampaignLogo from '../assets/activecampaign.png';

const partners = [
    { name: "Google Ads", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" },
    { name: "Meta Business", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "TikTok Ads", logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" },
    { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "RD Station", logo: rdStationLogo },
    { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" },
    { name: "ActiveCampaign", logo: activeCampaignLogo }
];

export function StrategicPartners() {
    return (
        <section className="py-24 px-6 bg-[#050505] text-white relative border-y border-white/5">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-md text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Parceiros <span className="text-mars-accent">Estratégicos</span>
                        </h2>
                        <p className="text-white/50 leading-relaxed">
                            Trabalhamos em conjunto com as maiores plataformas de tecnologia do mundo para garantir que sua empresa tenha acesso ao que há de mais moderno em marketing e vendas.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                        {partners.map((partner, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="h-24 squircle glass border border-white/5 flex items-center justify-center p-6 group hover:border-white/20 transition-all"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-8 w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                    referrerPolicy="no-referrer"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
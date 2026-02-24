import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Starter',
        price: 'R$ 2.500',
        period: '/mês',
        description: 'Ideal para marcas em estágio inicial buscando tração.',
        features: [
            'Gestão de Redes Sociais (2 canais)',
            'Criação de Conteúdo (8 posts/mês)',
            'Gestão de Tráfego (Até R$ 5k/mês)',
            'Relatório Mensal',
            'Suporte via Email',
        ],
        highlighted: false,
    },
    {
        name: 'Growth',
        price: 'R$ 5.800',
        period: '/mês',
        description: 'Para empresas prontas para escalar seus resultados.',
        features: [
            'Gestão de Redes Sociais (4 canais)',
            'Criação de Conteúdo (15 posts/mês)',
            'Gestão de Tráfego (Até R$ 20k/mês)',
            'Estratégia de Inbound Marketing',
            'Relatórios Quinzenais',
            'Suporte via WhatsApp',
        ],
        highlighted: true,
    },
    {
        name: 'Enterprise',
        price: 'Sob Consulta',
        period: '',
        description: 'Soluções personalizadas para grandes operações.',
        features: [
            'Estratégia Full-Funnel Customizada',
            'Squad Dedicado',
            'Gestão de Tráfego Ilimitada',
            'Automação de Marketing Avançada',
            'Dashboards em Tempo Real',
            'Consultoria Estratégica Semanal',
        ],
        highlighted: false,
    },
];

export function PricingSection() {
    return (
        <section className="py-32 px-6 bg-black text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-mars-blue/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-6"
                    >
                        <span className="text-xs font-mono tracking-widest uppercase text-mars-accent">Investimento</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                    >
                        Planos que <span className="text-gradient-accent">Escalam</span><br />com o seu Negócio
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 max-w-2xl mx-auto text-lg"
                    >
                        Escolha o pacote ideal para o seu momento atual. Sem taxas ocultas, apenas resultados previsíveis.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <PricingCard key={plan.name} plan={plan} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PricingCard({ plan, index }: { plan: any, index: number, key?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className={`relative squircle-lg p-8 flex flex-col h-full ${plan.highlighted
                    ? 'bg-gradient-to-b from-[#111] to-[#050505] border border-mars-accent/30 shadow-[0_0_40px_rgba(193,0,0,0.1)] md:-translate-y-4'
                    : 'bg-[#0a0a0a] border border-white/10'
                }`}
        >
            {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-mars-accent text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                    Mais Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-white/50 text-sm h-10">{plan.description}</p>
            </div>

            <div className="mb-8">
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    <span className="text-white/50">{plan.period}</span>
                </div>
            </div>

            <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {plan.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                        <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? 'text-mars-accent' : 'text-white/30'}`} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                className={`w-full py-4 squircle-full font-medium transition-all duration-300 ${plan.highlighted
                        ? 'bg-mars-accent text-white hover:bg-mars-accent/90 hover:shadow-[0_0_20px_rgba(193,0,0,0.3)]'
                        : 'glass hover:bg-white/10 text-white'
                    }`}
            >
                Selecionar Plano
            </button>
        </motion.div>
    );
}
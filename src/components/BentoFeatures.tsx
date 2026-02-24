import { motion } from 'motion/react';
import { Rocket, Satellite, Shield, Cpu, Globe } from 'lucide-react';

export function BentoFeatures() {
    return (
        <section className="py-32 px-6 bg-white text-black relative">
            {/* TUI Grid for white section */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Ecossistema de <span className="text-mars-blue">Alta Performance</span>
                    </h2>
                    <p className="text-black/60 max-w-xl text-lg">
                        Nossa infraestrutura tecnológica garante escala, precisão e previsibilidade para o crescimento da sua marca.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                    {/* Card 1 - Large */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="squircle md:col-span-2 bg-gray-50 border border-gray-200 p-8 flex flex-col justify-between relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-mars-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-mars-blue/20 transition-colors" />
                        <div>
                            <Rocket className="w-8 h-8 text-mars-blue mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">Growth Engine Proprietária</h3>
                            <p className="text-gray-500 max-w-sm">
                                Nossa metodologia de aceleração reduz o custo de aquisição (CAC) em até 40%, utilizando automação e inteligência de dados.
                            </p>
                        </div>
                        <div className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                            Status: Escalando
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="squircle bg-gray-900 text-white p-8 flex flex-col justify-between relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(193,0,0,0.2),transparent_50%)]" />
                        <div className="relative z-10">
                            <Shield className="w-8 h-8 text-mars-accent mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Brand Safety</h3>
                            <p className="text-gray-400 text-sm">
                                Monitoramento contínuo e proteção da reputação da sua marca em todos os canais digitais.
                            </p>
                        </div>
                        <div className="relative z-10 font-mono text-xs text-mars-accent uppercase tracking-widest">
                            Defesa Ativa
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="squircle bg-gray-50 border border-gray-200 p-8 flex flex-col justify-between"
                    >
                        <div>
                            <Satellite className="w-8 h-8 text-gray-800 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Omnichannel</h3>
                            <p className="text-gray-500 text-sm">
                                Presença integrada e consistente em todos os pontos de contato com o seu cliente.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 4 - Large */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="squircle md:col-span-2 bg-gray-50 border border-gray-200 p-8 flex flex-col justify-between overflow-hidden relative"
                    >
                        <div className="absolute right-0 bottom-0 p-8 opacity-10">
                            <Globe className="w-48 h-48" />
                        </div>
                        <div className="relative z-10">
                            <Cpu className="w-8 h-8 text-gray-800 mb-4" />
                            <h3 className="text-2xl font-semibold mb-2">IA Aplicada ao Marketing</h3>
                            <p className="text-gray-500 max-w-md">
                                Sistemas de inteligência artificial otimizando campanhas e personalizando a jornada do usuário em tempo real.
                            </p>
                        </div>
                        <div className="relative z-10 flex gap-4 mt-8">
                            <div className="flex flex-col">
                                <span className="text-3xl font-light">+312%</span>
                                <span className="text-xs font-mono text-gray-400 uppercase">Aumento em ROI</span>
                            </div>
                            <div className="w-px bg-gray-200" />
                            <div className="flex flex-col">
                                <span className="text-3xl font-light">-45%</span>
                                <span className="text-xs font-mono text-gray-400 uppercase">Redução de CAC</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
import { motion } from 'motion/react';

import logo4D from '../assets/logo4D.png';

const projects = [
    { id: '01', title: 'Campanhas de Alta Conversão', desc: 'Estratégias full-funnel com ROI comprovado e otimização em tempo real.' },
    { id: '02', title: 'Branding & Posicionamento', desc: 'Construção de marcas memoráveis que dominam o share of mind do mercado.' },
    { id: '03', title: 'Growth Hacking', desc: 'Escala acelerada utilizando dados, automação e testes A/B contínuos.' },
    { id: '04', title: 'Conteúdo Viral', desc: 'Criação de assets digitais com alto potencial de engajamento e viralização.' },
];

export function ProjectsSection() {
    return (
        <section className="py-32 px-6 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                    {/* Left Column */}
                    <div className="flex flex-col gap-12 lg:gap-16">
                        <ProjectCard project={projects[0]} tilt="right" />
                        <ProjectCard project={projects[2]} tilt="right" />
                    </div>

                    {/* Middle Column (Image) */}
                    <div className="relative h-[800px] flex items-center justify-center order-first lg:order-none mb-12 lg:mb-0">
                        <img
                            src={logo4D}
                            alt="Projetos 3D"
                            className="h-auto w-full "
                            referrerPolicy="no-referrer"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-12 lg:gap-16">
                        <div className="mb-4">
                            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                                Por que<br />Escolher a<br />G2?
                            </h2>
                        </div>
                        <ProjectCard project={projects[1]} tilt="left" />
                        <ProjectCard project={projects[3]} tilt="left" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, tilt }: { project: any, tilt: 'left' | 'right' }) {
    const tiltClass = tilt === 'right' ? 'rotate-[4deg]' : '-rotate-[4deg]';

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative min-h-[320px] flex flex-col justify-between p-8 group"
        >
            {/* Rotated Background & Border */}
            <div className={`absolute inset-0 squircle-lg border border-white/5 bg-[#050505] overflow-hidden transition-transform duration-500 group-hover:rotate-0 ${tiltClass} shadow-2xl`}>
                {/* Gradient background matching the image style but with our colors */}

            </div>

            {/* Content (Straight) */}
            <div className="relative z-10">
                <span className="text-4xl font-bold text-mars-accent mb-8 block">
                    {project.id}
                </span>
            </div>

            <div className="relative z-10 mt-auto">
                <p className="text-white/60 text-sm leading-relaxed">
                    <strong className="text-white block mb-2 text-lg font-medium">{project.title}</strong>
                    {project.desc}
                </p>
            </div>
        </motion.div>
    );
}
export function Footer() {
    return (
        <footer className="bg-black text-white border-t tui-line pt-20 pb-10 px-6">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold tracking-tighter mb-4">G2 Intelligence</h3>
                        <p className="text-white/40 max-w-sm">
                            Transformamos a complexidade do marketing digital em resultados previsíveis através de infraestrutura e inteligência.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-6">Soluções</h4>
                        <ul className="space-y-4 text-white/80">
                            <li><a href="#" className="hover:text-mars-accent transition-colors">Founder-Led Growth</a></li>
                            <li><a href="#" className="hover:text-mars-accent transition-colors">Performance</a></li>
                            <li><a href="#" className="hover:text-mars-accent transition-colors">Tecnologia</a></li>
                            <li><a href="#" className="hover:text-mars-accent transition-colors">Consultoria</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-4 text-white/80">
                            <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Termos de Serviço</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t tui-line text-white/40 text-sm">
                    <p>© 2026 G2 Intelligence. Todos os direitos reservados.</p>
                    <div className="font-mono text-xs mt-4 md:mt-0">
                        SYS.VER 3.0.0 // SECURE CONNECTION
                    </div>
                </div>
            </div>
        </footer>
    );
}
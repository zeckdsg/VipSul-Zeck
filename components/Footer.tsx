import React from 'react';
import { NAV_LINKS, IMAGES } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-background-light dark:bg-background-dark pt-16 pb-8 border-t border-slate-200 dark:border-white/5 text-slate-800 dark:text-white">
            <div className="container mx-auto px-6">
                <div className="w-24 h-1 bg-primary mb-12 rounded-full opacity-80"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        {/* Logo Section */}
                        <div className="flex items-center select-none">
                            <img 
                                src={IMAGES.logo} 
                                alt="Vipsul Viagens" 
                                className="h-12 w-auto object-contain" 
                                referrerPolicy="no-referrer"
                            />
                        </div>

                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                            Agência boutique especializada em viagens de alto padrão e intercâmbio premium.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">Unidade Brasil</h5>
                        <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <p>São Leopoldo, Rio Grande do Sul</p>
                            <p>+55 (51) 99999-9999</p>
                            <p className="hover:text-primary transition-colors cursor-pointer">brasil@vipsul.com</p>
                        </div>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">Unidade NZ</h5>
                        <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <p>Auckland - New Zealand</p>
                            <p>+64 21 000 0000</p>
                            <p className="hover:text-primary transition-colors cursor-pointer">nz@vipsul.com</p>
                        </div>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-primary">Institucional</h5>
                        <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-3">
                            {NAV_LINKS.map(link => (
                                <li key={link.label}>
                                    <a href={link.href} className="hover:text-primary transition-colors hover:translate-x-1 inline-block">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Política de Privacidade</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors hover:translate-x-1 inline-block">Termos de Serviço</a></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-xs text-slate-400 border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© 2024 Vipsul Viagens Premium. Todos os direitos reservados.</p>
                    <p className="opacity-50">CNPJ: 00.000.000/0001-00</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
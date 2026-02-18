'use client';

import React from 'react';
import { IMAGES, VIDEOS } from '../constants';

const Hero: React.FC = () => {
    return (
        <header className="relative min-h-screen flex items-center overflow-hidden py-24 lg:py-0">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster={IMAGES.hero}
                >
                    <source src={VIDEOS.hero} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                </video>

                {/* Overlays for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent/20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background-light/20 dark:to-background-dark"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 mt-4 lg:mt-20 max-w-6xl">
                <div className="text-white space-y-4 md:space-y-6 animate-fade-in-up lg:ml-auto max-w-xl">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight">
                        Viver começa quando você <span className="font-bold text-white relative inline-block">
                            decide ir.
                            <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-primary opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00024 6.99999C23.5002 3.49999 58.0002 2.50001 99.0002 2.50001C140 2.50001 176.5 4.5 198 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
                        </span>
                    </h1>
                    <p className="text-base md:text-xl font-light text-white/80 max-w-lg leading-relaxed">
                        Experiências premium sob medida. Unidades exclusivas no Brasil e Nova Zelândia para realizar o seu próximo capítulo.
                    </p>
                </div>

                {/* Form Card */}
                <div className="glass p-6 md:p-8 rounded-2xl red-glow max-w-md lg:mr-auto lg:ml-0 mx-auto w-full transform hover:scale-[1.01] transition-transform duration-500 mt-4 lg:mt-0">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white border-l-4 border-primary pl-4">Planeje sua Jornada</h3>
                    <form className="space-y-3 md:space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1">
                            <label className="text-xs text-white/60 uppercase tracking-wider ml-1">Seus Dados</label>
                            <input 
                                type="text" 
                                placeholder="Nome completo" 
                                className="w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm md:text-base"
                            />
                        </div>
                        
                        <input 
                            type="text" 
                            placeholder="WhatsApp" 
                            className="w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm md:text-base"
                        />
                        
                        <div className="space-y-1">
                            <label className="text-xs text-white/60 uppercase tracking-wider ml-1">Preferências</label>
                            <select className="w-full bg-white/10 border border-white/20 rounded-lg text-white/80 px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm md:text-base [&>option]:text-slate-900">
                                <option value="" disabled selected>Destino de interesse</option>
                                <option value="europa">Europa</option>
                                <option value="nz">Nova Zelândia</option>
                                <option value="brasil">Brasil Premium</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                        
                        <input 
                            type="date" 
                            className="w-full bg-white/10 border border-white/20 rounded-lg text-white/80 px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm md:text-base [color-scheme:dark]"
                        />
                        
                        <button className="w-full bg-primary py-3 md:py-4 rounded-lg text-white font-bold uppercase tracking-widest hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all transform active:scale-95 mt-2 md:mt-4 text-sm md:text-base">
                            Quero planejar minha viagem
                        </button>
                    </form>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-primary rounded-full animate-scroll"></div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
import React from 'react';
import { IMAGES } from '../constants';
import { Clock } from 'lucide-react';

const Urgency: React.FC = () => {
    return (
        <section className="py-24 relative flex items-center justify-center min-h-[500px]">
            <div className="absolute inset-0">
                <img 
                    src={IMAGES.urgencyBg} 
                    alt="Sunset Horizon" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="glass max-w-3xl mx-auto p-12 rounded-2xl border border-primary/30 shadow-[0_0_50px_rgba(237,38,68,0.15)] backdrop-blur-xl">
                    <div className="inline-block p-4 rounded-full bg-primary/10 mb-6">
                        <Clock className="text-primary w-12 h-12" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
                        As melhores tarifas são <span className="font-bold text-primary">limitadas.</span>
                    </h2>
                    <p className="text-white/80 mb-10 text-lg max-w-xl mx-auto">
                        Planejamento antecipado é o segredo para o luxo acessível. Comece sua cotação hoje mesmo e garanta exclusividade.
                    </p>
                    <button className="bg-primary text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 hover:bg-primary/90 transition-all shadow-lg shadow-primary/40 text-sm md:text-base">
                        Começar Agora
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Urgency;
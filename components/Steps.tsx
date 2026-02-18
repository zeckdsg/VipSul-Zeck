import React from 'react';
import { IMAGES } from '../constants';

const Steps: React.FC = () => {
    const steps = [
        {
            id: 1,
            title: "Conte-nos seu desejo",
            description: "Agendamos uma conversa para entender seus gostos, estilo e destinos favoritos.",
            image: IMAGES.step1
        },
        {
            id: 2,
            title: "Criamos seu roteiro",
            description: "Nossos especialistas desenham cada detalhe, da hospedagem às experiências únicas.",
            image: IMAGES.step2
        },
        {
            id: 3,
            title: "Viva a experiência",
            description: "Você só precisa fazer as malas. Nós cuidamos de tudo até o seu retorno seguro.",
            image: IMAGES.step3
        }
    ];

    return (
        <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden relative">
            <div className="container mx-auto px-6 relative">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-light text-slate-800 dark:text-white">
                        Sua jornada em <span className="font-bold text-primary">3 Passos</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {steps.map((step) => (
                        <div 
                            key={step.id} 
                            className="glass-dark bg-white dark:bg-black/40 rounded-2xl overflow-hidden relative group hover:red-glow transition-all border border-slate-100 dark:border-white/5 shadow-lg flex flex-col"
                        >
                            {/* Image Header */}
                            <div className="h-48 w-full overflow-hidden relative">
                                <img 
                                    src={step.image} 
                                    alt={step.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="p-8 pt-10 text-center relative flex-1 flex flex-col justify-start">
                                {/* Number Badge - Floating between image and content */}
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-primary/30 z-10 border-4 border-white dark:border-[#2a1518] group-hover:scale-110 transition-transform">
                                    {step.id}
                                </div>
                                
                                <h4 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">{step.title}</h4>
                                <p className="text-slate-600 dark:text-white/60 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Steps;
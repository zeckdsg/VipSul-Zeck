import React from 'react';
import { IMAGES } from '../constants';
import { CreditCard, Headphones, Star } from 'lucide-react';

const Features: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-background-dark">
            <div className="absolute inset-0 z-0">
                <img 
                    src={IMAGES.featuresBg} 
                    alt="Traveler with passport" 
                    className="w-full h-full object-cover grayscale opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/95 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl font-light leading-tight text-white">
                        Facilidade e <span className="font-bold text-primary">Consultoria Personalizada</span>
                    </h2>
                    
                    <div className="space-y-6">
                        {/* Feature 1 */}
                        <div className="flex items-start space-x-4 glass-dark p-6 rounded-xl border-l-4 border-primary hover:bg-white/5 transition-colors duration-300">
                            <div className="bg-primary/20 p-3 rounded-lg">
                                <CreditCard className="text-primary w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Parcelamento em até 10x</h4>
                                <p className="text-white/60 text-sm mt-1">Viabilizamos seu sonho com as melhores condições do mercado premium.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-start space-x-4 glass-dark p-6 rounded-xl border-l-4 border-primary hover:bg-white/5 transition-colors duration-300">
                            <div className="bg-primary/20 p-3 rounded-lg">
                                <Headphones className="text-primary w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Atendimento Consultivo</h4>
                                <p className="text-white/60 text-sm mt-1">Não apenas vendemos passagens, desenhamos todo o seu roteiro.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-start space-x-4 glass-dark p-6 rounded-xl border-l-4 border-primary hover:bg-white/5 transition-colors duration-300">
                            <div className="bg-primary/20 p-3 rounded-lg">
                                <Star className="text-primary w-6 h-6" fill="currentColor" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Suporte 24/7 VIP</h4>
                                <p className="text-white/60 text-sm mt-1">Estamos com você em cada fuso horário da sua viagem.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative hidden md:block">
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px]"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                         <img 
                            src={IMAGES.planning} 
                            alt="Travel Planning" 
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-2xl font-bold text-white">Travel Planning</h3>
                            <p className="text-white/80">Experiência do início ao fim</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
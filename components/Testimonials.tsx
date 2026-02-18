import React from 'react';
import { IMAGES } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
    return (
        <section id="depoimentos" className="py-24 relative bg-background-dark">
            <div className="absolute inset-0">
                <img 
                    src={IMAGES.socialProofBg} 
                    alt="Happy Travelers" 
                    className="w-full h-full object-cover blur-sm opacity-60"
                />
                <div className="absolute inset-0 bg-background-dark/80"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center text-white">
                <h2 className="text-4xl font-light mb-16">
                    O que dizem nossos <span className="font-bold">Vipsul Travelers</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Review 1 */}
                    <div className="glass p-8 rounded-xl text-left hover:-translate-y-2 transition-transform duration-300 relative">
                        <Quote className="absolute top-4 right-4 text-white/10 w-12 h-12" />
                        <p className="italic text-white/80 mb-6 relative z-10">"A melhor experiência que já tive com agências. O suporte na Nova Zelândia foi impecável, nos sentimos seguros o tempo todo."</p>
                        <div className="flex items-center space-x-4 border-t border-white/10 pt-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-inner"></div>
                            <div>
                                <p className="font-bold">Ricardo S.</p>
                                <p className="text-xs text-white/50">Traveler VIP • NZ Trip</p>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="glass p-8 rounded-xl text-left border-primary/30 shadow-[0_0_30px_rgba(237,38,68,0.1)] hover:-translate-y-2 transition-transform duration-300 relative">
                         <Quote className="absolute top-4 right-4 text-primary/20 w-12 h-12" />
                        <p className="italic text-white/80 mb-6 relative z-10">"Roteiro personalizado de verdade. Cada detalhe da nossa viagem pela Europa foi pensado no nosso perfil. Nota 10!"</p>
                        <div className="flex items-center space-x-4 border-t border-white/10 pt-4">
                             <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-inner"></div>
                            <div>
                                <p className="font-bold text-primary">Mariana L.</p>
                                <p className="text-xs text-white/50">Traveler VIP • Euro Trip</p>
                            </div>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="glass p-8 rounded-xl text-left hover:-translate-y-2 transition-transform duration-300 relative">
                        <Quote className="absolute top-4 right-4 text-white/10 w-12 h-12" />
                        <p className="italic text-white/80 mb-6 relative z-10">"Atendimento de alto nível. O parcelamento em 10x facilitou muito nossa lua de mel dos sonhos. Recomendo muito!"</p>
                        <div className="flex items-center space-x-4 border-t border-white/10 pt-4">
                             <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-inner"></div>
                            <div>
                                <p className="font-bold">André M.</p>
                                <p className="text-xs text-white/50">Traveler VIP • Maldives Trip</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
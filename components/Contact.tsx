import React from 'react';
import { IMAGES } from '../constants';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contato" className="py-24 bg-white dark:bg-background-dark relative overflow-hidden">
             <div className="absolute inset-0">
                <img 
                    src={IMAGES.contactBg} 
                    alt="Open road" 
                    className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background-dark to-transparent opacity-90"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="glass-dark max-w-5xl mx-auto p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-12 shadow-2xl border border-white/5">
                    
                    {/* Info Side */}
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                            Pronto para <span className="font-bold text-primary block">decolar?</span>
                        </h2>
                        <p className="text-white/60 text-lg">
                            Nossa equipe de especialistas no Brasil e na Nova Zelândia está pronta para lhe atender.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group hover:border-primary hover:bg-primary/10 transition-all">
                                <Phone className="text-white group-hover:text-primary transition-colors" />
                            </a>
                            <a href="#" className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group hover:border-primary hover:bg-primary/10 transition-all">
                                <MessageCircle className="text-white group-hover:text-primary transition-colors" />
                            </a>
                            <a href="#" className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group hover:border-primary hover:bg-primary/10 transition-all">
                                <Mail className="text-white group-hover:text-primary transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="flex-1 w-full">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 gap-4">
                                <input 
                                    type="text" 
                                    placeholder="Nome" 
                                    className="w-full bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 px-5 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                                />
                                <input 
                                    type="email" 
                                    placeholder="E-mail" 
                                    className="w-full bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 px-5 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                                />
                            </div>
                            <textarea 
                                placeholder="Sua mensagem" 
                                className="w-full bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 px-5 py-4 h-32 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                            ></textarea>
                            <button className="w-full bg-primary py-4 rounded-lg text-white font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20">
                                Enviar Contato
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
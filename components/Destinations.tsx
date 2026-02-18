import React from 'react';
import { IMAGES } from '../constants';
import { ArrowRight } from 'lucide-react';

const destinations = [
    {
        title: "Brasil Exclusivo",
        desc: "Descubra os paraísos tropicais com total sofisticação.",
        image: IMAGES.brasil,
    },
    {
        title: "Nova Zelândia",
        desc: "Aventuras cinematográficas no outro lado do mundo.",
        image: IMAGES.nz,
    },
    {
        title: "Europa Clássica",
        desc: "O melhor do velho continente com curadoria Vipsul.",
        image: IMAGES.europe,
    },
];

const Destinations: React.FC = () => {
    return (
        <section id="destinos" className="py-24 bg-background-light dark:bg-background-dark">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Exploração</h2>
                        <h3 className="text-4xl font-light text-slate-800 dark:text-white">Destinos em <span className="font-bold">Destaque</span></h3>
                    </div>
                    <button className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary/80 transition-colors flex items-center group">
                        Ver todos <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {destinations.map((dest, idx) => (
                        <div key={idx} className="group relative h-[500px] overflow-hidden rounded-2xl shadow-xl cursor-pointer">
                            <img 
                                src={dest.image} 
                                alt={dest.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="glass-dark p-6 rounded-xl border border-white/10">
                                    <h4 className="text-2xl font-bold text-white mb-2">{dest.title}</h4>
                                    <p className="text-white/70 text-sm mb-4">{dest.desc}</p>
                                    <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center group/btn">
                                        Quero esse destino
                                        <div className="w-0 h-0.5 bg-primary ml-2 transition-all group-hover/btn:w-8"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;
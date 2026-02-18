'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, IMAGES } from '../constants';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav 
            className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
                scrolled 
                    ? 'glass shadow-lg bg-background-dark/80 backdrop-blur-md' 
                    : 'glass border-transparent bg-transparent'
            } border-b border-white/10`}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center select-none">
                    <img 
                        src={IMAGES.logo} 
                        alt="Vipsul Viagens" 
                        className="h-10 w-auto object-contain"
                        referrerPolicy="no-referrer"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest text-white/90">
                    {NAV_LINKS.map((link) => (
                        <a 
                            key={link.label}
                            href={link.href} 
                            className="hover:text-primary transition-colors relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="hidden md:block">
                     <button className="bg-primary text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                        Consultoria
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background-dark/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col space-y-4">
                    {NAV_LINKS.map((link) => (
                        <a 
                            key={link.label}
                            href={link.href} 
                            className="text-white hover:text-primary font-medium uppercase tracking-widest"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                     <button className="bg-primary text-white w-full py-3 rounded-lg text-xs font-bold uppercase tracking-widest">
                        Consultoria
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
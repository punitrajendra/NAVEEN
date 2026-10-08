import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Vision', href: '#vision' },
        { name: 'Initiatives', href: '#initiatives' },
        { name: 'Impact', href: '#impact' },
        { name: 'Manifesto', href: '#manifesto' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo Section */}
                <div className="flex flex-col">
                    <span className={`font-bold text-lg tracking-tight ${isScrolled ? 'text-navy-900' : 'text-navy-900 drop-shadow-sm'}`}>
                        NMIT
                    </span>
                    <span className={`text-[10px] font-semibold tracking-wider ${isScrolled ? 'text-brand-blue' : 'text-brand-blue drop-shadow-sm'}`}>
                        ISE FORUM
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-brand-blue ${isScrolled ? 'text-slate-600' : 'text-slate-700'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <a
                        href="#manifesto"
                        className="px-5 py-2.5 rounded-full bg-navy-900 text-white text-sm font-medium hover:bg-navy-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Explore Manifesto
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-navy-900 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 py-4 px-6 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-slate-800 py-2 border-b border-slate-50 last:border-0"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#manifesto"
                        className="w-full text-center mt-2 px-5 py-3 rounded-md bg-brand-blue text-white font-medium shadow-md"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Explore Manifesto
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

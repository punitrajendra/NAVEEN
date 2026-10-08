import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">

                    <div className="flex flex-col">
                        <h4 className="font-bold text-2xl text-navy-900 tracking-tight">NMIT</h4>
                        <div className="text-sm text-slate-500 font-medium mb-1">
                            Nitte Meenakshi Institute of Technology
                        </div>
                        <div className="text-xs text-slate-400">Bengaluru</div>
                    </div>

                    <div className="flex flex-col md:items-center">
                        <div className="font-bold text-xl text-navy-900 tracking-tight flex items-center">
                            ISE FORUM <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mx-2 hidden md:block"></span>
                        </div>
                        <div className="text-sm font-bold text-brand-blue mt-1">Sangyartham</div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <a href="#home" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Home</a>
                        <a href="#vision" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Vision</a>
                        <a href="#initiatives" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Initiatives</a>
                        <a href="#manifesto" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Manifesto</a>
                    </div>

                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-lg font-bold text-navy-900 italic">Events That Inspire.</p>
                    <p className="text-xs text-slate-400 font-medium">
                        © 2026 ISE Forum, NMIT
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

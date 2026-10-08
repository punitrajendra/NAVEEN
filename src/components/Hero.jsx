import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-50 px-6">
            <div className="absolute inset-0 z-0">
                <img src="/cd7d9c5c-ee9f-42a4-850e-4baad53a36aa.jpg" className="w-full h-full object-cover opacity-10" alt="Background" />
            </div>

            <div className="relative z-10 w-full max-w-lg mb-8 text-center mt-12">
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-blue text-white text-xs font-bold tracking-widest uppercase shadow-md mb-6">
                    Vote Naveen Ager
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-navy-900 tracking-tight leading-[1]">
                    EVENTS<br />THAT<br />
                    <span className="text-brand-blue">INSPIRE</span>
                </h1>
            </div>

            <div className="relative z-10 w-full max-w-sm rounded-[2rem] overflow-hidden shadow-2xl glass border-[6px] border-white mx-auto transform hover:scale-105 transition-transform duration-500">
                <img
                    src="/d4211a30-e3b0-47f5-9759-498ed39752f5.jpg"
                    alt="Naveen Poster"
                    className="w-full h-auto object-contain bg-navy-900"
                />
            </div>
        </section>
    );
};

export default Hero;

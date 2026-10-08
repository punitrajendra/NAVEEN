import React from 'react';

const CallToAction = () => {
    return (
        <section className="py-32 relative bg-navy-900 text-center px-6 overflow-hidden">

            {/* Blurs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full blur-[120px] opacity-40"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                    Let's Make Every <br />
                    <span className="text-brand-blue">Event Count.</span>
                </h2>

                <button className="px-10 py-5 rounded-full bg-white text-navy-900 text-lg font-black shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-110 transition-transform duration-300">
                    VOTE NOW
                </button>
            </div>

        </section>
    );
};

export default CallToAction;

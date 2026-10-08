import React from 'react';

const Vision = () => {
    return (
        <section className="py-24 bg-white relative px-6" id="vision">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

                <div className="flex-1 w-full relative">
                    <div className="absolute inset-0 bg-brand-blue rounded-3xl translate-x-4 translate-y-4 opacity-20"></div>
                    <img
                        src="/6d34f388-b419-452e-9fd2-1755ef84ba7c.jpg"
                        alt="Vibrant Community"
                        className="relative z-10 w-full h-auto rounded-3xl shadow-xl border-4 border-white object-cover aspect-portrait md:aspect-square"
                    />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-black text-navy-900 leading-tight mb-6">
                        A Stronger <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">ISE Community</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-medium max-w-md mx-auto md:mx-0">
                        CONNECT. CREATE. GROW. <br /><br />
                        Building an active, inclusive environment where every student has a platform to shine.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Vision;

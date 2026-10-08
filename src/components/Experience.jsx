import React from 'react';

const Experience = () => {
    const pillars = ["LEARN", "PARTICIPATE", "CONNECT", "CREATE"];

    return (
        <section className="py-16 md:py-24 bg-navy-900 text-white relative overflow-hidden" id="impact">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full blur-[100px] opacity-20"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">

                <h2 className="text-3xl md:text-5xl font-bold mb-12">IDEAS INTO EXPERIENCES</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {pillars.map((title, idx) => (
                        <div key={idx} className="bg-navy-800/50 p-6 rounded-xl border border-navy-700">
                            <h4 className="text-sm md:text-xl font-bold text-brand-blue tracking-wide">{title}</h4>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;

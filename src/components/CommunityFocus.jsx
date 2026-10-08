import React from 'react';

const CommunityFocus = () => {
    const areas = [
        { title: "PARTICIPATION", desc: "More opportunities." },
        { title: "OPPORTUNITY", desc: "Industry connect." },
        { title: "COMMUNITY", desc: "Stronger belonging." }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <h3 className="text-3xl md:text-4xl font-black text-navy-900 mb-10">
                    A STRONGER ISE
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {areas.map((area, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-8">
                            <h4 className="text-lg font-bold text-navy-900 mb-2">{area.title}</h4>
                            <p className="text-slate-500 text-sm font-medium">{area.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CommunityFocus;

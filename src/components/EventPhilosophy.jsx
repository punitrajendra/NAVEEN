import React from 'react';

const EventPhilosophy = () => {
    const steps = ["LISTEN", "PLAN", "COLLABORATE", "EXECUTE", "IMPROVE"];

    return (
        <section className="py-16 md:py-24 bg-slate-50" id="event-philosophy">
            <div className="max-w-5xl mx-auto px-6 text-center">

                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-12">HOW WE BUILD EVENTS</h2>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {steps.map((title, idx) => (
                        <React.Fragment key={idx}>
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-white border-2 border-brand-blue flex items-center justify-center font-bold text-brand-blue mb-2 shadow-sm text-sm">
                                    {idx + 1}
                                </div>
                                <h4 className="text-sm font-bold text-navy-900">{title}</h4>
                            </div>

                            {idx < steps.length - 1 && (
                                <div className="hidden md:block w-full h-px bg-slate-300"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default EventPhilosophy;

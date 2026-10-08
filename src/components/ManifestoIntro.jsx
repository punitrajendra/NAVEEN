import React from 'react';

const ManifestoIntro = () => {
    return (
        <section className="py-16 md:py-24 bg-white relative" id="manifesto">
            <div className="max-w-3xl mx-auto px-6 text-center">

                <h2 className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4">Our Manifesto</h2>

                <h3 className="text-4xl md:text-5xl font-black text-navy-900 leading-tight tracking-tight mb-6">
                    More Than Events. <br />
                    <span className="text-slate-400">Experiences.</span>
                </h3>

                <p className="text-base md:text-lg text-slate-600 font-medium">
                    Bringing out the talent, creativity and potential in every student.
                </p>

            </div>
        </section>
    );
};

export default ManifestoIntro;

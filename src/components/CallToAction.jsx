import React, { useState } from 'react';

const CallToAction = () => {
    const [votes, setVotes] = useState(124); // Starting with a base number for aesthetics
    const [hasVoted, setHasVoted] = useState(false);

    const handleVote = () => {
        if (!hasVoted) {
            setVotes(prev => prev + 1);
            setHasVoted(true);
        }
    };

    return (
        <section className="py-32 relative bg-navy-900 text-center px-6 overflow-hidden">

            {/* Blurs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full blur-[120px] opacity-40"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
                    Let's Make Every <br />
                    <span className="text-brand-blue">Event Count.</span>
                </h2>

                <div className="flex flex-col items-center gap-6">
                    <button
                        onClick={handleVote}
                        className={`px-10 py-5 rounded-full text-lg font-black shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 ${hasVoted
                                ? 'bg-brand-blue text-white cursor-default shadow-none'
                                : 'bg-white text-navy-900 hover:scale-110 hover:shadow-[0_0_50px_rgba(37,99,235,0.6)]'
                            }`}
                    >
                        {hasVoted ? '✓ VOTED' : 'VOTE NOW'}
                    </button>

                    <div className="flex items-center gap-3 text-white">
                        <span className="text-3xl font-black">{votes.toLocaleString()}</span>
                        <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Total Votes</span>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CallToAction;

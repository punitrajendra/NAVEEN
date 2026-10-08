import React from 'react';
import { CalendarDays, Users, Star, Link, Globe2, Crosshair, MessageCircle, Heart } from 'lucide-react';

const Initiatives = () => {
    const cards = [
        { icon: <CalendarDays size={18} />, title: "MORE EVENTS", desc: "Technical & Cultural" },
        { icon: <Users size={18} />, title: "ENGAGEMENT", desc: "For Everyone" },
        { icon: <Star size={18} />, title: "SHOWCASE", desc: "Platforms for Talent" },
        { icon: <Link size={18} />, title: "INDUSTRY", desc: "Guest Talks" },
        { icon: <Globe2 size={18} />, title: "INCLUSIVE", desc: "Diverse Interests" },
        { icon: <Crosshair size={18} />, title: "COORDINATION", desc: "Smooth Planning" },
        { icon: <MessageCircle size={18} />, title: "FEEDBACK", desc: "Open Listening" },
        { icon: <Heart size={18} />, title: "COMMUNITY", desc: "Stronger United" }
    ];

    return (
        <section className="py-16 md:py-24 bg-white" id="initiatives">
            <div className="max-w-6xl mx-auto px-6">

                <div className="mb-10 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-navy-900 mb-2">INITIATIVES</h2>
                    <p className="text-sm text-brand-blue font-bold uppercase tracking-wider">Action Plan</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {cards.map((card, idx) => (
                        <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-brand-blue/30 transition-colors">
                            <div className="text-brand-blue mb-4">
                                {card.icon}
                            </div>
                            <h4 className="text-sm font-bold text-navy-900 mb-1 leading-tight">
                                {card.title}
                            </h4>
                            <p className="text-xs text-slate-500 font-medium">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Initiatives;

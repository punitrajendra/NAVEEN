import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Initiatives from './components/Initiatives';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-blue selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Vision />
                <Initiatives />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
}

export default App;

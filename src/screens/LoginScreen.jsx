import React, { useState, useEffect } from 'react';
import { SparklesIcon } from '../components/icons';

// --- Icons for the Buttons ---
const AthleteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9.8 2.8.3-.6.9-1.8.1-.1-2.1.5s-2.1.5-2.1 2.6c0 2.2 1.4 2.8 2.2 2.8l1.4-.2s-1.5-.5-2.1-1.2c-.6-.7-.5-1.3-.5-1.3l.1-.6.3-.5z"/><path d="m14.2 2.8.3-.6.9-1.8.1-.1-2.1.5s-2.1.5-2.1 2.6c0 2.2 1.4 2.8 2.2 2.8l1.4-.2s-1.5-.5-2.1-1.2c-.6-.7-.5-1.3-.5-1.3l.1-.6.3-.5z"/><path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M12 10v4"/><path d="m15 17-3 4-3-4"/><path d="M12 14h.01"/></svg>
);

const RecruiterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="m11 8 2 2-2 2"></path>
    </svg>
);

export default function LoginScreen({ onLogin }) {
    const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

    // This effect adds the interactive gradient spotlight that follows the mouse
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const backgroundStyle = {
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.15), rgba(52, 211, 153, 0.15), transparent 80%)`
    };

    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-slate-100 text-slate-800 p-4 overflow-hidden">
            {/* Dynamic Interactive Background */}
            <div 
                className="absolute inset-0 transition-all duration-300 -z-10" 
                style={backgroundStyle}
            ></div>
            
            <div 
                className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 text-center shadow-2xl"
            >
                
                <div className="flex flex-col items-center mb-8">
                    <div className="p-3 bg-emerald-100 rounded-full mb-4 border border-emerald-200">
                         <SparklesIcon className="w-12 h-12 text-emerald-500" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900">Krida-Pratibha</h1>
                    <p className="text-lg text-slate-600 mt-2">Unearthing India's Sporting Talent</p>
                </div>

                <div className="space-y-4">
                    <button
                        onClick={() => onLogin('player')}
                        className="group w-full text-left bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-xl shadow-lg flex items-center gap-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="p-3 bg-white/20 rounded-lg">
                            <AthleteIcon />
                        </div>
                        <div>
                            <h2 className="font-bold text-lg">I am an Athlete</h2>
                            <p className="text-sm text-emerald-100">Showcase my skills and get discovered.</p>
                        </div>
                    </button>
                    
                    <button
                        onClick={() => onLogin('recruiter')}
                        className="group w-full text-left bg-white hover:bg-gray-50 border border-gray-300 p-4 rounded-xl shadow-lg flex items-center gap-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-200">
                           <RecruiterIcon className="text-gray-600"/>
                        </div>
                         <div>
                            <h2 className="font-bold text-lg text-gray-800">I am a Recruiter</h2>
                            <p className="text-sm text-gray-500">Find and recruit the next generation.</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}


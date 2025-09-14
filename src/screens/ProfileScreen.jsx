import React from 'react';
import { SparklesIcon } from '../components/icons.jsx';
import { mockPlayerData } from '../data/mockData.jsx';

// --- Icons for Section Headers ---
const BarChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>;
const GavelIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 13-7.5 7.5"/><path d="m18 17-5.5 5.5"/><path d="m5 8 7-7"/><path d="m9 9-1.5 1.5"/><path d="m14.5 14.5 1.5-1.5"/><path d="m2 22 5.5-1.5"/><path d="m15.5 5.5-1.5 5.5L22 2"/></svg>;

// --- Reusable Section Header Component ---
const SectionHeader = ({ icon, title }) => (
    <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-200">
            <div className="text-green-500 w-6 h-6">
                {icon}
            </div>
        </div>
        <h3 className="text-lg font-semibold tracking-wide bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">{title}</h3>
    </div>
);

export default function ProfileScreen({ userType, navigate, setShowGeminiPlan, setShowGeminiReport }) {
    const isPlayerView = userType === 'player';
    
    return (
        <div className="bg-slate-50 pb-24">
            <div className="relative">
                <div className="h-40 bg-gradient-to-r from-lime-500 to-green-500">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')] opacity-20"></div>
                </div>
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                    <div className="relative group">
                        <img src={mockPlayerData.profilePic} alt={mockPlayerData.name} className="w-32 h-32 rounded-full border-4 border-white shadow-lg" />
                        <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-green-400 transition-all duration-300"></div>
                    </div>
                </div>
            </div>
            
            <div className="px-4 mt-20">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-800">{mockPlayerData.name}</h1>
                    <p className="text-slate-500 mt-1">{mockPlayerData.sport} • {mockPlayerData.location}</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mt-6">
                    <p className="text-slate-600 text-center">{mockPlayerData.bio}</p>
                </div>

                {isPlayerView && (
                     <button onClick={() => setShowGeminiPlan(true)} className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-lime-500 to-green-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-transform transform hover:scale-105">
                        <SparklesIcon className="w-5 h-5" /> Get My Training Plan
                    </button>
                )}

                <div className="mt-8">
                    <SectionHeader icon={<BarChartIcon />} title="Verified Stats" />
                    {/* --- UPDATED STATS SECTION WITH DYNAMIC HOVER --- */}
                    <div className="grid grid-cols-3 gap-3">
                        {mockPlayerData.stats.map(stat => (
                            <div key={stat.name} className="group bg-white p-3 rounded-xl shadow-sm text-center border border-slate-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-lime-500 cursor-pointer">
                                <p className="text-sm text-slate-500 transition-colors duration-300 group-hover:text-lime-200">{stat.name}</p>
                                <p className="text-xl font-bold text-green-600 transition-colors duration-300 group-hover:text-white">{stat.best}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8">
                    <SectionHeader icon={<GavelIcon />} title="Bidding" />
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
                        <div className="flex justify-between items-center mb-2">
                           <div>
                                <p className="text-sm text-slate-500">Highest Bid</p>
                                <p className="text-3xl font-bold text-green-600">₹{mockPlayerData.bids[0].amount.toLocaleString()}</p>
                            </div>
                             {!isPlayerView && <button onClick={() => setShowGeminiReport(true)} className="flex items-center gap-2 bg-slate-100 text-slate-700 font-semibold py-2 px-3 rounded-lg text-sm hover:bg-slate-200"><SparklesIcon className="w-4 h-4 text-green-500" />Scouting Report</button>}
                        </div>
                        <div className="text-sm text-slate-500 mb-4">from {mockPlayerData.bids[0].club}</div>
                        {!isPlayerView && <button className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-slate-900">Place New Bid</button>}
                         {isPlayerView && <button className="w-full bg-green-500 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-green-600">Accept Highest Bid (Temporary)</button>}
                    </div>
                </div>

            </div>
        </div>
    );
}


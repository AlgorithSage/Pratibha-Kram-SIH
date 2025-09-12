import React from 'react';
import { SparklesIcon } from '../components/icons.jsx';
import { mockPlayerData } from '../data/mockData.jsx';

export default function ProfileScreen({ userType, navigate, setShowGeminiPlan, setShowGeminiReport }) {
    const isPlayerView = userType === 'player';
    
    return (
        <div className="pb-24 bg-gray-50">
            <div className="h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-b-3xl"></div>
            <div className="px-4 -mt-16">
                <div className="flex items-end space-x-4">
                    <img src={mockPlayerData.profilePic} alt={mockPlayerData.name} className="w-24 h-24 rounded-full border-4 border-white shadow-md" />
                    <div className="pb-2">
                        <h1 className="text-2xl font-bold text-gray-800">{mockPlayerData.name}</h1>
                        <p className="text-gray-500">{mockPlayerData.sport} • {mockPlayerData.location}</p>
                    </div>
                </div>
                <p className="text-gray-600 mt-4">{mockPlayerData.bio}</p>

                {isPlayerView && (
                     <button onClick={() => setShowGeminiPlan(true)} className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-teal-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-transform transform hover:scale-105">
                        <SparklesIcon className="w-5 h-5" /> Get My Training Plan
                    </button>
                )}

                <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Verified Stats</h3>
                <div className="grid grid-cols-3 gap-3">
                    {mockPlayerData.stats.map(stat => (
                        <div key={stat.name} className="bg-white p-3 rounded-xl shadow-sm text-center">
                            <p className="text-sm text-gray-500">{stat.name}</p>
                            <p className="text-xl font-bold text-indigo-600">{stat.value}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Bidding</h3>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                           <div>
                                <p className="text-sm text-gray-500">Highest Bid</p>
                                <p className="text-2xl font-bold text-green-600">₹{mockPlayerData.bids[0].amount.toLocaleString()}</p>
                            </div>
                             {!isPlayerView && <button onClick={() => setShowGeminiReport(true)} className="flex items-center gap-2 bg-indigo-100 text-indigo-700 font-semibold py-2 px-3 rounded-lg text-sm"><SparklesIcon className="w-4 h-4" />Scouting Report</button>}
                        </div>
                        <div className="text-sm text-gray-500 mb-4">from {mockPlayerData.bids[0].club}</div>
                        {!isPlayerView && <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-indigo-700">Place New Bid</button>}
                         {isPlayerView && <button className="w-full bg-green-600 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-green-700">Accept Highest Bid (Temporary)</button>}
                    </div>
                </div>

            </div>
        </div>
    );
}


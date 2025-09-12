import React from 'react';
import Header from '/src/components/Header.jsx';
import ReelCard from '/src/components/ReelCard.jsx';
import { mockPlayerData, mockAssessmentTests, mockReelsData } from '/src/data/mockData.jsx';
import { ZapIcon } from '/src/components/icons.jsx';

// A simple icon for stats, you can add this to your icons.jsx
const BarChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>;

export default function PlayerDashboard({ navigate, onStartTest }) {
    return (
        <div className="bg-gray-50 pb-24">
            <Header title="Dashboard" user={mockPlayerData} />
            
            <div className="p-4">
                {/* Welcome Banner */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-2xl text-white shadow-lg mb-6">
                    <h2 className="text-2xl font-bold">Welcome back, {mockPlayerData.name.split(' ')[0]}!</h2>
                    <p className="mt-1 text-indigo-200">Ready to push your limits today?</p>
                </div>

                {/* Quick Stats Section */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <BarChartIcon />
                        Your Best Stats
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                        {mockPlayerData.stats.map(stat => (
                            <div key={stat.name} className="bg-white p-3 rounded-xl shadow-sm text-center border border-gray-200">
                                <p className="text-sm text-gray-500">{stat.name}</p>
                                <p className="text-xl font-bold text-indigo-600">{stat.best}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Start Assessment Section */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <ZapIcon />
                        Start a New Assessment
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        {mockAssessmentTests.map(test => (
                            <div 
                                key={test.id} 
                                onClick={() => onStartTest(test)} 
                                className="group bg-white p-4 rounded-2xl shadow-md text-center cursor-pointer hover:bg-indigo-500 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="mx-auto text-indigo-500 w-12 h-12 mb-3 transition-colors duration-300 group-hover:text-white">{test.icon}</div>
                                <h4 className="font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">{test.name}</h4>
                                <p className="text-xs text-gray-400 transition-colors duration-300 group-hover:text-indigo-200 mt-1">{test.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Reels Section */}
                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">My Recent Reels</h3>
                    <div className="space-y-4">
                       <ReelCard reel={mockReelsData[2]} />
                       <ReelCard reel={mockReelsData[0]} />
                    </div>
                </div>
            </div>
        </div>
    );
}


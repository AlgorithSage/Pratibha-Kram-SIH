import React from 'react';
import Header from '../components/Header.jsx';
import ReelCard from '../components/ReelCard.jsx';
import { mockReelsData } from '../data/mockData.jsx';

export default function RecruiterDashboard({ navigate }) {
    return (
        <div className="pb-20">
            <Header title="Talent Feed" isRecruiter={true} />
            <div className="p-4">
                <div className="relative mb-4">
                    <input type="text" placeholder="Search athletes, sports..." className="w-full bg-gray-100 border-none rounded-lg py-2 px-4 focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="space-y-6">
                    {mockReelsData.map(reel => (
                        <div key={reel.id} onClick={() => navigate('profile')}>
                           <ReelCard reel={reel} isRecruiterView={true} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


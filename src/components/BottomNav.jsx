import React from 'react';
import { HomeIcon, ClipboardIcon, UserIcon } from './icons.jsx';

export default function BottomNav({ userType, activePage, navigate }) {
    const isPlayer = userType === 'player';
    const navItems = isPlayer ?
        [
            { name: 'Dashboard', icon: <HomeIcon />, page: 'playerDashboard' },
            { name: 'Assessments', icon: <ClipboardIcon />, page: 'assessmentList' }, // Placeholder page
            { name: 'Profile', icon: <UserIcon />, page: 'profile' },
        ] :
        [
            { name: 'Feed', icon: <HomeIcon />, page: 'recruiterDashboard' },
            { name: 'Watchlist', icon: <ClipboardIcon />, page: 'watchlist' }, // Placeholder page
            { name: 'Profile', icon: <UserIcon />, page: 'profile' },
        ];

    return (
        <div className="absolute bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.05)] rounded-t-2xl">
            <div className="flex justify-around p-2">
                {navItems.map(item => (
                    <button key={item.name} onClick={() => navigate(item.page)} className={`flex flex-col items-center p-2 rounded-lg w-24 ${activePage === item.page ? 'text-indigo-600 bg-indigo-50' : 'text-gray-500'}`}>
                        {item.icon}
                        <span className="text-xs mt-1">{item.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}



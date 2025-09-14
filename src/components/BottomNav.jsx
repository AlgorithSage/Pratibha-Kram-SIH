import React from 'react';
import { HomeIcon, ClipboardIcon, UserIcon } from './icons.jsx';

export default function BottomNav({ userType, activePage, navigate }) {
    const isPlayer = userType === 'player';
    
    // Define navigation items based on user type
    const navItems = isPlayer ?
        [
            { name: 'Dashboard', icon: <HomeIcon />, page: 'playerDashboard' },
            { name: 'Assessments', icon: <ClipboardIcon />, page: 'assessmentList' },
            { name: 'Profile', icon: <UserIcon />, page: 'profile' },
        ] :
        [
            { name: 'Feed', icon: <HomeIcon />, page: 'recruiterDashboard' },
            { name: 'Watchlist', icon: <ClipboardIcon />, page: 'watchlist' },
            { name: 'Profile', icon: <UserIcon />, page: 'recruiterProfile' },
        ];

    return (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-md">
            <div className="bg-white/70 backdrop-blur-xl border border-slate-200/80 shadow-lg rounded-2xl p-2">
                <div className="flex justify-around items-center">
                    {/* Navigation Buttons */}
                    {navItems.map((item) => {
                        const isActive = activePage === item.page;
                        return (
                            <button 
                                key={item.name} 
                                onClick={() => navigate(item.page)} 
                                className={`flex flex-col items-center justify-center p-2 h-16 w-24 rounded-xl transition-all duration-300 ease-in-out
                                    ${isActive 
                                        ? 'bg-gradient-to-r from-lime-400 to-green-500 text-white shadow-md' 
                                        : 'text-slate-500 hover:bg-slate-100 hover:text-green-600'}`}
                            >
                                <div className="w-6 h-6">{item.icon}</div>
                                <span className={`text-xs mt-1 ${isActive ? 'font-bold' : 'font-medium'}`}>
                                    {item.name}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


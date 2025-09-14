import React from 'react';
import { UserIcon } from './icons.jsx';

// New icon for the Dashboard title
const LayoutGridIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
);


export default function Header({ title, user, isRecruiter = false }) {
    return (
        <div className="p-4 bg-slate-50/80 backdrop-blur-sm flex justify-between items-center sticky top-0 z-10 shadow-sm shadow-slate-200/50">
            <div className="flex items-center gap-4">
                {/* 3. Cohesive Icon Style */}
                <div className="p-2 bg-white rounded-lg shadow-inner-sm border border-slate-200">
                    <div className="text-slate-500">
                        <LayoutGridIcon />
                    </div>
                </div>
                
                <div className="antialiased">
                    <h1 className="text-2xl font-semibold tracking-wide bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
                        {title}
                    </h1>
                    <p className="text-sm text-slate-400 -mt-1">Performance Overview</p>
                </div>
            </div>
            
            {/* 2. Enhanced Profile Avatar */}
            {!isRecruiter && user && (
                <div className="relative group">
                    <img src={user.profilePic} alt={user.name} className="w-11 h-11 rounded-full border-2 border-white shadow-md" />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-green-400 transition-all duration-300"></div>
                </div>
            )}
            {isRecruiter && (
                <div className="w-11 h-11 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center">
                    <UserIcon className="text-slate-500" />
                </div>
            )}
        </div>
    );
}


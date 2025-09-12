import React from 'react';
import { UserIcon } from './icons.jsx';

export default function Header({ title, user, isRecruiter = false }) {
    return (
        <div className="p-4 bg-white shadow-sm flex justify-between items-center sticky top-0 z-10">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            {!isRecruiter && user && <img src={user.profilePic} alt={user.name} className="w-10 h-10 rounded-full" />}
            {isRecruiter && <UserIcon />}
        </div>
    );
}


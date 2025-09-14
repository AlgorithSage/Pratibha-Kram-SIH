import React from 'react';
import { ZapIcon, DumbbellIcon } from '/src/components/icons.jsx';

export const mockPlayerData = {
    name: "Aarav Sharma",
    age: 18,
    location: "Rural Haryana",
    sport: "Athletics",
    profilePic: "https://placehold.co/100x100/E2E8F0/4A5568?text=AS",
    bio: "Passionate sprinter with a dream to represent India. I train every day on the fields of my village, pushing my limits.",
    stats: [
        { name: "Vertical Jump", value: "32 inches", best: "34 inches" },
        { name: "40m Dash", value: "4.8 sec", best: "4.7 sec" },
        { name: "Sit-ups (1 min)", value: "55", best: "58" },
    ],
    bids: [
        { club: "Mumbai Athletics Club", amount: 50000, date: "2025-09-12" },
        { club: "Delhi Speedsters", amount: 45000, date: "2025-09-11" },
    ],
};

export const mockAssessmentTests = [
    { id: 1, name: "Vertical Jump", icon: <ZapIcon />, description: "Measure your explosive leg power." },
    { id: 2, name: "Shuttle Run (5-10-5)", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6.2c-1.5-1-3.5-1.5-5.5-1.2L9.5 6.5 7 7.7l-2.4 1.4c-1 .6-1.5 1.8-1.1 2.8l1.2 3.3c.3.8 1.2 1.3 2.1 1.1l2.6-.7 3.5-1.1c1.9-.6 3.6-2 4.6-3.8l.5-1.4.2-.5c.2-.5.1-1.1-.3-1.5z"/></svg>, description: "Test your agility and change of direction." },
    { id: 3, name: "Sit-ups (1 Min)", icon: <DumbbellIcon />, description: "Assess your core strength and endurance." },
    { id: 4, name: "Endurance Run", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>, description: "Evaluate your cardiovascular fitness." },
];

export const mockReelsData = [
    { id: 1, player: "Priya Singh", playerPic: "https://placehold.co/40x40/E2E8F0/4A5568?text=PS", videoUrl: "#", caption: "Working on my long jump technique! #TrackLife", likes: 120, comments: 15 },
    { id: 2, player: "Rohan Kumar", playerPic: "https://placehold.co/40x40/E2E8F0/4A5568?text=RK", videoUrl: "#", caption: "New personal best in hurdles.", likes: 250, comments: 32 },
    { id: 3, player: "Aarav Sharma", playerPic: "https://placehold.co/40x40/E2E8F0/4A5568?text=AS", videoUrl: "#", caption: "Morning sprints to start the day right.", likes: 310, comments: 45 },
];

// UPDATED Mock Performance History with peer average
export const mockPerformanceHistory = {
    label: "Vertical Jump Progress (Last 6 Months)",
    peerAverage: 31, // Peer average for this skill
    data: [
        { name: "Mar", value: 28 },
        { name: "Apr", value: 30 },
        { name: "May", value: 29 },
        { name: "Jun", value: 32 },
        { name: "Jul", value: 31.5 },
        { name: "Aug", value: 34 },
    ]
};


import React, { useState, useEffect } from 'react';
// CORRECTED FILE PATHS:
import Header from '../components/Header.jsx';
import ReelCard from '../components/ReelCard.jsx';
import { mockPlayerData, mockAssessmentTests, mockReelsData, mockPerformanceHistory } from '../data/mockData.jsx';
import { ZapIcon } from '../components/icons.jsx';

// --- ICONS (kept inside for simplicity) ---
const BarChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>;
const TargetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const FocusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M7 12A5 5 0 0 1 12 7"/><path d="M12 17a5 5 0 0 1-5-5"/><path d="M17 12a5 5 0 0 1-5 5"/><path d="M12 7a5 5 0 0 1 5-5"/></svg>;
const TrendingUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const FilmIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>;

// --- MOCK GOALS DATA ---
const mockGoals = [
    { name: "Vertical Jump", current: 34, goal: 36, unit: "in" },
    { name: "40m Dash", current: 4.7, goal: 4.6, unit: "sec", lowerIsBetter: true },
];

// --- REUSABLE COMPONENTS ---
const SectionHeader = ({ icon, title }) => (
    <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-200"><div className="text-green-500 w-6 h-6">{icon}</div></div>
        <h3 className="text-lg font-semibold tracking-wide bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">{title}</h3>
    </div>
);

const ProgressBar = ({ label, current, goal, unit, lowerIsBetter = false }) => {
    const progress = Math.min(lowerIsBetter ? (goal / current) * 100 : (current / goal) * 100, 100);
    return (
        <div>
            <div className="flex justify-between items-baseline mb-1"><span className="text-sm font-medium text-slate-600 group-hover:text-lime-200">{label}</span><span className="text-sm font-bold text-lime-600 group-hover:text-white">{current}{unit} / <span className="text-slate-500 group-hover:text-lime-100">{goal}{unit}</span></span></div>
            <div className="w-full bg-slate-200 rounded-full h-2.5 group-hover:bg-white/30"><div className="bg-gradient-to-r from-lime-500 to-green-500 h-2.5 rounded-full group-hover:from-white/80 group-hover:to-white" style={{ width: `${progress}%` }}></div></div>
        </div>
    );
};

const PerformanceChart = ({ history }) => {
    const values = history.data.map(d => d.value);
    const maxValue = Math.max(...values, history.peerAverage);
    const minValue = Math.min(...values, history.peerAverage);
    const chartFloor = minValue > 5 ? minValue - 5 : 0;
    const chartRange = maxValue - chartFloor;
    const [barHeights, setBarHeights] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setBarHeights(history.data.map(d => Math.max(((d.value - chartFloor) / chartRange) * 100, 5)));
        }, 100);
        return () => clearTimeout(timer);
    }, [history.data, chartFloor, chartRange]);

    const peerAverageHeight = chartRange > 0 ? ((history.peerAverage - chartFloor) / chartRange) * 100 : 0;

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h4 className="font-semibold text-slate-700 mb-4">{history.label}</h4>
            <div className="relative flex justify-around items-end h-80 space-x-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
                <div className="absolute w-full left-0 right-0 border-t-2 border-dashed border-slate-400" style={{ bottom: `${peerAverageHeight}%` }}>
                     <span className="absolute -right-4 -translate-y-1/2 text-xs font-semibold text-slate-500 bg-slate-50 px-1">Avg</span>
                </div>
                {history.data.map((item, index) => (
                    <div key={index} className="group flex-1 flex flex-col items-center justify-end h-full z-10">
                        <div 
                            className="relative w-full bg-gradient-to-t from-lime-400 to-green-500 rounded-t-lg transition-all duration-1000 ease-out cursor-pointer hover:from-lime-500 hover:to-green-600"
                            style={{ height: `${barHeights[index] || 0}%` }}
                        >
                           <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-800 text-white text-xs font-bold p-2 rounded-md w-max">
                               <span>Your Score: {item.value}</span><br/>
                               <span className="text-slate-300">Peer Avg: {history.peerAverage}</span>
                               <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                           </div>
                        </div>
                        <span className="text-sm text-slate-500 mt-2 font-medium">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default function PlayerDashboard({ navigate, onStartTest }) {
    const focusTest = mockAssessmentTests[0];
    return (
        <div className="bg-slate-50 pb-24">
            <Header title="Dashboard" user={mockPlayerData} />
            <div className="p-4">
                <div className="bg-gradient-to-r from-lime-500 to-green-500 p-6 rounded-2xl text-white shadow-lg mb-8">
                    <h2 className="text-2xl font-bold">Welcome back, {mockPlayerData.name.split(' ')[0]}!</h2>
                    <p className="mt-1 text-lime-100">Ready to push your limits today?</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <SectionHeader icon={<BarChartIcon />} title="Your Best Stats" />
                        <div className="group bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-lime-500 cursor-pointer">
                            {mockPlayerData.stats.map(stat => {
                                const [value, unit] = stat.best.split(' ');
                                return (<div key={stat.name} className="flex justify-between items-center"><p className="text-sm text-slate-600 group-hover:text-lime-200">{stat.name}</p><div className="flex items-baseline"><span className="text-lg font-bold text-green-600 group-hover:text-white tracking-tight">{value}</span>{unit && <span className="text-sm font-medium text-slate-500 group-hover:text-lime-100 ml-1.5">{unit}</span>}</div></div>);
                            })}
                        </div>
                    </div>
                     <div>
                        <SectionHeader icon={<FocusIcon />} title="Focus of the Day" />
                        <div onClick={() => onStartTest(focusTest)} className="group bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-lime-500 h-[calc(100%-52px)]">
                           <div className="mx-auto text-white bg-lime-500 rounded-lg p-3 w-16 h-16 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6">{focusTest.icon}</div>
                           <div><h4 className="font-semibold text-slate-800 group-hover:text-white">{focusTest.name}</h4><p className="text-sm text-slate-500 group-hover:text-lime-200">{focusTest.description}</p></div>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                     <SectionHeader icon={<TrendingUpIcon />} title="Performance History" />
                     <PerformanceChart history={mockPerformanceHistory} />
                </div>
                <div className="mb-8">
                    <SectionHeader icon={<TargetIcon />} title="Progress Towards Goals" />
                    <div className="group bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:bg-lime-500 cursor-pointer">
                        {mockGoals.map(goal => (<ProgressBar key={goal.name} {...goal} />))}
                    </div>
                </div>
                <div className="mb-8">
                    <SectionHeader icon={<ZapIcon />} title="Start a New Assessment" />
                    <div className="grid grid-cols-2 gap-4">
                        {mockAssessmentTests.map(test => (<div key={test.id} onClick={() => onStartTest(test)} className="group bg-white p-4 rounded-2xl shadow-md text-center cursor-pointer hover:bg-lime-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"><div className="mx-auto text-lime-500 w-12 h-12 mb-3 group-hover:text-white group-hover:scale-110 group-hover:rotate-6">{test.icon}</div><h4 className="font-semibold text-slate-800 group-hover:text-white">{test.name}</h4><p className="text-xs text-slate-400 group-hover:text-lime-200 mt-1">{test.description}</p></div>))}
                    </div>
                </div>
                <div>
                    <SectionHeader icon={<FilmIcon />} title="My Recent Reels" />
                    <div className="space-y-4">
                       <ReelCard reel={mockReelsData[2]} />
                       <ReelCard reel={mockReelsData[0]} />
                    </div>
                </div>
            </div>
        </div>
    );
}


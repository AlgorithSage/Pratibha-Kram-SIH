import React from 'react';
import { SparklesIcon, DumbbellIcon, ZapIcon, ClipboardCheckIcon } from './icons.jsx';

export default function GeminiModal({ title, onClose, type }) {
    const planContent = (
        <>
            <div className="mb-4">
                {/* UPDATED: Subtitle with green gradient */}
                <h4 className="font-semibold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">Focus Area: Explosive Power</h4>
                <p className="text-sm text-slate-500">Based on your vertical jump results, here are some drills to improve your power.</p>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-3 items-start"><DumbbellIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-700">Box Jumps:</span> 3 sets of 8 reps. Focus on landing softly.</div></li>
                <li className="flex gap-3 items-start"><ZapIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-700">Squat Jumps:</span> 3 sets of 12 reps. Explode upwards from the squat position.</div></li>
                <li className="flex gap-3 items-start"><ClipboardCheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-700">Nutrition Tip:</span> Ensure adequate protein intake (e.g., lentils, eggs) post-workout for muscle recovery.</div></li>
            </ul>
        </>
    );

     const reportContent = (
        <>
            <div className="mb-4">
                <h4 className="font-semibold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">Player Summary</h4>
                <p className="text-sm text-slate-500">Aarav Sharma demonstrates significant potential in short-distance sprinting and explosive events. His 40m dash time places him in the top percentile for his age group.</p>
            </div>
             <div className="mb-4">
                <h4 className="font-semibold text-slate-800">Strengths</h4>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    <li>Excellent acceleration and top-end speed.</li>
                    <li>Strong core endurance, indicated by high sit-up count.</li>
                </ul>
            </div>
             <div>
                <h4 className="font-semibold text-slate-800">Areas for Development</h4>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    <li>Vertical jump shows room for improvement, suggesting a focus on plyometrics.</li>
                    <li>Could benefit from structured coaching on running form.</li>
                </ul>
            </div>
        </>
    );

    return (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div 
                className="bg-slate-50 rounded-2xl shadow-xl w-full max-w-sm p-6 relative border border-slate-200"
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/gplay.png')" }}
            >
                 <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-2xl transition-colors">&times;</button>
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-lime-100 to-green-100 rounded-lg border border-green-200">
                        <SparklesIcon className="w-8 h-8 text-green-600" />
                    </div>
                    {/* UPDATED: Main title with green gradient */}
                    <h3 className="text-xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">{title}</h3>
                </div>
                <div className="text-slate-700">
                    {type === 'plan' ? planContent : reportContent}
                </div>
                 <button 
                    onClick={onClose} 
                    className="mt-6 w-full bg-gradient-to-r from-lime-500 to-green-500 text-white font-bold py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                 >
                    Close
                 </button>
            </div>
        </div>
    );
}

import React from 'react';
import { SparklesIcon, DumbbellIcon, ZapIcon, ClipboardCheckIcon } from './icons.jsx';

export default function GeminiModal({ title, onClose, type }) {
    const planContent = (
        <>
            <div className="mb-4">
                <h4 className="font-bold text-gray-800">Focus Area: Explosive Power</h4>
                <p className="text-sm text-gray-600">Based on your vertical jump results, here are some drills to improve your power.</p>
            </div>
            <ul className="space-y-3 text-sm">
                <li className="flex gap-3"><DumbbellIcon className="w-5 h-5 text-indigo-500 flex-shrink-0" /><div><span className="font-semibold">Box Jumps:</span> 3 sets of 8 reps. Focus on landing softly.</div></li>
                <li className="flex gap-3"><ZapIcon className="w-5 h-5 text-indigo-500 flex-shrink-0" /><div><span className="font-semibold">Squat Jumps:</span> 3 sets of 12 reps. Explode upwards from the squat position.</div></li>
                <li className="flex gap-3"><ClipboardCheckIcon className="w-5 h-5 text-indigo-500 flex-shrink-0" /><div><span className="font-semibold">Nutrition Tip:</span> Ensure adequate protein intake (e.g., lentils, eggs) post-workout for muscle recovery.</div></li>
            </ul>
        </>
    );

     const reportContent = (
        <>
            <div className="mb-4">
                <h4 className="font-bold text-gray-800">Player Summary</h4>
                <p className="text-sm text-gray-600">Aarav Sharma demonstrates significant potential in short-distance sprinting and explosive events. His 40m dash time places him in the top percentile for his age group.</p>
            </div>
             <div className="mb-4">
                <h4 className="font-bold text-gray-800">Strengths</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                    <li>Excellent acceleration and top-end speed.</li>
                    <li>Strong core endurance, indicated by high sit-up count.</li>
                </ul>
            </div>
             <div>
                <h4 className="font-bold text-gray-800">Areas for Development</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                    <li>Vertical jump shows room for improvement, suggesting a focus on plyometrics.</li>
                    <li>Could benefit from structured coaching on running form.</li>
                </ul>
            </div>
        </>
    );

    return (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 relative animate-fade-in">
                 <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 text-2xl">&times;</button>
                <div className="flex items-center gap-3 mb-4">
                    <SparklesIcon className="w-8 h-8 text-indigo-500" />
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                </div>
                <div className="text-gray-700">
                    {type === 'plan' ? planContent : reportContent}
                </div>
                 <button onClick={onClose} className="mt-6 w-full bg-indigo-600 text-white font-bold py-2 rounded-lg">Close</button>
            </div>
        </div>
    );
}



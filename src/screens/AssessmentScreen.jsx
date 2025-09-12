import React, { useState, useEffect, useRef } from 'react';

export default function AssessmentScreen({ test, navigate }) {
    const videoRef = useRef(null);
    const [isRecording, setIsRecording] = useState(false);
    const [countdown, setCountdown] = useState(3);
    const [showCountdown, setShowCountdown] = useState(false);

    useEffect(() => {
        let timer;
        if (showCountdown && countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        } else if (showCountdown && countdown === 0) {
            setShowCountdown(false);
            setIsRecording(true);
            // Logic to start actual recording would go here
        }
        return () => clearTimeout(timer);
    }, [showCountdown, countdown]);

    const handleStartRecording = () => {
        // Mocking camera access
        setShowCountdown(true);
    };

    const handleStopRecording = () => {
        setIsRecording(false);
        // Mocking AI analysis and showing a success message before navigating
        alert("AI Analysis Complete! Score: 32 inches. Navigating back to profile.");
        navigate('profile');
    };

    return (
        <div className="h-screen flex flex-col bg-black text-white">
            <div className="p-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">{test?.name || 'Assessment'}</h2>
                <button onClick={() => navigate('playerDashboard')} className="text-2xl">&times;</button>
            </div>
            <div className="flex-grow bg-gray-800 flex items-center justify-center relative">
                {/* Mock Video Feed */}
                <div ref={videoRef} className="w-full h-full bg-gray-900 flex items-center justify-center">
                    <p className="text-gray-500">Camera Feed</p>
                </div>

                {showCountdown && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <p className="text-8xl font-bold">{countdown}</p>
                    </div>
                )}
            </div>
            <div className="p-6 flex flex-col items-center">
                {!isRecording ? (
                     <button onClick={handleStartRecording} disabled={showCountdown} className="w-20 h-20 bg-red-600 rounded-full border-4 border-white shadow-lg disabled:opacity-50"></button>
                ) : (
                    <button onClick={handleStopRecording} className="w-20 h-20 bg-red-600 rounded-2xl border-4 border-white shadow-lg animate-pulse"></button>
                )}
                <p className="mt-2">{isRecording ? "Recording..." : "Tap to Record"}</p>
            </div>
        </div>
    );
}


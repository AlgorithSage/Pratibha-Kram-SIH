import React from 'react';
import { VideoIcon } from './icons.jsx';

export default function ReelCard({ reel, isRecruiterView = false }) {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {isRecruiterView && (
                 <div className="p-3 flex items-center space-x-3">
                    <img src={reel.playerPic} alt={reel.player} className="w-10 h-10 rounded-full"/>
                    <div>
                        <p className="font-bold text-gray-800">{reel.player}</p>
                    </div>
                </div>
            )}
            <div className="h-64 bg-gray-900 flex items-center justify-center text-white">
                {/* Mock video player */}
                <VideoIcon />
            </div>
            <div className="p-3">
                <p><span className="font-semibold">{reel.player.split(' ')[0]}</span> {reel.caption}</p>
                <div className="flex text-gray-500 text-sm mt-2">
                    <span>{reel.likes} likes</span>
                    <span className="mx-2">•</span>
                    <span>{reel.comments} comments</span>
                </div>
            </div>
        </div>
    );
}


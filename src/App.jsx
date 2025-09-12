import React, { useState } from 'react';

// Import Screens
import LoginScreen from './screens/LoginScreen';
import PlayerDashboard from './screens/PlayerDashboard';
import RecruiterDashboard from './screens/RecruiterDashboard';
import ProfileScreen from './screens/ProfileScreen';
import AssessmentScreen from './screens/AssessmentScreen';

// Import Reusable Components
import BottomNav from './components/BottomNav';
import GeminiModal from './components/GeminiModal';

export default function App() {
    const [page, setPage] = useState('login'); // 'login', 'playerDashboard', 'recruiterDashboard', 'profile', 'assessment'
    const [userType, setUserType] = useState('player'); // 'player', 'recruiter'
    const [selectedTest, setSelectedTest] = useState(null);
    const [showGeminiPlan, setShowGeminiPlan] = useState(false);
    const [showGeminiReport, setShowGeminiReport] = useState(false);

    const navigateTo = (pageName) => {
        setPage(pageName);
    };

    const handleLogin = (type) => {
        setUserType(type);
        if (type === 'player') {
            navigateTo('playerDashboard');
        } else {
            navigateTo('recruiterDashboard');
        }
    };

    const handleStartTest = (test) => {
        setSelectedTest(test);
        navigateTo('assessment');
    };

    const renderPage = () => {
        switch (page) {
            case 'login':
                return <LoginScreen onLogin={handleLogin} />;
            case 'playerDashboard':
                return <PlayerDashboard navigate={navigateTo} onStartTest={handleStartTest} />;
            case 'recruiterDashboard':
                return <RecruiterDashboard navigate={navigateTo} />;
            case 'profile':
                return <ProfileScreen userType={userType} navigate={navigateTo} setShowGeminiPlan={setShowGeminiPlan} setShowGeminiReport={setShowGeminiReport} />;
            case 'assessment':
                 return <AssessmentScreen test={selectedTest} navigate={navigateTo} />;
            default:
                return <LoginScreen onLogin={handleLogin} />;
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <main className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative">
                {renderPage()}
                
                {page.includes('Dashboard') || page === 'profile' ? (
                     <BottomNav userType={userType} activePage={page} navigate={navigateTo} />
                ) : null}

                {showGeminiPlan && <GeminiModal title="Your Personalized Training Plan" onClose={() => setShowGeminiPlan(false)} type="plan" />}
                {showGeminiReport && <GeminiModal title="AI-Generated Scouting Report" onClose={() => setShowGeminiReport(false)} type="report" />}
            </main>
        </div>
    );
}


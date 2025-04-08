import React from 'react';
import UserProfile from '../components/UserProfile';
import ActivityTracker from '../components/ActivityTracker';
import TeamManager from '../components/TeamManager';
import Leaderboard from '../components/Leaderboard';
import WorkoutSuggestions from '../components/WorkoutSuggestions';

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <UserProfile />
            <ActivityTracker />
            <TeamManager />
            <Leaderboard />
            <WorkoutSuggestions />
        </div>
    );
};

export default Dashboard;
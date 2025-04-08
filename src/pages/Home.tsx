import React from 'react';
import UserProfile from '../components/UserProfile';
import ActivityTracker from '../components/ActivityTracker';
import TeamManager from '../components/TeamManager';
import Leaderboard from '../components/Leaderboard';
import WorkoutSuggestions from '../components/WorkoutSuggestions';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to OctoFit Tracker</h1>
            <UserProfile />
            <ActivityTracker />
            <TeamManager />
            <Leaderboard />
            <WorkoutSuggestions />
        </div>
    );
};

export default Home;
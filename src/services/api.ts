import axios from 'axios';

const API_BASE_URL = 'https://api.octofittracker.com';

export const getUserProfile = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user profile: ' + error.message);
    }
};

export const updateUserProfile = async (userId, profileData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/users/${userId}`, profileData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating user profile: ' + error.message);
    }
};

export const logActivity = async (activityData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/activities`, activityData);
        return response.data;
    } catch (error) {
        throw new Error('Error logging activity: ' + error.message);
    }
};

export const getTeamData = async (teamId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/teams/${teamId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching team data: ' + error.message);
    }
};

export const getLeaderboard = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/leaderboard`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching leaderboard: ' + error.message);
    }
};

export const getWorkoutSuggestions = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/workouts/suggestions/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching workout suggestions: ' + error.message);
    }
};
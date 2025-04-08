import React, { useState } from 'react';

const ActivityTracker = () => {
    const [activities, setActivities] = useState([]);
    const [activity, setActivity] = useState('');
    const [duration, setDuration] = useState('');

    const handleAddActivity = () => {
        if (activity && duration) {
            setActivities([...activities, { activity, duration }]);
            setActivity('');
            setDuration('');
        }
    };

    return (
        <div>
            <h2>Activity Tracker</h2>
            <input
                type="text"
                placeholder="Activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
            />
            <input
                type="text"
                placeholder="Duration (minutes)"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
            />
            <button onClick={handleAddActivity}>Log Activity</button>
            <h3>Logged Activities</h3>
            <ul>
                {activities.map((act, index) => (
                    <li key={index}>
                        {act.activity} - {act.duration} minutes
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityTracker;
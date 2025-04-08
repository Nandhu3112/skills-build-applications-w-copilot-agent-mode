import React, { useState } from 'react';

const TeamManager = () => {
    const [teams, setTeams] = useState([]);
    const [teamName, setTeamName] = useState('');

    const handleAddTeam = () => {
        if (teamName) {
            setTeams([...teams, { name: teamName, members: [] }]);
            setTeamName('');
        }
    };

    const handleRemoveTeam = (index) => {
        const newTeams = teams.filter((_, i) => i !== index);
        setTeams(newTeams);
    };

    return (
        <div>
            <h2>Team Manager</h2>
            <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Enter team name"
            />
            <button onClick={handleAddTeam}>Add Team</button>
            <ul>
                {teams.map((team, index) => (
                    <li key={index}>
                        {team.name}
                        <button onClick={() => handleRemoveTeam(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TeamManager;
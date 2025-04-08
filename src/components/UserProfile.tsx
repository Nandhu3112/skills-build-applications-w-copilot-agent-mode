import React, { useState } from 'react';

const UserProfile = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        role: 'student', // or 'teacher'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to update user profile data
        console.log('User profile updated:', userInfo);
    };

    return (
        <div>
            <h2>User Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={userInfo.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select
                        name="role"
                        value={userInfo.role}
                        onChange={handleChange}
                    >
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </select>
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default UserProfile;
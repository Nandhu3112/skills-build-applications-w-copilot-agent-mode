export interface UserProfile {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'teacher';
    fitnessGoals: string[];
}

export interface Activity {
    id: string;
    userId: string;
    type: string;
    duration: number; // in minutes
    date: Date;
}

export interface Team {
    id: string;
    name: string;
    members: UserProfile[];
    goals: string[];
}

export interface LeaderboardEntry {
    userId: string;
    userName: string;
    score: number; // could represent points or achievements
}

export interface WorkoutSuggestion {
    id: string;
    title: string;
    description: string;
    duration: number; // in minutes
    difficulty: 'easy' | 'medium' | 'hard';
}
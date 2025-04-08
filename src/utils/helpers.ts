export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US');
};

export const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const calculateProgressPercentage = (current: number, goal: number): number => {
    if (goal === 0) return 0;
    return Math.min((current / goal) * 100, 100);
};
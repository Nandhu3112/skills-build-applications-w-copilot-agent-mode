import { useState } from 'react';

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    role: string;
  };
}

const API_URL = 'https://your-api-url.com'; // Replace with your actual API URL

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
};

export const logout = async (): Promise<void> => {
  await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });
};

export const getCurrentUser = async (): Promise<AuthResponse | null> => {
  const response = await fetch(`${API_URL}/auth/current-user`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
};
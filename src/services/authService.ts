import apiClient from './apiClient';

export const login = async (email: string, password: string) => {
    const response = await apiClient.post('auth/login', {
        email,
        password,
    });
    return response.data;
};

export const getCurrentUser = async () => {
    const response = await apiClient.get('auth/me');
    return response.data;
};
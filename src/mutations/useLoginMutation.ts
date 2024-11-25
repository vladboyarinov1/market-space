import {useMutation} from '@tanstack/react-query';
import {AuthResponse, LoginRequest} from '@/types';
import apiClient from '@/services/apiClient';

export const useLoginMutation = () => {
    return useMutation<AuthResponse, Error, LoginRequest>({
        mutationFn: async (data: LoginRequest) => {
            const response = await apiClient.post<AuthResponse>('auth/login', data)
            return response.data;
        },
    });
};
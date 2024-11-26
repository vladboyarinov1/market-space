import apiClient from './apiClient';
import {Product} from '@/types';


export const fetchProducts = async (): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>('products');
    return response.data;
};
export const fetchProductById = async (productId: string): Promise<Product> => {
    const response = await apiClient.get<Product>(`products/${productId}`);
    return response.data;
};
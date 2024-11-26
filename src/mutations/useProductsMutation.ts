// hooks/useProductsQuery.ts
import {useQuery} from '@tanstack/react-query';

import {Product} from '@/types';
import {fetchProductById, fetchProducts} from '@/services/productsService';

export const useProductsQuery = () => {
    return useQuery<Product[], Error>({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });
};


export const useProductQuery = (productId: string) => {
    return useQuery<Product, Error>({
        queryKey: ['product', productId],
        queryFn: () => fetchProductById(productId),
        enabled: !!productId, // Запрос выполняется только если есть productId
    });
};

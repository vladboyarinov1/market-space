'use client'
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) {
                try {
                    await router.push('/auth');
                    console.log('Успешное перенаправление на страницу авторизации');
                } catch (error) {
                    console.error('Ошибка перенаправления:', error);
                }
            }
        };

        checkAuth();
    }, [router]);
    return (
        <div>
            <h1>Список продуктов 123</h1>
            {/* Остальная логика отображения товаров */}
        </div>
    );
}

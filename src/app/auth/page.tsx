'use client'
import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form'
import {LoginRequest} from '@/types';
import {useLoginMutation} from '@/mutations';
import {useRouter} from 'next/navigation';


const AuthPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginRequest>();

    const loginMutation = useLoginMutation();
    const router = useRouter();


    const onSubmit: SubmitHandler<LoginRequest> = (data) => {
        console.log(data);
        loginMutation.mutate(data, {
            onSuccess: (response) => {

                console.log('Успешная авторизация:', response);

                // Сохраните токен в localStorage или в cookie, если необходимо
                localStorage.setItem('authToken', response.token);

                // Перенаправьте пользователя на домашнюю страницу
                router.push('/');
            },
            onError: (error) => {
                console.error('Ошибка авторизации:', error.message);
            },
        });
    };


    // useEffect(() => {
    //     const checkAuth = async () => {
    //         const token = localStorage.getItem('authToken');
    //         if (token) {
    //             try {
    //                 debugger
    //                 await router.push('/');
    //             } catch (error) {
    //                 console.error('Ошибка перенаправления:', error);
    //             }
    //         }
    //     };
    //     checkAuth();
    // }, [router]);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input value="johnd" className="bg-blue-300 p-2 border border-gray-300 rounded"
                   type="text" {...register('username')} />
            <input value="m38rmF$" className="bg-blue-300 p-2 border border-gray-300 rounded"
                   type="password" {...register('password')} />
            <button
                type="submit"
                className="w-1/4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Отправить
            </button>
        </form>
    );
};

export default AuthPage;

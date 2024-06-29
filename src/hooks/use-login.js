import useSWRMutation from 'swr/mutation';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { axiosInstance } from '@/libs/http/axios-instance.js';
import { me } from '@/constants/api.js'

export const useLogin = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    return useSWRMutation(
        '/auth/signin',
        (url, { arg }) => {
            return axiosInstance().post(url, arg);
        },
        {
            onSuccess: async (data) => {
                const token = data?.accessToken?.token;

                if (token) 
                {
                    localStorage.setItem('accessToken', token);

                    try {
                        // Ensure mutate is completed before navigating
                        const response = await fetch(me, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${token}`,
                            },
                        });
                
                        const data = await response.json();
                
                        if (response.ok) 
                        {
                            localStorage.setItem('user', JSON.stringify(data?.data));
                            console.log('Login successful:', data);
                            // Handle successful login (e.g., redirect, store token, etc.)
                        } 
                        else 
                        {
                            console.error('Login failed:', data);
                            // Handle login failure (e.g., show error message)
                        }
                        navigate('/'); // Navigate to the homepage
                    } catch (error) {
                        console.error('Error during mutate or navigation:', error);
                    }
                }
            },
        },
    );
};

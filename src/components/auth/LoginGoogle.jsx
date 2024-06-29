import { useGoogleLogin } from '@react-oauth/google';

// eslint-disable-next-line react/prop-types
const LoginGoogle = ({ onLogin }) => {
    const login = useGoogleLogin({
        onSuccess: onLogin,
    });

    return (
        <button 
            onClick={() => login()}
            className="w-full h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
            <div className="relative flex items-center space-x-4 justify-center">
                <img 
                src="https://www.svgrepo.com/show/475656/google-color.svg" 
                className="absolute left-0 w-5" 
                alt="google logo" 
                />
                <span className="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                Continue with Google
                </span>
            </div>
        </button>
 
    );
};

export default LoginGoogle;
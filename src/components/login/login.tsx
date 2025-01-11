const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh] bg-gray-50">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8 text-center">
                    Welcome Back!
                </h1>
                <div className="flex flex-col gap-4">
                    <button className="py-2 sm:py-3 px-4 sm:px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                        Login
                    </button>
                    <button className="py-2 sm:py-3 px-4 sm:px-6 bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Login;


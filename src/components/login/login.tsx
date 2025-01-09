const Login = () => {
    return (
        <div className="flex items-center justify-center h-[60vh] rounded-lg bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-[90%] md:w-[50%] max-w-md">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Welcome Back!</h1>
                <div className="flex flex-col gap-6">
                    <button className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
                        Login
                    </button>
                    <button className="py-3 px-6 bg-gray-100 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;

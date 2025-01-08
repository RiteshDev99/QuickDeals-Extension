const Login = () => {
    return (
        <div className="flex items-center justify-center h-[60vh] w-[50vw] bg-gradient-to-r from-blue-500 shadow-2xl rounded-lg via-purple-500 to-pink-500">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
                <h1 className="text-2xl font-bold text-white mb-6">Welcome</h1>
                <div className="flex flex-col gap-4">
                    <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">
                        Login
                    </button>
                    <button className="py-2 px-4 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600 transition">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;

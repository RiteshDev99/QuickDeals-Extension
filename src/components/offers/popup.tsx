
import { useState } from "react";

function PopUp() {
    const [openToggle, setOpenToggle] = useState(false);

    const ToggleEvent = () => {
        setOpenToggle(!openToggle);
    };

    return (
        <div className="relative">
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
                <button
                    onClick={ToggleEvent}
                    className="px-10 py-3 bg-green-400 text-white rounded-lg text-lg font-semibold shadow-lg transition duration-300 hover:bg-green-500 focus:outline-none"
                >
                    Open
                </button>
            </div>
            {openToggle && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] bg-white rounded-lg p-6 shadow-2xl transform transition-all duration-300 ease-in-out">
                        <h1 className="text-xl font-bold text-center mb-4 text-gray-800">
                            Your Offer{" "}
                        </h1>
                        <p className="text-sm text-red-700 mb-6 leading-relaxed ">
                            Oops, not this time! But don’t worry the best offers are still on
                            the way. Stay tuned for more exciting opportunities
                        </p>
                        <div className="flex justify-center">
                            <button
                                onClick={ToggleEvent}
                                className="px-6 py-2 bg-red-500 text-white rounded-lg transition duration-300 hover:bg-red-600 focus:outline-none"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopUp;

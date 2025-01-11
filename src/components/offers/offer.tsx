import { useState } from "react";
import Login from "../login/login.tsx";
import {closePopup, CreteBackgroundTab} from "../../content/content.tsx";


const Offer = () => {
    const [openToggle, setOpenToggle] = useState(false);

    const ToggleEvent = () => {
        setOpenToggle(!openToggle);
    };

    return (
        <div className="flex justify-center items-center w-full h-full py-6 px-4">
            <div
                className="p-5 bg-white shadow-lg rounded-lg w-full sm:w-[90%] md:w-[60%] lg:w-[50%] xl:w-[35vw] max-w-[600px] min-w-[300px] h-auto sm:h-[40vh] md:h-[32vh] border border-gray-300 mx-auto flex flex-col items-center relative"
            >
                <button
                    onClick={closePopup}
                    className="absolute xl:top-3 xl:right-5 top-0 right-1 rounded-full hover:bg-gray-300 hover:text-gray-800 focus:outline-none"
                    aria-label="Close"
                >
                    <img
                        className="h-6 w-6 text-gray-800"
                        src="https://static.thenounproject.com/png/953232-200.png"
                        alt="close"
                    />
                </button>

                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-gray-800">
                    ✨ Exclusive Offers for You! ✨
                </h2>

                <ul className="list-none space-y-2 flex-grow flex flex-col items-center">
                    <li className="flex items-center space-x-4 text-center">
                        <span className="text-green-600 text-2xl">✔</span>
                        <span className="text-gray-700">
                            <span className="font-bold text-gray-800">SAVE10</span>: Get 10% off on your next purchase!
                        </span>
                    </li>
                    <li className="flex items-center space-x-4 text-center">
                        <span className="text-blue-600 text-2xl">✔</span>
                        <span className="text-gray-700">
                            <span className="font-bold text-gray-800">FREESHIP</span>: Free shipping on orders over $50!
                        </span>
                    </li>
                    <li className="flex items-center space-x-4 text-center">
                        <span className="text-yellow-500 text-2xl">✔</span>
                        <span className="text-gray-700">
                            <span className="font-bold text-gray-800">WELCOME</span>: Get a free gift on your first order!
                        </span>
                    </li>
                </ul>

                <div className="flex justify-center space-x-4 mt-3">
                    <button
                        onClick={CreteBackgroundTab}
                        className="px-7 py-2 bg-[#cc4d08] text-white text-lg rounded-md shadow-md transform transition-transform duration-300 hover:scale-105"
                    >
                        Start using QuickDeals
                    </button>
                </div>
            </div>

            {openToggle && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[55vw] rounded-lg p-6 transform transition-all duration-300 ease-in-out">
                        <Login />
                        <div className="flex justify-center">
                            <button
                                onClick={ToggleEvent}
                                className="px-6 py-2 bg-gray-200 mt-5 text-gray-800 rounded-lg border border-gray-300 shadow-lg transform transition duration-300 hover:bg-gray-300 focus:outline-none"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Offer;

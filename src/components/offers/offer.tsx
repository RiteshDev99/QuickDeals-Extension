import {useState} from "react";
import Login from "../login/login.tsx";

const  Offer = () => {
    const [openToggle, setOpenToggle] = useState(false);

    const ToggleEvent = () => {
        setOpenToggle(!openToggle);
    };



    return (
        <div className="flex justify-center items-center w-full h-full py-6 px-4">
            <div
                className="p-6 bg-white shadow-md rounded-md w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[40%] max-w-[500px] min-w-[300px] min-h-[300px]">
                <h2 className="text-lg font-semibold mb-4 text-center">
                    Exclusive Offers for You!
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <span className="font-bold">SAVE10</span>: Get 10% off on your next
                        purchase!
                    </li>
                    <li>
                        <span className="font-bold">FREESHIP</span>: Free shipping on orders
                        over $50!
                    </li>
                    <li>
                        <span className="font-bold">WELCOME</span>: Get a free gift on your
                        first order!
                    </li>
                    <ul className={"space-x-7 flex justify-center py-6"}>
                        <button
                            onClick={ToggleEvent}
                            className={"px-7 py-2 bg-green-500 hover:bg-green-800 text-white text-lg  rounded-lg"}>
                            Open</button>
                        <button className={"px-7 py-2 bg-red-500 hover:bg-red-800 text-white text-lg rounded-lg "}>Close</button>
                    </ul>
                </ul>
            </div>
            {openToggle && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] bg-white rounded-lg p-6 shadow-2xl transform transition-all duration-300 ease-in-out">
                       <Login/>
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

export default Offer;

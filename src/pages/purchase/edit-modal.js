import {
    updateDoc,
    doc
} from "firebase/firestore";
import { db } from "../../firebase.config";
import { useState } from "react";
const EditModal = (props) => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const inputChangeHandler = (input, value) => {
        props.setCollectAllProducts((prevState) => {
            return {
                ...prevState,
                [input]: value,
            };
        });
    };

    //===== Update Handler ==========//
    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const updateData = doc(db, "purchase", props.userId);
        await updateDoc(updateData, {
            productName: props.collectAllProducts.productName,
            price: props.collectAllProducts.price,
            manufacturer: props.collectAllProducts.manufacturer,
            condition: props.collectAllProducts.condition,
            type: props.collectAllProducts.type,
            quantity: props.collectAllProducts.quantity,
            date: props.collectAllProducts.date
        }); 

        setIsLoading(false);
        setSuccess(true);
        props.modal.hide();
        props.getPurchasedItems();
        setTimeout(() => {
            setSuccess(false);
        }, 4000)
    };
    // props.successNotif(success);

    //========== refresh the roles ====//
    const handleRefresh = () => {
        props.getPurchasedItems();
        props.modal.hide();
    }

    return (
        <div>
            <div
                id="static-modal"
                data-modal-backdrop="static"
                tabIndex="-1"
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between md:p-3 border-b border-b-gray-100 rounded-t">
                            <div>
                                <p className="font-semibold text-xl font-[Roboto]">Edit Product</p>
                            </div>
                            <div className="flex justify-end items-center">
                                {
                                    isLoading ? <span>
                                        <svg aria-hidden="true" role="status" className="inline w-6 h-6 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#103d15" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                        </svg>
                                    </span> : null
                                }

                                <button
                                    onClick={handleRefresh}
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="static-modal"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                        </div>
                        {/* Modal body */}
                        {
                            error ?
                                <div className="px-4 py-2.5 mb-1 text-sm text-red-800 bg-red-50" role="alert">
                                    Input Field Is Empty!
                                </div>
                                :
                                null
                        }

                        <div className="px-3 pt-3 pb-4">
                            <form onSubmit={handleUpdate}>
                                <div className="w-full grid grid-cols-2 gap-4">
                                    <div className="">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="title"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"

                                            >
                                                Product Name:
                                            </label>
                                            <input
                                                type="text"
                                                id="title"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5 "
                                                value={props.collectAllProducts.productName}
                                                onChange={(e) => inputChangeHandler('productName', e.target.value)}
                                                autoComplete
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="title"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Price:
                                            </label>
                                            <input
                                                type="text"
                                                id="title"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5 "
                                                value={props.collectAllProducts.price}
                                                onChange={(e) => inputChangeHandler('price', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="title"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Manufacturer:
                                            </label>
                                            <input
                                                type="text"
                                                id="title"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5 "
                                                value={props.collectAllProducts.manufacturer}
                                                onChange={(e) => inputChangeHandler('manufacturer', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                for="status"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Condition:
                                            </label>
                                            <select
                                                id="status"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                value={props.collectAllProducts.condition}
                                                onChange={(e) => inputChangeHandler('condition', e.target.value)}
                                                required
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="Closed">Closed</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="mb-3">
                                            <label
                                                for="status"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Type:
                                            </label>
                                            <select
                                                id="status"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                value={props.collectAllProducts.type}
                                                onChange={(e) => inputChangeHandler('type', e.target.value)}
                                                required
                                            >
                                                <option value="Product">Product</option>
                                                <option value="Equipment">Equipment</option>
                                                <option value="Fertilizer">Fertilizer</option>
                                                <option value="Closed">Seed</option>
                                                <option value="Closed">Chemical</option>
                                                <option value="Closed">General</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label
                                                htmlFor="title"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Quantity:
                                            </label>
                                            <input
                                                type="number"
                                                id="title"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5 "
                                                value={props.collectAllProducts.quantity}
                                                onChange={(e) => inputChangeHandler('quantity', e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label
                                                for="firstname"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Date of Purchase:
                                            </label>
                                            <input
                                                type="date"
                                                id=""
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                                value={props.collectAllProducts.date}
                                                onChange={(e) => inputChangeHandler('date', e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button
                                        type="submit"
                                        className=" w-[150px] h-[40px] relative text-sm bg-[#103d15] hover:bg-[#ff9c40] text-white rounded-lg ease-in-out duration-150  focus:ring-0 focus:outline-none"
                                    >
                                        {
                                            isLoading &&
                                            <span className="">
                                                <svg aria-hidden="true" role="status" className="inline w-6 h-6 me-3 text-white  animate-[spin_0.4s_linear_infinite] " viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="transparent" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        }
                                        Submit
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;

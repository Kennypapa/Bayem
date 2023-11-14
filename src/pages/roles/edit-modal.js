import {
    updateDoc,
    doc
} from "firebase/firestore";
import { db } from "../../firebase.config";
const EditModal = (props) => {
    //===== Update Handler ==========//
    const handleUpdate = async (e) => {
        e.preventDefault();
        const updateData = doc(db, "roles", props.userId);
        await updateDoc(updateData, { title: props.editTitle })
    };
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
                                <p className="font-semibold text-xl font-[Roboto]">Edit Role</p>
                            </div>
                            <button
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
                        {/* Modal body */}
                        <div className="p-4 md:p-5 space-y-4">
                            <form onSubmit={handleUpdate}>
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Title:
                                    </label>
                                    <input
                                        value={props.editTitle}
                                        onChange={(e) => props.setEditTitle(e.target.value)}
                                        type="title"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div className="flex items-center rounded-b">
                                    <button
                                        type="submit"
                                        className="text-white bg-[#103d15] hover:bg-[#ff9c40] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
                                    >
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
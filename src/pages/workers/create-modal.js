import { addDoc, collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../firebase.config";

const CreateModal = (props) => {
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        gender: "",
        role: ""
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [roles, setRoles] = useState([]);
    const [allRoles, setAllRoles] = useState('');

    useEffect(() => {
        getRoles();
    }, []);
    //=== referencing to particular collection in firestore
    const usersCollectionRef = collection(db, "roles");

    //=== referencing to particular collection in firestore
    const workersCollectionRef = collection(db, "workers");

    const inputChangeHandler = (input, value) => {
        setUserData((prevState) => {
            return {
                ...prevState,
                [input]: value,
            };
        });
    }; 

    //=========== roles Handler ======//
     const rolesHandler = (roles) => {
        setAllRoles(roles);
     }

    // ========submitHandler =======//
    const submitHandler = async (e) => {
        e.preventDefault();
        if (userData.length === 0) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000)
            return;
        }
        setIsLoading(true);

        await addDoc(workersCollectionRef, {
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
            gender: userData.gender,
            role: userData.role,
        });
        setIsLoading(false);
        setSuccess(true);
        props.showModal.hide();
        props.getWorkers();
        setTimeout(() => {
            setSuccess(false);
        }, 3000)
        setUserData("");
    }

    //=======Get Roles Handler====//
    const getRoles = async () => {
        const data = await getDocs(usersCollectionRef);
        setRoles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    };
    props.successNotif(success);
    //========== refresh the roles ====//
    const handleRefresh = () => {
        props.getWorkers();
        props.showModal.hide();
    }
    return (
        <div id="default-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    {/* Modal header */}
                    <div className="flex items-center justify-between md:p-3 border-b border-b-gray-100 rounded-t">
                        <div>
                            <p className="font-semibold text-xl font-[Roboto]">
                                Create New Worker
                            </p>
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

                            <button onClick={handleRefresh} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
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
                        <form onSubmit={submitHandler}>
                            <div className="mb-6">
                                <label
                                    for="firstname"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Firstname:
                                </label>
                                <input
                                    value={userData['firstname']}
                                    onChange={(e) =>
                                        inputChangeHandler("firstname", e.target.value)
                                    }
                                    type="text"
                                    id="firstname"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    for="lastname"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Lastname:
                                </label>
                                <input
                                    type="text"
                                    value={userData['lastname']}
                                    onChange={(e) =>
                                        inputChangeHandler("lastname", e.target.value)
                                    }
                                    id="lastname"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={userData['email']}
                                    onChange={(e) =>
                                        inputChangeHandler("email", e.target.value)
                                    }
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <div className="mb-6 mr-4 w-full">
                                    <label
                                        for="gender"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Gender:
                                    </label>
                                    <select
                                        value={userData['gender']}
                                        onChange={(e) => inputChangeHandler("gender", e.target.value)}
                                        id="gender"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                    >
                                        <option>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="mb-6 w-full">
                                    <label
                                        for="gender"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Role Title:
                                    </label>
                                    <select
                                        id="gender"
                                        value={userData['roles']}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                        onChange={(e) => inputChangeHandler("role", e.target.value)}
                                    >
                                        <option className="text-gray-500" selected>Select Role</option>
                                        {
                                            roles.map((role) => {
                                                return (
                                                    <option className="text-gray-500">{role.title}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className=" w-[150px] h-[40px] relative text-sm bg-[#103d15] hover:bg-[#ff9c40] text-white rounded-lg ease-in-out duration-150  focus:ring-0 focus:outline-none"
                                >
                                    {
                                        isLoading && <span className=" absolute left-4">
                                            <svg aria-hidden="true" className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
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
    )
}

export default CreateModal;
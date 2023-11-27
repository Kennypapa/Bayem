import { Modal } from "flowbite";
import { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase.config";
import EditModal from './edit-modal';
import DeleteModal from "./delete-modal";
import DataTable from "react-data-table-component";
const CreateTask = () => {

    const [modal, setShowModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [radioChecked, setRadioChecked] = useState('');
    const [taskFreqquency, setTaskFrequency] = useState(<></>);
    const [allWorkers, setAllWorkers] = useState([]);
    const [title, setTitle] = useState("");
    const [id, setId] = useState("");
    const [deleteId, setDeleteId] = useState("");
    const [showSuccessNotif, setShowSuccessNotif] = useState("");
    const [deleteNotif, setDeleteNotif] = useState("");

    useEffect(() => {
        switch (radioChecked) {
            case 'days':
                setTaskFrequency(
                    <div>
                        day
                    </div>)
                break;
            case 'weeks':
                setTaskFrequency(<div>
                    <label class="cursor-pointer mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Every week:</label>
                    <Multiselect
                        isObject={false}
                        options={options}
                    />
                </div>)
                break;
            case 'months':
                setTaskFrequency(<div>
                    months
                </div>)
                break;
            default: setTaskFrequency(<></>)
        }
        setShowModal(
            new Modal(document.querySelector("#static-modal"), {
                backdrop: "dynamic",
                backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
                closable: true,
            })
        )
        setShowModalDelete(
            new Modal(document.querySelector("#popup-modal"), {
                backdrop: "dynamic",
                backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
                closable: true,
            })
        )
        getTasks();
    }, [radioChecked])

    const [options, setOptions] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
    //=============== fetch all workers ===========//

    //=== Referencing to particular collection in firestore ==//
    const usersCollectionRef = collection(db, "tasks");

    const getTasks = async () => {
        const data = await getDocs(usersCollectionRef);
        setAllWorkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    //======== successHandler ====//
    const successNotif = (success) => {
        setShowSuccessNotif(success);
    }

    //=========Edit Handler ======//
    const handleEdit = (id, title) => {
        setTitle(title);
        setId(id);
        modal.show();
    }
    //===== DeleteHandler ====//    
    const handleDelete = async (id) => {
        setDeleteId(id)
        showModalDelete.show();
    }
    //=========== delete Notif ======//
    const handleDeleteNotif = (success) => {
        setDeleteNotif(success)
    }
    //==============Table Columns && Rows ============//
    const columns = [
        {
            name: "Tasks",
            selector: (row) => row.task
        },

        {
            name: "Actions",
            cell: (row) => (
                <div className="inline-flex rounded-md py-2.5" role="group">
                    <button
                        onClick={() => handleEdit(row.id, row.task)}
                        type="button" className="px-3 py-2  font-medium text-gray-900 border border-gray-100 rounded-s-lg hover:bg-[#d3d3d324] focus:z-10 focus:ring-0 focus:ring-transparent">
                        <i className="fa-solid fa-pen-to-square text-[#0e90c6] cursor-pointer text-[15px]"
                        ></i>
                    </button>

                    <button onClick={() => handleDelete(row.id)} data-modal-target="popup-modal"
                        data-modal-toggle="popup-modal" type="button" className="px-3 py-2  font-medium text-gray-900 border !border-l-0 border-y-gray-100 rounded-e-lg hover:bg-[#d3d3d324] focus:z-10 focus:ring-0">
                        <i className="fa-solid fa-trash text-[#c60e0e] text-[15px]"></i>
                    </button>
                </div>
            )
        }
    ]

    const tableHeaderstyle = {
        headCells: {
            style: {
                fontWeight: "bold",
                fontSize: "16px",
            },
        }
    }
    return (<div className="e_pages">
        <div className="bg-white rounded-lg">
            {/* ========== display 1 ============*/}
            <div className="w-full px-3 grid grid-cols-2 hidden">
                <div className="border-r border-r-[#d3d3d340] pr-3 pt-3">
                    <p className="text-2xl mb-3">
                        Create Task
                    </p>
                    <div >
                        <form>
                            <div className="mb-6">
                                <label
                                    for="firstname"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Title:
                                </label>
                                <input
                                    type="text"
                                    id="firstname"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description:</label>
                                <textarea id="message" rows="2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5" placeholder="Write your thoughts here..."></textarea>
                            </div>
                            <div class="flex items-start mb-4">
                                <div class="flex items-center h-5">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => setIsChecked(!isChecked)}
                                        value=""
                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#103d15]"
                                        required />
                                </div>
                                <label for="remember" class=" cursor-pointer text-sm ml-2 font-medium text-gray-900 dark:text-gray-300">Re-occur </label>
                            </div>
                            {
                                isChecked ?
                                    <div className="mb-6">
                                        <div className="flex justify-start items-center mb-3">
                                            <div className="h-[2px] w-[50px] rounded-lg bg-[#103d15] mr-2"></div>
                                            <p className="text-sm  font-medium text-gray-900 dark:text-gray-300">
                                                How often can you commit to the task?
                                            </p>
                                        </div>
                                        {/* <div className="flex mb-2">
                                            <div class="flex items-center mr-3">
                                                <label for="link-checkbox" class="cursor-pointer mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">Days</label>
                                                <input id="link-checkbox"
                                                    type="radio"
                                                    value=""
                                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#103d15]"
                                                />
                                            </div>
                                            <div class="flex items-center mr-3">
                                                <label for="link-checkbox" class="cursor-pointer mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">Weeks</label>
                                                <input id="link-checkbox"
                                                    type="radio"
                                                    value=""
                                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#103d15]"
                                                />
                                            </div>
                                            <div class="flex items-center mr-3">
                                                <label for="link-checkbox" class="cursor-pointer mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">Months</label>
                                                <input id="link-checkbox"
                                                    type="radio"
                                                    value=""
                                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#103d15]"
                                                />
                                            </div>
                                        </div> */}

                                        <div>
                                            <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                                    <div class="flex items-center ps-3">
                                                        <input
                                                            id="horizontal-list-radio-license"
                                                            onChange={(e) => setRadioChecked(e.target.value)}
                                                            type="radio"
                                                            value={'days'}
                                                            name="list-radio"
                                                            class="w-4 h-4 text-[#103d15] bg-gray-100 border-gray-300 focus:ring-[#103d15]" />
                                                        <label for="horizontal-list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Days</label>
                                                    </div>
                                                </li>
                                                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                                    <div class="flex items-center ps-3">
                                                        <input
                                                            id="horizontal-list-radio-id"
                                                            onChange={(e) => setRadioChecked(e.target.value)}
                                                            type="radio"
                                                            value={'weeks'}
                                                            name="list-radio"
                                                            class="w-4 h-4 text-[#103d15] bg-gray-100 border-gray-300 focus:ring-[#103d15]" />
                                                        <label for="horizontal-list-radio-id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Weeks</label>
                                                    </div>
                                                </li>
                                                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                                    <div class="flex items-center ps-3">
                                                        <input
                                                            id="horizontal-list-radio-military"
                                                            onChange={(e) => setRadioChecked(e.target.value)}
                                                            type="radio"
                                                            value={'months'} name="list-radio"
                                                            class="w-4 h-4 text-[#103d15] bg-gray-100 border-gray-300 focus:ring-[#103d15]" />
                                                        <label
                                                            for="horizontal-list-radio-military"
                                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        >Months
                                                        </label>
                                                    </div>
                                                </li>

                                            </ul>
                                            {
                                                taskFreqquency
                                            }
                                        </div>



                                    </div>

                                    :

                                    <div className="mb-6">
                                        <label
                                            for="firstname"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Pick a Date:
                                        </label>
                                        <input
                                            type="date"
                                            id="firstname"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                            required
                                        />
                                    </div>
                            }
                            <div>
                                <button
                                    type="submit"
                                    className=" w-[150px] h-[40px] relative text-sm bg-[#103d15] hover:bg-[#ff9c40] text-white rounded-lg ease-in-out duration-150  focus:ring-0 focus:outline-none"
                                >

                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    <div className=" w-[90px] h-[90px] mx-auto border rounded-full">

                    </div>
                    <div className="pl-6 pt-6">
                        <ul >
                            <li>
                                <p>
                                    Firstname:
                                </p>
                            </li>
                            <li>
                                <p>
                                    Lastname:
                                </p>
                            </li>
                            <li>
                                <p>
                                    Email:
                                </p>
                            </li>
                            <li>
                                <p>
                                    Gender:
                                </p>
                            </li>
                            <li>
                                <p>
                                    Role:
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ========== display 1 =============*/}

            <div className="pt-4">
                <p className="text-2xl font-[400] pl-4">
                    Available Tasks
                    <i class="fa-solid fa-person-digging text-2xl text-[#ff9c40] pl-2"></i>
                </p>
                <DataTable
                    columns={columns}
                    fixedHeader
                    isSortable
                    data={allWorkers}
                    customStyles={tableHeaderstyle}
                    pagination
                    subHeader
                    subHeaderComponent={
                        <div className="w-full flex justify-between items-center">
                            <input
                                type="text"
                                id="search"
                                placeholder="Search..."
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                            />
                            <button type="button" class="p-2.5 ms-2 text-sm bg-[#103d15] hover:bg-[#ff9c40] text-white rounded-lg ease-in-out duration-150  focus:ring-0 focus:outline-none">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                            <button type="button" class="w-9 h-9 ms-2 text-sm bg-[#103d15] hover:bg-[#ff9c40]  text-white rounded-lg ease-in-out duration-150  focus:ring-0 focus:outline-none">
                                <i class="fa-solid fa-rotate-right"></i>
                            </button>
                        </div>
                    }
                />
            </div>
        </div>

        <EditModal successNotif={successNotif} modal={modal} editTitle={title} userId={id} setEditTitle={setTitle} getTasks={getTasks} />
        <DeleteModal deleteId={deleteId} showDeleteNotif={handleDeleteNotif} getTasks={getTasks} hideDeleteModal={showModalDelete} />
        {
            showSuccessNotif && (
                <div className="fixed bottom-8 z-40 right-10 px-4 h-[55px] mb-1 text-sm text-green-800 bg-green-200 w-[300px] flex justify-start items-center" role="alert">
                    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="font-medium pl-2"> Role Edited  Successfully!</span>
                </div>
            )
        }
    </div>
    );
}
export default CreateTask;
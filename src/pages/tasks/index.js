import { Modal } from "flowbite";
import { useState, useEffect, useRef } from "react";
import Multiselect from "multiselect-react-dropdown";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import DeleteModal from "./delete-modal";
import DataTable from "react-data-table-component";
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format, set } from 'date-fns';
import EditTask from './edit-task';
import ViewModal from './view-modal';
import { Editor } from '@tinymce/tinymce-react';

const CreateTask = (props) => {
    const [modal, setShowModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [radioChecked, setRadioChecked] = useState('');
    const [taskFreqquency, setTaskFrequency] = useState(<></>);
    const [allWorkers, setAllWorkers] = useState([]);
    const [collectAllTasks, setCollectAllTasks] = useState('');
    const [id, setId] = useState("");
    const [deleteId, setDeleteId] = useState("");
    const [showSuccessNotif, setShowSuccessNotif] = useState("");
    const [showCreateNotif, setShowCreateNotif] = useState("");
    const [deleteNotif, setDeleteNotif] = useState("");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showCreateTask, setShowCreateTask] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showEditTask, setShowEditTask] = useState(false);
    const [success, setSuccess] = useState(false);
    const [holdAllTasks, setHoldAllTasks] = useState('');

    // const [listWorkers, setListWorkers] = useState([]);
    const [listWorkers, setListWorkers] = useState([
        { id: 1, firstname: 'Option 1', lastname: 'Option 2' }
    ]);

    //======= Map through the data to create initial options ===//
    const initialOptions = listWorkers.map(item => ({
        value: item.id,
        label: `${item.firstname} ${item.lastname}`,
    }));
    const [options, setOptions] = useState(initialOptions);
    const [allTaskDetails, setAllTasksDetails] = useState({
        title: "",
        description: '',
        status: "",
        date: "",
        listWorkers: []
    });

    const [date, setDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });
    const [editorContent, setEditorContent] = useState('');
    const handleEditorChange = (content, editor) => {
        // Update the state with the new content
        const sanitizedContent = content.replace(/<\/?p>/g, '');
        setEditorContent(sanitizedContent);
        setAllTasksDetails(prevState => ({
            ...prevState,
            description: sanitizedContent
        }));
    };

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    //=== Referencing to particular collection in firestore ==//
    const usersCollectionRef = collection(db, "tasks");

    //=== Referencing to particular collection in firestore ==//
    const workersCollectionRef = collection(db, "workers");

    const handleDateChange = (ranges) => {
        setDate(ranges.selection);
        setAllTasksDetails(prevState => ({
            ...prevState,
            monthDays: ranges.selection
        }));
    }

    //=========InputchangeHandler ==============//
    const inputChangeHandler = (input, value) => {
        setAllTasksDetails((prevState) => {
            return {
                ...prevState,
                [input]: value
            }
        });
    }

    useEffect(() => {

        setShowModalDelete(
            new Modal(document.querySelector("#popup-modal"), {
                backdrop: "dynamic",
                backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
                closable: true,
            })
        )

        setShowModal(
            new Modal(document.querySelector("#static-modal"), {
                backdrop: "dynamic",
                backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
                closable: true,
            })
        )
        getTasks();
        getWorkers();
    }, [radioChecked, date]);

    //=============== fetch all workers ===========//
    const handleChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
        setAllTasksDetails(prevState => ({
            ...prevState,
            listWorkers: { ...allTaskDetails.listWorkers, selectedOption }
        }))
    };

    // ===========SubmitTaskHandler ==========//
    const submitTaskHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await addDoc(usersCollectionRef, {
            title: allTaskDetails.title,
            date: allTaskDetails.date,
            listWorkers: allTaskDetails.listWorkers,
            status: allTaskDetails.status,
            description: allTaskDetails.description
        });
        setSuccess(true);
        setShowCreateTask(false);
        getTasks();
        setTimeout(() => {
            setSuccess(false);
        }, 4000);
        setIsLoading(false);
    }

    //========= getTasks Handler ==//
    const getTasks = async () => {
        const data = await getDocs(usersCollectionRef);
        setAllWorkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    //=======getWorkers Handler ====//
    const getWorkers = async () => {
        const data = await getDocs(workersCollectionRef);
        setListWorkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    //======== successHandler ====//
    const successNotif = (editSuccess) => {
        setShowSuccessNotif(editSuccess);
    }

    //======== successHandler ====//
    const createNotif = (success) => {
        setShowCreateNotif(success);
    }

    //=========Edit Handler ======//
    const handleEdit = (id, allTasks) => {
        setShowEditTask(true);
        setCollectAllTasks(allTasks);
        setId(id);
    }
   console.log(collectAllTasks)
    //========CloseEdit Handler =======//
    const closeEditHandler = () => {
        setShowEditTask(false);
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

    //================ Handle Toggler ==========//
    const toggleCreateTask = () => {
        setShowCreateTask(true);
        console.log("show");
    }

    const hideCreateTask = () => {
        setShowCreateTask(false);
    }

    //======= showAllTask hndler ===========//
    const handleAllTask = (id, tasks) => {
        setHoldAllTasks(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        modal.show();
        setId(id);
    }

    //==============Table Columns && Rows ============//
    const columns = [
        {
            name: "Workers",
            selector: (row) => <div>
                <ul className=" list-disc flex">
                {
                    listWorkers.map((week) => {
                        return (
                            <li className="flex">
                                <p className="mr-2"> {week.firstname} </p>
                                <p> {week.lastname},</p>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        },
        {
            name: "Date",
            selector: (row) => row.date
        },
        {
            name: "Title of Work",
            selector: (row) => row.title
        },
        {
            name: "Status",
            selector: (row) => <div className="bg-green-100 text-green-800 text-xs font-[600] me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">{row.status}</div>
        },
        {
            name: "Description",
            selector: (row) => row.description
        },

        {
            name: "Actions",
            cell: (row) => (
                <div className="inline-flex rounded-md py-2.5" role="group">
                    <button
                        onClick={() => handleEdit(row.id, row)}
                        type="button" className="px-3 py-2  font-medium text-gray-900 border border-gray-100 rounded-s-lg hover:bg-[#d3d3d324] focus:z-10 focus:ring-0 focus:ring-transparent">
                        <i className="fa-solid fa-pen-to-square text-[#ff9c40] cursor-pointer text-[15px]"
                        ></i>
                    </button>
                    <button
                        onClick={() => handleAllTask(row.id, row)}
                        type="button" className="px-3 py-2  font-medium text-gray-900 border-r border-y border-gray-200 hover:bg-[#d3d3d324] focus:z-10 focus:ring-0 focus:ring-transparent">
                        <i class="fa-solid fa-eye text-[#008000] cursor-pointer text-[15px]"></i>
                    </button>

                    <button onClick={() => handleDelete(row.id)} data-modal-target="popup-modal"
                        data-modal-toggle="popup-modal" type="button" className="px-3 py-2  font-medium text-gray-900 border !border-l-0 border-y-gray-100 rounded-e-lg hover:bg-[#d3d3d324] focus:z-10 focus:ring-0">
                        <i className="fa-solid fa-trash text-[#ff0000] text-[15px]"></i>
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

    return (
        <div className="e_pages">
            <div className="bg-white rounded-lg relative">

                {
                    showCreateTask ?
                        <div className="w-full px-3 pb-8">
                            <div className=" pr-3 pt-3">
                                <div className="flex justify-between items-center mb-3">
                                    <p className="text-2xl">
                                        Create Task
                                    </p>
                                    <div>
                                        <button
                                            onClick={hideCreateTask}
                                            className=" hover:font-bold ease-in-out duration-100">
                                            <i class="fa-solid fa-arrow-left-long"></i>
                                            <span className=" pl-2">
                                                Go Back
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <form onSubmit={submitTaskHandler}>
                                        <div className="grid grid-cols-2 gap-6">
                                            <div>
                                                <div className="mb-4">
                                                    <label
                                                        for="firstname"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Title of Work:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="task"
                                                        onChange={(e) => inputChangeHandler('title', e.target.value)}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                                        required
                                                    />
                                                </div>


                                                <div className="mb-4">
                                                    <label for="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task (Status)</label>
                                                    <select
                                                        id="status"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        onChange={(e) => inputChangeHandler("status", e.target.value)}
                                                    >
                                                        <option value=""></option>
                                                        <option value="Pending">Pending</option>
                                                        <option value="Closed">Closed</option>
                                                    </select>
                                                </div>


                                                <div className="mb-4">
                                                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description :</label>
                                                    <textarea
                                                        id="message"
                                                        rows="2"
                                                        onChange={(e) => inputChangeHandler('description', e.target.value)}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 min-h-[150px] text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5" placeholder="Write your thoughts here..." required ></textarea>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="mb-4">
                                                    <label
                                                        for="firstname"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Date:
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id=""
                                                        onChange={(e) => inputChangeHandler('date', e.target.value)}
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                                    />
                                                </div>

                                                <div className="mb-4">
                                                    <label class="cursor-pointer mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Select Workers (Task):</label>
                                                    <Multiselect
                                                        isObject={true}
                                                        options={initialOptions}
                                                        selectedValues={selectedOptions}
                                                        onSelect={handleChange}
                                                        onRemove={handleChange}
                                                        displayValue="label"
                                                        required
                                                    />


                                                </div>
                                            </div>
                                        </div>

                                        <div>
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
                        :
                        <div className="block">
                            <div className="pt-4">
                                <div className="w-full flex justify-between items-center px-3">
                                    <p className="text-2xl font-[400]">
                                        Tasks
                                        <i class="fa-solid fa-table-list text-2xl text-[#ff9c40] pl-2"></i>
                                    </p>
                                    <div>
                                        <button
                                            onClick={toggleCreateTask}
                                            className="bg-[#103d15] hover:bg-[#ff9c40] text-white rounded-lg ease-in-out duration-150 text-sm w-[180px] h-[40px]">
                                            Create New Task
                                            <i className="fa-solid pl-2 fa-circle-plus"></i>
                                        </button>
                                    </div>
                                </div>

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
                }


                {/* ========= Edit Tasks ========= */}
                {
                    showEditTask ?
                        <EditTask successNotif={successNotif} getTasks={getTasks} hideEditTask={closeEditHandler} collectAllTask={collectAllTasks} taskId={id} setCollectAllTasks={setCollectAllTasks} hideCreateTask={hideCreateTask} />
                        :
                        null
                }
            </div>

            <DeleteModal deleteId={deleteId} showDeleteNotif={handleDeleteNotif} getTasks={getTasks} hideDeleteModal={showModalDelete} />
            <ViewModal holdAllTasks={holdAllTasks} />
            {
                showSuccessNotif && (
                    <div className="fixed bottom-8 z-40 right-10 px-4 h-[55px] mb-1 text-sm text-green-800 bg-green-200 w-[300px] flex justify-start items-center" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="font-medium pl-2">Task Edited Successfully!</span>
                    </div>
                )
            }
            {
                success && (
                    <div className="fixed bottom-8 z-40 right-10 px-4 h-[55px] mb-1 text-sm text-green-800 bg-green-200 w-[300px] flex justify-start items-center" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="font-medium pl-2">Task Created Successfully!</span>
                    </div>
                )
            }
        </div>
    );
}
export default CreateTask;
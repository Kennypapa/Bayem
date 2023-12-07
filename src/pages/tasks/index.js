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
    const [showAllTask, setShowAllTasks] = useState(false);

    const [allTaskDetails, setAllTasksDetails] = useState({
        task: "",
        description: "",
        aDayDate: "",
        daysDate: '',
        weekDays: [],
        monthDays: {},
    });

    const [date, setDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    //=== Referencing to particular collection in firestore ==//
    const usersCollectionRef = collection(db, "tasks");

    const handleDateChange = (ranges) => {
        setDate(ranges.selection);
        setAllTasksDetails(prevState => ({
            ...prevState,
            monthDays: ranges.selection
        }));
    }

    const [options, setOptions] = useState([
        { id: 'Monday', name: 'Monday' },
        { id: 'Tuesday', name: 'Tuesday' },
        { id: 'Wednesday', name: 'Wednesday' },
        { id: 'Thursday', name: 'Thursday' },
        { id: 'Friday', name: 'Friday' },
    ]);

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
        switch (radioChecked) {
            // case 'days':
            //     setTaskFrequency(
            //         <div className="mt-3">
            //             <div className="mb-4">
            //                 <label
            //                     for="firstname"
            //                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            //                 >
            //                     Time for (work):
            //                 </label>
            //                 <input
            //                     type="date"
            //                     id=""
            //                     onChange={(e) => inputChangeHandler('aDate', e.target.value)}
            //                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
            //                 />
            //             </div>
            //             <input
            //                 type="time"
            //                 id="daysDate"
            //                 onChange={(e) => { inputChangeHandler('daysDate', e.target.value) }}
            //                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
            //                 required
            //             />
            //         </div>)
            //     break;
            case 'weeks':
                setTaskFrequency(
                    <div className="mt-3">

                        <div>
                            <label class="cursor-pointer mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Select week:</label>
                            <Multiselect
                                isObject={true}
                                options={options}
                                selectedValues={selectedOptions}
                                onSelect={handleChange}
                                onRemove={handleChange}
                                displayValue="name"
                                required
                            />
                        </div>
                    </div>

                )
                break;
            case 'months':
                setTaskFrequency(<div className="mt-3">
                    <div className="flex bg-[#d3d3d345]  w-[330px] py-1.5 pl-4 rounded">
                        <span className="font-[600]">From</span>
                        <p className="mx-2">
                            {format(date.startDate, "MMM,dd,yyyy")}
                        </p>
                        <span className="font-[600]">to</span>
                        <p className="ml-3">
                            {format(date.endDate, "MMM,dd,yyyy")}
                        </p>
                    </div>
                    <DateRangePicker
                        ranges={[date]}
                        onChange={handleDateChange}
                        required
                    />
                </div>)
                break;
            default: setTaskFrequency(<></>)
        }

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
    }, [radioChecked, date]);

    //=============== fetch all workers ===========//
    const handleChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
        setAllTasksDetails(prevState => ({
            ...prevState,
            weekDays: { ...allTaskDetails.weekDays, selectedOption }
        }))
    };

    // ===========SubmitTaskHandler ==========//
    const submitTaskHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await addDoc(usersCollectionRef, {
            task: allTaskDetails.task,
            description: allTaskDetails.description,
            aDayDate: allTaskDetails.aDayDate,
            daysDate: allTaskDetails.daysDate,
            weekDays: allTaskDetails.weekDays,
            monthDays: allTaskDetails.monthDays,
        });
        setSuccess(true);
        setShowCreateTask(false);
        getTasks();
        setTimeout(() => {
            setSuccess(false);
        }, 4000);
        setIsLoading(false);
    }

    const getTasks = async () => {
        const data = await getDocs(usersCollectionRef);
        setAllWorkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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

    console.log(holdAllTasks)
    //==============Table Columns && Rows ============//
    const columns = [
        {
            name: "Tasks",
            selector: (row) => row.task
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
                                        <div className="mb-4">
                                            <label
                                                for="firstname"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Work Title:
                                            </label>
                                            <input
                                                type="text"
                                                id="task"
                                                onChange={(e) => inputChangeHandler('task', e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                                required
                                            />
                                        </div>
                                        {/* <div className="mb-6">
                                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description:</label>
                                            <textarea
                                                id="message"
                                                rows="2"
                                                onChange={(e) => inputChangeHandler('description', e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5" placeholder="Write your thoughts here..." required ></textarea>
                                        </div> */}
                                        <div className="mb-4">
                                            <span>
                                                <p for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description for (work):</p>
                                            </span>
                                            <Editor
                                                apiKey='your-api-key'
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                onChange={(e) => inputChangeHandler('description', e.target.value)}
                                                init={{
                                                    height: 200,
                                                    menubar: true,
                                                    plugins: [
                                                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                                    ],
                                                    toolbar: 'undo redo | blocks | ' +
                                                        'bold italic forecolor | alignleft aligncenter ' +
                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                        'removeformat | help',
                                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                }}
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                for="firstname"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Time for (work):
                                            </label>
                                            <input
                                                type="time"
                                                id=""
                                                onChange={(e) => inputChangeHandler('aDate', e.target.value)}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                            />
                                        </div>

                                        <div class="flex items-start mb-8">
                                            <div class="flex items-center h-5">
                                                <input
                                                    id="remember"
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={() => setIsChecked(!isChecked)}
                                                    value=""
                                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#103d15]"
                                                />
                                            </div>
                                            <label for="remember" class=" cursor-pointer text-sm ml-2 font-medium text-gray-900">Affirmative, the worker will attend (work) weekly/monthly.</label>
                                        </div>
                                        {
                                            isChecked ?
                                                <div className="mb-6">
                                                    {/* <div className="flex justify-start items-center mb-3">
                                                        <div className="h-[2px] w-[50px] rounded-lg bg-[#103d15] mr-2"></div>
                                                        <p className="text-sm  font-medium text-gray-900 dark:text-gray-300">
                                                            How often can you commit to the task?
                                                        </p>
                                                    </div> */}

                                                    <div>
                                                        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
                                                            {/* <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                                                <div class="flex items-center ps-3">
                                                                    <input
                                                                        id="horizontal-list-radio-license"
                                                                        onChange={(e) => setRadioChecked(e.target.value)}
                                                                        type="radio"
                                                                        value={'days'}
                                                                        name="list-radio"
                                                                        class="w-4 h-4 text-[#103d15] mb-1 bg-gray-100 border-gray-300 focus:ring-[#103d15]" />
                                                                    <label for="horizontal-list-radio-license" class="w-full py-1.5 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Days</label>
                                                                </div>
                                                            </li> */}
                                                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                                                <div class="flex items-center ps-3">
                                                                    <input
                                                                        id="horizontal-list-radio-id"
                                                                        onChange={(e) => setRadioChecked(e.target.value)}
                                                                        type="radio"
                                                                        value={'weeks'}
                                                                        name="list-radio"
                                                                        class="w-4 h-4 text-[#103d15] mb-1 bg-gray-100 border-gray-300 focus:ring-[#103d15]" />
                                                                    <label for="horizontal-list-radio-id" class="w-full py-1.5 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Week Days</label>
                                                                </div>
                                                            </li>
                                                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                                                <div class="flex items-center ps-3">
                                                                    <input
                                                                        id="horizontal-list-radio-military"
                                                                        onChange={(e) => setRadioChecked(e.target.value)}
                                                                        type="radio"
                                                                        value={'months'} name="list-radio"
                                                                        class="w-4 h-4 text-[#103d15] mb-1 bg-gray-100 border-gray-300 focus:ring-[#103d15]" />
                                                                    <label
                                                                        for="horizontal-list-radio-military"
                                                                        class="w-full py-1.5 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                    >Month Days
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
                                                    <div className="mb-3">
                                                        <p className=" text-sm font-medium text-gray-900 bg-[#4b556321] rounded-sm pl-3">Worker will attend (Task) once.</p>
                                                    </div>

                                                    <div>
                                                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Day for (work)</label>
                                                        <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5" />
                                                    </div>
                                                </div>

                                        }
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
                                        List of Tasks
                                        <i class="fa-solid fa-person-digging text-2xl text-[#ff9c40] pl-2"></i>
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
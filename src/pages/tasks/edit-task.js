import { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format, set } from 'date-fns';
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.config";
const EditTasks = (props) => {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [taskFreqquency, setTaskFrequency] = useState(<></>);
    const [isChecked, setIsChecked] = useState(false);
    const [radioChecked, setRadioChecked] = useState('');
    const [editSuccess, setEditSuccess] = useState(false);
    const [showEditTask, setShowEditTask] = useState(false);
    const [date, setDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });
    const [allTaskDetails, setAllTasksDetails] = useState({
        task: "",
        description: "",
        aDayDate: "",
        daysDate: '',
        weekDays: [],
        monthDays: {},
    });
    const [options, setOptions] = useState([
        { id: 'Monday', name: 'Monday' },
        { id: 'Tuesday', name: 'Tuesday' },
        { id: 'Wednesday', name: 'Wednesday' },
        { id: 'Thursday', name: 'Thursday' },
        { id: 'Friday', name: 'Friday' },
    ]);
    const [isLoading, setIsLoading] = useState(false);


    //=========InputchangeHandler ==============//
    const inputChangeHandler = (input, value) => {
        props.setCollectAllTasks((prevState) => {
            return {    
                ...prevState,
                [input]: value
            }
        });
    }

    const handleDateChange = (ranges) => {
        setDate(ranges.selection);
        setAllTasksDetails(prevState => ({
            ...prevState,
            monthDays: ranges.selection
        }));
    }

    //===== Update Handler ==========//
    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const updateData = doc(db, "tasks", props.taskId);
        await updateDoc(updateData, {
            title: props.collectAllTask.title,
            description: props.collectAllTask.description,
            date: props.collectAllTask.date,
            status: props.collectAllTask.status,
            // listWorkers : props.collectAllTask. listWorkers,
        });
        setEditSuccess(true);
        setIsLoading(false);
        props.hideEditTask();
        props.getTasks();
    };
    console.log(editSuccess);
    props.successNotif(editSuccess);
    //========CloseEdit Handler =======//
    const closeEditHandler = () => {
        setShowEditTask(false);
    }

    useEffect(() => {
        switch (radioChecked) {
            case 'days':
                setTaskFrequency(
                    <div className="mt-3">
                        <input
                            type="time"
                            id="daysDate"
                            value={props.collectAllTask.daysDate}
                            onChange={(e) => { inputChangeHandler('daysDate', e.target.value) }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                        />
                    </div>)
                break;
            case 'weeks':
                setTaskFrequency(
                    <div className="mt-3">
                        <label class="cursor-pointer mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Every week:</label>
                        <Multiselect
                            isObject={true}
                            options={options}
                            selectedValues={props.collectAllTask.weekDays}
                            onSelect={handleChange}
                            onRemove={handleChange}
                            displayValue="name"
                        />
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
                    />
                </div>)
                break;
            default: setTaskFrequency(<></>)
        }
    }, [radioChecked, date]);

    //=============== fetch all workers ===========//
    const handleChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
        setAllTasksDetails(prevState => ({
            ...prevState,
            weekDays: { ...allTaskDetails.weekDays, selectedOption }
        }))
    };
    return (
        <div>
            <div className="w-full px-3 h-fit pb-8 absolute top-0 bg-white z-30 rounded-md">
                <div className=" pr-3 pt-3">
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-2xl">
                            Edit Task
                        </p>
                        <div>
                            <button
                                onClick={props.hideEditTask}
                                className=" hover:font-bold ease-in-out duration-100">
                                <i class="fa-solid fa-arrow-left-long"></i>
                                <span className=" pl-2">
                                    Go Back
                                </span>
                            </button>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleUpdate}>
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
                                            value={ props.collectAllTask.title}
                                            onChange={(e) => inputChangeHandler('title', e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                            required
                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label for="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task (Status)</label>
                                        <select
                                            id="status"
                                            value={ props.collectAllTask.status}
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
                                            value={ props.collectAllTask.description}
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
                                            id="date"
                                            value={ props.collectAllTask.date}
                                            onChange={(e) => inputChangeHandler('date', e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label class="cursor-pointer mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Select Workers (Task):</label>
                                        {/* <Multiselect
                                            isObject={true}
                                            options={props.collectAllTask.listWorkers}
                                            selectedValues={selectedOptions}
                                            onSelect={handleChange}
                                            onRemove={handleChange}
                                            displayValue="label"
                                            required
                                        /> */}


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
        </div>

    );
}
export default EditTasks;
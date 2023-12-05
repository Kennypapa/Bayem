import { useState, useEffect } from "react";
const EditModal = (props) => {
    // const [listWeekDays, setListWeekDays] = useState([]);

    const formatDate = (seconds) => {
        return (new Date(seconds * 1000)).toDateString();
    }
    // const showAllWeekDays = () => {
    //     return ()
    // }
    useEffect(() => {
        // setListWeekDays();
    });

    console.log(props.holdAllTasks.weekDays);
    return (
        <div>
            <div
                id="static-modal"
                data-modal-backdrop="static"
                tabIndex="-1"
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >

                <div className="relative p-4 w-full max-w-[80%] max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="relative p-4 w-full max-w max-h-full">
                            <div>
                                <p className=" text-2xl font-semibold mb-6 ">
                                    Tasks
                                </p>
                                <div className="flex">
                                    <p className="font-[500]">
                                        Task Title:
                                    </p>
                                    <p className="pl-3">
                                        {props.holdAllTasks.task}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="font-[500]">
                                        Description:
                                    </p>
                                    <p className="pl-3">
                                        {props.holdAllTasks.description}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="font-[500]">
                                        Date (once):
                                    </p>
                                    <p className="pl-3">
                                        {props.holdAllTasks.aDayDate}
                                    </p>
                                </div>
                                <div className="mt-7">
                                    <div className="bg-[#7a7a7a] h-[27px] w-[140px] shadow-md rounded-md flex justify-center items-center">
                                        <p className="text-[#fff] text-sm font-semibold">Re-occur</p>
                                    </div>
                                </div>
                                <div className="flex mt-1">
                                    <p className="font-[500]">
                                        Days (Time):
                                    </p>
                                    <p className="pl-3">
                                        {props.holdAllTasks.aDayDate}
                                    </p>
                                </div>
                                <div className="flex mt-1 mb-2">
                                    <p className="font-[500] ">
                                        Weeks (Days):
                                    </p>
                                        {
                                            props.holdAllTasks.weekDays ? 
                                            <ul className="pl-5">
                                                {
                                                      props.holdAllTasks.weekDays.selectedOption.map((week) => {
                                                        return (
                                                            <li>
                                                                <p> {week.name} </p>
                                                            </li>
                                                        )
                                                      })
                                                }
                                            </ul>

                                            : 
                                            <></>
                                        }
                                   
                                    <p className="pl-3">

                                    </p>
                                </div>
                                <div className="flex mt-1">
                                    <p className="font-[500] whitespace-nowrap pr-2">
                                        Month (Days):
                                    </p>
                                    <div className="flex bg-[#d3d3d345]  w-full h-[26px] pl-4 rounded">
                                        <span className="font-[600] pr-1">From:</span>
                                        {
                                            props.holdAllTasks.monthDays ?
                                                <p >
                                                    {formatDate(props.holdAllTasks.monthDays.endDate)}
                                                </p>
                                                :
                                                <p>

                                                </p>
                                        }
                                        <p>
                                        </p>
                                        <span className="pl-4 pr-1 font-[600]">
                                            To:
                                        </span>
                                        <p>
                                            {
                                                props.holdAllTasks.monthDays ?
                                                    <p>
                                                        {formatDate(props.holdAllTasks.monthDays.startDate)}
                                                    </p>
                                                    :
                                                    <></>
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;

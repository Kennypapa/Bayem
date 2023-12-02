
const EditModal = (props) => {
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
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="relative p-4 w-full max-w-2xl max-h-full">
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
                                    <p className="font-[500] ">
                                        Days (Time):
                                    </p>
                                    <p className="pl-3">
                                        {props.holdAllTasks.aDayDate}
                                    </p>
                                </div>
                                <div className="flex mt-1">
                                    <p className="font-[500] ">
                                        Week (Days):
                                    </p>
                                    <p className="pl-3">
                                        {props.holdAllTasks.weekDays}
                                    </p>
                                </div>
                                <div className="flex mt-1">
                                    <p className="font-[500] ">
                                        Month (Days):
                                    </p>
                                    <p className="pl-3">

                                    </p>
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

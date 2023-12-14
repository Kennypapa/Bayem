const ViewTask = (props) => {

    //========== refresh the roles ====//
    const handleRefresh = () => {
        props.showViewTask.hide();
    }

    console.log(props.holdAllTasks.listWorkers);
    return (
        <div>
            <div
                id="view-modal"
                data-modal-backdrop="static"
                tabIndex="-1"
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >

                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow pb-4">

                        <div className="flex items-center justify-between md:p-3 border-b border-b-gray-100 rounded-t mb-3">
                            <div>
                                <p className="font-semibold text-xl font-[Roboto]">Task Details</p>
                            </div>
                            <div className="flex justify-end items-center">
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

                        <div className="grid grid-cols-2 pl-3">
                            <div id="container-one"> 
                                <p className="text-lg font-[500] mb-2">
                                    Workers Assigned
                                    <i class="fa-solid fa-arrows-down-to-people text-xl pl-2"></i>
                                </p>
                                <div>
                                    {
                                        props.holdAllTasks.listWorkers ?
                                            <ul className="pl-1">
                                                {
                                                    props.holdAllTasks.listWorkers.selectedOption.map((worker) => {
                                                        return (
                                                            <li className="flex mb-2">
                                                                <p className="border-l-2 border-[#103d15] pl-2">
                                                                    {worker.label}
                                                                </p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            :
                                            <></>
                                    }

                                </div>
                            </div>


                            <div id="container-two">
                                <ul className="pl-3">
                                    <li className="mb-2">
                                        <div className="flex">
                                            <p className="text-lg font-[500]">
                                                Title of Work:
                                            </p>
                                            <p className="pl-3">
                                                {props.holdAllTasks.title}
                                            </p>
                                        </div>
                                    </li>
                                    <li className="mb-2">
                                        <div className="flex">
                                            <p className="text-lg font-[500]">
                                                Date:
                                            </p>
                                            <p className="pl-3">
                                                {props.holdAllTasks.date}
                                            </p>
                                        </div>
                                    </li>

                                    <li className="mb-2">
                                        <div className="flex">
                                            <p className="text-lg font-[500]">
                                                Status:
                                            </p>
                                            <p className="pl-3">
                                                {props.holdAllTasks.status}
                                            </p>
                                        </div>
                                    </li>
                                    <li className="mb-2">
                                        <div className="flex">
                                            <p className="text-lg font-[500]">
                                                Description:
                                            </p>
                                            <p className="pl-3">
                                                {props.holdAllTasks.description}
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default ViewTask;
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
                    <div className="relative bg-white rounded-lg shadow ">

                        <div className="flex items-center justify-between md:p-3 border-b border-b-gray-100 rounded-t">
                            <div>
                                <p className="font-semibold text-xl font-[Roboto]">Task Details</p>
                            </div>
                            <div className="flex justify-end items-center">
                                {/* {
                                   isLoading ? <span>
                                       <svg aria-hidden="true" role="status" className="inline w-6 h-6 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                           <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#103d15" />
                                           <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                       </svg>
                                   </span> : null
                               } */}

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
                                <p className="text-lg font-[500]">
                                    Workers Assigned
                                    <i class="fa-solid fa-arrows-down-to-people text-xl pl-2"></i>
                                </p>
                                <div>
                                    <ul className=" list-disc flex">
                                        {/* {
                                            props.holdAllTasks.listWorkers.map((week) => {
                                                return (
                                                    <li className="flex">
                                                        <p className="mr-2"> {week.firstname} </p>
                                                        <p> {week.lastname},</p>
                                                    </li>
                                                )
                                            })
                                        } */}
                                    </ul>
                                </div>
                            </div>


                            <div id="container-two">
                                <ul className="pl-3 py-2">
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
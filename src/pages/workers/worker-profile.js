
const WorkerProfile = (props) => {
    return (
        <div className="rounded-lg w-full h-auto max-w-[900px] py-8 bg-[#103d15] relative">
            <span className="absolute right-4 top-3">
                <button className="text-[#ff9c40]">
                   Go Back <i class="fa-light fa-closed-captioning"></i>
                </button>
            </span>
            <div className=" flex w-full h-full">
                <div className="w-[250px] h-full">
                    <div className="flex justify-center items-center flex-col">
                        <div className="w-[80px] h-[80px] rounded-full mx-auto">
                            <img src="assets/img/bayem/CEO.jpg" className=" rounded-full" alt="avatar" />
                        </div>
                        <div className=" h-[60px]  w-[1px] bg-[#60994c]"></div>
                        <div className="bg-[#f8f8f8] h-[31px] w-[140px] rounded-md flex justify-center items-center">
                            <p className="text-[#7a7a7a] text-sm font-semibold">Worker Details</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full">
                    <ul>
                        <li className="mb-6">
                            <p className="text-[#ff9c40]">
                                Firstname:
                                <span className="pl-5 text-white">{props.allWorkerDetails.firstname}</span>
                            </p>
                        </li>
                        <li className="mb-6">
                            <p className="text-[#ff9c40]">
                                Lastname:
                                <span className="pl-5 text-white">{props.allWorkerDetails.lastname}</span>
                            </p>

                        </li>
                        <li className="mb-6">
                            <p className="text-[#ff9c40]">
                                Email:
                                <span className="pl-5 text-white">{props.allWorkerDetails.email}</span>
                            </p>

                        </li>
                        <li className="mb-6">
                            <p className="text-[#ff9c40]">
                                Gender:
                                <span className="pl-5 text-white">{props.allWorkerDetails.gender}</span>
                            </p>
                        </li>
                        <li className="mb-6">
                            <p className="text-[#ff9c40]">
                                Role:
                                <span className="pl-5 text-white">{props.allWorkerDetails.role}</span>
                            </p>
                        </li>
                        <li className="mb-6">
                            <p className="text-[#ff9c40]">
                                Phone-no:
                                <span className="pl-5 text-white"></span>
                            </p>
                        </li>
                        <li >
                            <p className="text-[#ff9c40]">
                                Location:
                                <span className="pl-5 text-white"></span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WorkerProfile;
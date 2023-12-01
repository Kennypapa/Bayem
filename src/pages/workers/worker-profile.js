
const WorkerProfile = (props) => {
    return (
        <div className="rounded-lg w-full h-auto max-w-[900px] py-8 bg-[#ffffff8a] relative">
            <span className="absolute right-4 top-3">
                <button className="text-[#7a7a7a]">
                    <i class="fa-solid fa-xmark text-2xl"></i>
                </button>
            </span>
            <div className=" flex w-full h-full">
                <div className="w-[250px] h-full">
                    <div className="flex justify-center items-center flex-col">
                        <div className="w-[80px] h-[80px] rounded-full mx-auto">
                            <img src="../assets/img/bayem/CEO.jpg" className=" rounded-full" alt="avatar" />
                        </div>
                        <div className=" h-[60px]  w-[1px] bg-[#60994c]"></div>
                        <div className="bg-[#7a7a7a] h-[31px] w-[140px] shadow-md rounded-md flex justify-center items-center">
                            <p className="text-[#fff] text-sm font-semibold">Worker Details</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full">
                    <ul>
                        <li className="mb-6">
                            <p className="text-[#103d15] font-[600]">
                                Firstname:
                                <span className="pl-6 text-[#7a7a7a] capitalize">{props.allWorkerDetails.firstname}</span>
                            </p>
                        </li>
                        <li className="mb-6">
                            <p className="text-[#103d15] font-[600]">
                                Lastname:
                                <span className="pl-6 text-[#7a7a7a] capitalize">{props.allWorkerDetails.lastname}</span>
                            </p>

                        </li>
                        <li className="mb-6">
                            <p className="text-[#103d15] font-[600]">
                                Email:
                                <span className="pl-6 text-[#7a7a7a] capitalize">{props.allWorkerDetails.email}</span>
                            </p>

                        </li>
                        <li className="mb-6">
                            <p className="text-[#103d15] font-[600]">
                                Gender:
                                <span className="pl-6 text-[#7a7a7a] capitalize">{props.allWorkerDetails.gender}</span>
                            </p>
                        </li>
                        <li className="mb-6">
                            <p className="text-[#103d15] font-[600]">
                                Role:
                                <span className="ml-6 text-[#fff] capitalize bg-[#7a7a7a] shadow-md rounded-md py-1.5 px-3">{props.allWorkerDetails.role}</span>
                            </p>
                        </li>
                        <li className="mb-6">
                            <p className="text-[#103d15] font-[600]">
                                Phone-no:
                                <span className="pl-6 text-[#7a7a7a] capitalize"></span>
                            </p>
                        </li>
                        <li >
                            <p className="text-[#103d15] font-[600]">
                                Location:
                                <span className="pl-6 text-[#7a7a7a] capitalize"></span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WorkerProfile;
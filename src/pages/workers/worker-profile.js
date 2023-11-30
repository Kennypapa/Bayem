
const WorkerProfile = (props) => {
    return (
        <div className="rounded-lg w-full h-auto max-w-[900px] pt-12 bg-[#103d15]">
            <div className=" flex w-full h-full">
                <div className="w-[250px] h-full">
                    <div className="flex justify-center items-center flex-col">
                        <div className="w-[80px] h-[80px] rounded-full mx-auto">
                            <img src="assets/img/bayem/CEO.jpg" className=" rounded-full" alt="avatar" />
                        </div>
                        {/* <div className=" w-[1px] bg-[#60994c]"></div> */}
                    </div>
                </div>
                <div className="w-full h-full">
                <ul>
                    <li className="mb-6">
                        <p  className="text-[#ff9c40]">
                            Firstname: 
                            <span className="pl-5 text-white">{props.allWorkerDetails.firstname}</span>
                        </p>
                    </li>
                    <li className="mb-6">
                        <p  className="text-[#ff9c40]">
                        Lastname:
                        <span className="pl-5 text-white">{props.allWorkerDetails.lastname}</span>
                        </p>
                        
                    </li>
                    <li className="mb-6">
                        <p  className="text-[#ff9c40]">
                        Email:
                        <span className="pl-5 text-white">{props.allWorkerDetails.email}</span>
                        </p>
                        
                    </li>
                    <li className="mb-6">
                        <p  className="text-[#ff9c40]">
                        Gender:
                        <span className="pl-5 text-white">{props.allWorkerDetails.gender}</span>
                        </p>
                    </li>
                    <li className="mb-6">
                        <p  className="text-[#ff9c40]">
                        Role:
                        <span className="pl-5 text-white">{props.allWorkerDetails.role}</span>
                        </p>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default WorkerProfile;
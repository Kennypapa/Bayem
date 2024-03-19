import { Link } from "react-router-dom";

const GetStarted = () => {
    return (
        <div className="relative worker_bg">
            <div className=" flex justify-center flex-col bg-[#124615d6] items-center w-full h-[100vh] relative top-0 z-40">
                <div className="w-[350px] mr-5">
                    <img src="../assets/img/logos/Bayem-Logo-2.png" alt="logo" />
                </div>
                <div className="mt-4">
                    <p className="text-white text-4xl uppercase font-semibold">
                        Farm management system
                    </p>
                </div>
                <div className="mt-4">
                    <Link to="/dashboard">
                        <button className="text-white rounded-md ease-in-out duration-150 border !border-[#60994c] px-3.5 py-2 hover:bg-transparent bg-[#60994c]">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default GetStarted;
import { NavLink } from "react-router-dom";

const Reports = () => {
    return (
        <div className="e_pages">
            <div className="bg-white rounded-lg  h-auto grid grid-cols-2">
                <div>
                    <div className="w-full flex justify-between items-center px-3 pt-4">
                        <p className="text-2xl">Reports</p>
                    </div>
                    <div className="mt-8">
                        <ul className="pl-4">
                            <li className="border-l-2 border-l-[#ff9c40] mb-2 pl-2 hover:ml-4 ease-in-out duration-150 w-fit">
                                <NavLink to="" className="underline report_txt hover:text-[#ff9c40]">
                                    Crop Report
                                </NavLink>
                            </li>
                            <li className="border-l-2 border-l-[#ff9c40] mb-2 pl-2 hover:ml-4 ease-in-out duration-150 w-fit">
                                <NavLink className="underline report_txt hover:text-[#ff9c40]">
                                    Animal Report
                                </NavLink>
                            </li>
                            <li className="border-l-2 border-l-[#ff9c40] mb-2 pl-2 hover:ml-4 ease-in-out duration-150 w-fit">
                                <NavLink className="underline report_txt hover:text-[#ff9c40]">
                                    Equipment Report
                                </NavLink>
                            </li>
                            <li className="border-l-2 border-l-[#ff9c40] mb-2 pl-2 hover:ml-4 ease-in-out duration-150 w-fit">
                                <NavLink className="underline report_txt hover:text-[#ff9c40]">
                                    Workers Report
                                </NavLink>
                            </li>
                            <li className="border-l-2 border-l-[#ff9c40] pl-2 hover:ml-4 ease-in-out duration-150 w-fit">
                                <NavLink className="underline report_txt hover:text-[#ff9c40]">
                                    Purchased Items Report
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="h-full flex justify-center items-center w-[300px] ml-auto py-10">
                    <img src="../assets/img/bayem/fms-reports.png" alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default Reports;
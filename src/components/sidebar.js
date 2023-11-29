import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className=" w-[250px] h-[100vh] pl-0 pr-0 fixed top-0 md:left-0 left-[-200px] bg-[#103d15] pt-6 shadow-md z-40">
            <div className="w-[160px] ml-6 mb-8">
                <img src="assets/img/logos/Bayem-Logo-2.png" alt="logo" />
            </div>
            <div className="mb-4 sidebar">
                <ul className="flex flex-col text-sm font-medium text-center px-2.5">
                    <li className='mb-3 w-full'>
                        <NavLink className='sidebar_link ease-in-out duration-150 flex justify-start items-center  hover:bg-gray-100 s_btn  w-full rounded-md pl-1'
                            to="/dashboard"
                        >
                            {/* <i className="fa-solid fa-user icon_ text-base w-9"></i> */}
                            <i class="fa-solid fa-house-chimney-window icon_ text-base w-9"></i>
                            <p className='text-white text-left text-base font-medium py-2 ml-1'> Dashboard </p>
                        </NavLink>
                    </li>
                    <li className='mb-3'>
                        <NavLink
                            className=' sidebar_link ease-in-out duration-150 flex justify-start items-center  hover:bg-gray-100 s_btn  w-full rounded-md pl-1'
                            to="/roles"
                        >
                            <i className="fa-solid fa-list  icon_ text-base w-9"></i>
                            <p className='text-white text-left text-base font-medium py-2 ml-1'> Roles</p>
                        </NavLink>
                    </li>
                    <li className='mb-3'>
                        <NavLink

                            className='sidebar_link ease-in-out duration-150 flex justify-start items-center  hover:bg-gray-100 s_btn  w-full rounded-md pl-1'
                            to="/workers"
                        >
                            <i class="fa-solid fa-users-line icon_ text-base w-9"></i>
                            <p className='text-white text-left text-base font-medium py-2 ml-1'>Workers</p>
                        </NavLink>
                    </li>
                    <li className=' mb-24'>
                        <NavLink

                            className='sidebar_link ease-in-out duration-150 flex justify-start items-center  hover:bg-gray-100 s_btn  w-full rounded-md pl-1'
                            to="/create-task"
                        >
                            <i class="fa-solid fa-people-roof icon_ text-base w-9"></i>
                            <p className='text-white text-left text-base font-medium py-2 ml-1'>Tasks</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='absolute bottom-6 pl-4'>
                <button className='flex justify-start items-center'>
                    <i class="fa-solid fa-power-off text-red-600 font-semibold text-lg w-9"></i>
                    <p className='text-red-600 font-semibold'>LOG OUT</p>
                </button>
            </div>

        </div>

    )
}
export default Sidebar;
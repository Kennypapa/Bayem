import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (

        <div className=" w-[200px] h-[100vh] pl-0 pr-0 fixed top-0 md:left-0 left-[-200px] bg-white pt-24 shadow-md z-10">
            <div className="mb-4 sidebar">
                <ul className="flex flex-col text-sm font-medium text-center">
                    <li className='mb-3 w-full'>
                        <NavLink className=' ease-in-out duration-150 flex justify-start items-center pl-2 hover:bg-gray-100 s_btn hover:border-r-[#103d15] hover:border-r-2 w-full'
                            to="/dashboard"
                        >
                            <i className="fa-solid fa-user icon_ text-lg w-9"></i>
                            <p className='text-[#6b7280] text-left text-base py-2 ml-3'> Dashboard </p>
                        </NavLink>
                    </li>
                    <li className='mb-3'>
                        <NavLink
                            className=' ease-in-out duration-150 flex justify-start items-center pl-2 hover:bg-gray-100 s_btn hover:border-r-[#103d15] hover:border-r-2 w-full'
                            to="/roles"
                        >
                            <i className="fa-solid fa-list  icon_ text-lg w-9"></i>
                            <p className='text-[#6b7280] text-left text-base py-2 ml-3'> Roles</p>
                        </NavLink>
                    </li>
                    <li className='mb-3'>
                        <NavLink

                            className=' ease-in-out duration-150 flex justify-start items-center pl-2 hover:bg-gray-100 s_btn hover:border-r-[#103d15] hover:border-r-2 w-full'
                            to="/workers"
                        >
                            <i class="fa-solid fa-users-line icon_ text-lg w-9"></i>
                            <p className='text-[#6b7280] text-left text-base py-2 ml-3'>Workers</p>
                        </NavLink>
                    </li>
                    <li className='mb-3'>
                        <NavLink

                            className=' ease-in-out duration-150 flex justify-start items-center pl-2 hover:bg-gray-100 s_btn hover:border-r-[#103d15] hover:border-r-2 w-full'
                            to="/create-task"
                        >
                          <i class="fa-solid fa-people-roof icon_ text-lg w-9"></i>
                            <p className='text-[#6b7280] text-left text-base py-2 ml-3'>Create Task</p>
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>

    )
}
export default Sidebar;
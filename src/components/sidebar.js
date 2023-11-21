import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (

        <div className=" w-[200px] h-[100vh] pl-0 pr-0 fixed top-0 md:left-0 left-[-200px] bg-white pt-24 shadow-md z-10">
            <div className="mb-4 sidebar">
                <ul className="flex flex-col text-sm font-medium text-center">
                    <li className='mb-3 w-full'>
                        <NavLink className=' ease-in-out duration-150 flex justify-start items-center pl-5 hover:bg-gray-100 s_btn hover:border-r-[#103d15] hover:border-r-2 w-full'
                            to="/dashboard"
                        >
                            <i className="fa-solid fa-user icon_"></i>
                            <p className='text-[#6b7280] text-left text-base py-2 pl-3'> Dashboard </p>
                        </NavLink>
                    </li>
                    <li className='mb-3'>
                        <NavLink
                            className=' ease-in-out duration-150 flex justify-start items-center pl-5 hover:bg-gray-100 s_btn hover:border-r-[#103d15] hover:border-r-2 w-full'
                            to="/roles"
                        >
                            <i className="fa-solid fa-list  icon_"></i>
                            <p className='text-[#6b7280] pl-3 text-left text-base py-2'> Roles</p>
                        </NavLink>
                    </li>
                    <li className='mb-3'>
                        <NavLink

                            className=' ease-in-out duration-150 flex justify-start items-center pl-5 hover:bg-gray-100 s_btn hover:border-r-[#103d15] hover:border-r-2 w-full'
                            to="/workers"
                        >
                            <i class="fa-solid fa-users-line icon_"></i>
                            <p className='text-[#6b7280] pl-3 text-left text-base py-2'>Workers</p>
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>

    )
}
export default Sidebar;
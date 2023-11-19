import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className=" w-[200px] h-[100vh] hidden pl-0 pr-0 fixed top-0 md:left-0 left-[-200px] bg-white pt-24 shadow-md z-10">
            <div className="mb-4">
                <ul className="flex flex-col text-sm font-medium text-center">
                    <li className='mb-3 w-full'>
                        <Link className='flex justify-start items-center pl-5 bg-gray-100 s_btn border-r-[#103d15] border-r-2 w-full' to="/dashboard">
                            <i className="fa-solid fa-user text-[#103d15]"></i>
                            <p className='text-[#6b7280] text-left text-base py-2 pl-3'> Dashboard </p>
                        </Link>
                    </li>
                    <li className='mb-3'>
                        <Link
                            className='flex justify-start items-center pl-5 hover:bg-gray-100 s_btn hover:border-r-[#103d15] hover:border-r-2 w-full'
                            to="/roles">
                            <i className="fa-solid fa-list text-[#103d15]"></i>
                            <p className='text-[#6b7280] pl-3 text-left text-base py-2 hover:bg-gray-100 '> Roles</p>

                        </Link>
                    </li>
                    <li className='mb-3'>
                        <Link to="/roles">
                            <p className='text-[#6b7280] hover:border-r-2 hover:border-r-[#103d15] pl-5 text-left text-base py-2 hover:bg-gray-100 '>Create Task</p>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Sidebar;
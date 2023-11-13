import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className=" w-[200px] h-[100vh] pl-0 pr-0 fixed top-0 left-0 bg-white pt-24 shadow-md z-10">
            <div class="mb-4">
                <ul class="flex flex-col text-sm font-medium text-center">
                    <li className='mb-3 w-full'>
                        <Link className='flex justify-start items-center pl-5 bg-gray-100 s_btn border-r-[#103d15] border-r-2 w-full' to="/dashboard">
                            <i class="fa-solid fa-user text-[#103d15]"></i>
                            <p className='text-[#6b7280] text-left text-base py-2 pl-3'> Dashboard </p>
                        </Link>
                    </li>
                    <li className='mb-3'>
                        <Link
                            className='flex justify-start items-center pl-5 bg-gray-100 s_btn border-r-[#103d15] border-r-2 w-full'
                            to="/roles">
                            <i class="fa-solid fa-list text-[#103d15]"></i>
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
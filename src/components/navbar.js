import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    useEffect(() => {
        initFlowbite();
    })
    return (
        <div className=" h-[70px] w-full mr-auto flex justify-between items-center bg-white pl-6 pr-10 top-0 fixed z-10 ">

            <div className="flex">
                
            </div>

            <div className='flex justify-end items-center'>
               <NavLink to="/dashboard"  className="text-[#282828] weather-txt mr-10">
                <div className=' flex justify-end items-center' id='Dropdown-one'>
                    <div className='pl-1'>
                        <i class="fa-solid fa-cloud-sun-rain text-4xl text-[#282828]"></i>
                    </div>
                    <p className='text-[#282828] w_txt font-[500]'>Weather Update</p>
                </div>
                </NavLink>

                <div id='Dropdown-two'>
                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" focus:ring-0 focus:outline-none focus:ring-transprent font-medium text-sm  py-2.5 text-center inline-flex items-center" type="button">
                        <div className='h-[50px] w-[50px] rounded-full'>
                            <img src="../assets/img/bayem/CEO.jpg" className=" rounded-full" alt="avatar" />
                        </div>
                        <p className='pl-3'>kehinde</p>
                        <svg className="w-2.5 h-2.5 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <NavLink to="/dashboard" className="block px-4 py-2 hover:bg-gray-300  dark:hover:text-white">
                                    <div className='flex'>
                                        <span>
                                            <i className='fa-regular fa-user'></i>
                                        </span>
                                        <p className='ml-3'>
                                            Profile
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink to="/dashboard" className="block px-4 py-2 hover:bg-gray-300  dark:hover:text-white">
                                    <div className='flex justify-start items-center'>
                                        <i class="fa-solid fa-power-off text-red-600 font-semibold"></i>
                                        <p className='text-red-600 ml-3 '>Logout</p>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Navbar;
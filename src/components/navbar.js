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
                <div className='w-[250px]  h-[20px]'></div>
                <label htmlFor="toggle" className='cursor-pointer'>
                    <i class="fa-solid fa-bars text-xl"></i>
                </label>
            </div>

            <div>
                <div className='block cursor-pointer'>
                    <input id="toggle" type="checkbox" value="" className="cursor-pointer hidden w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                </div>
                <div >
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
                                <NavLink to="/admin/profile" className="block px-4 py-2 hover:bg-gray-300  dark:hover:text-white">
                                    <div className='flex'>
                                        <span>
                                            <i className='fa-regular fa-user'></i>
                                        </span>
                                        <p className='ml-3'>
                                            Profile
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink to="/admin/profile" className="block px-4 py-2 hover:bg-gray-300  dark:hover:text-white">
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
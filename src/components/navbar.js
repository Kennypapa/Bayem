
import { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
const Navbar = () => {
    useEffect(() => {
        initFlowbite();
    })
    return (
        <div className=" h-[70px] w-full flex justify-between items-center bg-white pl-6 pr-10 top-0 fixed z-10 ">
            <div className="w-[150px]">
                <img src="assets/img/logos/Bayem-Logo.png" alt="logo" />
            </div>
            <div>
                <div className='md:hidden block cursor-pointer'>
                    <label htmlFor="toggle" className='cursor-pointer'>
                        <i class="fa-solid fa-bars text-xl"></i>
                    </label>
                    <input id="toggle" type="checkbox" value="" className="cursor-pointer hidden w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                </div>
                <div >
                    {/* <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" focus:ring-0 focus:outline-none focus:ring-transprent font-medium text-sm  py-2.5 text-center inline-flex items-center" type="button">
                        <i className="fa-solid fa-user text-[#103d15]"></i>
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">kehinde</a>
                            </li>
                        </ul>
                    </div> */}
                    <p className='text-sm font-[600]'>
                        Logged in as admin
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
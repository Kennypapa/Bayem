import { useState, useEffect } from "react";
// import { initFlowbite } from 'flowbite';
const CreateTask = () => {

    // useEffect(() => {
    //     initFlowbite();
    // })
    const [isChecked, setIsChecked] = useState(false);
    return (<div className="e_pages">
        <div className="bg-white rounded-lg">
            <div className="w-full grid grid-cols-2">
                <div className="w-full  pr-5">
                    <div className="w-full px-3 pt-4">
                        <p className="text-2xl mb-3">
                            Create Task
                        </p>

                        <form>
                            <div className="mb-6">
                                <label
                                    for="firstname"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Title:
                                </label>
                                <input
                                    type="text"
                                    id="firstname"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description:</label>
                                <textarea id="message" rows="2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5" placeholder="Write your thoughts here..."></textarea>
                            </div>
                            <div class="flex items-start mb-3">

                                <div class="flex items-center h-5">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => setIsChecked(!isChecked)}
                                        value=""
                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#103d15]"
                                        required />
                                </div>
                                <label for="remember" class=" text-sm ml-2 font-medium text-gray-900 dark:text-gray-300">Re-occur </label>
                            </div>
                            {
                                isChecked ?
                                    <div className="mb-6">
                                        <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                            How often can you commit to the task?
                                        </p>
                                        <div class="flex items-center">
                                            <input id="link-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#103d15]"
                                            />
                                            <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Everyday.</label>
                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                    :
                                    <div className="mb-6">
                                        <label
                                            for="firstname"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Pick a Date:
                                        </label>
                                        <input
                                            type="date"
                                            id="firstname"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                            required
                                        />
                                    </div>
                            }

                            <div>
                                <button
                                    type="submit"
                                    className=" w-[150px] h-[40px] relative text-sm bg-[#103d15] hover:bg-[#ff9c40] text-white rounded-lg ease-in-out duration-150  focus:ring-0 focus:outline-none"
                                >

                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="w-full  ">
                    <img src="../../assets/img/bayem/ARJPAWK.jpg" className="h-full w-full rounded-tr-lg rounded-br-lg" alt="farmlogo" />
                </div>
            </div>
        </div>
    </div>);
}
export default CreateTask;
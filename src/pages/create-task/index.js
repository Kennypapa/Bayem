import { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";

const CreateTask = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [options, setOptions] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
    return (<div className="e_pages">
        <div className="bg-white rounded-lg pb-7">
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
                            <div class="flex items-start mb-4">

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
                                        <div className="flex justify-start items-center mb-3">
                                            <div className="h-[2px] w-[50px] rounded-lg bg-[#103d15] mr-2"></div>
                                            <p className="text-sm  font-medium text-gray-900 dark:text-gray-300">
                                                How often can you commit to the task?
                                            </p>
                                        </div>
                                        <div class="flex items-center mb-2">
                                            <label for="link-checkbox" class=" mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">Every day</label>
                                            <input id="link-checkbox"
                                                type="checkbox"
                                                value=""
                                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#103d15]"
                                            />

                                        </div>
                                        <div>
                                            <label for="link-checkbox" class=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Every week:</label>
                                            <Multiselect
                                                isObject={false}
                                                options={options}
                                            />
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

            </div>
        </div>
    </div>);
}
export default CreateTask;
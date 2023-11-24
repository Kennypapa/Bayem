import { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";

const CreateTask = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [radioChecked, setRadioChecked] = useState('');
    const [taskFreqquency, setTaskFrequency] = useState(<></>);
    useEffect(() => {
        switch (radioChecked) {
            case 'days':
                setTaskFrequency(
                <div>
                    day
                </div>)
                break;
            case 'weeks':
                setTaskFrequency(<div>
                    <label class="cursor-pointer mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Every week:</label>
                    <Multiselect
                        isObject={false}
                        options={options}
                    />
                </div>)
                break;
            case 'months':
                setTaskFrequency(<div>
                    months
                </div>)
                break;
            default: setTaskFrequency(<></>)
        }
    }, [radioChecked])

    const [options, setOptions] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
    return (<div className="e_pages">
        <div className="bg-white rounded-lg py-3">
            <div className="w-full px-3 grid grid-cols-2">
                <div className="border-r border-r-[#d3d3d340] pr-3 pt-3">
                    <p className="text-2xl mb-3">
                        Create Task
                    </p>
                    <div >
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
                                <label for="remember" class=" cursor-pointer text-sm ml-2 font-medium text-gray-900 dark:text-gray-300">Re-occur </label>
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
                                        {/* <div className="flex mb-2">
                                            <div class="flex items-center mr-3">
                                                <label for="link-checkbox" class="cursor-pointer mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">Days</label>
                                                <input id="link-checkbox"
                                                    type="radio"
                                                    value=""
                                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#103d15]"
                                                />
                                            </div>
                                            <div class="flex items-center mr-3">
                                                <label for="link-checkbox" class="cursor-pointer mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">Weeks</label>
                                                <input id="link-checkbox"
                                                    type="radio"
                                                    value=""
                                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#103d15]"
                                                />
                                            </div>
                                            <div class="flex items-center mr-3">
                                                <label for="link-checkbox" class="cursor-pointer mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">Months</label>
                                                <input id="link-checkbox"
                                                    type="radio"
                                                    value=""
                                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#103d15]"
                                                />
                                            </div>
                                        </div> */}

                                        <div>
                                            <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                                    <div class="flex items-center ps-3">
                                                        <input
                                                            id="horizontal-list-radio-license"
                                                            onChange={(e) => setRadioChecked(e.target.value)}
                                                            type="radio"
                                                            value={'days'}
                                                            name="list-radio"
                                                            class="w-4 h-4 text-[#103d15] bg-gray-100 border-gray-300 focus:ring-[#103d15]" />
                                                        <label for="horizontal-list-radio-license" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Days</label>
                                                    </div>
                                                </li>
                                                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                                    <div class="flex items-center ps-3">
                                                        <input
                                                            id="horizontal-list-radio-id"
                                                            onChange={(e) => setRadioChecked(e.target.value)}
                                                            type="radio"
                                                            value={'weeks'}
                                                            name="list-radio"
                                                            class="w-4 h-4 text-[#103d15] bg-gray-100 border-gray-300 focus:ring-[#103d15]" />
                                                        <label for="horizontal-list-radio-id" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Weeks</label>
                                                    </div>
                                                </li>
                                                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                                    <div class="flex items-center ps-3">
                                                        <input
                                                            id="horizontal-list-radio-military"
                                                            onChange={(e) => setRadioChecked(e.target.value)}
                                                            type="radio"
                                                            value={'months'} name="list-radio"
                                                            class="w-4 h-4 text-[#103d15] bg-gray-100 border-gray-300 focus:ring-[#103d15]" />
                                                        <label
                                                            for="horizontal-list-radio-military"
                                                            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                        >Months
                                                        </label>
                                                    </div>
                                                </li>

                                            </ul>
                                            {
                                                taskFreqquency
                                            }
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

                <div>
                  <div className=" w-[90px] h-[90px] mx-auto border rounded-full">

                  </div>
                  <div className="pl-6 pt-6">
                     <ul >
                        <li>
                          <p>
                            Firstname:
                          </p>
                        </li>
                        <li>
                           <p>
                              Lastname:
                           </p>
                        </li>
                        <li>
                           <p>
                              Email:
                           </p>
                        </li>
                        <li>
                           <p>
                              Gender:
                           </p>
                        </li>
                        <li>
                           <p>
                              Role:
                           </p>
                        </li>
                     </ul>
                  </div>
                </div>
            </div>

        </div>
    </div>);
}
export default CreateTask;
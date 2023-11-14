import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import EditModal from './edit-modal';
import CreateModal from './create-modal';
const Roles = () => {
    useEffect(() => {
        initFlowbite();
    })
    return (
        <div className="e_pages">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-between items-center py-3 px-4">
                    <p>
                        Roles
                    </p>
                    <div>
                        <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="bg-[#103d15] hover:bg-[#ff9c40] text-white rounded-lg ease-in-out duration-150 text-sm w-[150px] h-[40px]">
                            Create New Role <i class="fa-solid pl-2 fa-circle-plus"></i>
                        </button>
                    </div>
                </div>
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-white">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Title
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b border-b-gray-100 hover:bg-gray-50">
                            <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Farmer
                            </th>
                            <td class="flex items-center px-6 py-3">
                                <i class="fa-solid fa-pen-to-square text-[#174b09] mr-4 cursor-pointer" data-modal-target="static-modal" data-modal-toggle="static-modal"></i>
                                <i class="fa-solid fa-eye mr-4"></i>
                                <a><i class="fa-solid fa-trash text-[#f44269] text-lg"></i></a>

                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <EditModal />
            <CreateModal />
        </div>
    )
}

export default Roles;


const Roles = () => {

    return (
        <div className="e_pages">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Roles
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
                                <i class="fa-solid fa-pen-to-square text-[#174b09] mr-4"></i>

                                <a><i class="fa-solid fa-trash text-[#f44269] text-lg"></i></a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b border-b-gray-100 hover:bg-gray-50">

                            <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Farmer
                            </th>

                            <td class="flex items-center px-6 py-3">
                                <i class="fa-solid fa-pen-to-square text-[#174b09] mr-4"></i>
                                <a><i class="fa-solid fa-trash text-[#f44269] text-lg"></i></a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b border-b-gray-100 hover:bg-gray-50">

                            <th scope="row" class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Cattle Rearer
                            </th>
                            <td class="flex items-center px-6 py-3">
                                <i class="fa-solid fa-pen-to-square text-[#174b09] mr-4"></i>
                                <a><i class="fa-solid fa-trash text-[#f44269] text-lg"></i></a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Roles;
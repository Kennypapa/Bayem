import { useState } from "react";
import DataTable from "react-data-table-component";
const Purchase = () => {
    const [togglePurchase, setTogglePurchase] = useState(true);


    const togglehandler = () => {
        setTogglePurchase(false);
    }
    console.log(togglePurchase)
    //==============Table Columns && Rows ============//
    const columns = [
        {
            name: "Firstname",
            selector: (row) => row.firstname
        },
        {
            name: 'Lastname',
            selector: (row) => row.lastname
        },
        {
            name: 'Email',
            selector: (row) => row.email
        },
        {
            name: 'Gender',
            selector: (row) => row.gender
        },

        {
            name: 'Role',
            selector: (row) => <div className="bg-green-100 text-green-800 text-xs font-[600] me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">{row.role}</div>
        },

        {
            name: "Actions",
            cell: (row) => (
                <div className="inline-flex rounded-md py-2.5" role="group">
                    <button

                        type="button" className="px-3 py-2  font-medium text-gray-900 border border-gray-100 rounded-s-lg hover:bg-[#d3d3d324] focus:z-10 focus:ring-0 focus:ring-transparent">
                        <i className="fa-solid fa-pen-to-square text-[#ff9c40] cursor-pointer text-[15px]"></i>
                    </button>

                    <button

                        type="button" className="px-3 py-2  font-medium text-gray-900 border-r border-y border-gray-200 hover:bg-[#d3d3d324] focus:z-10 focus:ring-0 focus:ring-transparent">
                        <i class="fa-solid fa-eye text-[#008000] cursor-pointer text-[15px]"></i>
                    </button>

                    <button data-modal-target="popup-modal"

                        data-modal-toggle="popup-modal" type="button" className="px-3 py-2  font-medium text-gray-900 border !border-l-0 border-y-gray-100 rounded-e-lg hover:bg-[#d3d3d324] focus:z-10 focus:ring-0">
                        <i className="fa-solid fa-trash text-[#ff0000] text-[15px]"></i>
                    </button>
                </div>
            )
        }
    ]

    const tableHeaderstyle = {
        headCells: {
            style: {
                fontWeight: "bold",
                fontSize: "16px",
            },
        }
    }

    return (

        <div className="e_pages">
            <div className="bg-white rounded-lg pb-4">
                {
                    togglePurchase ?
                        <div>
                            <div className="w-full flex justify-between items-center px-3 pt-4">
                                <p className="text-2xl">
                                    Purchase
                                </p>
                                <button
                                    onClick={() => togglehandler()}
                                    className="bg-[#103d15] hover:bg-[#ff9c40] flex justify-center items-center text-white rounded-lg ease-in-out duration-150 text-sm w-[40px] h-[40px]">
                                    <i className="fa-solid fa-circle-plus"></i>
                                </button>
                            </div>

                            <DataTable
                                columns={columns}
                                fixedHeader
                                isSortable
                                customStyles={tableHeaderstyle}

                                pagination
                                subHeader
                                subHeaderComponent={
                                    <div className="w-full flex justify-between items-center">
                                        <input
                                            type="text"
                                            id="search"
                                            placeholder="Search..."
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                        />
                                        <button type="button" class="p-2.5 ms-2 text-sm bg-[#103d15] hover:bg-[#ff9c40] text-white rounded-lg ease-in-out duration-150  focus:ring-0 focus:outline-none">
                                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                            <span class="sr-only">Search</span>
                                        </button>
                                        <button type="button" class="w-9 h-9 ms-2 text-sm bg-[#103d15] hover:bg-[#ff9c40] text-white rounded-lg ease-in-out duration-150  focus:ring-0 focus:outline-none">
                                            <i class="fa-solid fa-rotate-right"></i>
                                        </button>
                                    </div>
                                }
                            />
                        </div>
                        :
                        <div className="w-full px-3 pb-8">
                            <div className="flex justify-between items-center mb-3 pt-3">
                                <p className="text-2xl">
                                    Create Purchase
                                </p>
                                <div>
                                    <button
                                        className=" hover:font-bold ease-in-out duration-100">
                                        <i class="fa-solid fa-arrow-left-long"></i>
                                        <span className=" pl-2">
                                            Go Back
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <form >
                                <div className="w-full grid grid-cols-2 gap-4">

                                    <div className="">
                                        <div className="mb-3">
                                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name:</label>
                                            <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5 " />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price:</label>
                                            <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5 " />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Manufacturer:</label>
                                            <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5 " />
                                        </div>
                                        <div>
                                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Condition:</label>
                                            <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5 " />
                                        </div>
                                    </div>

                                    <div className="">
                                        <div className="mb-3">
                                            <label for="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type:</label>
                                            <select
                                                id="status"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            >
                                                <option value="Product">Product</option>
                                                <option value="Equipment">Equipment</option>
                                                <option value="Fertilizer">Fertilizer</option>
                                                <option value="Closed">Seed</option>
                                                <option value="Closed">Chemical</option>
                                                <option value="Closed">General</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity:</label>
                                            <input type="number" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5 " />
                                        </div>

                                        <div >
                                            <label
                                                for="firstname"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Date of Purchase:
                                            </label>
                                            <input
                                                type="date"
                                                id=""
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
                                            />
                                        </div>
                                    </div>

                                </div>


                            </form>
                        </div>
                }
            </div>
        </div>

    );
}

export default Purchase;
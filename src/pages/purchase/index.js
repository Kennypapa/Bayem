const Purchase = () => {
    return (

        <div className="e_pages">
            <div className="bg-white rounded-lg pb-4">

                <div className="w-full pt-4 mb-4">
                    <p className="text-2xl font-[500]">
                        Purchase
                    </p>
                </div>

                <form>
                    <div className="w-full grid grid-cols-2 gap-4">
                        <div className="">
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name:</label>
                                <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5 " />
                            </div>
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price:</label>
                                <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5 " />
                            </div>
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Manufacturer:</label>
                                <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5 " />
                            </div>
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Condition:</label>
                                <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5 " />
                            </div>
                        </div>

                        <div className="">

                        </div>

                    </div>
                </form>
            </div>
        </div>

    );
}

export default Purchase;
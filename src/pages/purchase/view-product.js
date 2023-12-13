const ViewProduct = (props) => {
    return (
        <div>
            <div
                id="view-modal"
                data-modal-backdrop="static"
                tabIndex="-1"
                aria-hidden="true"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >


                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow pl-3 pt-3">
                        <div className="mb-4 ">
                            <p className=" text-2xl font-semibold ">
                                Product  Details
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 w-full">
                            <div className="flex">
                                <p className="text-lg">
                                    ProductName:
                                </p>
                                <p className="pl-6 text-lg">
                                    {props.holdAllproducts.productName}
                                </p>
                            </div>

                            <div className="flex">
                                <p>
                                    Price:
                                </p>
                                <p className="pl-6">
                                    {props.holdAllproducts.price}
                                </p>
                            </div>

                            <div className="flex">
                                <p>
                                    Type:
                                </p>
                                <p className="pl-6">
                                    {props.holdAllproducts.type}
                                </p>
                            </div>

                            <div className="flex">
                                <p>
                                    Quantity:
                                </p>
                                <p className="pl-6">
                                    {props.holdAllproducts.quantity}
                                </p>
                            </div>
                            
                        </div>
                        <div>
                            <ul>
                                <li>
                                <div className="flex">
                                <p className="text-lg">
                                    ProductName:
                                </p>
                                <p className="pl-6 text-lg">
                                    {props.holdAllproducts.productName}
                                </p>
                            </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default ViewProduct;
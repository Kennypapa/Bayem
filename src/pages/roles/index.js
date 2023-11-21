import { Modal } from "flowbite";
import { useEffect, useState } from "react";
import EditModal from './edit-modal';
import CreateModal from './create-modal';
import DeleteModal from "./delete-modal";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase.config";
import DataTable from "react-data-table-component";
const Roles = (props) => {

    const [modal, setShowModal] = useState(false);
    const [showModalCreate, setModalCreate] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [roles, setRoles] = useState([]);
    const [title, setTitle] = useState("");
    const [id, setId] = useState("");
    const [deleteId, setDeleteId] = useState("");
    const [showSuccessNotif, setShowSuccessNotif] = useState("");
    const [createNotif, setCreateNotif] = useState("");
    const [deleteNotif, setDeleteNotif] = useState("");
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState([]);
    //=== Referencing to particular collection in firestore
    const usersCollectionRef = collection(db, "roles");

    useEffect(() => {
        setShowModal(
            new Modal(document.querySelector("#static-modal"), {
                backdrop: "dynamic",
                backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
                closable: true,
            })
        )
        setModalCreate(
            new Modal(document.querySelector("#default-modal"), {
                backdrop: "dynamic",
                backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
                closable: true,
            })
        )
        setShowModalDelete(
            new Modal(document.querySelector("#popup-modal"), {
                backdrop: "dynamic",
                backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
                closable: true,
            })
        )
        getRoles();
    }, []);
    //=======Get Roles Handler====//
    const getRoles = async () => {
        const data = await getDocs(usersCollectionRef);
        setRoles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setFilter(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    //=========Edit Handler ======//
    const handleEdit = (id, title) => {
        setTitle(title);
        setId(id);
        modal.show();
    }

    //========= Create Handler =========//
    const handleCreateModal = () => {
        showModalCreate.show();
    }

    //===== DeleteHandler ====//    
    const handleDelete = async (id) => {
        setDeleteId(id)
        showModalDelete.show();
    }

    //======== successHandler ====//
    const successNotif = (success) => {
        setShowSuccessNotif(success);
    }
    //============create-success-notif ===//
    const createSuccessNotif = (success) => {
        setCreateNotif(success);
    }
    //=========== delete Notif ======//
    const handleDeleteNotif = (success) => {
        setDeleteNotif(success)
    }

    //==========search Handler ====//
    const searchhandler = () => {
        const result = roles.filter((role) => {
            return role.title.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilter(result)
    }

    const refreshHandler = () => {
        getRoles();
        setSearch('');
    }
    console.log(title)
    //==============Table Columns && Rows ============//
    const columns = [
        {
            name: "Title",
            selector: (row) => row.title
        },
        {
            name: 'CreatedAt',
            selector: (row) => row.createdAt
        },
        {
            name: "Actions",
            cell: (row) => (
                <div className="inline-flex rounded-md py-2.5" role="group">
                    <button onClick={() => handleEdit(row.id, row.title)}
                        type="button" className="px-3 py-2  font-medium text-gray-900 border border-gray-100 rounded-s-lg hover:bg-[#d3d3d324] focus:z-10 focus:ring-0 focus:ring-transparent">
                        <i className="fa-solid fa-pen-to-square text-[#0e90c6] cursor-pointer text-[15px]"
                        ></i>
                    </button>

                    <button onClick={() => handleDelete(row.id)} data-modal-target="popup-modal"
                        data-modal-toggle="popup-modal" type="button" className="px-3 py-2  font-medium text-gray-900 border !border-l-0 border-y-gray-100 rounded-e-lg hover:bg-[#d3d3d324] focus:z-10 focus:ring-0">
                        <i className="fa-solid fa-trash text-[#c60e0e] text-[15px]"></i>
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

        <div className="e_pages pb-20">
            <div className="bg-white rounded-lg pb-4">
                <div className="w-full flex justify-between items-center px-3 pt-4">
                    <p className="text-2xl">
                        Roles
                    </p>
                    <button
                        onClick={() => handleCreateModal()}
                        className="bg-[#103d15] hover:bg-[#ff9c40] text-white rounded-lg ease-in-out duration-150 text-sm w-[150px] h-[40px]">
                        Create New Role
                        <i className="fa-solid pl-2 fa-circle-plus"></i>
                    </button>
                </div>
                <DataTable
                    columns={columns}
                    fixedHeader
                    isSortable
                    customStyles={tableHeaderstyle}
                    data={filter}
                    pagination
                    subHeader
                    subHeaderComponent={
                        <div className="w-full flex justify-between items-center">
                            <input
                                type="text"
                                id="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search..."
                                className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"

                            />
                            <button type="button" onClick={() => searchhandler()} class="p-2.5 ms-2 text-sm bg-[#103d15] hover:bg-[#ff9c40] text-white rounded-lg ease-in-out duration-150  focus:ring-0 focus:outline-none">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                            <button onClick={() => refreshHandler()} type="button" class="w-9 h-9 ms-2 text-sm bg-[#103d15] hover:bg-[#ff9c40] text-white rounded-lg ease-in-out duration-150  focus:ring-0 focus:outline-none">
                                <i class="fa-solid fa-rotate-right"></i>
                            </button>
                        </div>
                    }
                />
            </div>
            <EditModal successNotif={successNotif} modal={modal} editTitle={title} userId={id} setEditTitle={setTitle} getRoles={getRoles} />
            <CreateModal getRoles={getRoles} successNotif={createSuccessNotif} showModal={showModalCreate} />
            <DeleteModal deleteId={deleteId} showDeleteNotif={handleDeleteNotif} getRoles={getRoles} hideDeleteModal={showModalDelete} />
            {
                showSuccessNotif && (
                    <div className="fixed bottom-8 z-40 right-10 px-4 h-[55px] mb-1 text-sm text-green-800 bg-green-200 w-[300px] flex justify-start items-center" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="font-medium pl-2"> Role Edited  Successfully!</span>

                    </div>
                )
            }
            {
                createNotif && (
                    <div className="fixed bottom-8 z-40 right-10 px-4 h-[55px] mb-1 text-sm text-green-800 bg-green-200 w-[300px] flex justify-start items-center" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="font-medium pl-2">New role created successfully!</span>

                    </div>
                )
            }
            {
                deleteNotif && (
                    <div className="fixed bottom-8 z-40 right-10 px-4 h-[55px] mb-1 text-sm text-green-800 bg-green-200 w-[300px] flex justify-start items-center" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="font-medium pl-2">Role deleted successfully!</span>
                    </div>
                )
            }
        </div>
    )
}

export default Roles;
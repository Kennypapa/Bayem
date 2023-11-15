import { initFlowbite } from "flowbite";
import { useEffect, useState } from "react";
import EditModal from './edit-modal';
import CreateModal from './create-modal';
import DeleteModal from "./delete-modal";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase.config";
const Roles = () => {

    const [roles, setRoles] = useState([]);
    const [title, setTitle] = useState("");
    const [id, setId] = useState("");
    const [deleteId, setDeleteId] = useState("");

    //=== Referencing to particular collection in firestore
    const usersCollectionRef = collection(db, "roles");
    useEffect(() => {
        getRoles();
    }, []);

    //=======Get Roles Handler====//
    const getRoles = async () => {
        const data = await getDocs(usersCollectionRef);
        setRoles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setTimeout(() => {
            initFlowbite();
        }, 200);
    };

    //=========Edit Handler ======//
    const handleEdit = (id, title) => {
        setTitle(title);
        setId(id);
    }


    //===== DeleteHandler ====//
    const handleDelete = async (id) => {
       setDeleteId(id)
    }
    return (
        <div className="e_pages">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-3 bg-white">
                <div className="flex justify-between items-center py-3">
                    <p className=" font-semibold text-lg">
                        Roles
                    </p>
                    <div>
                        <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="bg-[#103d15] hover:bg-[#ff9c40] text-white rounded-lg ease-in-out duration-150 text-sm w-[150px] h-[40px]">
                            Create New Role <i className="fa-solid pl-2 fa-circle-plus"></i>
                        </button>
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-white">
                        <tr>
                            <th scope="col" className="pr-6 pl-4 py-3">
                                Title
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            roles.map((role) => {
                                return (
                                    <tr className="bg-white border-b border-b-gray-100 hover:bg-gray-50" key={role.id}>
                                        <th scope="row" className="pr-6 pl-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {role.title}
                                        </th>

                                        <td className="flex items-center px-6 py-3">

                                            <button
                                                onClick={() => handleEdit(role.id, role.title)} data-modal-target="static-modal"
                                                data-modal-toggle="static-modal">
                                                <i className="fa-solid fa-pen-to-square text-[#174b09] mr-4 cursor-pointer"
                                                ></i>
                                            </button>

                                            <i className="fa-solid fa-eye mr-4"></i>
                                            <button
                                            onClick={() => handleDelete(role.id)}
                                                data-modal-target="popup-modal"
                                                data-modal-toggle="popup-modal"
                                            >
                                                <i className="fa-solid fa-trash text-[#f44269] text-lg"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
         

            <EditModal editTitle={title} userId={id} setEditTitle={setTitle} getRoles={getRoles}  />
            <CreateModal getRoles={getRoles} />
            <DeleteModal deleteId={deleteId} getRoles={getRoles}/>
        </div>
    )
}

export default Roles;
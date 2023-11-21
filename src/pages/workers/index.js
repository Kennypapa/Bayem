import { useState, useEffect } from "react";
import {  getDocs, collection } from "firebase/firestore";
import CreateModal from './create-modal';
import { Modal } from "flowbite";
import DataTable from "react-data-table-component";
import { db } from "../../firebase.config";

const Workers = () => {
  const [showModalCreate, setModalCreate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [createNotif, setCreateNotif] = useState("");
  const [allWorkers, setAllWorkers] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  useEffect(() => {
    setModalCreate(
      new Modal(document.querySelector("#default-modal"), {
        backdrop: "dynamic",
        backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
        closable: true,
      })
    )
    getWorkers();
  }, []);

  //=== Referencing to particular collection in firestore ==//
  const usersCollectionRef = collection(db, "workers");
  //========= Create Handler =========//
  const handleCreateModal = () => {
    showModalCreate.show();
  }

  //============create-success-notif ===//
  const createSuccessNotif = (success) => {
    setCreateNotif(success);
  }

  //=============== fetch all workers ===========//
  const getWorkers = async () => {
    const data = await getDocs(usersCollectionRef);
    setAllWorkers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setFilter(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

   
  //==========search Handler ====//
  const searchhandler = () => {
    const result = allWorkers.filter((worker) => {
      return worker.title.toLowerCase().match(search.toLocaleLowerCase());
    });
    setFilter(result);
  }
   console.log(allWorkers)
 

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
      selector: (row) => <div class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">{row.role}</div>
    },
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
        <div className="w-full flex justify-between items-center px-3 pt-4">
          <p className="text-2xl">
            Create Worker
          </p>
          <button
            onClick={() => handleCreateModal()}
            className="bg-[#103d15] hover:bg-[#ff9c40] flex justify-center items-center text-white rounded-lg ease-in-out duration-150 text-sm w-[40px] h-[40px]">
            <i className="fa-solid fa-circle-plus"></i>
          </button>
        </div>

        <DataTable
          columns={columns}
          fixedHeader
          isSortable
          customStyles={tableHeaderstyle}
          data={allWorkers}
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#103d15] focus:border-[#103d15] block w-full p-2.5"
              />
              <button type="button" onClick={() => searchhandler()} class="p-2.5 ms-2 text-sm bg-[#103d15] hover:bg-[#ff9c40] text-white rounded-lg ease-in-out duration-150  focus:ring-0 focus:outline-none">
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
      <CreateModal successNotif={createSuccessNotif} showModal={showModalCreate} />


      {/*=========Nofication ======*/}
      {
        createNotif && (
          <div className="fixed bottom-8 z-40 right-10 px-4 h-[55px] mb-1 text-sm text-green-800 bg-green-200 w-[300px] flex justify-start items-center" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="font-medium pl-2">New worker created successfully!</span>

          </div>
        )
      }
    </div>
  );
};

export default Workers;

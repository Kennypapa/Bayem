import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import CreateModal from './create-modal';
import { Modal } from "flowbite";

const Workers = () => {
  const [showModalCreate, setModalCreate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [createNotif, setCreateNotif] = useState("");
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

  }, []);
  //========= Create Handler =========//
  const handleCreateModal = () => {
    showModalCreate.show();
  }

  const inputChangeHandler = (input, value) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [input]: value,
      };
    });
  };

  //============create-success-notif ===//
  const createSuccessNotif = (success) => {
    setCreateNotif(success);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setIsLoading(false);
    setUserData("");
  }

  return (
    <div className="e_pages">
      <div className="bg-white rounded-lg pb-4 px-3">
        <div className="w-full flex justify-between items-center pt-4">
          <p className="text-2xl">
            Create Worker
          </p>
          <button
            onClick={() => handleCreateModal()}
            className="bg-[#103d15] hover:bg-[#ff9c40] text-white rounded-lg ease-in-out duration-150 text-sm w-[130px] h-[40px]">
            New Worker
            <i className="fa-solid pl-2 fa-circle-plus"></i>
          </button>
        </div>
        
      </div>
      <CreateModal successNotif={createSuccessNotif} showModal={showModalCreate} />
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
    </div>
  );
};

export default Workers;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import { Button } from "@material-tailwind/react";
import Update from "../components/Update";

const Home = () => {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const handleModal = () => setOpen((prev) => !prev);
  const updateModal = (data) => {
    setOpenModal(!openModal);
    setDataUpdate(data);
    console.log(data);
  };

  const read = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/List`);
      setList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    read();
  }, [openModal]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/List/` + id);
      read();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col gap-5 bg-white">
        <div className="mx-auto mt-20 gap-5 flex flex-col">
          <img
            src="./Naruto.png"
            alt="Logo"
            className="h-16 w-32 mx-auto lg:mt-10"
          />
        </div>
        <h1 className="italic text-center text-3xl text-black">
          Data Linktree
        </h1>
        <div className="flex flex-col gap-2 mx-auto lg:items-start">
          <Button
            type="button"
            className="btn bg-blue-600 ml-3 hidden lg:block "
            onClick={handleModal}
            variant="gradient"
          >
            Tambah Data
          </Button>
          <div className="overflow-x-auto lg:w-[1100px] w-96 mb-20">
            <table className="table text-center">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {list.map((list, no) => (
                  <tr className="list" key={list.id}>
                    <th>{no + 1}</th>
                    <td>{list.name}</td>
                    <td className="flex justify-center">
                      <button
                        type="button"
                        className="btn bg-yellow-400 w-12 mr-1"
                        onClick={() => updateModal(list)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn bg-red-600 w-16"
                        onClick={() => handleDelete(list.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button
              type="button"
              className="btn mt-5 w-72 mx-auto bg-blue-600 text-center mb-10 lg:hidden flex justify-center"
              onClick={handleModal}
              variant="gradient"
            >
              Tambah Data
            </Button>
          </div>
        </div>
      </div>
      <Modal handleModal={handleModal} read={read} openModal={open} />
      <Update
        handleModal={updateModal}
        read={read}
        openModal={openModal}
        dataUpdate={dataUpdate}
      />
    </>
  );
};

export default Home;

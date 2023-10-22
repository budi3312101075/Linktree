import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [list, setList] = useState([]);
  const [tambah, setTambah] = useState({
    name: "",
    link: "",
  });

  const tambahData = (e) => {
    setTambah((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    try {
      await axios.post("http://localhost:8800/List", tambah);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const read = async () => {
      try {
        const res = await axios.get("http://localhost:8800/List");
        setList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    read();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/List/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col gap-5 bg-white">
        <div className="mx-auto mt-20 gap-5 flex flex-col">
          <img
            src="./src/assets/Naruto.png"
            alt="Logo"
            className="h-16 w-32 mx-auto lg:mt-10"
          />
        </div>
        <h1 className="italic text-center text-3xl text-black">
          Data Linktree
        </h1>
        <div className="flex flex-col gap-2 mx-auto lg:items-start">
          <button
            className="btn bg-blue-600 ml-3 hidden lg:block "
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Tambah Data
          </button>
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
                        className="btn bg-yellow-400 w-12 mr-1"
                        onClick={() => {
                          document.getElementById("edit_modal").showModal();
                        }}
                      >
                        Edit
                      </button>
                      <button
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
            <button
              className="btn mt-5 w-72 mx-auto bg-blue-600 text-center mb-10 lg:hidden flex justify-center"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Tambah Data
            </button>
          </div>
        </div>
      </div>

      {/* modal edit data */}
      <dialog id="edit_modal" className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-3">
            <div className="flex  mx-auto text-white">
              <h1>Edit data</h1>
            </div>
            <form className="flex flex-col gap-2 items-center text-white">
              <p className="flex mr-[275px]">Name</p>
              <input
                name="name"
                type="text"
                className="bg-white text-black pl-1 w-80 rounded-md bg"
              />
              <p className="mr-[290px]">Link</p>
              <textarea
                name="link"
                type="text"
                className="bg-white text-black pl-1 w-80 rounded-md bg"
              />
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog ">
              <button
                type="submit"
                className="btn mr-4 bg-blue-500 border-none"
              >
                Submit
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* modal tambah data */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-3">
            <div className="flex  mx-auto text-white">
              <h1>Tambah data</h1>
            </div>
            <div className=" flex gap-2 items-center text-white">
              <p>Name</p>
              :
              <input
                onChange={tambahData}
                name="name"
                type="text"
                className="bg-white text-black pl-1 w-80 rounded-md bg"
              />
            </div>
            <div className="flex gap-4 items-center text-white">
              <p>Link</p>
              :
              <textarea
                onChange={tambahData}
                name="link"
                type="text"
                className="bg-white text-black pl-1 w-80 rounded-md bg"
              />
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog ">
              <button
                onClick={handleClick}
                type="submit"
                className="btn mr-4 bg-blue-500 border-none"
              >
                Submit
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Home;

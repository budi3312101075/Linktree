import React from "react";

const Tambah = () => {
  return (
    <>
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

export default Tambah;

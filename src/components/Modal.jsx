import React from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Modal = (props) => {
  const { handleModal, openModal, read } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/List", {
        name: e.target.name.value,
        link: e.target.link.value,
      });
      read();
      handleModal();
    } catch (error) {
      console.error(error);
    } finally {
      e.target.name.value = "";
      e.target.link.value = "";
    }
  };

  return (
    <div>
      <Dialog
        open={openModal}
        handler={handleModal}
        className="bg-blue-gray-500"
      >
        <DialogHeader>Linktree</DialogHeader>
        <DialogBody>
          <form onSubmit={handleSubmit}>
            <div className=" flex gap-2 items-center text-white mb-2">
              <p>Name</p>
              :
              <input
                name="name"
                id="name"
                type="text"
                className="bg-white text-black pl-1 w-80 rounded-md "
              />
            </div>
            <div className="flex gap-4 items-center text-white">
              <p>Link</p>
              :
              <textarea
                name="link"
                id="link"
                type="text"
                className="bg-white text-black pl-1 w-80 rounded-md bg"
              />
            </div>
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={handleModal}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button type="submit" variant="gradient" color="green">
                <span>Confirm</span>
              </Button>
            </DialogFooter>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default Modal;

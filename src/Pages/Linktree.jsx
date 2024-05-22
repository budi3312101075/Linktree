import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Linktree = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fecthAllList = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/List`);
        setList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fecthAllList();
  }, []);

  return (
    <>
      <div className="bg-white min-h-screen flex flex-col ">
        <img
          src="./Naruto.png"
          alt="Logo"
          className="h-20 w-32 mx-auto mt-20"
        />
        <h1 className="text-3xl italic font-bold mx-auto mt-5 text-black">
          Wellcome My LinkTree
        </h1>
        <p className="mt-3 mx-auto italic text-black">
          Hadirku Sempurnakan harimu✨
        </p>
        <Link className="mx-auto" to="/home">
          Masuk ke admin
        </Link>
        <div className="mx-auto mt-5 flex flex-col">
          {list.map((list, no) => (
            <div className="list" key={list.id}>
              <Link to={list.link} target="_blank">
                <button className="btn w-80 bg-transparent text-black hover:bg-blue-400  border m-1">
                  {list.name}
                </button>
              </Link>
            </div>
          ))}
          <div className="flex gap-4 justify-center mt-5 mb-10">
            <div>
              <Link to="https://daisyui.com/components/button/" target="_blank">
                <img src="./instagram.gif" alt="" className="h-9" />
              </Link>
            </div>
            <div>
              <Link to="https://daisyui.com/components/button/" target="_blank">
                <img src="./WhatsApp.gif" alt="" className="h-9" />
              </Link>
            </div>
            <div>
              <a href="mailto:budiprayoga5103@gmail.com" target="_blank">
                <img src="./Email.gif" alt="" className="h-9" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Linktree;

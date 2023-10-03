import React, { useState } from "react";
import { HiHome } from "react-icons/hi";
import { BsSearch, BsBell, BsFillSunFill } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineMenu, AiOutlinePlusCircle } from "react-icons/ai";
import { BiSun, BiMessageAltError } from "react-icons/bi";
import { WiTime8 } from "react-icons/wi";
import { MdVideoLibrary, MdOutlineExplore, MdSettings } from "react-icons/md";
import daadaa from "../images/profile.jpg";
import { useRecoilState } from "recoil";
import { menuMOdels } from "./model/atom";
import { useRef } from "react";
import { useEffect } from "react";

function BottomSide() {
  const [showModel, setShowModel] = useRecoilState(menuMOdels);
  const [open, setOpen] = useState(false);

  // let menuRef = useRef();

  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setOpen(false);
  //       console.log("daadaa", menuRef.current);
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });
  return (
    <div className="flex relative flex-col space-y-[1.5rem] justify-start w-full   items-center">
      <div className="flex cursor-pointer space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <HiHome className="w-8 h-8" />
        <h1 className=" hidden xl:block font-bold">Home</h1>
      </div>
      <div className="flex cursor-pointer space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <BsSearch className="w-7 h-7" />
        <h1 className="hidden xl:block ">Search</h1>
      </div>
      <div className="flex cursor-pointer space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <MdOutlineExplore className="w-7 h-7" />
        <h1 className="hidden xl:block ">Explore</h1>
      </div>
      <div className="flex cursor-pointer space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <RiMessengerLine className="w-7 h-7" />
        <h1 className="hidden xl:block ">Massages</h1>
      </div>
      <div className="flex cursor-pointer space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <BsBell className="w-7  h-7" />
        <h1 className="hidden xl:block ">Notification</h1>
      </div>
      <div className="flex cursor-pointer space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <AiOutlinePlusCircle className="w-7 h-7" />
        <h1 className="hidden xl:block ">Create</h1>
      </div>
      <div className="flex cursor-pointer space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <img src={daadaa} alt="profile" className="w-7 rounded-full h-7" />
        <h1 className="hidden xl:block ">Profile</h1>
      </div>
      <div
        // ref={menuRef}
        onClick={() => {
          // setShowModel(true),
          setOpen(!open);
        }}
        className="flex cursor-pointer space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center"
      >
        <AiOutlineMenu className="w-7 h-7" />
        <h1 className="hidden xl:block ">More</h1>
      </div>

      {/* menu bar */}

      {open && (
        <div
          className={`h-[27rem]  w-[16.5rem] p-2 absolute bottom-10  left-0 rounded-2xl  shadow-2xl bg-white `}
        >
          {/* <div className=' w-full h-full bg-red-00 m-2 p-3 flex flex-col space-y-4 '> */}
          <div className="menu-bar">
            <MdSettings className="menubar-icons" />
            Setting
          </div>
          <div className="menu-bar">
            <WiTime8 className="menubar-icons" />
            Your Activity
          </div>
          <div className="menu-bar">
            <MdSettings className="menubar-icons" />
            Saved
          </div>
          <div className="menu-bar">
            <BiSun className="menubar-icons" />
            Switch appearance
          </div>
          <div className="menu-bar">
            <BiMessageAltError className="menubar-icons" />
            Report a problem
          </div>
          <div className="w-full h-[4px] bg-slate-200"></div>
          <div
            className="menu-bar"
            onClick={
              () => setShowModel(true)
              // , setOpen(false)
            }
          >
            Switch accounts
          </div>

          <div className="w-full h-[1px]  bg-slate-200"></div>
          <div className="menu-bar">Log out</div>

          {/* </div> */}
        </div>
      )}
      {/* <div className="flex cursor-pointer space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <BsFillSunFill className="w-7 h-7" />
        <h1 className="">Sun</h1>
      </div> */}
    </div>
  );
}

export default BottomSide;

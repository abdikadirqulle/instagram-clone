import React from 'react'

import {HiHome} from 'react-icons/hi'
import {BsSearch, BsBell} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineMenu,AiOutlinePlusCircle} from 'react-icons/ai'
import {MdVideoLibrary, MdOutlineExplore} from 'react-icons/md'
import daadaa from '../images/profile.jpg'
function BottomSide() {
  return (
    <div className="flex flex-col space-y-[1.5rem] justify-start w-full   items-center">
      <div className="flex space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <HiHome className="w-8 h-8" />
        <h1 className="font-bold">Home</h1>
      </div>
      <div className="flex space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <BsSearch className="w-7 h-7" />
        <h1 className="">Search</h1>
      </div>
      <div className="flex space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <MdOutlineExplore className="w-7 h-7" />
        <h1 className="">Explore</h1>
      </div>
      <div className="flex space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <RiMessengerLine className="w-7 h-7" />
        <h1 className="">Masseges</h1>
      </div>
      <div className="flex space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <BsBell className="w-7  h-7" />
        <h1 className="">Natification</h1>
      </div>
      <div className="flex space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <AiOutlinePlusCircle className="w-7 h-7" />
        <h1 className="">Create</h1>
      </div>
      <div className="flex space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <img src={daadaa} alt="profile" className="w-7 rounded-full h-7" />
        <h1 className="">Profile</h1>
      </div>
      <div className="flex space-x-4 hover:bg-[#F2F2F2] duration-100 rounded-lg px-1 py-2 justify-start w-full items-center">
        <AiOutlineMenu className="w-7 h-7" />
        <h1 className="">More</h1>
      </div>
    </div>
  );
}

export default BottomSide
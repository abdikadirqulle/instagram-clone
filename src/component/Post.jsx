import React from 'react'
import {TbMenu, TbMessageCircle2, TbShare3} from 'react-icons/tb'
import {FcLike} from 'react-icons/fc'
import { MdOutlineSaveAlt } from 'react-icons/md';
import {IoMdCheckmarkCircle} from "react-icons/io"
import {TfiLayoutMenuSeparated} from "react-icons/tfi"

function Post({username,postPhoto,profilePid, caption}) {
  return (
    <div className="flex mb-4 border flex-col">
      <div className="flex justify-between items-center ">
        <div className="flex gap-1  justify-center items-center">
          <div className="">
            <img
              src={postPhoto}
              alt=""
              className="rounded-full w-7 h-7 cursor-pointer "
            />
          </div>
          <div className="gap-0">
            <div className="flex">
               <p className="font-semibold cursor-pointer ">{username}</p>
              <IoMdCheckmarkCircle className="w-5 h-5 text-blue-600" />
            </div>
            <div className="">
                 <p className='text-xs'>Original Audio</p>
            </div>
             </div>
           
        </div>

        <div className="">
          <TfiLayoutMenuSeparated className="hover:text-gray-500 cursor-pointer" />
        </div>
      </div>
      {/* qeybta sawirka */}

      <div className="mt-3 ">
        <img src={postPhoto} alt="" className=" rounded-sm" />
      </div>

      {/* icons */}

      <div className="flex justify-between mt-3 items-center mx-2">
        <div className="flex  justify-center gap-3  cursor-pointer p-2 items-center">
          <FcLike className="h" />
          <TbMessageCircle2 />
          <TbShare3 />
        </div>

        <div className="">
          <MdOutlineSaveAlt />
        </div>
      </div>
      {/* caption */}
      <div className="mx-2">
        <p className="text-sm">
          <span className="font-normal">{username}</span> {caption}
        </p>
      </div>
    </div>
  );
}

export default Post
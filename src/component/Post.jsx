import React from 'react'
import {BsEmojiSmile} from 'react-icons/bs'
import {IoMdCheckmarkCircle} from "react-icons/io"
import {TfiLayoutMenuSeparated} from "react-icons/tfi"
import three from '../images/three dot.png'
import IconsBar from './IconsBar';

function Post({username,comment,postPhoto,profilePid,likes, caption}) {
  return (
    <div className="flex mb-4  flex-col">
      <div className="flex justify-between items-center ">
        <div className="flex gap-1  justify-center items-center">
          <div className="">
            <img
              src={profilePid}
              alt=""
              className="rounded-full border-2 p-[1px] border-[#ED0592] w-8 h-8 cursor-pointer "
            />
          </div>
          <div className="gap-0">
            <div className="flex">
              <p className="font-medium text-sm cursor-pointer ">{username}</p>
              <IoMdCheckmarkCircle className="w-4 h-4 text-blue-600" />
            </div>
            <div className="">
              <p className="text-xs ">Original Audio</p>
            </div>
          </div>
        </div>

        <div className="">
          <img
            src={three}
            className="hover:scale-75 duration-100 w-5 cursor-pointer"
          />
        </div>
      </div>
      {/* qeybta sawirka */}

      <div className="mt-3 ">
        <img src={postPhoto} alt="" className=" rounded-[4px]" />
      </div>

      {/* qeybta hoose ee iconska */}
      <IconsBar />
      {/* likes */}
      <div className="m-0">
        <p className="font-semibold text-sm">{likes} likes</p>
      </div>

      {/* caption */}
      <div className="mx-2 mt-2">
        <p className="text-sm">
          <span className="font-semibold text-sm p-0">{username}</span>{" "}
          {caption}
        </p>
      </div>
      {/* comments */}
      <div className="mt-2">
        <p className="text-sm text-gray-400">View all {comment} comments</p>
      </div>
      {/* Add comments */}
      <div className="flex mt-3 justify-between items-center">
        <input className='outline-none text-[13px] text-gray-600 w-full mr-4 placeholder:text-[13px] placeholder:text-gray-400' type="text" placeholder=' Add a comment…' />
        <BsEmojiSmile className="w-3 hover:text-gray-300 cursor-pointer text-gray-400 h-3" />
      </div>

      {/* the last line */}
      <div className="boder border-b-[1px] mt-3  w-full border-gray-300"></div>
    </div>
  );
}

export default Post
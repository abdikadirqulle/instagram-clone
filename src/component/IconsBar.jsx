import React, { useState } from 'react'
import shareIcon from '../images/shareIcon.png'
import loveIcon from '../images/loveIcon.png'
import saveIcon from '../images/saveIcon.png'
import commentIcon from '../images/commentIcon.png'
function IconsBar() {
   
  return (
    <div className='flex mt-4 mb-2.5 justify-between items-center'>
        <div className="flex space-x-4 justify-center items-center">
            <div className="">
                <img  src={loveIcon} alt="" className={`w-7 cursor-pointer  `}/>
            </div>
            <div className="">
                <img  src={commentIcon} alt=""  className='w-6 cursor-pointer'/>
            </div>
            <div className="">
                <img src={shareIcon} alt="" className='w-7 cursor-pointer'/>
            </div>
        </div>
        <div className="">
                <img src={saveIcon} alt="" className='w-7 cursor-pointer'/>
            </div>
    </div>
  )
}

export default IconsBar
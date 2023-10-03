import React from 'react'

function Story({userName, avatar}) {
  
  return (
    <div>
        <img className='rounded-full p-[1.5px] border-[2px] cursor-pointer border-[#ED0592] ' src={avatar} alt="" />
        <p className='text-xs text-[] text-center w-[60px] cursor-pointer truncate'>{userName}</p>
    </div>
  )
}

export default Story
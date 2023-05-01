import React from 'react'

function Story({userName, avatar}) {
  return (
    <div>
        <img className='rounded-full p-[1.5px] border-[3px] cursor-pointer border-red-500 ' src={avatar} alt="" />
        <p className='text-xs text-[] text-center w-[60px] cursor-pointer truncate'>{userName}</p>
    </div>
  )
}

export default Story
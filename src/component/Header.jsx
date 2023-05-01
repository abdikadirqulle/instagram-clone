import React from 'react'
import image from '../images/name.png'
import BottomSide from './BottomSide';
function Header() {
  return (
    <div className="flex hidden md:flex flex-col pt-8 pl-3.5 pr-8">

      {/* top side */}

      <div className="">
        <img src={image} alt="instagram" className='w-[6.7rem]'/>
      </div>

      {/* bottom side */}

      <div className=" pt-[2rem]">
       <BottomSide />
      </div>
    </div>
  );
}

export default Header
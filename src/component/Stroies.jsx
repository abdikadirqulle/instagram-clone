import React, { useEffect, useRef, useState } from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'


function Stroies() {
    const [Stroies, setStroies] = useState([])
    const [isIScroll,setIsIScroll] = useState(false)
    const rowRef = useRef(null)
    

    useEffect(() => {
        setStroies(
             [...Array(30)].map((profile) => ({
          userId: faker.datatype.uuid(),
          username: faker.internet.userName(),
          avatar: faker.image.avatar(),
        }))
        ); 
      
    },[]);

    const handalScroll =(direction) =>{
      setIsIScroll(true);
      if(rowRef.current) {
         const {clientWidth , scrollLeft} = rowRef.current
         const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
         rowRef.current.scrollTo({left : scrollTo, behavior : "smooth"})
      }
  }

  if(!Stroies){
    return <p>Loading...</p>
  }
 
  return (
    <div>
      <div className='relative'>
       <BsChevronLeft 
       onClick={() => handalScroll("left")}
        className={` ${!isIScroll ? 'hidden' : ''} w-6 h-6 p-1 absolute left-0 cursor-pointer  top-4 mx-3 bg-slate-100 rounded-full`} 
        
        />
        <div 
        ref={rowRef}
        className='flex  space-x-3  rounded-lg  overflow-x-scroll scrollbar-none scrollbar-thin scrollbar-thumb-gray-300'>
          
        {Stroies.map((profile) => (
          <>
            <Story
            
             key={profile.userId}
              userName={profile.username}
              avatar={profile.avatar}
            />
          </>
        ))}
        </div>
          <BsChevronRight 
             onClick={()=> handalScroll("right")}
          className='z-50 w-6  h-6 bottom-0 absolute right-0 bg-slate-100  
         rounded-full top-4 mx-3 p-1 cursor-pointer' 
        />
      </div>
    </div>
  );
}

export default Stroies
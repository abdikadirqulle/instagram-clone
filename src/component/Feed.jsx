import React from 'react'
import Stroies from './Stroies'
import Posts from './Posts'
import RightSide from './RightSide';

function Feed() {
  return (
   <div className="">
   <div className="relative mt-9 flex gap-9 ">
      <section className="pt-4 max-w-[40rem]">
        {/* stories */}
        <Stroies />
        {/* Posts */}
        <div className='  max-w-[25rem] mx-auto'>
        <Posts />
        </div>
      

      </section>
      <section className="hidden xl:block">
        {/* mini profli */}
        <RightSide />
      </section>
    </div>
   </div>
  );
}

export default Feed
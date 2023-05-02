import React from 'react'
import Stroies from './Stroies'
import Posts from './Posts'
import RightSide from './RightSide';

function Feed() {
  return (
    <div className="mt-10 flex ">
      <section className=" mt-4">
        {/* stories */}
        <Stroies />
        {/* Posts */}
        <Posts />
      </section>

      <section className=" w-[30rem] absolute right-0 h-screen ">
        {/* mini profli */}
        <RightSide />
      </section>
    </div>
  );
}

export default Feed
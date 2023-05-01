import React from 'react'
import Stroies from './Stroies'
import Posts from './Posts'

function Feed() {
  return (
    <div className='mt-10 w-[40rem]'>
        <section className='mt-4'>
            {/* stories */}
            <Stroies />
            {/* Posts */}
            <Posts />
        </section>

        <section>
            {/* mini profli */}
        </section>
    </div>
  )
}

export default Feed
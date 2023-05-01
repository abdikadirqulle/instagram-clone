import React from 'react'
import profile from '../images/daadaa.jpg'
import Post from './Post'

function Posts() {
    const  posts = [{
        id : '123',
        usename : "Abdikadir qulle",
        profilePid : profile,
        postPhoto : profile,
        caption : "hellow form daadaa"
    }
    
   , {
        id : '343',
        usename : "omar dev",
        profilePid : profile,
        postPhoto : profile,
        caption : "asc azxapta setihin "
    }
]
  return (
    <div className='mt-[3rem]  mx-[10rem] px-4'>
        {
            posts.map((post) => (
                <Post
                key={post.id}
                username={post.usename}
                postPhoto={post.postPhoto}
                profilePid={post.profilePid}
                caption={post.caption}
                />
            ))
        }
    </div>
  )
}

export default Posts
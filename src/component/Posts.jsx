import React from 'react'
import profile from '../images/pro.jpg'
import postPhoto from '../images/moha.jpg'
import Ak47 from '../images/Ak47.jpg'
import omarDev from '../images/omarDev.jpg'
import maria from '../images/maria.jpg'
import englineer from '../images/englineer.jpg'
import Post from './Post'

function Posts() {
    const posts = [
      {
        id: "123",
        usename: "Abdikadir qulle",
        profilePid: Ak47,
        postPhoto: englineer,
        caption:
          "we continue to learn a lot about what is required to keep our crewmembers healthy, so that not only do they enjoy success someday going to Mars and directly contributing to that is very gratifying.”",
          likes : "43,009",
          comment : "120"
        },

      {
        id: "343",
        usename: "omar dev",
        profilePid: omarDev,
        postPhoto: postPhoto,
        caption: "We are actively building the bridge to the Moon and then on to Mars… We’ve learned a lot over the past two dott...... ",
        likes : "12,309",
        comment : "430"
     
      },
      {
        id: "100",
        usename: "maria",
        profilePid: profile,
        postPhoto: maria,
        caption: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam nesciunt reprehenderit sed non omnis veniam voluptas quos architecto inventore quidem",
        likes : "23,450",
        comment : "99"
      },
    ];
  return (
    <div className='mt-[3rem]  max-w-[25rem] mx-auto px-4'>
        {
            posts.map((post) => (
                <Post
                key={post.id}
                username={post.usename}
                postPhoto={post.postPhoto}
                profilePid={post.profilePid}
                caption={post.caption}
                likes={post.likes}
                comment={post.comment}
                />
            ))
        }
        
    </div>
  )
}

export default Posts
import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Story from './Story';

function Stroies() {
    const [Stroies, setStroies] = useState([])

    useEffect(() => {
        setStroies(
             [...Array(30)].map((profile) => ({
          userId: faker.datatype.uuid(),
          username: faker.internet.userName(),
          avatar: faker.image.avatar(),
        }))
        );
       
    },[]);

    console.log(Stroies)
  return (
    <div>
      <div className="flex space-x-3 bg-white border mr-1  rounded-lg overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300">
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
    </div>
  );
}

export default Stroies
import React from 'react'
import profile from '../images/profile.jpg'
import Friends from './Friends';
const RightSide = () => {
  return (
    <div>
      <div className="mx-3">
        {/* profile part */}
        <div className="flex mt-6   justify-between items-center">
          <div className="flex">
            <div className="">
              <img src={profile} alt="" className="rounded-full w-12 h-12" />
            </div>
            <div className="gap-0 ml-2">
              <h1 className="font-semibold text-md">daadaa_33</h1>
              <h2 className="text-gray-500 font-normal text-sm">
                Abdikadir Abdirahman
              </h2>
            </div>
          </div>
          <div className="">
            <h1 className="font-semibold text-blue-600 ">Switch</h1>
          </div>
        </div>
        {/* suggested part */}
        <div className="flex mt-4  justify-between items-center">
          <h2 className="text-gray-400 font-semibold text-sm">
            Suggested for you
          </h2>
          <h2 className="text-sm  font-medium">See All</h2>
        </div>
        {/* friends part */}
        <div className="">
          <Friends />
        </div>
        {/* bottom part */}
        <div className="flex flex-col space-y-">
          <p className='text-xs text-gray-300 ' >About-Help-Press=API-Jobs-Privacy-Terms.Locations</p>
          <p className='text-xs text-gray-300 '>Language.Meta Verified</p>
          <p className='text-xs text-gray-300 pt-4'>@023 INSTAGRAM FROM META</p>
        </div>
      </div>
    </div>
  );
}

export default RightSide
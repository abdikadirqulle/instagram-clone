import { Modal } from '@mui/material'
import React from 'react'
import { useRecoilState } from 'recoil'
import {menuMOdels } from './atom'


export const MenuModel = () => {
    const [showModel , setShowModel] = useRecoilState(menuMOdels)

    const handleClose = () => {
      setShowModel(false);
    };
  return (
    <div>
       
<Modal
className="fixed !top-7 left-0  right-0 z-50 mx-auto  flex justify-center items-center w-full max-w-4xl rounded-md"
  open={showModel}
  onClose={handleClose}
  
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
    <div className='bg-white w-[34rem] h-72 outline-none'>
      <h1>Helow world!..</h1>
    </div>
  </Modal>
    </div>
  )
}



//  export const profileMenu = () => {
//   return (
//     <div>profileMenu</div>
//   )
// }

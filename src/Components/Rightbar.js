import React from 'react'
import '../Styles/rightbar.css'
import { useUserAuth } from '../Context/UserAuthContext'

const Rightbar = () => {
  const { setModal } = useUserAuth()
  const handleHideModal = () => {
    setModal(false)
  }

  return (
    <div className='rightbar_outer_div' onClick={handleHideModal}>
      <div className='rightbar'>
        rightbar
      </div>
    </div>
  )
}

export default Rightbar
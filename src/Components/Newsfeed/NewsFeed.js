import React from 'react'
import '../../Styles/newsfeed.css'
import { useUserAuth } from '../../Context/UserAuthContext'
import Stories from './Stories'
import CreatePost from './CreatePost'

const NewsFeed = () => {
  const { setModal } = useUserAuth()
  const handleHideModal = () => {
    setModal(false)
  }

  return (
    <div className='newsFeed_outer_div' onClick={handleHideModal}>
      <div className='stories_container'>
        <Stories />
      </div>

      <CreatePost/>

     
    </div>
  )
}

export default NewsFeed
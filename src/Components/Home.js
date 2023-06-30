import React from 'react'
import Sidebar from './Sidebar';
import NewsFeed from './Newsfeed/NewsFeed';
import Rightbar from './Rightbar';

const Home = () => {

  return (
    <>
      <div className='body_div'>
        <Sidebar/>
        <NewsFeed/>
        <Rightbar/>
      </div>
    </>
  )
}

export default Home  
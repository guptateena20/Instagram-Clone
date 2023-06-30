// import React from 'react'
// import { FiSearch } from 'react-icons/fi'
// import { MdHome } from 'react-icons/md'
// import { FaTelegramPlane, FaRegCompass, FaRegHeart } from 'react-icons/fa'
// import "../Styles/navbar.css"
// import { useUserAuth } from '../Context/UserAuthContext'

// const Navbar = () => {
//     const { logOut } = useUserAuth();
//     const handleLogout = async () => {
//         try {
//             await logOut()
//         }
//         catch (error) {
//             console.log(error.message);
//         }
//     }
//     return (
//         <>
//             <div className='navbar'>
//                 <div className='navbar__first'>
//                     <div className='navbar__first-logo'>
//                         <img src='/images/instagramLogo.png' />
//                     </div>
//                 </div>

//                 <div className='navbar__middle'>
//                     <div className='navbar__middle_search'>
//                         <input type='text' placeholder='Search' className='navbar__search' />
//                         <FiSearch className='searchIcon' />
//                     </div>
//                 </div>

//                 <div className='navbar__last'>

//                     <li>
//                         <MdHome className='navbar__icons' />
//                     </li>
//                     <li>
//                         <FaTelegramPlane className='navbar__icons' />
//                     </li>
//                     <li>
//                         <FaRegCompass className='navbar__icons' />
//                     </li>
//                     <li>
//                         <FaRegHeart className='navbar__icons' />
//                     </li>
//                     <li onClick={handleLogout}>Logout</li>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Navbar



import React from 'react'
import { useUserAuth } from '../Context/UserAuthContext'
import { MdHome, MdOutlineAddBox } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { FaRegCompass, FaRegHeart } from 'react-icons/fa'
import { TbBrandYoutube, TbMessageCircle } from 'react-icons/tb'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineLogout } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import "../Styles/sidebar.css"
import ModalBox from '../Modal/ModalBox'

const Sidebar = () => {
  const { logOut, setModal, modal } = useUserAuth();

  const handleModalClick = () => {
    setModal(!modal)
  }

  // const handleLogout = () => {
  //   return logOut()
  // }

  return (
    <>
      <div className='leftbar_outer_div'>
        <div className='leftbar'>
          <div className='insta_logo'>
            <img src='/images/instagramLogo.png' />
          </div>

          <div className='sidebar_list'>
            <li className='sidebar_list_items'>
              <MdHome className='sidebar__icons' />
              <span>Home</span>
            </li>

            <li className='sidebar_list_items'>
              <FiSearch className='sidebar__icons' />
              <span>Search</span>
            </li>

            <li className='sidebar_list_items'>
              <FaRegCompass className='sidebar__icons' />
              <span>Explore</span>
            </li>

            <li className='sidebar_list_items'>
              <TbBrandYoutube className='sidebar__icons' />
              <span>Reels</span>
            </li>

            <li className='sidebar_list_items'>
              <TbMessageCircle className='sidebar__icons' />
              <span>Messages</span>
            </li>

            <li className='sidebar_list_items'>
              <FaRegHeart className='sidebar__icons' />
              <span>Notifications</span>
            </li>

            <li className='sidebar_list_items'>
              <MdOutlineAddBox className='sidebar__icons' />
              <span>Create</span>
            </li>

            <li className='sidebar_list_items'>
              <CgProfile className='sidebar__icons' />
              <span>Profile</span>
            </li>

            {/* <li onClick={handleLogout}>
              <AiOutlineLogout className='sidebar__icons' />
              <span>Logout</span>
            </li> */}

            {modal && <ModalBox />}
            <li onClick={handleModalClick} className='sidebar_list_items'>
              <RxHamburgerMenu className='sidebar__icons' />
              <span>More</span>
            </li>
          </div>


        </div>
      </div>
    </>
  )
}

export default Sidebar
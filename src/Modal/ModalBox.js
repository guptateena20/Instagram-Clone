import React from 'react'
import '../Styles/modalbox.css'
import { TbRosette, TbBrightnessUp, TbMessageReport } from 'react-icons/tb'
import { RxTimer } from 'react-icons/rx'
import { MdSaveAlt } from 'react-icons/md'
import { useUserAuth } from '../Context/UserAuthContext'

const ModalBox = () => {
    const {logOut} = useUserAuth()

    const handleLogout = async () => {
        try {
            await logOut()
        }
        catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
            <div className='modalbox_container'>
                <div className=' modalbox'>
                    <li>
                        <TbRosette className='modalbox_list' />
                        <span>Settings</span>
                    </li>

                    <li>
                        <RxTimer className='modalbox_list' />
                        <span>Your activity</span>
                    </li>

                    <li>
                        <MdSaveAlt className='modalbox_list' />
                        <span>Saved</span>
                    </li>

                    <li>
                        <TbBrightnessUp className='modalbox_list' />
                        <span>Switch appearance</span>
                    </li>

                    <li>
                        <TbMessageReport className='modalbox_list' />
                        <span>Report a problem</span>
                    </li>

                    <hr style={{ border: "4px solid rgb(235, 233, 233)" }} />

                    <li><span>Switch accounts</span></li>
                    <hr style={{ border: "1px solid rgb(235, 233, 233)" }} />
                    <li onClick={handleLogout}><span>Logout</span></li>
                </div>
            </div>
        </>
    )
}

export default ModalBox
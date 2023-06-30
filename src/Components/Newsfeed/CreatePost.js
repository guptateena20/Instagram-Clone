import React, { useState } from 'react'
import { AiFillCamera } from 'react-icons/ai'
import { useUserAuth } from '../../Context/UserAuthContext';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');

    const {create} = useUserAuth()

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }

    const createPost = (e) => {
        e.preventDefault()
        create({title, image})
    }

    return (
        <>
            <div className='create'>
                <form onSubmit = {createPost}>
                    <div className='create_input_div'>
                        <input
                            type="text"
                            className='create_input'
                            onChange={(e) => setTitle(e.target.value)}
                            value={title.charAt(0).toUpperCase() + title.slice(1)}
                            placeholder='What is in your mind...'
                            required
                        />
                    </div>

                    <div className='create__second'>
                        <div className='create__second_a'>
                            <label htmlFor='file'>
                                <AiFillCamera className='camera' />
                            </label>
                            <input
                                type="file"
                                id="file"
                                className='file'
                                required
                                onChange={handleImage}
                            />
                        </div>

                        <div className='create__second_b'>
                            <input
                                type="submit"
                                value="Create"
                                className='btn_sweet'
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreatePost
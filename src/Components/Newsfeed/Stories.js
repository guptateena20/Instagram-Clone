import React, { useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://api.unsplash.com/photos/?client_id=S9FT_r5eSD3IsFKnw8I5R7kg35F9t7vBqx--sqkSlbA';
const Stories = () => {
    const [stories, setStories] = useState([]);

    const getApiData = async () => {
        try {
            let res = await axios.get(url);
            setStories(res.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getApiData()
    }, [])
    return (
        <>
            <div className='stories_outer_div'>
                <div className='stories_div'>
                    {
                        stories?.slice(0, 8).map((story, index) => {
                            return (
                                <div key={index} className='stories_info'>
                                    <div className='stories_img'>
                                        <span>
                                            <img src={story.urls.small} />
                                        </span>
                                    </div>

                                    <div className='stories_name'>{story.user.username.slice(0, 5)}</div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Stories
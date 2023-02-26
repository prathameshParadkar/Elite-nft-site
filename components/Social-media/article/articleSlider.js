import { AiOutlineLeftCircle } from 'react-icons/ai';
import { AiOutlineRightCircle } from 'react-icons/ai';
import React from 'react';
import ArticleCard from './articleCard'
import axios from 'axios';
export default function ytSlider() {

    const [data, setData] = React.useState([])

    // React.useEffect(() => {
    //     axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAbxOIfte3_Z3UNufAXXBqIyDUY66MbBEc&channelId=UC-8qIr_xeyb-3YZMxaoSZrQ&part=snippet,id&order=date&maxResults=20')
    //         .then((res) => {
    //             const videoData = [];
    //             res.data.items.map((item) => {
    //                 videoData.push({
    //                     videoId: item.id.videoId,
    //                     title: item.snippet.title,
    //                     thumbnail: item.snippet.thumbnails.high.url,
    //                 })
    //             })
    //             setData(
    //                 [
    //                     ...videoData
    //                 ]
    //             )
    //         })
    //         .catch((e) => {
    //             console.log(e)
    //         })

    //     console.log(data)
    // }, [])

    const slideRight = () => {
        var slider = document.getElementById('ArticleSlider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    const slideLeft = () => {
        var slider = document.getElementById('ArticleSlider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    return (
        <div className="flex flex-col mt-10">
            <div className='flex self-end mr-6 text-white text-2xl w-14 justify-between'>
                <AiOutlineLeftCircle className='cursor-pointer '
                    onClick={slideLeft}
                />
                <AiOutlineRightCircle className='cursor-pointer' onClick={slideRight} />
            </div>
            <div className='pl-6 flex mt-10 overflow-x-auto scroll scroll-smooth hide-scrollbar' id="ArticleSlider">
                
               
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                
                
            </div>
        </div>
    )
}

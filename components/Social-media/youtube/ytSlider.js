import { AiOutlineLeftCircle } from 'react-icons/ai';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import React from 'react';
import YtCard from './ytCard'
import axios from 'axios';
import Aos from 'aos'
import 'aos/dist/aos.css';


export default function YtSlider() {

    React.useEffect(() => {
        Aos.init();
    }, [])

    const [data, setData] = React.useState([])

    React.useEffect(() => {
        let videoData = [];
        videoData = getCookie("ytData")
        if (videoData) {
            setData([...JSON.parse(videoData)])
        }
        else {
            videoData = []
            console.log("yes")
            axios.get('http://localhost:3000/api/youtube-api')
                .then((res) => {
                    console.log(JSON.parse(res.data))
                    let response = JSON.parse(res.data)
                    response.items.map((item) => {
                        if (!item.snippet.description) {
                            return
                        }
                        videoData.push({
                            videoId: item.id.videoId,
                            title: item.snippet.title,
                            thumbnail: item.snippet.thumbnails.high.url,
                        })
                    })
                    setData(
                        [
                            ...videoData
                        ]
                    )
                    setCookie("ytData", videoData, { maxAge: 86400 })
                })
                .catch((e) => {
                    console.log(e)
                })
        }



    }, [])



    const slideRight = () => {
        var slider = document.getElementById('YtSlider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    const slideLeft = () => {
        var slider = document.getElementById('YtSlider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    return (
        <div className="flex flex-col mt-10  tablet:mt-14 mobile:mt-10">
            <div className='flex self-end mr-6  mobile:m-auto text-white text-2xl w-14 justify-between'>
                <AiOutlineLeftCircle className='cursor-pointer '
                    onClick={slideLeft}
                />
                <AiOutlineRightCircle className='cursor-pointer' onClick={slideRight} />
            </div>
            <div data-aos="slide-left" data-aos-duration="600" className='pl-16 tablet:pl-12 mobile:pl-8 flex mt-10 overflow-x-auto scroll scroll-smooth hide-scrollbar' id="YtSlider">
                {data.length > 0 && data.map((item, index) => {
                    if (index == data.length - 1) {
                        return
                    }
                    return (
                        <YtCard
                            key={index}
                            img={item.thumbnail}
                            title={item.title}
                            videoId={item.videoId}
                        />
                    )
                })}
            </div>
        </div>
    )
}

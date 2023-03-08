import { AiOutlineLeftCircle } from 'react-icons/ai';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
 
import React from 'react';
import ArticleCard from './articleCard'
import axios from 'axios';
import Aos from 'aos'
import 'aos/dist/aos.css';


export default function ArticleSlider() {

    const [data, setData] = React.useState([])

    React.useEffect(() => {
        Aos.init();

        let mediumData = getCookie("mediumData")
        console.log(data)
        if (mediumData) {
            setData([...JSON.parse(mediumData)])
        }
        else {
            axios.get("http://localhost:3000/api/medium-api")
                .then(async (res) => {
                    // console.log(res.data)
                    let data = [...JSON.parse(res.data)]
                    console.log(res.data)
                    setCookie("mediumData", data, { maxAge: 86400 })
                    setData(data)
                })
                .catch(e => console.log(e))
        }
    }, [])

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
            <div className='flex self-end mr-6  mobile:m-auto text-white text-2xl w-14 justify-between'>
                <AiOutlineLeftCircle className='cursor-pointer '
                    onClick={slideLeft}
                />
                <AiOutlineRightCircle className='cursor-pointer' onClick={slideRight} />
            </div>
            <div data-aos="slide-left" data-aos-duration="600" data-aos-offset="300" className='pl-6 flex mt-10 overflow-x-auto scroll scroll-smooth hide-scrollbar' id="ArticleSlider">


                {data && data.length > 0 ? data.map((item, index) => {
                    return (
                        <ArticleCard
                            key={index}
                            title={item.title}
                            media={item.media}
                            link={item.link}
                        />
                    )
                }) : (<h1>No Data</h1>) }


            </div>
        </div>
    )
}

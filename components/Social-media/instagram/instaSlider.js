import { AiOutlineLeftCircle } from 'react-icons/ai';
import { AiOutlineRightCircle } from 'react-icons/ai';
import React from 'react';
import InstaCard from './instaCard'
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import axios from 'axios';
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function InstaSlider() {

    const [data, setData] = React.useState([])

    React.useEffect(() => {
        Aos.init();

        let instaData = getCookie("instaData")
        if (instaData) {
            setData([...JSON.parse(instaData)])
        }
        else {
            axios.get("http://localhost:3000/api/insta-api")
                .then(async (res) => {
                    let data = [...JSON.parse(res.data)]
                    console.log(data)
                    setCookie("instaData", data, { maxAge: 86400 })
                    setData(data)
                })
                .catch(e => console.log(e))
        }
    }, [])

    const slideRight = () => {
        var slider = document.getElementById('InstaSlider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    const slideLeft = () => {
        var slider = document.getElementById('InstaSlider');
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
            <div data-aos="slide-left" data-aos-duration="600" data-aos-offset="300" className='pl-6 mobile:p-2 flex mt-10 overflow-x-auto scroll scroll-smooth hide-scrollbar' id="InstaSlider">
                {data.length > 0 ? data.map((item, index) => {
                    return (
                        <InstaCard
                            key={index}
                            caption={item.caption}
                            thumbnail={item.thumbnail}
                            link={item.link}
                        />
                    )
                })
                : (<h1>NO DATA</h1>)
            }
            </div>
        </div>
    )
}

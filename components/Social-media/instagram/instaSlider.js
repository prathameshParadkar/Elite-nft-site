import { AiOutlineLeftCircle } from 'react-icons/ai';
import { AiOutlineRightCircle } from 'react-icons/ai';
import React from 'react';
import InstaCard from './instaCard'
import axios from 'axios';
export default function ytSlider() {

    const [data, setData] = React.useState([])

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
            <div className='flex self-end mr-6 text-white text-2xl w-14 justify-between'>
                <AiOutlineLeftCircle className='cursor-pointer '
                    onClick={slideLeft}
                />
                <AiOutlineRightCircle className='cursor-pointer' onClick={slideRight} />
            </div>
            <div className='pl-6 flex mt-10 overflow-x-auto scroll scroll-smooth hide-scrollbar' id="InstaSlider">
                
               
            <InstaCard />
            <InstaCard />
            <InstaCard />
            <InstaCard />
            <InstaCard />
            <InstaCard />
            </div>
        </div>
    )
}

import homeBg from '../../images/homebg.png'
import Image from 'next/image'
import Navbar from './navbar'
import Menu from './menu'
import React from 'react';
import { animate, motion } from 'framer-motion';
import Aos from 'aos'
import 'aos/dist/aos.css';


export default function Main(props) {
    const [toggle, setToggle] = React.useState(false)

    React.useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="h-screen overflow-hidden relative flex ">
            <video className='object-cover'

                width={100200}
                loop autoPlay muted
            >
                <source src={'/homeBg.mp4'} />
            </video >
            <Navbar toggleHandler={setToggle} isMobile={props.isMobile} />

            <Menu toggle={toggle} toggleHandler={setToggle} />

            <p className='absolute left-1/2 translate-x-[-50%] desktop:text-2xl desktop:bottom-44 tablet:bottom-32 whitespace-nowrap font-["Furore"] styled-text' >
                &quot;Get Ready For The Future.&quot;
            </p>

            <button className='absolute  left-1/2 translate-x-[-50%] desktop:bottom-24 tablet:bottom-16  px-6 py-4 rounded-lg font-bold font-["Lexend"] desktop:text-sm tablet:text-xs border-solid border-[1px] text-white hover:text-white border-white hover:border-[#7534FF]  fill fill-button whitespace-nowrap' >
                ENTER OUR WORLD
            </button>
        </div>
    )
}

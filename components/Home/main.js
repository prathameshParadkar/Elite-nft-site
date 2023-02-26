import homeBg from '../../images/homebg.png'
import Image from 'next/image'
import Navbar from './navbar'
import Menu from './menu'
import React from 'react';
export default function Main(props) {
    const [toggle, setToggle] = React.useState(false)
    return (
        <div className="h-screen overflow-hidden relative flex ">
            <Image className='object-cover'
                src={homeBg}
                width={100200}
            />
            <Navbar toggleHandler={setToggle} isMobile={props.isMobile} />
            <Menu toggle={toggle} toggleHandler={setToggle} />
            
                <p className='absolute left-1/2 translate-x-[-50%] desktop:text-2xl desktop:bottom-44 tablet:bottom-32 whitespace-nowrap font-["Furore"] styled-text'>
                    "Get Ready For The Future."
            </p>
            
            <button className='absolute  left-1/2 translate-x-[-50%] desktop:bottom-24 tablet:bottom-16 bg-[#7534FF] px-6 py-4 rounded-lg font-bold font-["Lexend"] desktop:text-sm tablet:text-xs text-white'>
            ENTER OUR WORLD
            </button>
        </div>
    )
}

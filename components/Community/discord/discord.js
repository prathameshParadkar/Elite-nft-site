import React from 'react'
import Image from 'next/image'
import discord from '../../../images/productions/discord-logo.png'
import bg from '../../../images/productions/discord-bg.png'
import fade from '../../../images/productions/discord-bg-fade.png'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { animate, motion } from "framer-motion"

export default function Discord() {
    const [flip, setFlip] = React.useState(false)

    const logoFlip = () => {
        setFlip(prev => !prev)
    }

    React.useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className=' relative w-full desktop:h-screen flex justify-center'>
            <div className='flex flex-col items-center w-full h-full space-y-[-120px] mobile:space-y-[-95px] tablet:space-y-[-130px]'>
                <motion.div className='relative z-40'
                    animate={{ rotateY: flip ? 360 : 0 }}
                    transition={{
                        duration: 0.8
                    }}
                    onClick={logoFlip}
                >

                    <Image data-aos="flip-right" src={discord} className="w-96 h-96 tablet:w-80 tablet:h-80 mobile:h-32 mobile:w-32 mobile:mb-16  tablet:mb-24 tablet:mr-2 mt-6 mr-5 z-[10]" />
                </motion.div>
                <Image data-aos="fade-up" src={bg} className="w-full  tablet:scale-[1.6] object-cover bottom-[-50px] z-[1]" />
            </div>
            <Image src={fade} className="w-full absolute bottom-[-50px] z-[0] opacity-[0.8]" />
        </div>
    )
}

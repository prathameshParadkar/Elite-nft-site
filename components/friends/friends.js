import React from 'react'
import Image from 'next/image'
import calix from '../../images/calix.png'
import polygon from '../../images/polygon.png'
import doodhwala from '../../images/doodhwala.png'
import permissionless from '../../images/permissionless.png'
import hilabs from '../../images/hilabs.png'
import genjutsu from '../../images/genjutsu.png'
import coi from '../../images/coi.png'
import builders from '../../images/builders.png'
import gdex from '../../images/gdex.png'
import cronos from '../../images/cronos.png'
import { animate, motion } from 'framer-motion'
import bg from '../../images/wave-pattern.png'
import bf from '../../images/bottomfade.png'
import Contact from '../contact/contact'
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function Friends() {
    const [width, setWidth] = React.useState(0)
    const [isMobile, setIsMobile] = React.useState(false)


    const friendSlider = React.useRef(null)
    React.useEffect(() => {
        if (window.innerWidth <= 900) {
            setIsMobile(true)
        }
        setTimeout(() => {
            setWidth(prev => friendSlider.current.clientWidth)
            console.log(width)
        }, 1000)
    
        Aos.init()
    }, []);


    return (
        <div className='bg-[#1A1A1A] bg-cover bg-no-repeat w-full mobile:mt-20'>
            <div className='pt-20 space-y-[-110px] tablet:space-y-[-40px] mobile:space-y-[-10px]'>

                <div data-aos="fade-up" data-aos-offset="300" className=' w-[80%] m-auto  friends-card rounded-xl   overflow-hidden px-20'>
                    <motion.div
                        className='flex  scroll-smooth'
                        initial={{
                            x: 0
                        }}
                        animate={{
                            x: [0, -(width + 40) * (10) - 465]
                        }}

                        transition={{
                            ease: 'linear',
                            transition: 'smooth',
                            repeat: Infinity,
                            duration: 15 
                        }}
                    >
                        <div className=''>

                            <div className='w-80 gap-10 h-80 flex items-center justify-start '>
                                <Image height={200} width={200} ref={friendSlider} src={calix} className="scale-[0.6]" />
                                <Image height={200} width={200} className="ml-6" src={polygon} />
                                <Image height={200} width={200} className="ml-10" src={cronos} />
                                <Image height={200} width={200} className="scale-[0.7]" src={doodhwala} />
                                <Image height={200} width={200} className="scale-[0.8]" src={coi} />
                                <Image height={200} width={200} className="scale-[1.5] ml-10" src={permissionless} />
                                <Image height={200} width={200} className="scale-[0.6] ml-10" src={hilabs} />
                                <Image height={200} width={200} className="scale-[1.5] ml-16" src={genjutsu} />
                                <Image height={200} width={200} className="scale-[1.5] ml-20" src={builders} />
                                <Image height={200} width={200} className="scale-[1.5] ml-20" src={gdex} />

                                <Image height={200} width={200} ref={friendSlider} src={calix} className="scale-[0.6] ml-10" />
                                <Image height={200} width={200} className="ml-6" src={polygon} />
                                <Image height={200} width={200} className="ml-10" src={cronos} />
                                <Image height={200} width={200} className="scale-[0.7]" src={doodhwala} />
                                <Image height={200} width={200} className="scale-[0.8]" src={coi} />

                            </div>
                        </div>
                    </motion.div>

                </div>
                <div data-aos="fade-up" data-aos-offset="200">

                    <h1 className='text-[12rem] text-[#7519ffd9] merch-elite-text font-["Furore"] opacity-[0.6] text-center tablet:text-8xl whitespace-nowrap mobile:text-[45px]'>
                        OUR FRIENDS
                    </h1>
                </div>
            </div>

            <Image src={bg} className="w-full" />

            <Contact />

            <Image src={bf} className="w-full" />


        </div>
    )
}

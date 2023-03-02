import React from 'react'
import { animate, motion } from 'framer-motion'

export default function Contact() {
    const [width, setWidth] = React.useState(0)
    const [isMobile, setIsMobile] = React.useState(false)

    React.useEffect(() => {
        if (window.innerWidth <= 900) {
            setIsMobile(true)
        }
    }, [])
    const contactUs = React.useRef(null)
    React.useEffect(() => {
        setTimeout(() => {
            setWidth(prev => contactUs.current.clientWidth)
            console.log(width)
        }, 1000)

    }, []);
    return (
        <motion.div
            className='flex pt-10 pb-10 scroll-smooth'
            initial={{
                x: 0
            }}
            animate={{
                x: [0, -(width + 30) * (1)]
            }}

            transition={{
                ease: 'linear',
                transition: 'smooth',
                repeat: Infinity,
                duration: isMobile ? 25 : 23
            }}
        >
            <h1 className='text-[11rem] text-[#7519ffd9] merch-elite-text font-["Furore"]  text-center whitespace-nowrap ml-10 mobile:text-8xl'
                ref={contactUs}
            >
                CONTACT US - Tell us about your ideas
            </h1>
            <h1 className='text-[11rem] text-[#7519ffd9] merch-elite-text font-["Furore"]  text-center whitespace-nowrap ml-10 mr-10 mobile:text-8xl'
            >
                CONTACT US - Tell us about your ideas
            </h1>


        </motion.div>
    )
}

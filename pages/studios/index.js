import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import StudioHome from '@/components/studios/Home/studio-home'
import StudioServices from '@/components/studios/services/studioServices'
import Work from '@/components/studios/Work/work'
import Portfolio from '@/components/studios/Portfolio/portfolio'
import bg from '../../images/wave-pattern.png'
import Liqy from '@/components/studios/liqy/liqy'
import Footer from '@/components/footer/footer'
import ScrollToTopButton from '@/components/utils/scrollToTop'

export default function Home() {
    const [isMobile, setIsMobile] = React.useState(false)
    React.useEffect(() => {
        if (window.innerWidth <= 764) {
            setIsMobile(true)
        }
    }, [])
    return (
        <div className=' overflow-hidden bg-[#191919]'>
            <ScrollToTopButton />
            <StudioHome isMobile={isMobile} />
            <StudioServices />
            <Work />
            <div className='desktop:space-y-[-250px] tablet:space-y-[-170px] mobile:space-y-[-100px]'>
                <Portfolio />
                <Image src={bg} alt="Wave-pattern" className='w-full' />
                <Liqy />
            </div>
            <Footer />
        </div>
    )
}

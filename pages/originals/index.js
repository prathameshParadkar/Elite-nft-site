import Footer from '@/components/footer/footer'
import OriginalsHome from '@/components/originals/home/originals-home'
import Impact from '@/components/originals/impact/impact'
import React from 'react'
import Vision from '@/components/originals/vision/vision'
import Scribbles from '@/components/scribbles/scribbles'
import Head from 'next/head'
import Image from 'next/image'
import ScrollToTopButton from '@/components/utils/scrollToTop'

export default function Home() {
    const [isMobile, setIsMobile] = React.useState(false)
    React.useEffect(() => {
        if (window.innerWidth <= 764) {
            setIsMobile(true)
        }
    }, [])
    return (
        <div className=' overflow-y-hidden bg-[#191919]'>
            <ScrollToTopButton />
            <OriginalsHome isMobile={isMobile} />
            <Impact />
            <Scribbles />
            <Vision isMobile={isMobile} />
            <Footer />
        </div>
    )
}

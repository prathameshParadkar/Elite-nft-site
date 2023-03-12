import Discord from '@/components/Community/discord/discord'
import ProductionHome from '@/components/productions/Home/productions-home'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { Lato } from '@next/font/google'
import Why from '@/components/productions/why/why'
import Media from '@/components/Social-media/media'
import bg from '../../images/wave-pattern.png'
import NewsLetter from '@/components/productions/news-letter/news-letter'
import Footer from '@/components/footer/footer'
import ScrollToTopButton from '@/components/utils/scrollToTop'
import eliteLogo from '../../images/elite-productions.png'

const lato = Lato({
    weight: '400',
    subsets: ['latin']
})
export default function Home() {
    const [isMobile, setIsMobile] = React.useState(false)
    React.useEffect(() => {
        if (window.innerWidth <= 900) {
            setIsMobile(true)
        }
    }, [])
    return (
        <>
            <Head>
                <title>Elite NFT Productions</title>
                <link rel="icon" href={eliteLogo.src}
                type="image/x-icon"></link>
            </Head>
            <div className=' overflow-y-hidden bg-[#191919]'>
                <ScrollToTopButton />
                <ProductionHome />
                <div className='space-y-[-180px] mobile:space-y-[-100px]'>
                    <Why />
                    <Image src={bg} alt={"Wave pattern"} className="w-full" />
                    <Media />
                    <Image src={bg} alt={"Wave pattern"} className="w-full " />
                    <NewsLetter isMobile={isMobile} />
                </div>
                <Footer />
            </div>
        </>
    )
}

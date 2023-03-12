import Discord from '@/components/Community/discord/discord'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { Lato } from '@next/font/google'
import CommunityHome from '@/components/Community/Home/community-home'
import Activity from '@/components/Community/activity/activity'
import bg from '../../images/wave-pattern.png'
import bf from '../../images/bottomfade.png'
import Contact from '@/components/contact/contact'
import Footer from '@/components/footer/footer'
import ScrollToTopButton from '@/components/utils/scrollToTop'
import eliteLogo from '../../images/elite-community.png'
import Aos from 'aos'
import 'aos/dist/aos.css';

const lato = Lato({
    weight: '400',
    subsets: ['latin']
})
export default function Home() {

    React.useEffect(() => {
        Aos.init();
    }, [])

    const [isMobile, setIsMobile] = React.useState(false)
    React.useEffect(() => {
        if (window.innerWidth <= 764) {
            setIsMobile(true)
        }
    }, [])
    return (
        <>
            <Head>
                <title>Elite NFT Community</title>
                <link rel="icon" href={eliteLogo.src}
                    type="image/x-icon"></link>
            </Head>
            <div className=' overflow-hidden bg-[#191919]'>
                <ScrollToTopButton />
                <CommunityHome isMobile={isMobile} />
                <Discord />
                <div className='flex mobile:flex-col items-center justify-center  mt-48 mb-20 space-x-10 mobile:space-x-0'>
                    <p data-aos={isMobile ? "fade-up" : "fade-right"}  className={`${lato.className} font-light text-white text-2xl tablet:text-lg mobile:text-center`}>
                        Join the growing Community and Engage with like-minded {!isMobile && <br />}individuals Pan-India
                    </p>

                    <button data-aos={isMobile ? "fade-up" : "fade-left"} className='font-["Furore"] px-20 py-4 rounded-lg text-xl discord-button-style text-white whitespace-nowrap tablet:px-10 mobile:ml-0 mobile:mt-8 mobile:text-base tablet:text-lg  border-white border-[1px] border-solid hover:border-[#7534FF]  fill fill-button'>
                        JOIN OUR DISCORD
                    </button>
                </div>
                <div className='flex flex-col'>
                    {/* <Activity /> */}
                    <Image src={bg} className="w-full" />
                    <Contact />
                    <Image src={bf} />
                </div>
                <Footer />
            </div>
        </>
    )
}
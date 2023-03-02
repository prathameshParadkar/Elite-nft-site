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

const lato = Lato({
    weight: '400',
    subsets: ['latin']
})
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
            <CommunityHome isMobile={isMobile} />
            <Discord />
            <div className='flex mobile:flex-col items-center justify-center  mt-32 mb-20 space-x-10'>
                <p className={`${lato.className} font-light text-white text-2xl tablet:text-lg`}>
                    Join the growing Community and Engage with like-minded {!isMobile && <br />}individuals Pan-India
                </p>

                <button className='font-["Furore"] px-20 py-4 rounded-lg text-xl bg-[#7534FF] discord-button-style text-white whitespace-nowrap tablet:px-10 mobile:ml-0 tablet:text-lg '>
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
    )
}
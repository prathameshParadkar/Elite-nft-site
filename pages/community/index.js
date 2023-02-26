import Discord from '@/components/Community/discord/discord'
import Head from 'next/head'
import Image from 'next/image'
import { Lato } from '@next/font/google'
import CommunityHome from '@/components/Community/Home/community-home'
import Activity from '@/components/Community/activity/activity'
const lato = Lato({
    weight: '400',
    subsets: ['latin']
})
export default function Home() {
    return (
        <div className=' overflow-hidden bg-[#191919]'>
            <CommunityHome />
            <Discord />
            <div className='flex items-center justify-center mt-32 mb-20 space-x-10'>
                <p className={`${lato.className} font-light text-white text-2xl`}>
                    Join the growing Community and Engage with like-minded <br />individuals Pan-India
                </p>

                <button className='font-["Furore"] px-20 py-4 rounded-lg text-xl bg-[#7534FF] discord-button-style text-white'>
                    JOIN OUR DISCORD
                </button>
            </div>
            <div className='flex flex-col'>
                <Activity />
                
            </div>
        </div>
    )
}
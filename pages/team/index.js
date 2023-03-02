import Head from 'next/head'
import Image from 'next/image'
import { Lato } from '@next/font/google'
import Team from '@/components/team/team'
import bg from '../../images/wave-pattern.png'
import ScrollToTopButton from '@/components/utils/scrollToTop'
const lato = Lato({
    weight: '400',
    subsets: ['latin']
})
export default function Home() {
    return (
        <div className=' overflow-hidden  bg-[#191919]'>
            <ScrollToTopButton />
            <div className='space-y-[-600px] tablet:space-y-[-300px] mobile:space-y-[-150px]'>

            <Team />
            <Image src={bg} className="w-full z-0" />
            </div>
        </div>
    )
}
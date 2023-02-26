import Discord from '@/components/Community/discord/discord'
import ProductionHome from '@/components/productions/Home/productions-home'
import Head from 'next/head'
import Image from 'next/image'
import { Lato } from '@next/font/google'
import Why from '@/components/productions/why/why'
import Media from '@/components/Social-media/media'
import bg from '../../images/wave-pattern.png'
import NewsLetter from '@/components/productions/news-letter/news-letter'
import Footer from '@/components/footer/footer'

const lato = Lato({
    weight: '400',
    subsets: ['latin']
})
export default function Home() {
    return (
        <div className=' overflow-y-hidden bg-[#191919]'>
            <ProductionHome />
            <div className='space-y-[-180px]'>
                <Why />
                <Image src={bg} alt={"Wave pattern"} className="w-full" />
                <Media />
                <Image src={bg} alt={"Wave pattern"} className="w-full " />
                <NewsLetter />
            </div>
            <Footer />
        </div>
    )
}

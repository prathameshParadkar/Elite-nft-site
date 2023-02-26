import Head from 'next/head'
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

export default function Home() {
    return (
        <div className=' overflow-hidden bg-[#191919]'>
            <StudioHome />
            <StudioServices />
            <Work />
            <div className='space-y-[-250px]'>
                <Portfolio />
                <Image src={bg} alt="Wave-pattern" className='w-full' />
                <Liqy />
            </div>
            <Footer />
        </div>
    )
}

import Footer from '@/components/footer/footer'
import OriginalsHome from '@/components/originals/home/originals-home'
import Impact from '@/components/originals/impact/impact'
import Vision from '@/components/originals/vision/vision'
import Scribbles from '@/components/scribbles/scribbles'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <div className=' overflow-y-hidden bg-[#191919]'>
            <OriginalsHome />
            <Impact />
            <Scribbles />
            <Vision />
            <Footer />
        </div>
    )
}

import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Main from '../components/Home/main'
import Evolve from '../components/Main/evolve'
import Service from '../components/services/service'
import Media from '../components/Social-media/media'
import Discord from '../components/discord/discord'
import Merch from '@/components/merch/merch'
import Scribbles from '@/components/scribbles/scribbles'
import bg from '../images/wave-pattern.png'
import Footer from '@/components/footer/footer'
import Friends from '@/components/friends/friends'
import ScrollToTopButton from '@/components/utils/scrollToTop'
import eliteLogo from '../images/elite-logo.png'


export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(() => {
    if (window.innerWidth <= 764) {
      setIsMobile(true)
    }

  }, [])
  return (
    <>
      <Head>
        <title>Elite NFT</title>
        <link rel = "icon" href = {eliteLogo.src} 
        type = "image/x-icon"></link>
      </Head>
      <div className=' overflow-hidden bg-[#1A1A1A]'>
        <ScrollToTopButton />
        <Main isMobile={isMobile} />
        <div className='bg-[#1A1A1A] desktop:space-y-[-250px] tablet:space-y-[-100px]'>
          <Evolve isMobile={isMobile} />
          <Image src={bg} className='w-full' />
          <Service />
        </div>
        <Media />
        <Discord />
        <Merch />
        <Scribbles isMobile={isMobile} />
        <Friends />
        <Footer isMobile={isMobile} />
      </div>
    </>
  )
}

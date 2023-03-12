import React from 'react'
import logo from '../../../images/studios/liqy.png'
import Image from 'next/image'
import bf from '../../../images/bottomfade.png'
import { Lato } from '@next/font/google'
import Contact from '@/components/contact/contact'
import Aos from 'aos'
import 'aos/dist/aos.css';


const lato = Lato({
    weight: '400',
    subsets: ['latin']
})

export default function Liqy() {
    const [isMobile, setIsMobile] = React.useState(false)

    React.useEffect(() => {
        if (window.innerWidth <= 900) {
            setIsMobile(true)
        }
        Aos.init();
    }, [])

    return (
        <div className="w-full ">
            <div className='flex  justify-center items-center'>

                <div className='flex flex-row-reverse tablet:flex-col-reverse  tablet:mt-12 justify-center items-center'>
                    <div data-aos="fade-up" className='text-center tablet:block text-white'>
                        <button className='font-["Furore"] px-20 py-4 desktop:hidden rounded-lg text-xl discord-button-style mobile:text-sm mobile:px-10 mobile:py-2  border-white border-[1px] border-solid hover:border-[#7534FF]  fill fill-button'>
                            BUY NOW
                        </button>
                    </div>
                    <div data-aos={isMobile ? "fade-up" : "fade-left"} data-aos-offset="200">
                        <Image src={logo} className="w-[40rem] h-[40rem] scale-[0.8] tablet:scale-[1] mobile:w-80 mobile:h-80" />
                    </div>

                    <div className='font-["Furore"] text-white flex flex-col items-center tablet:items-center desktop:ml-10'>
                        <h1 data-aos={isMobile ? "fade-up" : "fade-right"} className='text-center text-4xl mobile:text-lg styled-text'>
                            Now Sell your NFTs to <br />wider Audience with Liqy!
                        </h1>
                        <p data-aos={isMobile ? "fade-up" : "fade-right"} className={`text-center ${lato.className} text-3xl mobile:text-sm  
                         tablet:text-xl tablet:w-[60%] mobile:w-[75%]  mt-16 mobile:mt-8 w-[600px] styled-text`}>Liqy enables your community to get your NFTs using Fiat networks</p>

                        <div  className='text-center mt-10 tablet:hidden'>
                            <button data-aos={isMobile ? "fade-up" : "fade-right"} className='font-["Furore"] px-20 py-4 rounded-lg text-xl  discord-button-style  border-white border-[1px] border-solid hover:border-[#7534FF]  fill fill-button'>
                                JOIN NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Contact />

            <Image src={bf} className="w-full" />
        </div>

    )
}

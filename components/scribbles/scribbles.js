import { Londrina_Outline, Londrina_Solid } from "@next/font/google"
import React from "react"
import Image from "next/image"
import scribbleCard from '../../images/scribble-card.png'
import Aos from 'aos'
import 'aos/dist/aos.css';

const londrinaSolid = Londrina_Solid({ weight: '400', subsets: ['latin'] })
const londrinaOutline = Londrina_Outline({ weight: '400', subsets: ['latin'] })

export default function Scribbles(props) {

    React.useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="bg-[#1A1A1A] w-full flex tablet:flex-col tablet:items-center justify-center items-start mt-10">
            <div className="  flex flex-col justify-center items-center mr-56 ml-20 tablet:m-0">
                <div style={{opacity:0.2}}  className="text-[10rem] space-y-[-145px] tablet:mt-16 mobile:text-7xl mobile:space-y-[-25px]">
                    <h1 data-aos="fade-up" id="scribble-solid-text" className={`${londrinaSolid.className} `}>Scribbles</h1>
                    <h1 data-aos="fade-up" id="scribble-outline-text" className={`${londrinaOutline.className} `}>Scribbles</h1>
                    <h1 data-aos="fade-up" id="scribble-solid-text" className={`${londrinaSolid.className} `}>Scribbles</h1>
                    <h1 data-aos="fade-up" id="scribble-outline-text" className={`${londrinaOutline.className} `}>Scribbles</h1>
                <h1 data-aos="fade-up" id="scribble-solid-text" className={`${londrinaSolid.className} `}>Scribbles</h1>
                </div>
                <div>
                    <button className='text-white font-["Furore"] px-20 py-4 rounded-lg text-xl bg-[#7534FF] discord-button-style tablet:hidden'>VIEW ON OPENSEA NFT</button>
                </div>
            </div>

            {/* <div className="relative space-y-[-635px] w-[900px] h-[500px] ">
                <Image src={scribbleCard} className="absolute top-0 left-0 scale-[0.8] origin-bottom z-10" />
                <Image src={scribbleCard} className="absolute top-0 left-0 scale-[0.8] origin-bottom rotate-[-45deg]" />
                <Image src={scribbleCard} className="absolute top-0 left-0 scale-[0.8] origin-bottom  rotate-[-22deg] " />
            </div> */}

            <div data-aos="fade-left" className="cardfan h-[700px] mt-10 mobile:mt-4 mobile:h-[330px] mobile:w-[310px] tablet:w-[700px] ">
                <Image src={scribbleCard} height={!props.isMobile ? 550 : 250} />
                <Image src={scribbleCard} height={!props.isMobile ? 550 : 250} />
                <Image src={scribbleCard} height={!props.isMobile ? 550 : 250} />
            </div>
            <div>
                <button data-aos="fade-left" className='text-white font-["Furore"] px-20 py-4 rounded-lg text-xl bg-[#7534FF] discord-button-style mobile:text-sm mobile:px-10 mobile:py-2 mb-16 desktop:hidden'>VIEW ON OPENSEA NFT</button>
            </div>
        </div>
    )
}

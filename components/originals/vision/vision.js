import React from 'react'
import Image from 'next/image'
import vision from '../../../images/originals/vision.png'
import points from '../../../images/originals/points.png'
import bg from '../../../images/wave-pattern.png'
import bf from '../../../images/bottomfade.png'
import { Lato } from '@next/font/google'
const lato = Lato({ weight: '400', subsets: ['latin'] })

export default function Vision() {
    return (
        <div className='overflow-hidden'>

            <div className='h-screen w-full flex p-10 justify-center'>
                <div style={{ backgroundImage: `url(${points.src})` }} className={`h-full w-1/2 bg-contain bg-no-repeat text-white styled-text ${lato.className} text-2xl`}>
                    <h3 className=' ml-20'>
                        Launch Various Collections that will make it super easy For community to Navigate through Web3
                    </h3>
                    <h3 className='ml-64 mt-32'>
                        Drop Top Notch Content to<br />
                        create a Genuine Community
                    </h3>
                    <h3 className='ml-20 mt-32'>

                        Launch Various Collections that will make it super easy For community to Navigate through Web3
                    </h3>
                    <h3 className='mt-32 ml-64'>
                        Figure Out more ways to help<br />
                        Community Navigate
                    </h3>
                </div>
                <Image height={700} src={vision} alt="vision map" />


            </div>
            <div className='space-y-[-50px]'>
                <h1 className="styled-text font-['Furore'] text-6xl w-full text-center pt-8 ">
                    END GOAL : MASS ADOPTION
                </h1>
                <Image src={bg} className="w-full" alt="wave pattern" />
                <div>
                    <h1 className='text-[11rem] mt-10 text-[#7519ffd9] merch-elite-text font-["Furore"]  text-center whitespace-nowrap mr-10 ml-10'>
                        CONTACT US - Tell us about your ideas
                    </h1>
                </div>

                <Image src={bf} className="w-full" />
            </div>
        </div>

    )
}

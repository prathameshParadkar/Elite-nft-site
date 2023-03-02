import React from 'react'
import Image from 'next/image'
import vision from '../../../images/originals/vision.png'
import points from '../../../images/originals/points.png'
import bg from '../../../images/wave-pattern.png'
import bf from '../../../images/bottomfade.png'
import { Lato } from '@next/font/google'
import Contact from '@/components/contact/contact'
const lato = Lato({ weight: '400', subsets: ['latin'] })

export default function Vision() {
    return (
        <div className='overflow-hidden'>

            <div className='h-screen w-full flex p-10 justify-center tablet:justify-between '>
                <div style={{ backgroundImage: `url(${points.src})` }} className={`h-full w-1/2 tablet:w-2/3 tablet:h-2/3 bg-contain bg-no-repeat text-white styled-text ${lato.className} text-2xl`}>
                    <h3 className=' ml-20 tablet:text-base '>
                        Launch Various Collections that will make it super easy For community to Navigate through Web3
                    </h3>
                    <h3 className='ml-64 mt-32 tablet:text-base tablet:ml-[18.2rem] tablet:mt-44'>
                        Drop Top Notch Content to <br className='tablet:hidden' />
                        create a Genuine Community
                    </h3>
                    <h3 className='ml-20 mt-32 tablet:text-base tablet:mt-40'>

                        Launch Various Collections that will make it super easy For community to Navigate through Web3
                    </h3>
                    <h3 className='mt-32 ml-64 tablet:text-base tablet:ml-[18.2rem] tablet:mt-40 '>
                        Figure Out more ways to help <br className='tablet:hidden' />
                        Community Navigate
                    </h3>
                </div>
                <Image height={700} className="tablet:h-[400px] tablet:w-[100px]" src={vision} alt="vision map" />


            </div>
            <div className='space-y-[-50px]'>
                <h1 className="styled-text font-['Furore'] text-6xl w-full text-center pt-8 ">
                    END GOAL : MASS ADOPTION
                </h1>
                <Image src={bg} className="w-full" alt="wave pattern" />
                <Contact />

                <Image src={bf} className="w-full" />
            </div>
        </div>

    )
}

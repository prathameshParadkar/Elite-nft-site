import React from 'react'
import logo from '../../../images/studios/liqy.png'
import Image from 'next/image'
import bf from '../../../images/bottomfade.png'
import { Lato } from '@next/font/google'

const lato = Lato({
    weight: '400',
    subsets: ['latin']
})

export default function Liqy() {
    return (
        <div className='w-full '>
            <div className='flex flex-row-reverse justify-center items-center'>

                <Image src={logo} className="w-[40rem] h-[40rem] scale-[0.9]" />

                <div className='font-["Furore"] text-white flex flex-col items-center ml-16'>
                    <h1 className='text-center text-4xl styled-text'>
                        Now Sell your NFTs to wider Audience with Liqy!
                       

                    </h1>

                    <p className={`text-center ${lato.className} text-3xl mt-16 w-[719px] styled-text`}> Liqy enables your community to get your NFTs using Fiat networks</p>

                    <div className='text-center mt-10'>
                        <button className='font-["Furore"] px-20 py-4 rounded-lg text-xl bg-[#7534FF] discord-button-style'>
                            JOIN NOW
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-[11rem] mt-10 text-[#7519ffd9] merch-elite-text font-["Furore"]  text-center whitespace-nowrap mr-10 ml-10'>
                CONTACT US - Tell us about your ideas
                </h1>
            </div>

            <Image src={bf} className="w-full" />
        </div>
    )
}

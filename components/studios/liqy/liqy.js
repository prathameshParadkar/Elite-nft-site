import React from 'react'
import logo from '../../../images/studios/liqy.png'
import Image from 'next/image'
import bf from '../../../images/bottomfade.png'
import { Lato } from '@next/font/google'
import Contact from '@/components/contact/contact'

const lato = Lato({
    weight: '400',
    subsets: ['latin']
})

export default function Liqy() {
    return (
        // <div className='w-full '>
        //     <div className='flex flex-row-reverse justify-center items-center'>

        //         <Image src={logo} className="w-[40rem] h-[40rem] scale-[0.9]" />

        //         <div className='font-["Furore"] text-white flex flex-col items-center ml-16'>
        //             <h1 className='text-center text-4xl styled-text'>
        //                 Now Sell your NFTs to wider Audience with Liqy!
        //             </h1>

        //             <p className={`text-center ${lato.className} text-3xl mt-16 w-[719px] styled-text`}> Liqy enables your community to get your NFTs using Fiat networks</p>

        //             <div className='text-center mt-10'>
        //                 <button className='font-["Furore"] px-20 py-4 rounded-lg text-xl bg-[#7534FF] discord-button-style'>
        //                     JOIN NOW
        //                 </button>
        //             </div>
        //         </div>
        //     </div>

        //     <div>
        //         <h1 className='text-[11rem] mt-10 text-[#7519ffd9] merch-elite-text font-["Furore"]  text-center whitespace-nowrap mr-10 ml-10'>
        //         CONTACT US - Tell us about your ideas
        //         </h1>
        //     </div>

        //     <Image src={bf} className="w-full" />
        // </div>


        <div className="w-full ">
            <div className='flex  justify-center items-center'>

                <div className='flex flex-row-reverse tablet:flex-col-reverse  tablet:mt-12 justify-center items-center'>
                    <div className='text-center tablet:block text-white'>
                        <button className='font-["Furore"] px-20 py-4 desktop:hidden rounded-lg text-xl bg-[#7534FF] discord-button-style mobile:text-sm mobile:px-10 mobile:py-2 '>
                            BUY NOW
                        </button>
                    </div>
                    <Image src={logo} className="w-[40rem] h-[40rem] scale-[0.8] tablet:scale-[1] mobile:w-80 mobile:h-80" />

                    <div className='font-["Furore"] text-white flex flex-col items-center tablet:items-center desktop:ml-10'>
                        <h1 className='text-center text-4xl mobile:text-lg styled-text'>
                            Now Sell your NFTs to <br />wider Audience with Liqy!
                        </h1>
                        <p className={`text-center ${lato.className} text-3xl mobile:text-sm  
                         tablet:text-xl tablet:w-[60%] mobile:w-[75%]  mt-16 mobile:mt-8 w-[600px] styled-text`}>Liqy enables your community to get your NFTs using Fiat networks</p>

                        <div className='text-center mt-10 tablet:hidden'>
                            <button className='font-["Furore"] px-20 py-4 rounded-lg text-xl bg-[#7534FF] discord-button-style '>
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

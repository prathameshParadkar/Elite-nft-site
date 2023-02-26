import React from 'react'
import Image from 'next/image'
import pic from '../../../images/productions/newletter.png'
import bf from '../../../images/bottomfade.png'
import { Lato } from '@next/font/google'

const lato = Lato({
    weight: '400',
    subsets: ['latin']
})


export default function NewsLetter() {
    return (
        <div className='w-full '>
            <div className='flex  justify-center items-center '>

                <div className='news-card rounded-[50px] p-4'>
                    <Image src={pic} className="w-[30rem] h-[30rem] " />
                </div>

                <div className='font-["Furore"] text-white flex flex-col items-center ml-16'>
                    <p className={`text-center ${lato.className} text-4xl mt-16 w-[719px] styled-text `}>
                        Get the crypto edge you need <br />
                        with our weekly newsletter -

                    </p>
                    <h1 className='text-center text-4xl mt-2 styled-text'>
                        "SUBSCRIBE NOW"
                    </h1>



                    <div className='text-center mt-10'>
                        <button className='font-["Furore"] px-20 py-4 rounded-lg text-xl bg-[#7534FF] discord-button-style'>
                            SUBSCRIBE TO NEWS LETTER
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-[11rem] mt-28 text-[#7519ffd9] merch-elite-text font-["Furore"]  text-center whitespace-nowrap mr-10  overflow-x-hidden'>
                    CONTACT US - Tell us about your ideas
                </h1>
            </div>

            <Image src={bf} className="w-full" />
        </div>
    )
}

import React from 'react'
import Image from 'next/image'
import calix from '../../images/calix.png'
import polygon from '../../images/polygon.png'
import cronos from '../../images/cronos.png'
import bg from '../../images/wave-pattern.png'
import bf from '../../images/bottomfade.png'

export default function Contact() {
    return (
        <div  className='bg-[#1A1A1A] bg-cover bg-no-repeat w-full '>
            <div className='pt-20 space-y-[-110px]'>

                <div className=' w-[80%] grid grid-cols-3 m-auto  friends-card rounded-xl p-6 pl-8 pr-8'>
                    <Image src={calix} className="h-[120px] w-[100px] " />
                    <Image src={polygon} className="h-[74px]" />
                    <Image src={cronos} className="h-[45px]" />

                </div>
                <h1 className='text-[12rem] text-[#7519ffd9] merch-elite-text font-["Furore"] opacity-[0.6] text-center'>
                    OUR FRIENDS
                </h1>
            </div>

            <Image src={bg} className="w-full" />

            <div>
                <h1 className='text-[11rem] text-[#7519ffd9] merch-elite-text font-["Furore"]  text-center whitespace-nowrap ml-5 mr-5 ml-10'>
                CONTACT US - Tell us about your ideas
                </h1>
            </div>

            <Image src={bf} className="w-full" />


        </div>
    )
}

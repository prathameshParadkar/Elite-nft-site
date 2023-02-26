import React from 'react'
import Image from 'next/image'
import activities from '../../../images/community/activities.png'
import boxFade from '../../../images/community/box-fade.png'
import bg from '../../../images/wave-pattern.png'
import bf from '../../../images/bottomfade.png'

export default function Activity() {
    return (
        <div className='w-full '>
            <div className='flex flex-col space-y-[-100px]'>
                <div className='w-full space-y-[-100px]'>
                    <Image src={activities} className="relative z-10 m-auto scale-[0.8]" alt="Our activities" />
                    <Image src={boxFade} className="m-auto scale-[0.85]" alt="box fade" />
                </div>
                <Image src={bg} className="w-full" alt="box fade" />
                <div>
                    <h1 className='text-[11rem] text-[#7519ffd9] merch-elite-text font-["Furore"]  text-center whitespace-nowrap ml-5 mr-5'>
                        CONTACT US - Tell us about your ideas
                    </h1>
                </div>

                <Image src={bf} className="w-full" />
            </div>
        </div>
    )
}

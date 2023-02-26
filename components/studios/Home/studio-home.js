import React from 'react'
import Image from 'next/image'
import logo from '../../../images/studios/studio-logo-big.png'
import bg from '../../../images/studios/bg-fade.png'

export default function StudioHome() {
    return (
        <div className='relative bg-[#191919]  bg-cover  w-full'>
            <Image src={bg} className="absolute opacity-[0.8] z-[0]" />
            <Image src={logo} className=" m-auto mb-20 scale-[0.7] tablet:scale-[0.6] pt-32 mobile:pt-10" />
        </div>
    )
}

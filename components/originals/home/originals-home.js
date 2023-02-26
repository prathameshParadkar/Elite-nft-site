import React from 'react'
import Image from 'next/image'
import logo from '../../../images/originals/logo.png'
import bg from '../../../images/originals/bg-fade.png'

export default function OriginalsHome() {
    return (
        <div className='relative bg-[#191919] bg-cover  w-full'>
        <Image src={bg} className="absolute opacity-[0.7] z-[0]" />
        <Image src={logo} className=" m-auto mb-20 scale-[0.7] pt-32 " />
      </div>
  )
}
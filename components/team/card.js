import React from 'react'
import yash from '../../images/yash.png'
import Image from 'next/image'
export default function Card(props) {
    return (
        <div className='p-10 mobile:p-4 mobile:mt-6 relative z-[10] flex flex-col items-center justify-center'>
            <Image src={props.img} width={400} height={400} className="w-56 tablet:w-32 h-56 tablet:h-32 mobile:w-20 mobile:h-20" />
            <h1 className='font-["Furore"] text-center styled-text text-2xl tablet:text-xl mobile:text-base mt-6 mobile:mt-4'>
                {props.name}
            </h1>
        </div>
    )
}

import React from 'react'
import yash from '../../images/yash.png'
import Image from 'next/image'
export default function Card(props) {
    return (
        <div className='p-10 relative z-[10] flex flex-col items-center'>
            <Image src={props.img} width={400} height={400} className="w-56 h-56" />
            <h1 className='font-["Furore"] styled-text text-2xl mt-6'>
                {props.name}
            </h1>
        </div>
    )
}

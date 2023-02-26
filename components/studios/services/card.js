import React from 'react'
import Image from 'next/image'
import { Bebas_Neue } from '@next/font/google'

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'] })


export default function Card(props) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-64 tablet:w-56 h-[30rem] studio-card-bg rounded-[33px] p-4'>
                <Image src={props.img} width={61} height={60} className='scale-[0.8]' />
                <div className='ml-2 mt-2 text-white'>
                    <h3 className={`${bebasNeue.className} text-2xl tablet:text-xl mb-4`}>
                        {props.title}
                    </h3>
                    <ul className=''>
                        {props.para.length > 0 && props.para.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className="mb-4 font-['Lexend'] text-xs font-light">
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className='mt-4'>
                <button className={`  text-[#D9D9D9] border-[2px] border-[#D9D9D9] p-2 px-6 rounded-lg text-sm`}>
                    CONTACT US
                </button>
            </div>
        </div>
    )
}

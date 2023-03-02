import React from 'react'
import Image from 'next/image'
import calix from '../../images/calix.png'
import polygon from '../../images/polygon.png'
import doodhwala from '../../images/doodhwala.jpg'
import permissionless from '../../images/permissionless.png'
import hilabs from '../../images/hilabs.png'
import genjutsu from '../../images/genjutsu.png'
import coi from '../../images/coi.jpg'
import builders from '../../images/builders.png'
import gdex from '../../images/gdex.png'
import cronos from '../../images/cronos.png'
import bg from '../../images/wave-pattern.png'
import bf from '../../images/bottomfade.png'
import Contact from '../contact/contact'

export default function Friends() {

    return (
        <div className='bg-[#1A1A1A] bg-cover bg-no-repeat w-full '>
            <div className='pt-20 space-y-[-110px]'>

                <div className=' w-[80%] grid grid-cols-3 gap-5 m-auto  friends-card rounded-xl p-6 pl-8 pr-8'>
                    <div className='w-100 h-100 '>
                        <Image src={calix} className="aspect-square object-contain" />
                    </div>
                    <div className='w-100 h-100 '>
                        <Image src={polygon} className="aspect-square object-contain" />
                    </div>

                    <div className='w-100 h-100 '>
                        <Image src={cronos} className=" aspect-square  object-contain" />
                    </div>

                    <div className='w-100 h-100 '>
                        <Image src={doodhwala} className=" object-contain" />
                    </div>

                    <Image src={permissionless} className="h-[45px] object-contain" />
                    <Image src={hilabs} className="h-[45px] object-contain" />
                    <Image src={genjutsu} className="h-[45px] object-contain" />
                    <Image src={coi} className="h-[45px] object-contain" />
                    <Image src={builders} className="h-[45px] object-contain" />
                    <Image src={gdex} className="h-[45px] object-contain" />

                </div>
                <h1 className='text-[12rem] text-[#7519ffd9] merch-elite-text font-["Furore"] opacity-[0.6] text-center'>
                    OUR FRIENDS
                </h1>
            </div>

            <Image src={bg} className="w-full" />

            <Contact />

            <Image src={bf} className="w-full" />


        </div>
    )
}

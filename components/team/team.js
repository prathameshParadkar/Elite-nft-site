import React from 'react'
import { Lato } from '@next/font/google'
import Image from 'next/image'
import ourStory from '../../images/ourstory.png'
import Card from './card'
import { teamData } from '@/Data/teamData'
const lato = Lato({
    weight: '400',
    subsets: ['latin']
})

export default function Team() {

    return (
        <div className='w-full p-20 mobile:p-8 overflow-y-hidden'>
            <div className='flex items-center justify-center'>
                <Image src={ourStory} className="h-[35rem] mr-20  ml-48 tablet:ml-6 mobile:ml-0 mobile:h-[20rem] mobile:mr-6" />
                <p className={`${lato.className} text-2xl styled-text mr-48 tablet:mr-6 leading-relaxed mobile:text-sm mobile:mr-0 `}>
                    I&apos;m Yash Aka Busibeast, founder of Elite NFT, and I&apos;m here to tell you the exciting story of how Elite NFT began and what our vision is.
                    Elite NFT started with me doing Freelance Gigs and steadily getting many more Clients which I couldn&apos;t handle single-handedly so I started hiring my friends for help! That&apos;s how Elite NFT started.
                    We were basically just a design studio (still our forte) and slowly and steadily expanded into Development, Consultancy, and Social Media Management. Today we serve Various Clients and Brands from all over the Globe and help them embrace Web3 with our Creative Ideas.
                    Fun Fact: Elite NFT was valued at a million dollars just a month after I started the company. I don&apos;t know why, but that&apos;s the truth.
                    Our Vision at Elite NFT is to make Web3 accessible to everyone and play a significant role in the mass adoption of this technology.
                    So fasten your seatbelts and join us in the revolution to make web3 accessible!
                </p>
            </div>

            <h1 className="team-text font-['Furore'] text-[21rem] tablet:text-[12rem]  w-full text-center mobile:text-7xl mobile:mt-16">
                TEAM
            </h1>

            <div>

                <div className='grid grid-cols-3 mobile:grid-cols-2 m-auto'>
                    {teamData && teamData.length > 0 && teamData.map((item, index) => {
                        return (
                            <Card
                                name={item.name}
                                key={index}
                                img={item.img}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

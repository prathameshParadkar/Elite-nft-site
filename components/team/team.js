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
        <div className='w-full p-20'>
            <div className='flex items-center justify-center'>
                <Image src={ourStory} className="h-[35rem] mr-20 ml-48" />
                <p className={`${lato.className} text-2xl styled-text mr-48 leading-relaxed`}>
                    I'm Yash Aka Busibeast, founder of Elite NFT, and I'm here to tell you the exciting story of how Elite NFT began and what our vision is.<br />
                    Elite NFT started with me doing Freelance Gigs and steadily getting many more Clients which I couldn't handle single-handedly so I started hiring my friends for help! That's how Elite NFT started.<br />
                    We were basically just a design studio (still our forte) and slowly and steadily expanded into Development, Consultancy, and Social Media Management. Today we serve Various Clients and Brands from all over the Globe and help them embrace Web3 with our Creative Ideas.<br />
                    Fun Fact: Elite NFT was valued at a million dollars just a month after I started the company. I don't know why, but that's the truth.<br />
                    Our Vision at Elite NFT is to make Web3 accessible to everyone and play a significant role in the mass adoption of this technology.<br/>
                    So fasten your seatbelts and join us in the revolution to make web3 accessible!
                </p>
            </div>

            <h1 className="team-text font-['Furore'] text-[21rem]  w-full text-center ">
                TEAM
            </h1>

            <div className='grid grid-cols-3 m-auto'>
                {teamData && teamData.length > 0 && teamData.map((item, index) => {
                    return (
                        <Card
                            name={item.name}
                            key={index}
                            img = {item.img}
                        />
                   )
               })}
            </div>
        </div>
    )
}

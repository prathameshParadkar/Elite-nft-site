import React from 'react'
import Image from 'next/image'
import discord from '../../../images/productions/discord-logo.png'
import bg from '../../../images/productions/discord-bg.png'
import fade from '../../../images/productions/discord-bg-fade.png'

export default function Discord() {
    return (
        <div className=' relative w-full h-screen flex justify-center'>
            <Image src={discord} className="w-96 h-96 mt-6 mr-5 z-[10]" />
            <Image src={bg} className="w-full absolute bottom-[-50px] z-[1]" />
            <Image src={fade} className="w-full absolute bottom-[-50px] z-[0] opacity-[0.8]" />
        </div>
    )
}

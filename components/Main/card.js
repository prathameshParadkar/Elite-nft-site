import Image from 'next/image'
import { useState, useEffect } from 'react';


export default function Card(props) {
    


    return (
        <div className="relative cursor-none">
            <div className="p-4 rounded-[33px] hover:border-[1px] border-[#7534FF]">
                
                <div className="desktop:w-[250px] desktop:h-[380px] mobile:h-[380px] mobile:w-[250px] tablet:w-[150px] tablet:h-[250px]  rounded-[33px] evolve-card flex justify-center items-center hover:border-[1px] border-[#CA34FF]"
                    onMouseEnter={() => props.hoverHandler(true)}
                    onMouseLeave={() => props.hoverHandler(false)}
                >

                    <Image src={props.img} className="mobile:scale-[1] tablet:scale-[0.7]  desktop:scale-[1]" />
                </div>
            </div>
        </div>
    )
}

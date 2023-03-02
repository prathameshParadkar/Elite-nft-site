import React from 'react'
import { Lato } from '@next/font/google'

const lato = Lato({
    weight: '400',
    subsets: ['latin']
})

export default function Why() {
    return (
        <div className=" w-full pb-20 ">
            <h1 className="styled-text font-['Furore'] relative z-10 text-5xl w-full text-center pt-20 mobile:text-[22px] mobile:pt-0">
                WHY ARE WE DOING THIS
            </h1>
            <p className={`${lato.className} text-xl relative z-10 styled-text w-2/4 text-center m-auto mt-10 tablet:w-3/4 mobile:w-[90%] mobile:text-base`} >
                While Everyone is talking about Mass Adoption of Web3 and doing Nothing to make Common People aware of it. We at Elite Took this Responsibility in our hands by Churning Out Some High quality content everyday
            </p>
        </div>
    )
}

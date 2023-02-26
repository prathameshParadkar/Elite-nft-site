import { Lato } from "@next/font/google"
import impact from '../../../images/originals/impact.png'
import Image from "next/image"
const lato = Lato({ weight: '400', subsets: ['latin'] })

export default function Impact() {
    return (
        <div className="w-full pb-32 flex flex-col items-center">

            <div className="flex space-x-[-800px] mt-10">
                <div className="w-[1200px] h-[30rem] p-10 rounded-3xl border-8 border-b-0 border-[#7534FF]">
                    <div className="w-[50%]  ml-16 rounded-3xl">
                        <Image src={impact} height={500} className="" alt="impact" />
                    </div>

                </div>
                <div className="w-[900px] z-[10] mt-20 h-[25rem] ml-10 rounded-3xl border-8 border-b-0 border-[#7534FF] p-10">

                    <p className={`styled-text text-3xl leading-normal w-[90%] ${lato.className} `}>
                        Elite Originals is our take on how NFTs should look like with tons of real life utilities and No shitty promisses of Metaverse and Play2Earn Games! In the era where everyone are selling NFTs for a cash grab our mottive is to give our community created through our content a direction and Usefull tools to navigate through this Deep Jungles of Web3
                    </p>
                </div>

            </div>
        </div>
    )
}

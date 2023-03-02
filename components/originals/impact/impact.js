import { Lato } from "@next/font/google"
import impact from '../../../images/originals/impact.png'
import Image from "next/image"
const lato = Lato({ weight: '400', subsets: ['latin'] })

export default function Impact() {
    return (
        <div className="w-full pb-32 mobile:pb-8 flex flex-col items-center">

            <div className="flex space-x-[-800px] tablet:space-x-[-430px] mobile:space-x-[-225px] mt-10">
                <div className="w-[1200px] tablet:w-[650px] mobile:w-[300px] h-[30rem] tablet:h-[33rem] mobile:h-[15rem] p-10 rounded-3xl mobile:border-4 mobile:border-b-0 border-8 border-b-0  border-[#7534FF] tablet:p-8 mobile:p-2">
                    <div className="w-[50%] tablet:w-[30%] desktop:ml-16 rounded-3xl ">
                        <Image src={impact} height={500} className="mobile:h-[120px] mobile:w-[60px]" alt="impact" />
                    </div>

                </div>
                <div className="w-[900px] tablet:w-[500px] mobile:h-[13.5rem] mobile:w-[240px] z-[10] mt-20 h-[25rem] tablet:h-[28rem] ml-10 rounded-3xl border-8 mobile:p-4 mobile:mt-6 mobile:border-4 mobile:border-b-0 border-b-0 border-[#7534FF] p-10">

                    <p className={`styled-text text-3xl leading-normal w-[90%] tablet:text-2xl tablet:w-[90%] mobile:text-xs mobile:w-[95%] ${lato.className} `}>
                        Elite Originals is our take on how NFTs should look like with tons of real life utilities and No shitty promisses of Metaverse and Play2Earn Games! In the era where everyone are selling NFTs for a cash grab our mottive is to give our community created through our content a direction and Usefull tools to navigate through this Deep Jungles of Web3
                    </p>
                </div>

            </div>
        </div>
    )
}

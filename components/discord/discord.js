import Image from "next/image"
import discordBg from '../../images/discord-bg.png'
import discordLogo from '../../images/discord-logo.png'
import discordFade from '../../images/discord-fade.png'
export default function Discord() {
    return (
        <div className="w-full relative desktop:h-screen tablet:min-h-[500px] bg-[#1A1A1A] overflow-hidden flex">
            <Image src={discordBg} className="absolute bottom-0 xl:bottom-[-25%] w-full object-cover overflow-hidden" alt="cybercity background " />
            <div className="flex tablet:flex-col tablet:items-center tablet:m-auto justify-center p-10 mobile:p-6 pb-16 mt-10">

                <h1 className="text-white text-3xl mobile:text-[0.7rem] mobile:leading-[0.8rem] tablet:text-2xl font-['Furore'] z-[10]">
                    Join the growing Community and Engage<br/>  with like-minded individuals Pan-India
                </h1>
                <div className="flex flex-col items-center mt-20 mobile:mt-10 ml-72 mobile:ml-32 z-10" >
                    <div className="p-0">
                        <Image src={discordLogo} alt="Discord logo" className="desktop:w-80 desktop:h-80 tablet:w-40 mobile:w-28" />
                    </div>
                    <button className="bg-[#7534FF] px-10 mobile:px-4 py-4 mobile:py-2 desktop:mt-16 tablet:mt-8 rounded-lg font-bold font-['Furore'] desktop:text-xl tablet:text-md mobile:text-xs md:mt-5 text-white discord-button-style whitespace-nowrap ">
                        JOIN OUR DISCORD
                    </button>
                </div>
            </div>
        </div>
    )
}

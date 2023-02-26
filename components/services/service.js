import Image from "next/image"
import nftCollection from '../../images/nft-collection.png'
import routineContent from '../../images/routine-content.png'
import folder1 from '../../images/folder1.png'
import folder2 from '../../images/folder2.png'
export default function Service() {
    return (
        <div className="w-full mobile:pt-10 pb-8 bg-[#1A1A1A]">
            <h1 className="styled-text font-['Furore'] desktop:text-6xl tablet:text-4xl mobile:text-xl w-full text-center pt-8">
                OUR MOST SELLING SERVICES
            </h1>
            <p className="text-white font-['Lexend'] w-3/4 mobile:w-[85%] mobile:text-sm text-center m-auto mt-10" >
                We Love to Create & Innovate<br />
                Elite NFT Studio is Always open to challenges. We love to create and will get on onboard even if its never done before. Given how new the space is, a lot of our clients will require us to do some research & development for some of the more complex projects. We work in the most efficient way possible with our clients to deliver our work on time.
            </p>

            <div className="flex tablet:flex-col tablet:items-center justify-center mt-8">
                <div className="desktop:mr-2">
                    <div className="flex items-center">
                        <Image className="scale-[0.6]" src={nftCollection} />
                        <h2 className="styled-text font-['Furore'] ml-4 text-3xl mobile:text-xl">
                            NFT COLLECTION
                        </h2>
                    </div>
                    <Image className="scale-[0.8]" src={folder1} />
                </div>
                <div>
                    <div className="flex items-center">
                        <Image className="scale-[0.6]" src={routineContent} />
                        <h2 className="styled-text font-['Furore'] ml-4 text-3xl mobile:text-xl">
                            ROUTINE CONTENT
                        </h2>
                    </div>
                    <Image className="scale-[0.8]" src={folder2} />

                </div>
                
            </div>

        </div>
    )
}

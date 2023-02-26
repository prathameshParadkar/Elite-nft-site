import Image from "next/image"
import eliteLogo from '../../images/elite-logo.png'
import { Lato } from "@next/font/google"
import { AiFillYoutube, AiFillTwitterCircle, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import opensea from '../../images/opensea.png'
const lato = Lato({
    weight: '400',
    subsets: ['latin']
})

export default function Footer(props) {
    return (
        <div className="w-full p-6 bg-[#191919]" >
            <div className=" w-[100%] m-auto flex mobile:flex-col justify-between items-end tablet:items-center px-20 tablet:px-6">

                <div className="flex flex-col justify-center mobile:items-center tablet:mr-16 mobile:mr-0">
                    <Image src={eliteLogo} className="mobile:hidden tablet:w-40" />
                    <p className={`${lato.className} mobile:text-center styled-text mt-10`}>
                        Get the crypto edge you need with our weekly newsletter
                    </p>
                    <div>
                        <button className='font-["Furore"] px-20 tablet:px-10 mobile:px-6 py-4 rounded-lg text-sm bg-[#7534FF] discord-button-style tablet:whitespace-nowrap text-white mt-4'>
                            SUBSCRIBE TO NEWS LETTER
                        </button>
                        <p className={`${lato.className} styled-text mobile:text-center mt-2`}>
                            By subscribing you agree to with our Privacy Policy and {!props.isMobile && <br />} provide consent to receive updates from our company.

                        </p>
                    </div>
                </div>
                <div className="flex space-x-10 mobile:mt-10 tablet:mt-24">

                    <div className={`${lato.className} styled-text text-lg tablet:whitespace-nowrap  text-white`}>
                        <h1>Useful links</h1>
                        <ul className="mt-4">
                            <li className="mt-4">
                                <a href="">
                                Home
                                </a>
                            </li>
                            <li className="mt-4">
                                <a href="">
                                Blog
                                </a>
                            </li>
                            <li className="mt-4">
                                <a href="">
                                Social media
                                </a>
                            </li>
                            <li className="mt-4">
                                <a href="">
                                Resources
                                </a>
                            </li>
                            <li className="mt-4">
                                <a href="">
                                Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={`${lato.className} styled-text text-lg text-white`}>
                        
                    </div>
                    <div className={`${lato.className} styled-text text-lg  text-white`}>
                        <h1>Social Media</h1>
                        <ul className="mt-4 whitespace-nowrap">
                            <li className="mt-4 flex items-center" >
                                <AiFillYoutube className="mr-4" />
                                <a href="">
                                    Youtube
                                </a>
                            </li>

                            <li className="mt-4 flex items-center" >
                                <AiFillTwitterCircle className="mr-4" />
                                <a href="">
                                    Twitter
                                </a>
                            </li>
                            <li className="mt-4 flex items-center" >
                                <AiOutlineInstagram className="mr-4" />
                                <a href="">
                                    Instagram
                                </a>
                            </li>
                            <li className="mt-4 flex items-center" >
                                <AiFillLinkedin className="mr-4" />
                                <a href="">
                                    LinkedIn
                                </a>
                            </li>
                            <li className="mt-4 flex items-center" >
                                <Image src={opensea} width={18} className="mr-4" />
                                <a href="">
                                    Opensea
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <hr className="mt-8 mb-8 w-[90%] m-auto " />
            <div className=" w-[100%] m-auto px-20 mobile:px-4">
                <p className={`${lato.className} styled-text text-center`}>
                    &#169;2023 Elite NFT. All right reserved.
                </p>
            </div>
        </div>
    )
}

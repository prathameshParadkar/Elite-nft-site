import Image from "next/image"
import React from "react";
import eliteLogo from '../../images/elite-logo.png'
import { Lato } from "@next/font/google"
import { AiFillYoutube, AiFillTwitterCircle, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import Aos from 'aos'
import 'aos/dist/aos.css';
import opensea from '../../images/opensea.png'
import Link from "next/link";


const lato = Lato({
    weight: '400',
    subsets: ['latin']
})

export default function Footer(props) {

    React.useEffect(() => {
        Aos.init();
    }, [])
    return (

        <div className="w-full p-6 bg-[#191919] FooterPage" >
            <div className=" w-[100%] m-auto flex mobile:flex-col justify-between items-end tablet:items-center px-20 tablet:px-6">

                <div className="flex flex-col justify-center mobile:items-center tablet:mr-16 mobile:mr-0">
                    <Image src={eliteLogo} className="mobile:hidden tablet:w-40" />
                    <p className={`${lato.className} mobile:text-center styled-text mt-10`}>
                        Get the crypto edge you need with our weekly newsletter
                    </p>
                    <div>
                        <button data-aos = "zoom-up" data-aos-duration={"1"} className='font-["Furore"] px-20 tablet:px-10 mobile:px-6 py-4 rounded-lg text-sm discord-button-style tablet:whitespace-nowrap text-white mt-4 border-white border-[1px] border-solid hover:border-[#7534FF]  fill fill-button'>
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
                                <Link href="">
                                    Home
                                </Link>
                            </li>
                            <li className="mt-4">
                                <Link href="">
                                    Blog
                                </Link>
                            </li>
                            <li className="mt-4">
                                <Link href="">
                                    Social media
                                </Link>
                            </li>
                            <li className="mt-4">
                                <Link href="">
                                    Resources
                                </Link>
                            </li>
                            <li className="mt-4">
                                <Link href="">
                                    Contact us
                                </Link>
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
                                <Link href="https://www.youtube.com/@elitenftstudio" target="_blank">
                                    Youtube
                                </Link>
                            </li>

                            <li className="mt-4 flex items-center" >
                                <AiFillTwitterCircle className="mr-4" />
                                <Link href="">
                                    Twitter
                                </Link>
                            </li>
                            <li className="mt-4 flex items-center" >
                                <AiOutlineInstagram className="mr-4" />
                                <Link href="https://www.instagram.com/_elitenft_/" target="_blank">
                                    Instagram
                                </Link>
                            </li>
                            <li className="mt-4 flex items-center" >
                                <AiFillLinkedin className="mr-4" />
                                <Link href="https://www.linkedin.com/company/elite-nft-studio/" target="_blank">
                                    LinkedIn
                                </Link>
                            </li>
                            <li className="mt-4 flex items-center" >
                                <Image src={opensea} width={18} className="mr-4" />
                                <Link href="">
                                    Opensea
                                </Link>
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

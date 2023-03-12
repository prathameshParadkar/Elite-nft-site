import Image from 'next/image'
import logo from '../../images/logo.png'
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import { FaDiscord, FaInstagram } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';
import Link from 'next/link';


export default function Navbar(props) {

    const iconStyle = " cursor-pointer hover:text-[#7534FF] transition-colors"
    

    return (
        <div className="z-40 fixed w-full top-0 left-0 px-6 py-4  flex justify-between">
            <Link href="/">
            <Image className='desktop:w-14 desktop:h-12 tablet:h-16 tablet:w-16 mobile:w-10 mobile:h-10' src={logo} />
            </Link>

            <ul className='text-white desktop:text-2xl tablet:mt-6 desktop:mt-2 tablet:text-2xl desktop:space-x-10 tablet:space-x-10 mobile:hidden flex'>
                <li className={iconStyle}>
                    <a href="" target="_blank" >
                        <GrFacebookOption />
                    </a>
                </li>
                <li className={iconStyle}>
                    <a href="" target="_blank">
                        <GrTwitter />
                    </a>
                </li>
                <li className={iconStyle}>
                    <a href="" target="_blank">
                        <FaDiscord />
                    </a>
                </li>
                <li className={iconStyle}>
                    <a href="" target="_blank">
                        <GrLinkedinOption />
                    </a>
                </li>
                <li className={iconStyle}>
                    <a href="https://www.instagram.com/_elitenft_/" target="_blank"  rel="noreferrer" >
                        <FaInstagram />
                    </a>
                </li>
                <li className={iconStyle} onClick={() => { props.toggleHandler(prev => !prev) }}>
                    <RiMenu3Fill />
                </li>
            </ul>

            {
                props.isMobile &&
                <div className='text-white text-2xl mt-4 cursor-pointer desktop:hidden mobile:block ' onClick={() => { props.toggleHandler(prev => !prev) }}>
                    <RiMenu3Fill />
                </div>
            }





        </div>
    )
}

import Image from 'next/image'
import logo from '../../images/logo.png'
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import { FaDiscord, FaInstagram } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';


export default function Navbar(props) {

    const iconStyle = " cursor-pointer"

    return (
        <div className="z-40 fixed w-full top-0 left-0 px-6 py-4  flex justify-between">
            <Image className='desktop:w-20 desktop:h-20 tablet:h-16 tablet:w-16 mobile:w-10 mobile:h-10' src={logo} />

            <ul className='text-white desktop:text-2xl tablet:mt-6 desktop:mt-2 tablet:text-2xl desktop:space-x-10 tablet:space-x-10 mobile:hidden flex'>
                <li className={iconStyle}>
                    <GrFacebookOption />
                </li>
                <li className={iconStyle}>
                    <GrTwitter />
                </li>
                <li className={iconStyle}>
                    <FaDiscord />
                </li>
                <li className={iconStyle}>
                    <GrLinkedinOption />
                </li>
                <li className={iconStyle}>
                    <FaInstagram />
                </li>
                <li className='cursor-pointer' onClick={() => { props.toggleHandler(prev => !prev) }}>
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

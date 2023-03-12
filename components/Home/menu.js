import React from 'react';
import Image from 'next/image'
import menuBg from '../../images/menu-bg.png'
import logo from '../../images/logo.png'
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import { FaDiscord, FaInstagram } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';
import { animate, motion } from 'framer-motion';
import {Link as Link2} from 'react-scroll';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: 400 }
}

export default function Menu(props) {
  const iconStyle = " cursor-pointer"
  return (
    <motion.div
      animate={props.toggle ? "open" : "closed"}
      variants={variants}
      transition={{ type: "spring", duration: 0.5 }}
      onClick={() => { props.toggleHandler(prev => !prev) }}
      style={{ backgroundImage: `url(${menuBg.src})` }}
      className={`fixed desktop:w-[400px] tablet:w-[400px] mobile:w-screen h-screen overflow-hidden desktop:max-h-[987.15px] top-0 right-0 z-50 ${props.toggle ? 'block' : 'hidden'} bg-cover bg-no-repeat menu-animation`}>
      {/* <Image className='absolute' src={menuBg} /> */}
      <div className='flex justify-between ml-8 mt-6'>
        <Image src={logo} />
        <AiOutlineClose className='text-white text-2xl mr-8  cursor-pointer'
        />
      </div>
      <ul className='text-white text-3xl ml-9 mt-16 font-["Furore"] styled-text'>
        <li className='cursor-pointer ' >
          <Link href="/">
            Home
          </Link>
        </li>
        <li className='mt-8 cursor-pointer'>
          <Link href="/team">
            About
          </Link>
        </li>
        <li className='mt-8 cursor-pointer'>
          <Link href="/studios">
            Studio
          </Link>
        </li>
        <li className='mt-8 cursor-pointer'>
          <Link href="/productions">
            Productions
          </Link>
        </li>
        <li className='mt-8 cursor-pointer'>
          <Link href="/community">
            Community
          </Link>
        </li>
        <li className='mt-8 cursor-pointer'>
          <Link2
            to="FooterPage"
            duration={500}
            smooth ={true}
            spy={true}
          >
            Contact
          </Link2>
          
        </li>
      </ul>

      <div>

        <ul className='text-white tablet:mt-8 tablet:text-2xl tablet:space-x-10 flex flex-row desktop:hidden tablet:hidden mobile:inline-flex justify-center ml-8'>
          <li className={iconStyle}>
            <a href="https://www.instagram.com/_elitenft_/" target="_blank" rel="noreferrer" >
              <GrFacebookOption />
            </a>
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
        </ul>
      </div>

    </motion.div>
  )
}

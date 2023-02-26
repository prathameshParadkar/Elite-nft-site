import React from 'react';
import Image from 'next/image'
import menuBg from '../../images/menu-bg.png'
import logo from '../../images/logo.png'
import { AiOutlineClose } from 'react-icons/ai';



export default function Menu(props) {
  
  return (
    <div
      style={{ backgroundImage: `url(${menuBg.src})` }}
      className={`fixed desktop:w-[400px] tablet:w-[400px] mobile:w-screen h-screen overflow-hidden desktop:max-h-[987.15px] top-0 right-0 z-50 ${props.toggle ? 'block' : 'hidden'} bg-cover bg-no-repeat`}>
          {/* <Image className='absolute' src={menuBg} /> */}
          <div className='flex justify-between ml-8 mt-6'>
              <Image src={logo}/>
              <AiOutlineClose className='text-white text-2xl mr-8  cursor-pointer'
              onClick={() => {props.toggleHandler(prev => !prev)}}
              />
          </div>
          <ul className='text-white text-3xl ml-9 mt-16 font-["Furore"] styled-text'>
              <li className='cursor-pointer ' >Home</li>
              <li className='mt-8 cursor-pointer'>About</li>
              <li className='mt-8 cursor-pointer'>Studio</li>
              <li className='mt-8 cursor-pointer'>Productions</li>
              <li className='mt-8 cursor-pointer'>Community</li>
              <li className='mt-8 cursor-pointer'>Contact</li>
          </ul>
          
    </div>
  )
}

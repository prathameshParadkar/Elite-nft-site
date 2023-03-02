import React from 'react'
import Image from 'next/image'
import logo from '../../../images/community/logo.png'
import bg from '../../../images/community/bg-fade.png'
import Navbar from '@/components/Home/navbar'
import Menu from '@/components/Home/menu'

export default function CommunityHome(props) {
  const [toggle, setToggle] = React.useState(false)

  return (
    <div className='relative bg-[#191919]  bg-cover  w-full'>
      <Navbar toggleHandler={setToggle} isMobile={props.isMobile} />
      <Menu toggle={toggle} toggleHandler={setToggle} />
      <Image src={bg} className="absolute tablet:top-10 opacity-[0.7] z-[0]" />
      <Image src={logo} className=" m-auto mb-20 scale-[0.7] tablet:scale-[0.6] pt-32 mobile:pt-10" />
    </div>
  )
}

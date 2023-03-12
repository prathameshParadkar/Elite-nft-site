import React from 'react'
import Image from 'next/image'
import logo from '../../../images/productions/logo.png'
import bg from '../../../images/productions/bg-fade.png'
import Navbar from '@/components/Home/navbar'
import Menu from '@/components/Home/menu'


export default function ProductionHome() {
  const [toggle, setToggle] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(() => {
    if (window.innerWidth <= 764) {
        setIsMobile(true)
    }
}, [])
  return (
    <div className='relative bg-[#191919]  bg-cover  w-full'>
      <Navbar toggleHandler={setToggle} isMobile={isMobile} />
      <Menu toggle={toggle} toggleHandler={setToggle} />
      <Image src={bg} className="absolute object-cover w-full desktop:top-[-130px] opacity-[0.7] z-[0]" />
      <Image src={logo} className=" m-auto mb-20 scale-[0.7] tablet:scale-[0.6] pt-32 mobile:pt-10" />
    </div>
  )
}

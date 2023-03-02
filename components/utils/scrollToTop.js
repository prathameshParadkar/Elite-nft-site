import React from 'react'
import Image from 'next/image';
import btn from '../../images/scrollToTop/btn.png'
import { AiOutlineArrowUp } from "react-icons/ai";


export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = React.useState(false)
    const [isMobile, setIsMobile] = React.useState(false)

    React.useEffect(() =>{
        if (window.innerWidth <= 900){
            setIsMobile(true)
        }
    }, [])

    const ToggleAppear = () => {
        if(window.pageYOffset > 300){
            setIsVisible(true);
        }
        else{
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior : "smooth",
        })
    }

    React.useEffect(() => {
        window.addEventListener('scroll', ToggleAppear)

        return () => {
            window.removeEventListener('scroll', ToggleAppear)
        }
    }, [])
    
return (
    <> 
    {!isMobile &&isVisible && 
    <button className='fixed right-5 bottom-5 z-50 text-2xl text-white' onClick={scrollToTop}>
        <Image src={btn} className="h-[200px] w-[25px]" />
    </button>
    }
    </>
  )
}

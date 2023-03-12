import React from "react"
import Image from "next/image"
import { studioPortfolio } from "@/Data/studioPortfolio"
import Aos from 'aos'
import 'aos/dist/aos.css';
import { animate, motion } from "framer-motion";


export default function Portfolio() {
    const [selected, setSelected] = React.useState(0)
    const [fade, setfade] = React.useState(false)
    const [image1, setImage1] = React.useState("")
    const [image2, setImage2] = React.useState("")
    const [image3, setImage3] = React.useState("")

    const selectedButtonStyle = "font-['Lexend'] text-white font-bold px-8 py-0 tablet:px-6 tablet:text-sm mobile:text-xs mobile:px-3 bg-[#7534FF]"
    const buttonStyle = "font-['Lexend'] text-white font-bold px-8 py-0 tablet:px-6 mobile:px-3 tablet:text-sm mobile:text-xs bg-[#716F76]"

    React.useEffect(() => {
        Aos.init();
    }, [])

    const select0 = () => {
        setSelected(0)
    }

    const select1 = () => {
        setSelected(1)
    }
    const select2 = () => {
        setSelected(2)
    }
    const select3 = () => {
        setSelected(3)
    }
    const select4 = () => {
        setSelected(4)
    }
    const select5 = () => {
        setSelected(5)
    }
    React.useEffect(() => {


        let iterator = 0;
        let imgArr = studioPortfolio[selected]
        const interval = setInterval(() => {
            iterator = (iterator + 1) % imgArr.length;
            setImage1(imgArr[iterator])
            setImage2(imgArr[(iterator + 1) % imgArr.length])
            setImage3(imgArr[(iterator + 2) % imgArr.length])
            setfade(prev => !prev)
            console.log(iterator)
        }, 2000);
        return () => clearInterval(interval);

    }, [selected])
    return (
        <div className="w-full pb-16 flex flex-col items-center">
            <h1 data-aos="fade-up" className="styled-text font-['Furore'] text-6xl mobile:text-3xl tablet:text-6xl w-full text-center pt-8 " >
                PORTFOLIO
            </h1>
            <h1 data-aos="fade-up" className="styled-text font-['Furore'] w-full text-center text-2xl mobile:text-xs  tablet:text-xl pt-10 " >
                <span className="border-[1px] border-solid border-[#7534FF] px-24 mobile:px-8 mobile:py-4 pt-4 pb-6 rounded-xl">
                    Gallery of some arts that we created.
                </span>
            </h1>
            <div data-aos="fade-up" className="mt-10 flex justify-around z-10 w-[75%] mobile:w-[95%]">
                <button className={selected == 0 ? selectedButtonStyle : buttonStyle}
                    onClick={select0}
                >
                    ALL
                </button>
                <button className={selected == 1 ? selectedButtonStyle : buttonStyle}
                    onClick={select1}
                >
                    2D
                </button>
                <button className={selected == 2 ? selectedButtonStyle : buttonStyle}
                    onClick={select2}
                >
                    3D
                </button>
                <button className={selected == 3 ? selectedButtonStyle : buttonStyle}
                    onClick={select3}
                >
                    SOCIAL<br />
                    MEDIA
                </button>
                <button className={selected == 4 ? selectedButtonStyle : buttonStyle}
                    onClick={select4}
                >
                    LOGO
                </button>
                <button className={selected == 5 ? selectedButtonStyle : buttonStyle}
                    onClick={select5}
                >
                    MOTION<br />
                    GRAPHIC
                </button>
            </div>

            {studioPortfolio[selected] && studioPortfolio[selected].length > 2 ?
                <div className="flex items-center space-x-[-35px] mt-10 z-10">
                    
                        <Image data-aos="fade-right" src={image1} className="w-80 h-80 tablet:w-60 tablet:h-60 mobile:w-32 mobile:h-32" />
                    
                    <motion.div animate={{ opacity: fade ? [0, 50 ,100] : [0, 75, 100] }}
                        transition={{ duration: 0.4 }}
                        className="relative z-40"
                    >

                        <div className="portfolio-img relative z-40" >
                            <Image data-aos="fade-up" src={image2} className="w-96 h-96 tablet:w-72 tablet:h-72
                        mobile:w-[10rem] mobile:h-[10rem] " />
                        </div>
                    </motion.div>
                    
                        <Image data-aos="fade-left" src={image3} className="relative w-80 h-80 tablet:w-60 tablet:h-60 mobile:w-32 z-10 mobile:h-32 " />
                    
                </div>
                : <h1 className="styled-text font-['Furore'] text-6xl w-full text-center mt-10 "> No data found</h1>
            }



        </div>
    )
}

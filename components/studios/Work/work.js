import { Lato } from "@next/font/google"
import React from "react";
import Aos from 'aos'
import 'aos/dist/aos.css';


const lato = Lato({ weight: '400', subsets: ['latin'] })

export default function Work() {
    const [isMobile, setIsMobile] = React.useState(false)

    React.useEffect(() => {
        if (window.innerWidth <= 900) {
            setIsMobile(true)
        }
        Aos.init();
    }, [])

    return (
        <div className="w-full desktop:mt-16 pb-16 flex flex-col items-center">
            <h1 data-aos="fade-up" className="styled-text font-['Furore'] text-6xl mobile:text-3xl w-full text-center pt-8 ">
                OUR WORK
            </h1>
            <div data-aos="fade-up" className="flex tablet:flex-col tablet:items-center tablet:w-full desktop:space-x-[-700px] mt-10">
                <div className="w-[1200px] tablet:w-[80%] h-[30rem] mobile:h-[15rem] mobile:w-[90%] mobile:p-4 tablet:h-[25rem] p-10 rounded-3xl border-8 border-b-0 border-[#7534FF]">
                    <div data-aos={isMobile ? "fade-up" : "fade-right"} className="w-[50%] tablet:w-full h-full yt-card rounded-3xl">

                    </div>

                </div>
                <div className="w-[800px] tablet:w-[80%] z-[10] mt-20 mobile:mt-10 h-[25rem] mobile:h-[18rem] mobile:w-[90%] ml-10 tablet:ml-0 rounded-3xl border-8 border-b-0 border-[#7534FF] p-10 tablet:text-center">
                    <h1 data-aos={isMobile ? "fade-up" : "fade-left"} className="styled-text font-['Furore'] text-5xl mobile:text-2xl w-full   " >
                        Ready to <br />
                        fall for it?
                    </h1>

                    <p data-aos={isMobile ? "fade-up" : "fade-left"} className={`styled-text text-2xl mt-10 w-[85%] tablet:w-full mobile:text-sm ${lato.className} `}>
                        We have been in the Space for more than 2 years now. With Experience on working on Super successful Projects and Clients.
                        So hop on the bandwagon and get ready to Fall in love with us

                    </p>
                </div>

            </div>
        </div>
    )
}

import React from 'react'
import Card from './card'
import { studioServicesData } from '../../../Data/studioServicesData.js'
import Aos from 'aos'
import 'aos/dist/aos.css';



export default function StudioServices() {

    React.useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className='w-full flex flex-col pb-10 items-center '>
            <h1 data-aos = "fade-up" className="styled-text font-['Furore'] text-6xl mobile:text-3xl w-full text-center pt-8 z-[10]">
                OUR SEVRICES
            </h1>

            <p data-aos = "fade-up" className="text-white font-['Lexend'] w-3/4 text-center mt-10 z-[10]">
                We Love to Create & Innovate <br />
                Elite NFT Studio is Always open to challenges. We love to create and will get on onboard even if its never done before. Given how new the space is, a lot of our clients will require us to do some research & development for some of the more complex projects. We work in the most efficient way possible with our clients to deliver our work on time.
            </p>

            <div className='grid xl:grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-1 gap-6 mt-10  items-start'>
                {studioServicesData.length > 0 && studioServicesData.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            title={item.title}
                            para={item.para}
                            img={item.img}
                        />
                    )
                })}
            </div>
        </div>
    )
}

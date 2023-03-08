import React, {useState} from 'react'
import Link from 'next/link'
import eliteStudio from '../../images/elite-studio.png'
import eliteOriginals from '../../images/elite-originals.png'
import eliteProductions from '../../images/elite-productions.png'
import eliteCommuntiy from '../../images/elite-community.png'
import Card from './card'
import Cursor from './cursor';
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function Evolve(props) {
    const [isHover, setIsHover] = useState(false);
    
    React.useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div
            className=' w-full bg-[#1A1A1A]'>
            <div>
                <p data-aos = "fade-up" className={`text-white font-["Furore"]  styled-text desktop:text-5xl tablet:text-4xl mobile:text-xl  text-center w-full pt-16`}>
                    Elite is Ever Evolving
                </p>
            </div>

            <div  className='relative'>
                
                <ul className='flex  mobile:flex-col mobile:items-center justify-center desktop:mt-24 tablet:mt-20'>
                    <li data-aos = "fade-up" className='desktop:mr-10 tablet:mr-4'><Link href="/studios">
                        <Card hoverHandler={setIsHover} img={eliteStudio} />
                    </Link>
                    </li>
                    <li data-aos = "fade-up" className='desktop:mr-10 tablet:mr-4'><Link href="/originals">
                        <Card hoverHandler={setIsHover} img={eliteOriginals} />
                    </Link>
                    </li>
                    <li data-aos = "fade-up" className='desktop:mr-10 tablet:mr-4'><Link href="/productions">
                        <Card hoverHandler={setIsHover} img={eliteProductions} />
                    </Link>
                    </li>
                    <li data-aos = "fade-up" ><Link href="/community">
                        <Card hoverHandler={setIsHover} img={eliteCommuntiy} />
                    </Link>
                    </li>
                </ul>
                <Cursor isShown={isHover}  hoverHandler={setIsHover} />
            </div>


        </div>
    )
}

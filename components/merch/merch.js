import merchBg from '../../images/merch-bg.png'
// import shirt from '../../images/tshirt.mp4'
import Image from 'next/image'
import { Lato } from '@next/font/google'

const lato = Lato({
    weight: '400',
    subsets: ['latin']
})


export default function Merch() {
    return (
        <div style={{ backgroundImage: `url(${merchBg.src})` }} className="w-full ">
            <div className='relative flex flex-col z-10'>
                <div className='text-white text-center text-3xl mt-10 tablet:hidden font-["Furore"]'>
                    <h3 className='styled-text'>Grab your Cool guy Crypto merch and look</h3>
                    <h1 className='text-7xl merch-elite-text ' >
                        “Elite”
                    </h1>
                </div>
                <div className='flex tablet:flex-col-reverse  tablet:mt-12 justify-center items-center desktop:m-auto'>
                    <div className='text-center tablet:block text-white'>
                        <button className='font-["Furore"] px-20 py-4 desktop:hidden rounded-lg text-xl bg-[#7534FF] discord-button-style mobile:text-sm mobile:px-10 mobile:py-2 '>
                            BUY NOW
                        </button>
                    </div>
                    <video src={'/tshirt.mp4'} className="w-[40rem] h-[40rem] scale-[0.7] tablet:scale-[1] mobile:w-80 mobile:h-80 rounded-[80px] mobile:rounded-[50px] tablet:rounded-[65px] tablet:mt-10 tablet:mb-10 merch-video" loop autoPlay muted >
                    
                    </video>

                    <div className='relative font-["Furore"] text-white flex flex-col tablet:items-center desktop:mr-20 z-10'>
                        <h1 className='text-center text-4xl mobile:text-lg styled-text '>Rock our merch <br /> and Be the True Crypto Freak</h1>
                        <p className={`text-center ${lato.className} text-lg mobile:text-sm  tablet:text-xl tablet:w-[60%] mobile:w-[75%]  mt-16 mobile:mt-8 w-[719px] styled-text `}>Get really awesome T shirts with crazy concepts and slangs and let the world know about the biggest thing that they will witness in their lifetime</p>

                        <div className='text-center mt-10 tablet:hidden '>
                            <button className='font-["Furore"] px-20 py-4 rounded-lg text-xl bg-[#7534FF] discord-button-style '>
                                BUY NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

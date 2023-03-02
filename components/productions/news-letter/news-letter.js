import React from 'react'
import Image from 'next/image'
import pic from '../../../images/productions/newletter.png'
import bf from '../../../images/bottomfade.png'
import { Lato } from '@next/font/google'
import Contact from '@/components/contact/contact'

const lato = Lato({
    weight: '400',
    subsets: ['latin']
})


export default function NewsLetter(props) {
    return (
        <>
            <div className="w-full overflow-hidden">
                <div className='flex pb-32 mobile:pb-20 justify-center items-center'>

                    <div className='flex tablet:flex-col-reverse  tablet:mt-12 justify-center items-center'>
                        <div className='text-center tablet:block text-white'>
                            <button className='font-["Furore"] px-20 py-4 desktop:hidden rounded-lg 
                            tablet:mt-14 text-xl bg-[#7534FF] discord-button-style mobile:text-sm mobile:px-10 mobile:py-2 '>
                                SUBSCRIBE TO NEWS LETTER
                            </button>
                        </div>
                        <div className='news-card rounded-[50px] p-4 desktop:w-[30rem] desktop:h-[30rem]'>

                            <Image src={pic} className="w-[30rem] h-[30rem] tablet:scale-[1] mobile:w-80 mobile:h-80" />
                        </div>

                        <div className='font-["Furore"] text-white flex flex-col tablet:items-center'>

                            <p className={`text-center ${lato.className} text-3xl 
                            pb-4 mobile:text-sm  tablet:text-xl tablet:w-[60%] mobile:w-[75%]  mt-16 mobile:mt-8 w-[719px] styled-text`}>
                                Get the crypto edge you need {!props.isMobile && <br />}
                                with our weekly newsletter
                            </p>
                            <h1 className='text-center text-4xl mobile:text-lg styled-text tablet:mb-14'>
                                &quot;SUBSCRIBE NOW&quot;
                            </h1>

                            <div className='text-center mt-10 tablet:hidden'>
                                <button className='font-["Furore"] px-20 py-4 rounded-lg text-xl bg-[#7534FF] discord-button-style '>
                                    SUBSCRIBE TO NEWS LETTER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Contact />

                <Image src={bf} className="w-full" />
            </div>
        </>
    )
}

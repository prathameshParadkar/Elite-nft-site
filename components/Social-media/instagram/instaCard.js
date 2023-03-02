import img from '../../../images/reel-cover.png'
import Image from 'next/image';
import logo from '../../../images/logo.png'
import smallLogo from '../../../images/small-logo.png'
export default function InstaCard() {
    return (
        <div className='flex flex-col mr-6 mobile:mr-2 p-6 mobile:p-2 items-center '>
            <Image src={img} className="w-60 h-200 mobile:w-40 mobile: rounded-xl cursor-pointer" />
            <div >
                <div className='flex items-center w-80 mobile:w-52 mt-6'>
                    <Image src={smallLogo}  />
                    <h3 className='ml-4 font-["Lexend"] text-white text-md mobile:text-sm'>
                        What is Stable Coin Explained | Elite NFT Studio | Web 3
                    </h3>
                </div>
            </div>
        </div>
    )
}

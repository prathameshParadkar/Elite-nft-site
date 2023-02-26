import img from '../../../images/article.png'
import Image from 'next/image';
import logo from '../../../images/logo.png'
import smallLogo from '../../../images/small-logo.png'
export default function ytCard() {
    return (
        <div className='flex flex-col mr-10 mobile:mr-6 p-6 mobile:p-2  items-center cursor-pointer'>
        <Image src={img} className="w-80 mobile:w-56 h-100 rounded-xl" />
        <div >
            <div className='flex items-center w-96 mobile:w-40 mt-4'>
                
            </div>
        </div>
    </div>
    )
}

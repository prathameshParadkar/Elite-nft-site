import img from '../../../images/reel-cover.png'
import Image from 'next/image';
import logo from '../../../images/logo.png'
import smallLogo from '../../../images/small-logo.png'
export default function InstaCard(props) {
    return (
        <a href={props.link} target="_blank" rel="noreferrer"> 
            <div className='flex flex-col mr-6 mobile:mr-2 p-6 mobile:p-2 items-center '>
                <Image src={props.thumbnail} width={200} height={200} className="w-60 h-200 mobile:w-40 mobile: rounded-xl cursor-pointer" />
                <div >
                    <div className='flex items-center w-80 mobile:w-52 mt-6'>
                        <Image src={smallLogo} />
                        <h3 dangerouslySetInnerHTML={{ __html: props.caption }}  className='ml-4 font-["Lexend"] text-white text-md mobile:text-sm'>
                        </h3>
                    </div>
                </div>
            </div>
        </a>
    )
}

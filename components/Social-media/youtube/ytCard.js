import img from '../../../images/maxresdefault.jpg'
import Image from 'next/image';
import logo from '../../../images/logo.png'
import smallLogo from '../../../images/small-logo.png'
export default function ytCard(props) {

    return (
        <a href={`https://www.youtube.com/watch?v=${props.videoId}`} target="_blank" rel="noreferrer" className='flex flex-col mr-16 tablet:mr-12 mobile:mr-8 p-4 py-6 rounded-xl yt-card items-center cursor-pointer'
        // onClick={redirectToYt}
        >
            <Image src={props.img} width={480} height={360} className="w-80 mobile:w-60 mobile:h-[133px] h-[175px] object-cover rounded-xl" />
            <div >
                <div className='flex items-center w-96 mobile:w-72 mt-6'>
                    <Image src={smallLogo} />
                    <h3 dangerouslySetInnerHTML={{__html: props.title}} className='ml-4 font-["Lexend"] text-white text-md mobile:text-sm'>
                    
                    </h3>
                </div>
            </div>
        </a>
    )
}

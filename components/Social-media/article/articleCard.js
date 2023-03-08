import img from '../../../images/article.png'
import Image from 'next/image';
import logo from '../../../images/logo.png'
import smallLogo from '../../../images/small-logo.png'
export default function ArticleCard(props) {
    return (
        <a href={props.link} target="_blank" rel="noreferrer">
            <div className='flex flex-col mr-10 mobile:mr-6 p-6 mobile:p-2  items-center cursor-pointer'>
                <Image src={img} className="w-80 mobile:w-56 h-100 rounded-xl" />
                <div className='flex items-center w-80 mobile:w-72 mt-6'>
                    <Image src={smallLogo} />
                    <h3 dangerouslySetInnerHTML={{__html: props.title}} className='ml-4 font-["Lexend"] text-white text-md mobile:text-sm'>
                    
                    </h3>
                </div>
            </div>
        </a>
    )
}

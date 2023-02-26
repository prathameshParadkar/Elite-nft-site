import YtSlider from "./youtube/ytSlider"
import InstaSlider from "./instagram/instaSlider"
import ArticleSlider from "./article/articleSlider"

export default function media() {
    return (
        <div className="relative  w-full z-10 ">
            <h1 className="styled-text font-['Furore'] w-full text-center text-3xl pt-32 ">
                <span className="border-[1px] border-solid border-[#7534FF] px-24 pt-4 pb-6 rounded-xl tablet:text-2xl mobile:text-sm mobile:pt-2 mobile:pb-4 mobile:px-6">
                    Binge our Latest YouTube Videos
                </span>
            </h1>
            <YtSlider />
            <h1 className="styled-text font-['Furore'] w-full text-center text-3xl mt-20">

                <span className="border-[1px] border-solid border-[#7534FF] px-24 pt-4 pb-6 rounded-xl tablet:text-2xl mobile:text-sm mobile:pt-2 mobile:pb-4 mobile:px-6">
                    All about the Reel-ing
                </span>
            </h1>
            <InstaSlider />
            <h1 className="styled-text font-['Furore'] w-full text-center text-3xl mt-20 ">

                <span className="border-[1px] border-solid border-[#7534FF] px-24 pt-4 pb-6 rounded-xl tablet:text-2xl mobile:text-sm mobile:pt-2 mobile:pb-4 mobile:px-6">
                    On your Reading list
                </span>
            </h1>
            <ArticleSlider />
        </div>
    )
}

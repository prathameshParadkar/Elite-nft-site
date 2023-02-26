import { Lato } from "@next/font/google"

const lato = Lato({ weight: '400', subsets: ['latin'] })

export default function Work() {
    return (
        <div className="w-full pb-16 flex flex-col items-center">
            <h1 className="styled-text font-['Furore'] text-6xl mobile:text-3xl w-full text-center pt-8 ">
                OUR WORK
            </h1>
            <div className="flex tablet:flex-col tablet:items-center tablet:w-full desktop:space-x-[-700px] mt-10">
                <div className="w-[1200px] tablet:w-[80%] h-[30rem] mobile:h-[15rem] mobile:w-[90%] mobile:p-4 tablet:h-[25rem] p-10 rounded-3xl border-8 border-b-0 border-[#7534FF]">
                    <div className="w-[50%] tablet:w-full h-full yt-card rounded-3xl">

                    </div>

                </div>
                <div className="w-[800px] tablet:w-[80%] z-[10] mt-20 mobile:mt-10 h-[25rem] mobile:h-[18rem] mobile:w-[90%] ml-10 tablet:ml-0 rounded-3xl border-8 border-b-0 border-[#7534FF] p-10 tablet:text-center">
                    <h1 className="styled-text font-['Furore'] text-5xl mobile:text-2xl w-full   " >
                        Ready to <br />
                        fall for it?
                    </h1>

                    <p className={`styled-text text-2xl mt-10 w-[85%] tablet:w-full mobile:text-sm ${lato.className} `}>
                        We have been in the Space for more than 2 years now. With Experience on working on Super successful Projects and Clients.
                        So hop on the bandwagon and get ready to Fall in love with us

                    </p>
                </div>

            </div>
        </div>
    )
}

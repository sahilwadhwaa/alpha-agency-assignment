import { Form } from "./Form"
//importing all the required svgs
import logo from "../images/Asset 3@4x-8.png"
import shield from "../images/shield.svg"
import svg2 from "../images/Group 110.svg"
import svg3 from "../images/Asset 2ne.svg"

export const LandingPage = () => {
    return (
        <div className="w-full h-[1000px] bg-cover bg-no-repeat bg-[url('./images/Mask-Group2.png')] md:bg-[url('./images/banner-image.png')] md:w-full md:h-[710px] md:bg-cover md:bg-no-repeat">
            <div className="w-[107px] h-[36px] pl-7 pt-5 pb-18 md:w-[262px] md:h-[88px] md:pt-20 md:pl-20">
                <img src={logo} alt="logo" />
            </div>
            <div className="block md:flex md:justify-between">
                <div className="block pt-20 pl-7 pr-5 md:pl-20">
                    <div className="block md:pt-20">
                        <h1 className="font-semibold md:text-xl md:font-book md:text-3xl">Take your graphics protection</h1>
                        <h1 className="font-semibold md:text-xl md:font-book md:text-3xl pb-4">to the next level with DOL Max overlaminates</h1>
                        <h1 className="pr-5 font-light md:text-lg md:font-light md:text-xl pb-10">Pair with MPI 1105 wrapping film for ramped up protection</h1>
                    </div>
                    <div className="flex justify-around pb-5 md:pb-0">
                        <div className="font-light text-sm text-center">
                            <img src={svg2} alt="svg2" className="pl-2 pb-2 md:pb-4" />
                            <p>Maximum</p>
                            <p>Durability</p>
                            
                        </div>
                        <div className="font-light text-sm text-center">
                            <img src={shield} alt="shield" className="pl-5 pb-2 md:pb-4"/>
                            <p>Enhanced</p>
                            <p>Appearance</p>
                        </div>
                        <div className="font-light text-sm text-center">
                            <img src={svg3} alt="svg3" className="pl-2 pb-2 md:pb-2"/>
                            <p>High Gloss</p>
                            <p>Finish</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block mr-2 ml-2 md:mr-5">
                    <Form />
                </div>
            </div>
        </div>
    )
}
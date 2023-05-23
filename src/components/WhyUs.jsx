//importing all the required images and svg
import Sofa from "../images/GS_DIGITAL_AD_WALL_FILMS_INTERIOR_DESIGN_COLLECTION_Indoor_MPI8621_Removable@2x.png"
import svg1 from "../images/Group 110.svg"
import svg2 from "../images/ici-adhesives.svg"
import svg3 from "../images/ici-online-communication.svg"
import svg4 from "../images/Path 68.svg"

export const WhyUs = ({scrollToForm}) => {

    return (
        <div className="bg-slate-300 block md:flex">
            <img src={Sofa} className="hidden w-full h-[300px] md:flex md:w-[551px] md:h-[606px]" alt="sofa" />
            <div >
                <h1 className="text-3xl font-semibold pt-10 pl-5 pb-5 md:pt-20 md:pl-10 md:pb-10">Why Us?</h1>
                <div className="pb-10">
                    <div className="pl-5 pb-2 md:pl-10 md:pb-3 block md:flex">
                        <img src={svg1} className="pb-3 md:pr-12" alt="svg1" />
                        <div>
                            <p className="text-md font-semibold">Quality Products</p>
                            <p className="font-light">Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</p>
                        </div>  
                    </div>
                    <div className="pl-5 pb-2 md:pl-10 md:pb-3 block md:flex">
                        <img src={svg2} className="pb-3 md:pr-11" alt="svg2" />
                        <div>
                            <p className="text-md font-semibold">Multiple Options</p>
                            <p className="font-light">We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition.</p>
                        </div>  
                    </div>
                    <div className="pl-5 pb-2 md:pl-10 md:pb-3 block md:flex">
                        <img src={svg3} className="pb-3 md:pr-9" alt="svg3" />
                        <div>
                            <p className="text-md font-semibold">Expertise and Support</p>
                            <p className="font-light">Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond. </p>
                        </div>  
                    </div>
                    <div className="pl-5 md:pl-10 block md:flex">
                        <img src={svg4} className="pb-3 md:pr-10" alt="svg4" />
                        <div>
                            <p className="text-md font-semibold">Durability Assurance</p>
                            <p className="font-light">Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.</p>
                        </div>  
                    </div>
                </div>
                <div className="pb-10 pl-5 md:pl-10">
                    <button onClick={scrollToForm} className="font-semibold px-10 py-3 bg-orange-500 text-xl font-medium text-white rounded">
                        Inquire now
                    </button>
                </div>
            </div>
            <img src={Sofa} className="w-full h-[300px] md:hidden" alt="sofa" />
        </div>
    )
}
export const Benefits = ({scrollToForm}) => {

    return (
            <div className="block w-full h-[1000px] bg-cover bg-no-repeat bg-[url('./images/Mask-Group1.png')] md:bg-[url('./images/Group-218.png')] md:w-full md:h-[710px] md:bg-cover md:bg-no-repeat">
                <div className="pt-20 ml-5 md:ml-10">
                    <h1 className="pt-20 md:pt-0 font-semibold md:text-3xl text-xl">DOL Max Overlaminate Films</h1>   
                    <p className="pb-5 mr-1 font-light">Printed graphics deserve maximum protection, DOL Max is the solution.</p> 
                    <p className="pb-2 font-medium">Features & Benefits:</p>
                    <ul className="font-light list-disc pb-8 mr-1 md:mr-[850px]">
                        <li>Premium vertical durability of up to 7 years and up to 2 years horizontal durability protection.</li>
                        <li>The high gloss finish enhances the appearance of graphics and adds a special touch to help your graphics stand out.</li>
                        <li>The high gloss finish enhances the appearance of graphics and adds a special touch to help your graphics stand out.</li>
                    </ul>
                </div>
                <div className="ml-7 md:ml-10">
                    <button onClick={scrollToForm} className="font-semibold px-10 py-3 bg-orange-500 text-xl font-medium text-white rounded">
                        Inquire now
                    </button>
                </div>
            </div>
    )
}
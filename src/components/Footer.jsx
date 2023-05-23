//importing the company logo
import logo from "../images/Vector Smart Object@2x.png"

export const Footer = () => {
    return (
        <footer className="bg-white shadow dark:bg-black">
            <div className="p-4 md:py-16">
                <div className="flex justify-around">
                    <div className="">
                    <h3 className="font-light hidden md:block self-center text-2xl font-semibold whitespace-nowrap font-medium text-gray-500 sm:mb-0 dark:text-gray-400 pb-5">Best solutions from</h3>
                        <a href="https://google.com/" className="">
                            <img src={logo} className="h-12 mr-3 md:block hidden" alt="Logo" />
                        </a>
                    </div>
                    
                        <div className="font-light text-lg text-gray-500">
                            <ul>
                                <li>DOL Max Overlaminate Films</li>
                                <li>Why us</li>
                                <li>Enquire now</li>
                            </ul>
                        </div>
                        <div className="font-light text-sm text-gray-500">
                            <ul>
                                <li>Avery Dennison Overlaminate</li>
                                <li>Avery Dennison Overlaminate Films</li>
                                <li>Avery Dennison Digital Overlaminate Films</li>
                                <li>Avery Dennison DOL Max</li>
                            </ul>
                        </div>
                        <div className="font-light text-sm text-gray-500">
                            <ul>
                                <li>Overlaminate</li>
                                <li>Overlaminate Films</li>
                                <li>Digital Overlaminate Films</li>
                            </ul>
                        </div>
                    </div>
                    <a href="https://google.com/" className="">
                            <img src={logo} className="h-12 mt-8 md:hidden" alt="Logo" />
                        </a>
                </div>
            
        </footer>
    )
}
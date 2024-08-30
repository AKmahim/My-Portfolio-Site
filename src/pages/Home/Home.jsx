
import { FaRegLightbulb } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const Home = () => {
    return (
        <div className="anek-latin-font">
            {/* about info */}
            <div className="mx-40 my-20 md:flex justify-between gap-10">
                <div>
                    <h1 className="text-white text-6xl text-right">👋 Hey! My name is <span className="text-yellow-500"> Mahim.</span></h1>
                    <p className="text-white text-3xl text-right"><span className="border-b-2 border-secondary">Full Stack</span>  Web Developer</p>
                </div>
                {/* quote box */}
                <div className="text-white relative w-[400px]">
                    <div className="bg-grey p-5 border-l-4 border-yellow-500 rounded-r-lg">
                         <p className="text-2xl text-wrap">I feel like this is an Easter egg.  It’s an Easter egg, right?</p>
                    </div>
                    <div className="absolute rounded-full bg-primary text-yellow-500 text-2xl -top-5 -left-5 p-3 hover:scale-125">
                        {/* <FaRegLightbulb /> */}
                        <FaQuoteLeft />
                    </div>
                </div>
            </div>

            {/* key link and icon globe */}
            <div>

            </div>
        </div>
    );
};

export default Home;

import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import IconCloud from "../../components/IconCloud/IconCloud";
import Button1 from "../../components/Button/Button1";
import ButtonPrimary from "../../components/Button/Button1";
import { FaFacebookF } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiBugcrowd } from "react-icons/si";
import { IoLogoStackoverflow } from "react-icons/io5";
import './Home.css';

const Home = () => {
    const [quote,setQuote] = useState('Do the best that you can do, Be the best that you will be.');
    const [author,setAuthor] = useState('Mahim');

    
    // Define fetchQuote function 
    const fetchQuote = async () => {
        try {
        const response = await axios.get('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random'));
        // console.log(response);
        
        const data = JSON.parse(response.data.contents);
        setQuote(data[0]?.q);
        setAuthor(data[0]?.a);
        } catch (error) {
        console.error('Error fetching the quote', error);
        }
    };

    // Call fetchQuote when the component mounts
    useEffect(() => {
        fetchQuote();
    }, []);

    // Handle button click to fetch new quote
    const handleQuoteBtn = () => {
        fetchQuote();
    };

    


    return (
        <div className="anek-latin-font mb-10">
            {/* about info */}
            <div className="lg:mx-40 md:mx-10 md:mt-20 md:mb-10 md:flex md:flex-row  md:justify-between md:gap-10 flex flex-col justify-center items-center">
                <div className="mb-10">
                    <h1 className="text-white lg:text-5xl md:text-4xl md:text-right text-center text-3xl">👋 Hey! My name is <span className="text-yellow-500"> Mahim.</span></h1>
                    <p className="text-white lg:text-3xl md:text-xl md:text-right text-center text-xl"><span className="border-b-2 border-secondary">Full Stack</span>  Web Developer</p>
                </div>
                {/* quote box */}
                <div className="text-white relative md:w-[400px] w-[300px] mx-10">
                    <div className="bg-grey p-5 border-l-4 border-yellow-500 rounded-r-lg">
                         <p className="text-2xl text-wrap"> {quote} </p>
                         <p className="text-xl text-yellow-500"> - {author}</p>
                    </div>
                    <div className="absolute rounded-full bg-primary text-yellow-500 text-2xl -top-5 -left-5 p-3 hover:scale-125" onClick={handleQuoteBtn}>
                        {/* <FaRegLightbulb /> */}
                        <FaQuoteLeft />
                    </div>
                </div>
            </div>

            {/* key link and icon globe */}
            <div className="lg:mx-40 md:mx-10  md:flex md:flex-row  md:justify-between md:gap-10 mx-10 flex flex-col justify-center items-center">
                {/* icon cloud */}
                <div>
                    <IconCloud></IconCloud>
                </div>
                <div className="text-white lg:w-1/2 md:flex flex-col   md:w-1/2  w-full">
                    <div className="md:font-500 md:text-3xl md:items-start md:border-b-3 py-2 text-2xl mb-4 border-b-4 border-yellow-500">Key Links</div>
                    <div className="flex gap-3 flex-wrap ">
                        <ButtonPrimary
                            title="github"
                            link="https://github.com/AKmahim"
                            icon={ <VscGithub />}
                            
                        ></ButtonPrimary>
                        <ButtonPrimary
                            title="facebook"
                            link="https://fb.com/mee.mahim"
                            icon={<FaFacebookF />}
                        ></ButtonPrimary>


                        <ButtonPrimary
                            title="LinkedIn"
                            link="https://www.linkedin.com/in/me-mahim/"
                            icon={<FaLinkedin />}
                        ></ButtonPrimary>

                        <ButtonPrimary
                            title="Instagram"
                            link="https://instagram.com/me.mahim"
                            icon={<FaInstagram />}
                        ></ButtonPrimary>

                        <ButtonPrimary
                            title="Beecrowd"
                            link="https://www.beecrowd.com.br/judge/en/profile/340765"
                            icon={<SiBugcrowd />}
                        ></ButtonPrimary>
                        
                        <ButtonPrimary
                            title="Leetcode"
                            link="https://leetcode.com/TheLostHorcrux/"
                            icon={<SiLeetcode />}
                        ></ButtonPrimary>

                        <ButtonPrimary
                            title="Stackoverflow"
                            link="https://stackoverflow.com/users/11359907"
                            icon={<IoLogoStackoverflow />}
                        ></ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
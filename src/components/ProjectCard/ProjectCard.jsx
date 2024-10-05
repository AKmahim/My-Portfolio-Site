import { VscGithub } from 'react-icons/vsc';
import project1 from '../../assets/ajwanshop.png';
import ButtonSecondary from '../Button/Buttonn2';
import { MdDashboard } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import './ProjectCard.css'
const ProjectCard = () =>{
    
    return (
        <div className="rounded-2xl ">
            {/* project image section */}
            <div className="h-[350px] overflow-hidden relative group">
                <img 
                    className="rounded-t-2xl h-auto w-full object-cover 
                    transform group-hover:translate-y-[calc(350px-100%)] 
                    transition-transform duration-[5000ms] ease-in" 
                    src={project1} 
                />
            </div>
            {/* project details section */}
            <div>
                {/* info */}
                <div className='p-2 md:p-5 text-[#FCFBFE] text-center bg-[#2a2b47] border-b-2 border-yellow'>
                    <h1 className='text-2xl 
                    md:text-3xl 
                    lg:text-2xl
                    xl:text-3xl

                    mb-4 font-semibold'>Custom Site Theming</h1>
                    <p className='text-lg 
                    md:text-xl 
                    lg:text-lg
                    xl:text-xl
                    text-center font-medium'>
                        Add custom site theming to your website with CSS variables and vanilla JavaScript.
                    </p>
                    {/* important link */}
                    <div className='flex flex-wrap 
                        md:gap-2
                        my-4 justify-center'>
                        <ButtonSecondary
                            title="Demo"
                            link="https://github.com/AKmahim"
                            icon={ <MdDashboard />}
                        >
                        </ButtonSecondary>
                        <ButtonSecondary
                            title="Video"
                            link="https://github.com/AKmahim"
                            icon={ <MdOutlineOndemandVideo />}
                        >
                        </ButtonSecondary>
                        <ButtonSecondary
                            title="Code"
                            link="https://github.com/AKmahim"
                            icon={<FaCode />}
                        >
                        </ButtonSecondary>
                    </div>
                    <p className='text-sm flex justify-center items-center gap-2 text-yellow'><span><FaExclamationTriangle /></span> Source code is private for commercial issue</p>
                </div>

                {/* footer */}
                <div className='p-4  flex flex-wrap bg-[#373b56] rounded-b-2xl gap-1 '>
                    <a href="#" className='p-1 text-[#0DE8F4] font-medium text-sm hover:bg-[#0DE8F4] hover:text-black rounded-2xl px-4'># CSS</a>
                    <a href="#" className='p-1 text-[#0DE8F4] font-medium text-sm hover:bg-[#0DE8F4] hover:text-black rounded-2xl px-4'># CSS</a>
                    
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
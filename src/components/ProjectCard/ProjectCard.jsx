import { VscGithub } from 'react-icons/vsc';
import project1 from '../../assets/project1.jpg';
import ButtonSecondary from '../Button/Buttonn2';
import { MdDashboard } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaCode } from "react-icons/fa";

const ProjectCard = () =>{
    
    return (
        <div className="rounded-2xl">
            {/* project image section */}
            <div >
                <img className='rounded-t-2xl'  src={project1}  />
            </div>
            {/* project details section */}
            <div>
                {/* info */}
                <div className='p-2 md:p-5 text-[#FCFBFE] text-center bg-[#2a2b47] border-b-2 border-yellow'>
                    <h1 className='text-2xl md:text-4xl mb-4 font-semibold'>Custom Site Theming</h1>
                    <p className='text-lg md:text-2xl text-left font-medium'>
                        Add custom site theming to your website with CSS variables and vanilla JavaScript.
                    </p>
                    {/* important link */}
                    <div className='flex flex-wrap gap-2  my-4'>
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
                </div>

                {/* footer */}
                <div className='p-4 flex flex-wrap bg-[#373b56] rounded-b-2xl gap-1'>
                    <a href="#" className='p-1 text-[#0DE8F4] font-medium text-sm hover:bg-[#0DE8F4] hover:text-black rounded-2xl px-4'># CSS</a>
                    <a href="#" className='p-1 text-[#0DE8F4] font-medium text-sm hover:bg-[#0DE8F4] hover:text-black rounded-2xl px-4'># CSS</a>
                    
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
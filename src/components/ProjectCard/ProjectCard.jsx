import { VscGithub } from 'react-icons/vsc';
import project1 from '../../assets/ajwanshop.png';
import ButtonSecondary from '../Button/Buttonn2';
import { MdDashboard } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import './ProjectCard.css'
const ProjectCard = ({project}) =>{
    // console.log(project);
    const project_category = JSON.parse(project?.project_category);
    // console.log(project_category);
    const {code_link, video_link, demo_link} = project ?? {};
    // console.log("Extracted links:", code_link, video_link, demo_link);

    return (
        <div className="rounded-2xl ">
            {/* project image section */}
            <div className="h-[350px] overflow-hidden relative group">
                <img 
                    className="rounded-t-2xl h-auto w-full object-cover 
                    transform group-hover:translate-y-[calc(350px-100%)] 
                    transition-transform duration-[5000ms] ease-in" 
                    src={'https://mahim.xri.com.bd/'+project?.project_picture} 
                />
            </div>
            {/* project details section */}
            <div>
                {/* info */}
                <div className='p-2 md:p-5 text-[#FCFBFE] text-center bg-[#2a2b47] border-b-2 border-yellow'>
                    <h1 className='text-2xl 
                    md:text-2xl 
                    lg:text-2xl
                    xl:text-2xl

                    mb-4 font-semibold'>{project?.project_title}</h1>
                    <p className='text-lg 
                    md:text-xl 
                    lg:text-lg
                    xl:text-lg
                    text-center font-medium'>
                        {project?.short_description}
                    </p>
                    {/* important link */}
                    <div className='flex flex-wrap 
                        md:gap-2
                        my-4 justify-center'>
                        {
                            demo_link ? (
                                <>
                                <ButtonSecondary
                                    title="Demo"
                                    link={demo_link}
                                    icon={ <MdDashboard />}
                                ></ButtonSecondary>
                                </>
                            ) : ''
                        }
                        {
                            video_link ? (
                                <>
                                    <ButtonSecondary
                                        title="Video"
                                        link={video_link}
                                        icon={ <MdOutlineOndemandVideo />}
                                    >
                                    </ButtonSecondary>
                                </>
                            ) :
                            ''
                        }
                        {
                            code_link ? (
                                <>
                                <ButtonSecondary
                                    title="Code"
                                    link={code_link}
                                    icon={<FaCode />}
                                >
                                </ButtonSecondary>
                                </>
                            ) : 
                            ''
                        }
                        
                        
                    </div>
                   {
                    !code_link ? (
                        <p className='text-sm flex justify-center items-center gap-2 text-yellow'><span><FaExclamationTriangle /></span> Source code is private for commercial issue</p>
                    ) :
                     ''
                   }
                </div>

                {/* footer */}
                <div className='p-4  flex flex-wrap bg-[#373b56] rounded-b-2xl gap-1 '>
                    {
                        project_category.map((item,index) => (

                            <a href="#" className='py-1 text-[#0DE8F4] font-medium text-sm hover:bg-[#0DE8F4] hover:text-black rounded-2xl px-1'># {item}</a>
                            
                        ))
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;

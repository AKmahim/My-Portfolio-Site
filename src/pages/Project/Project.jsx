import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projectCategory } from "../../data/category";


const Project = ()=>{
    const category = projectCategory;
    // console.log(category);
    
    return (
        <div className="mb-[100px] mt-[50px]">
            <h1 className="text-center font-medium text-2xl text-[#FCFBFE] mb-3">Here is my All Project</h1>
            {/*========================== search box ==========================*/}
            <div className="flex flex-col justify-center items-center ">
                <p className=" text-grey mb-2">6 matching projects</p>
                <input 
                type="text" 
                className=" w-[250px] md:w-[300px] lg:w-[350px] xl:w-[450px]
                 bg-transparent outline-none text-grey
                 font-medium text-2xl pb-2 border-b-4 border-secondary
                 focus:border-yellow " />
            </div>
            {/* ================== category box ===========================*/}
            <div className=" xl:mx-[200px] lg:mx-[100px] md:mx-[50px] mx-[40px]
                flex flex-col justify-center items-center border-[3px]
                rounded-2xl border-yellow py-4 px-4 md:px-10 mt-4 ">
                <div className="flex flex-row flex-wrap gap-2">
                    {
                        category.map(item =>(
                            <button className="py-1 px-3 text-grey 
                                border-2 border-secondary rounded-full
                                text-[12px] font-bold
                                hover:bg-secondary hover:bg-opacity-5 hover:text-white
                                ">
                                {item}
                            </button>
                        ))
                    }
                    
                </div>
            </div>
            {/* ================================ end category box =================== */}
            {/* ==================================== project grid card ===================== */}
            <div className="mx-5 my-10 gap-4
                lg:mx-40 lg:my-10 lg:grid-cols-3 lg:gap-10 grid  ">
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
            </div>
        </div>
    );
};



export default Project;
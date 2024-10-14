import { useMemo, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projectCategory } from "../../data/category";
import { useQuery } from "@tanstack/react-query";


const Project = ()=>{
    const category = projectCategory;
    // console.log(category);
    const [selectedCategory,setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const { data, isLoading, error } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const response = await fetch('https://mahim.xri.com.bd/api/projects');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
    });

    const filteredProjects = useMemo(() => {
        if (!data || !data.data) return [];

        return data.data.filter(project => {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            const lowerCaseTitle = project.project_title.toLowerCase();

            // Safely handle project_category, whether it's an array or not
            const lowerCaseCategories = Array.isArray(project.project_category)
                ? project.project_category.map(cat => cat.toLowerCase())
                : [project.project_category.toLowerCase()];

            // Check if category filter is applied
            const categoryMatch = selectedCategory === null || 
                                 lowerCaseCategories.some(cat => cat.includes(selectedCategory.toLowerCase()));

            // Combine search and category filters
            return (
                (lowerCaseTitle.includes(lowerCaseSearchTerm) ||
                 lowerCaseCategories.some(cat => cat.includes(lowerCaseSearchTerm))) &&
                categoryMatch
            );
        });
    }, [data?.data, searchTerm, selectedCategory]);


    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };


    return (
        <div className="pb-[100px] mt-[50px]">
            <h1 className="text-center font-medium text-2xl text-[#FCFBFE] mb-3">Here is my All Project</h1>
            {/*========================== search box ==========================*/}
            <div className="flex flex-col justify-center items-center ">
                <p className="text-grey mb-2">
                  {Array.isArray(data?.data) ? `${filteredProjects.length} matching projects` : 'No projects found'}
                </p>
                {/* ========================== search field ================ */}
                <input 
                type="text" 
                placeholder="Search projects..."
                value={searchTerm}
                onChange={handleSearchChange}
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
                            <button onClick={()=>handleCategoryClick(item)}
                                className={`py-1 px-3 text-grey 
                                    border-2 border-secondary rounded-full
                                    text-[12px] font-bold
                                    hover:bg-secondary hover:bg-opacity-5 hover:text-white
                                    ${selectedCategory === item ? 'bg-secondary bg-opacity-5 text-white' : ''}
                                `}>
                                {item}
                            </button>
                        ))
                    }
                    
                </div>
            </div>
            {/* ================================ end category box =================== */}
            {/* ==================================== project grid card ===================== */}
            {
                isLoading ? (
                    <div className="text-center text-2xl mt-10 text-white">Loading .... </div>
                ) : error ? (
                    <div className="text-center text-2xl mt-10 text-white">Error: {error.message}</div>
                ) : (
                    <>
                        {filteredProjects.length === 0 ? (
                            <div className="text-center text-2xl mt-10 text-white">No matching projects found</div>
                        ) : (
                            <div className="mx-5 my-10 gap-4
                                md:mx-10 md:my-10 md:gap-4 md:grid-cols-2
                                lg:mx-10 lg:my-10 lg:grid-cols-3 lg:gap-5
                                xl:mx-40 xl:my-20 xl:gap-5
                                grid  ">
                                    {filteredProjects.map((project,index) => (
                                        <ProjectCard key={index} project={project}></ProjectCard>
                                    ))}
                            </div>
                        )}
                    </>
                )
            }
        </div>
    );
};



export default Project;

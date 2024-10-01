

const Project = ()=>{

    return (
        <div>
            <h1 className="text-center font-medium text-2xl text-[#FCFBFE] mb-3">Here is my All Project</h1>
            {/* search box */}
            <div className="flex flex-col justify-center items-center ">
                <p className=" text-grey mb-2">6 matching projects</p>
                <input 
                type="text" 
                className=" w-[400px]
                 bg-transparent outline-none text-grey
                 font-medium text-2xl pb-2 border-b-4 border-secondary
                 focus:border-yellow " />
            </div>
            {/* category box */}
        </div>
    );
};



export default Project;
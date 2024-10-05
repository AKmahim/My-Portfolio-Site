
const ButtonSecondary = ({title,link,icon}) =>{

    return (
        <>
        <a
            href={link}
            target="_blank"
            className="flex justify-between items-center  rounded-full ... 
                 bg-secondary border-2 border-secondary hover:bg-[#651eff]
               text-white anek-latin-font font-medium 
               md:text-sm md:py-1 md:px-4 
               lg:text-sm lg:py-1 lg:px-5 
               xl:text-base xl:px-6
               text-sm py-1 px-4">
            {title} <span className="ps-1">{icon}</span>
        </a>
        </>
    );
}

export default ButtonSecondary;
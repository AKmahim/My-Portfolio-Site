
const ButtonSecondary = ({title,link,icon}) =>{

    return (
        <>
        <a
            href={link}
            target="_blank"
            className="flex justify-between items-center  rounded-full ... 
                 bg-secondary border-2 border-secondary hover:bg-[#651eff]
               text-white anek-latin-font font-medium lg:text-lg lg:py-1 lg:px-8 md:text-lg md:py-1 md:px-4 text-sm py-1 px-4">
            {title} <span className="ps-1">{icon}</span>
        </a>
        </>
    );
}

export default ButtonSecondary;
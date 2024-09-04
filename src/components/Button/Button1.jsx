
const ButtonPrimary = ({title,link,icon}) =>{

    return (
        <>
        <a
            href={link}
            target="_blank"
            className="flex justify-between items-center  rounded-full ... 
                 bg-transparent border-2 border-secondary hover:bg-secondary
               text-white anek-latin-font font-medium lg:text-lg lg:py-1 lg:px-6 md:text-lg md:py-1 md:px-4 text-lg py-1 px-4">
            {title} <span className="ps-1">{icon}</span>
        </a>
        </>
    );
}

export default ButtonPrimary;
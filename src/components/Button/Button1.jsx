
const ButtonPrimary = ({title,link,icon}) =>{

    return (
        <>
        <a
            href={link}
            target="_blank"
            className="flex justify-between items-center  rounded-full ... 
                 bg-transparent border-2 border-secondary hover:bg-secondary
               text-white anek-latin-font font-medium text-xl py-1 px-8 ">
            {title} <span className="ps-1">{icon}</span>
        </a>
        </>
    );
}

export default ButtonPrimary;
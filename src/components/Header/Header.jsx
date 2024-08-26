import { LuExternalLink } from "react-icons/lu";
import './Header.css'
import logo from '../../assets/logo.png';
const Header = () => {
    return (
        <div className="header-lower-border mb-5">
            <div className='flex justify-between mx-10 items-center '>
                <a href="/" className='mt-4 flex justify-between items-center'>
                    <img className="w-20 h-20" src={logo} />
                    <h2 className='text-white text-4xl anek-latin-font font-medium'>Coding is Fun</h2>
                </a>
                {/* project link */}
                <div className="mt-4 flex justify-between items-center">
                    {/* project links */}
                    <a href="/projects" className="flex justify-between items-center text-2xl text-white px-2 hover:text-grey">
                        About <span className="ms-2"> <LuExternalLink /></span>
                    </a>
                    <a href="/projects" className="flex justify-between items-center text-2xl text-white px-2 hover:text-grey">
                        Project <span className="ms-2"> <LuExternalLink /></span>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Header;
import { faBars, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 flex flex-wrap justify-between z-30 text-dark-green bg-light-green/[0.6] backdrop-blur-xl sm:flex-nowrap">
            <div className="flex flex-1 items-center h-20 mx-10">
                <a
                    href="#"
                    className="flex items-center justify-center bg-dark-green text-xl text-neutral-100 w-12 min-w-12 h-12 rounded-3xl"
                >
                    <FontAwesomeIcon icon={faHouse} />
                </a>
            </div>
            <div className="flex items-center h-20 mx-10 sm:hidden">
                <label htmlFor="menu-toggle" className="cursor-pointer text-xl">
                    <FontAwesomeIcon icon={faBars} />
                </label>
            </div>
            <input className="hidden peer/menu" type="checkbox" id="menu-toggle" name="menu-toggle" />
            <div className="hidden flex-col items-center justify-between gap-10 w-full py-5 sm:flex sm:flex-row peer-checked/menu:flex sm:py-0">
                <div className="flex flex-col items-center gap-10 h-auto sm:flex-row sm:h-20 sm:mt-0">
                    <a className="transition ease-in-out hover:scale-[1.18] duration-200" href="#">
                        About me
                    </a>
                    <a className="transition ease-in-out hover:scale-[1.18] duration-200" href="#">
                        Contact
                    </a>
                </div>
                <div className="flex items-center h-auto mx-10 sm:h-20">
                    <a className="transition ease-in-out hover:scale-[1.18] duration-200" href="#">
                        <FontAwesomeIcon className="text-xl" icon={faUser} />
                        <span className="ml-2 sm:hidden">Login</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;

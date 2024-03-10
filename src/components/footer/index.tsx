const Footer = () => {
    return (
        <footer className="relative w-full py-10 text-dark-green flex flex-col items-center sm:flex-row z-30">
            <span className="w-full px-7 text-6xl font-bold text-center sm:w-1/2 sm:text-left">Wasp Page</span>
            <div className="w-full pt-7 text-xl font-semibold sm:w-1/2">
                <div className="w-1/2 inline-block px-1 text-center sm:text-left">
                    <a
                        className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:content-[''] after:bg-dark-green after:transition-[width] after:hover:w-full after:ease-out after:duration-300"
                        href="https://www.google.com.pe/?hl=es"
                    >
                        Youtube
                    </a>
                </div>
                <div className="w-1/2 inline-block px-1 text-center sm:text-left">
                    <a
                        className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:content-[''] after:bg-dark-green after:transition-[width] after:hover:w-full after:ease-out after:duration-300"
                        href="https://www.google.com.pe/?hl=es"
                    >
                        Facebook
                    </a>
                </div>
                <div className="w-1/2 inline-block px-1 text-center sm:text-left">
                    <a
                        className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:content-[''] after:bg-dark-green after:transition-[width] after:hover:w-full after:ease-out after:duration-300"
                        href="https://www.google.com.pe/?hl=es"
                    >
                        Linkedin
                    </a>
                </div>
                <div className="w-1/2 inline-block px-1 text-center sm:text-left">
                    <a
                        className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:content-[''] after:bg-dark-green after:transition-[width] after:hover:w-full after:ease-out after:duration-300"
                        href="https://www.google.com.pe/?hl=es"
                    >
                        Unsplash
                    </a>
                </div>
                <div className="w-1/2 inline-block px-1 text-center sm:text-left">
                    <a
                        className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:content-[''] after:bg-dark-green after:transition-[width] after:hover:w-full after:ease-out after:duration-300"
                        href="https://www.google.com.pe/?hl=es"
                    >
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

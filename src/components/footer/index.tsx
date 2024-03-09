const Footer = () => {
    return (
        <footer className="w-full py-10 text-dark-green flex flex-col items-center sm:flex-row">
            <span className="w-full px-7 text-6xl font-bold text-center sm:w-1/2 sm:text-left">Wasp Page</span>
            <div className="w-full pt-7 text-xl font-semibold sm:w-1/2">
                <a className="w-1/2 inline-block px-1 text-center sm:text-left" href="https://www.google.com.pe/?hl=es">
                    Youtube
                </a>
                <a className="w-1/2 inline-block px-1 text-center sm:text-left" href="https://www.google.com.pe/?hl=es">
                    Facebook
                </a>
                <a className="w-1/2 inline-block px-1 text-center sm:text-left" href="https://www.google.com.pe/?hl=es">
                    Linkedin
                </a>
                <a className="w-1/2 inline-block px-1 text-center sm:text-left" href="https://www.google.com.pe/?hl=es">
                    Unsplash
                </a>
                <a className="w-1/2 inline-block px-1 text-center sm:text-left" href="https://www.google.com.pe/?hl=es">
                    Instagram
                </a>
            </div>
        </footer>
    );
};

export default Footer;

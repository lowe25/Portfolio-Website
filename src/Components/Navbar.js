const Navbar = () => {
  return (
    <div>
       <nav className="navbar">
                <a href="#" className="company-name"></a>
                <a href="#" className="toggle">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <div className="nav-links">
                    <ul>
                        <li><a href="#" className="links">Home</a></li>
                        <li><a href="#about" className="links">About</a></li>
                        <li><a href="#projects" className="links">Projects</a></li>
                        <li><a href="#contact" className="links">Contact</a></li>
                    </ul>
                </div>
            </nav>
    </div>
  );
};
export default Navbar;

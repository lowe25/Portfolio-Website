const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
          <div className="nav-links">
            <ul>
              <li>
                <a href="#" className="links">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="links">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="links">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="links">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  );
};
export default Navbar;

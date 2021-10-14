const Navbar = () => {
  const toggleBtn = () => {
    const toggleButton = document.getElementsByClassName("toggle")[0];
    const navbarLinks = document.getElementsByClassName("nav-links")[0];
     toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });
  };
  return (
    <div>
      <nav className="navbar">
        <a href="#" className="company-name"></a>
        <a href="#" className="toggle" onClick={toggleBtn}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
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

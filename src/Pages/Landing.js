const Landing = () => {
  return (
    <>
      <div
        className="landing"
        style={{ backgroundImage: "url(/img/landing-img.jpg)" }}
      >
        <section className="landing-text">
          <div className="parent">
            <div className="landing-desc">
              <h1>
                Hi My Name is Louie Aldrin Cabral And Im Junior Front End
                Developer
              </h1>
            </div>
            <div className="btn-intro">
              <a href="#about">
                <button className="btn-cta">Get Started</button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="about-container">
        <section className="about" id="about">
          <article className="img">
            <img
              src="img/profile.jpg"
              className="prof-img"
              alt="Louie Aldrin's Photo1"
            />
          </article>
          <article className="desc">
            <p>
              Hi My Name is Louie Aldrin and I’m a Bachelor Science In
              Information Technology Student At Centro Escolar University Makati
              and pursuing a career in Front End Development. My Interest in
              Front End Development started in G11 at our Computer Programming 2
              Subject. Since then Designing Website has been hobby in my
              freetime to test my skills.
            </p>
          </article>
        </section>
        <section className="skills-container">
          <h1 className="skills">Skills</h1>
          <div className="languages">
            <div className="skills-img1">
              <img src="./img/html.png" className="prog" alt="HTML5 Logo" />
            </div>
            <div className="skills-img2">
              <img src="./img/css.png" className="prog" alt="CSS3 Logo" />
            </div>
            <div className="skills-img3">
              <img
                src="./img/javascript.png"
                className="prog"
                alt="JavaScript Logo"
              />
            </div>

            <div className="skills-img4">
              <img src="./img/sass.png" className="prog" alt="SASS Logo" />
            </div>

            <div className="skills-img5">
              <img src="./img/github.png" className="prog" alt="Github Logo" />
            </div>

            <div className="skills-img6">
              <img
                src="./img/react-logo.png"
                className="prog"
                alt="ReactJS Logo"
              />
            </div>
          </div>
          <div className="credits">
            <p>
              {" "}
              Icons made by{" "}
              <a
                href="https://www.freepik.com"
                className="link"
                title="Freepik"
              >
                Freepik
              </a>{" "}
              from{" "}
              <a
                href="https://www.flaticon.com/"
                className="link"
                title="Flaticon"
              >
                www.flaticon.com
              </a>
            </p>
          </div>
        </section>
      </div>

      <div className="projects-container" id="projects">
        <h1 className="proj">Projects</h1>
        <section className="project-list">
          <div className="project">
            <h1>Company Website</h1>
            <div className="btn-div">
              <a
                href="https://github.com/lowe25/Emman-CCTV-template"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-projDemo">Github</button>
              </a>
              <a
                href="https://compassionate-brown-1c4cd0.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-projDemo">Demo</button>
              </a>
              <a
                href="https://gist.github.com/lowe25/9466bb60f387331831511f262770a1a2"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-projDemo">Code</button>{" "}
              </a>
            </div>
            <h1>Written In:</h1>
            <div className="technologies">
              <section className="tech">
                <img src="./img/html.png" className="prog" alt="HTML5 Image1" />
              </section>
              <section className="tech">
                <img src="./img/css.png" className="prog" alt="CSS3 Image1" />
              </section>
              <section className="tech">
                <img src="./img/sass.png" className="prog" alt="SASS Image1" />
              </section>
              <section className="tech">
                <img
                  src="./img/javascript.png"
                  className="prog"
                  alt="JavaScript Image1"
                />
              </section>
            </div>
          </div>

          <div className="project">
            <h1>ASUS TUF Ecommerce Design</h1>
            <div className="btn-div">
              <a
                href="https://github.com/lowe25/Ecommerce-Design"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-projDemo">Github</button>
              </a>
              <a
                href="https://youthful-murdock-a8b8bb.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-projDemo">Demo</button>
              </a>
              <a
                href="https://gist.github.com/lowe25/68bc7e0693db9e908999450709965471"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-projDemo">Code</button>
              </a>
            </div>
            <h1>Written In:</h1>
            <div className="technologies">
              <section className="tech">
                <img src="./img/html.png" className="prog" alt="HTML5Image" />
              </section>
              <section className="tech">
                <img src="./img/css.png" className="prog" alt="CSS3Image" />
              </section>
              <section className="tech">
                <img src="./img/sass.png" className="prog" alt="SASSImage" />
              </section>
              <section className="tech">
                <img
                  src="./img/javascript.png"
                  className="prog"
                  alt="JavaScriptImage"
                />
              </section>
            </div>
          </div>

          <div className="project">
            <h1>Covid 19 Statistic Website</h1>
            <div className="btn-div">
              <a
                href="https://github.com/lowe25/Covid19-Statistics"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-projDemo">Github</button>
              </a>
              <a
                href="https://naughty-pike-96bdd8.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-projDemo">Demo</button>
              </a>
              <a
                href="https://gist.github.com/lowe25/395e1d49b996e9387a44d58c742dc681"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-projDemo">Code</button>
              </a>
            </div>
            <h1>Written In:</h1>
            <div className="technologies">
              <section className="tech">
                <img
                  src="./img/react-logo.png"
                  className="prog"
                  alt="ReactJs Logo"
                />
              </section>
              <section className="tech">
                <img src="./img/sass.png" className="prog" alt="SASS Image1" />
              </section>
            </div>
          </div>

          <div className="project">
            <h1>Photography Website</h1>
            <div className="btn-div">
              <a
                href="https://github.com/lowe25/Company-website"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-projDemo">Github</button>
              </a>
              <a
                href="https://pensive-goodall-adf491.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-projDemo">Demo</button>
              </a>
              <a
                href="https://gist.github.com/lowe25/de9e4ce94afe846c7d72c119b8e57577"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn-projDemo">Code</button>
              </a>
            </div>
            <h1>Written In:</h1>
            <div className="technologies">
              <section className="tech">
                <img
                  src="./img/react-logo.png"
                  className="prog"
                  alt="ReactJs Logo"
                />
              </section>
              <section className="tech">
                <img src="./img/sass.png" className="prog" alt="SASS Image1" />
              </section>
            </div>
          </div>
        </section>
      </div>

      <div className="contact-container" id="contact">
        <div className="contact">
          <h1>Contact Me</h1>
          <p>
            Get in touch with me by filling up the form below or contacting me
            in my socials
          </p>
        </div>
        <div className="con">
          <div className="contact-info">
            <ul>
              <li>
                <p>
                  <i className="fas fa-map-marker-alt fa-2x"></i>Bacoor, Cavite
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-envelope-open fa-2x"></i>
                  louiealdrin25@gmail.com
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-phone-alt fa-2x"></i>09064935258
                </p>
              </li>
            </ul>
          </div>
          <section className="form-container">
            <form action="" className="form">
              <label>
                <input
                  type="email"
                  className="txt-email"
                  placeholder="Enter Email"
                />
              </label>

              <label>
                <input
                  type="text"
                  className="txt-name"
                  placeholder="Enter Subject"
                />
              </label>

              <label>
                <textarea
                  name=""
                  className="txt-area"
                  placeholder="Enter Message"
                ></textarea>
              </label>
              <label>
                <input type="button" className="btn-sub" value="Submit" />
              </label>
            </form>
          </section>
        </div>
        <div className="social-info">
          <p>Social Links</p>
          <div className="soc-links">
            <p>
              <i class="fab fa-instagram fa-3x"></i>
            </p>
            <p>
              <i class="fab fa-linkedin fa-3x"></i>
            </p>
            <p>
              <i class="fab fa-github fa-3x"></i>
            </p>
          </div>
        </div>
      </div>
      {/**Contact Container */}
    </>
  );
};

export default Landing;

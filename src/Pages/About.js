const About = () => {
  return (
    <div>
      <div className="about-container">
        <section className="about" id="about">
          <article className="img">
            <img src="img/profile.jpg" className="prof-img" alt="Profile Picture" />
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
              <img src="./img/html.png" className="prog" alt="HTML5 Image" />
            </div>
            <div className="skills-img2">
              <img src="./img/css.png" className="prog" alt="CSS3 Image" />
            </div>
            <div className="skills-img3">
              <img
                src="./img/javascript.png"
                className="prog"
                alt="JavaScript Image"
              />
            </div>

            <div className="skills-img4">
              <img src="./img/sass.png" className="prog" alt="SASS Image" />
            </div>

            <div className="skills-img5">
              <img src="./img/github.png" className="prog" alt="Github Image" />
            </div>

            <div className="skills-img6">
              <img
                src="./img/bootstrap.png"
                className="prog"
                alt="BootStrap Image"
              />
            </div>
          </div>
          <div className="credits">
            <p>
              {" "}
              Icons made by{" "}
              <a href="https://www.freepik.com" className="link" title="Freepik">
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" className="link" title="Flaticon">
                www.flaticon.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

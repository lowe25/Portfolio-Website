import Navbar from "../Components/Navbar";
const Landing = () => {
  return (
    <>
      <div
        className="landing"
        style={{ backgroundImage: "url(/img/landing-img.jpg)" }}
      >
        <Navbar />
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
    </>
  );
};

export default Landing;

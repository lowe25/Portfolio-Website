function Contacts() {
  return (
    <div className="contact-container">
      <p>
        Get in touch with me by filling up the form below or contacting me in my
        socials
      </p>
      <div className="contact-details">
        <div className="contact">
          <ul>
            <li>
              <i className="fas fa-map-pin fa-2x"></i>Cavite, Bacoor
            </li>
            <li>
              <i className="fas fa-phone-alt fa-2x"></i>09064935258
            </li>
            <li>
              <i className="fas fa-envelope-open fa-2x"></i>louiealdrin25@gmail.com
            </li>
          </ul>
        </div>
        <div className="form">
          <form className="contact-form">
            <label>Email</label>
            <input type="text" placeholder="Email" className="txt-email" />

            <label>Subject</label>
            <input type="text" placeholder="Subject" className="txt-email" />

            <label>Message</label>
            <textarea
              placeholder="Enter Message"
              className="txt-area"
            ></textarea>
            <label></label>
            <input type="button" value="Submit" className="btn-submit" />
          </form>
        </div>
      </div>
      <div className="contact-socials">
        <h1>My Socials</h1>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/louie-aldrin-cabral/"
            target="_blank"
            rel="noreferrer"
            className="soc-links"
          >
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a
            href="https://www.instagram.com/bamkamcabral/"
            target="_blank"
            rel="noreferrer"
            className="soc-links"
          >
            <i className="fab fa-instagram fa-3x"></i>
          </a>
          <a
            href="https://github.com/lowe25"
            target="_blank"
            rel="noreferrer"
            className="soc-links"
          >
            <i className="fab fa-github fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

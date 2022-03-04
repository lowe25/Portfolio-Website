import emailjs from "emailjs-com";
import { useState } from "react";
function Contacts() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qcftgxw",
        "template_7afjnwg",
        e.target,
        "RYE28SXdF61Szx4Ni"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact-container">
      <p>
        Get in touch with me by filling up the form below or contacting me in my
        socials
      </p>
      {modal && (
        <div className="modal">
          <div
          onClick={toggleModal} 
          className="overlay"></div>
          <div className="modal-content">
          <h1>Email Succesfully Sent</h1>
          <button className="close-modal"
          onClick={toggleModal}>X</button>
          </div>
        </div>
      )}
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
              <i className="fas fa-envelope-open fa-2x"></i>
              louiealdrin25@gmail.com
            </li>
          </ul>
        </div>
        <div className="form">
          <form onSubmit={sendEmail} className="contact-form">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              className="txt-email"
              name="email"
            />

            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              className="txt-email"
              name="name"
            />

            <label>Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="txt-email"
              name="subject"
            />

            <label>Message</label>
            <textarea
              placeholder="Enter Message"
              className="txt-area"
              name="message"
            ></textarea>
            <label></label>
            <input
              type="submit"
              value="Submit"
              className="btn-submit"
              onClick={toggleModal}
            />
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

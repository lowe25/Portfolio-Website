//React Hooks Form
import {useForm} from "react-hook-form";
import emailjs from "emailjs-com";
import { useState,useRef } from "react";
function Contacts() {
  const form = useRef();
  //React Hook Form
  const { register, handleSubmit, formState: {errors}} = useForm({
    mode: "onChange"
  });

  const [modal, setModal] = useState(false);
  const [pop, setPop] = useState();
  const toggleModal = (e) => {
    if(pop === "OK"){
      return setModal(!modal);
    }
  };
  
  function onSubmit() {
    emailjs
      .sendForm("service_qcftgxw","template_7afjnwg", form.current,"RYE28SXdF61Szx4Ni"
      )
      .then((result) => {
          console.log(result.text);
          setPop(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact-container">
      <p>
        Get in touch with me with my details below
      </p>
     {/* {modal && (
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
      )} */}
      <div className="contact-details">
        <div className="contact">
          <ul className="contact-list">
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
       {/* <div className="form">
          <form ref={form} className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              ref={register}
              {...register("email", {required: true})}
              placeholder="Email"
              className="txt-email"
              name="email"
            />
            <p className="form-error">{errors.email && "This Field Is Required"}</p>

            <label htmlFor="name">Name</label>
            <input
              type="text"
              {...register("name", {required: true})}
              placeholder="Name"
              className="txt-email"
              name="name"
            />
            <p className="form-error">{errors.name && "This Field Is Required"}</p>

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              {...register("subject", {required: true})}
              placeholder="Subject"
              className="txt-email"
              name="subject"
            />
           <p className="form-error">{errors.subject && "This Field Is Required"}</p>

            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Enter Message"
              {...register("message", {required:true})}
              className="txt-area"
              name="message"
            ></textarea>
            <p className="form-error">{errors.message && "This Field Is Required"}</p>
            <label></label>
            <input
              type="submit"
              value="Submit"
              className="btn-submit"
              onClick={toggleModal}
            />
          </form>
        </div> */}
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

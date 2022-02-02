function Test() {
  return (
    <div className="form">
      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Name" className="txt-name" />

        <label>Email</label>
        <input type="email" placeholder="Name" className="txt-email" />

        <label>Contact</label>
        <input type="text" placeholder="Contact" className="txt-contact" />

        <label>Message</label>
        <textarea placeholder="Enter Message" className="txt-area"></textarea>
        <label></label>
        <input type="button" value="Submit" className="btn-submit" />
      </form>
     
    </div>
  );
}
export default Test;

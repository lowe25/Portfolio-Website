const Contact = () => {
  return (
    <div>
      <div class="contact-container" id="contact">
        <div class="con">
          <h1>Contact Me</h1>
          <section class="form-container">
            <label for="">
              <input type="email" class="txt-email" placeholder="Enter Email" />
            </label>

            <label for="">
              <input type="text" class="txt-name" placeholder="Enter Name" />
            </label>

            <label for="">
              <textarea name="" id="" class="txt-area"></textarea>
            </label>
            <label for="">
              <input type="button" class="btn-sub" value="Submit" />
            </label>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;

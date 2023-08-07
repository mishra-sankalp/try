import React , {useRef} from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {FiTwitter} from 'react-icons/fi';
import {FaWhatsapp} from 'react-icons/fa'
import emailjs from 'emailjs-com';
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wu4gqrm', 'template_k92y6tc', form.current, '46mHYB70_argo0WNH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
   <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
    <div className="contact__options">
    {/* email */}
      <article className="contact__option">
      <MdOutlineEmail className='contact__option-icon'/>
      <h4>Email</h4>
      <h5>sankalp22int@gmail.com</h5>
      <a href="mailto:sankalp22int@gmail.com" target='_blank'>Send a Mail</a>
      </article>
{/* twitter */}
      <article className="contact__option">
      <FiTwitter className='contact__option-icon'/>
      <h4>Twitter</h4>
      <h5>@sankalp22int</h5>
      <a href="https://twitter.com/messages/compose" target='_blank'>Send a Message</a>
      </article>

      {/* whatsapp */}
      <article className="contact__option">
      <FaWhatsapp className='contact__option-icon'/>
      <h4>Whatsapp</h4>
      <h5>+91-8318301316</h5>
      <a href="https://wa.me/+918318301316" target='_blank'>Send a Message</a>
      </article>
    </div>
    {/* END OF CONTACT OPTIONS */}

<div className="formm">
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required />
      <input type="email" name='email' placeholder='Your Email' required />
      <textarea name="message" id="" rows="9" placeholder='Your Message'></textarea>
      <button type='submit' className='btn btn-primary' value='send'>Send Message</button>
    </form>
    </div>
    </div>
   </section>
  )
};

export default Contact
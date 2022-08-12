import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'

import Statue from '../../subassets/Mailbox.png'

const Request = () => {
  const form = useRef();

  const handlSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_USER_ID)
        .then(result => console.log(result.text),
        error => console.log(error.text)
        );

        e.target.reset();
  }
  return (
    <section id="request" className="request">
      <h4 className="tophead">request a free legal <br /> Consultation</h4>
      <div className='request-cont'>
        <form onSubmit={handlSubmit} ref={form}>
          <div className="form-input">
            <label>Your name</label>
            <input type="text" name="user_name" required/>
          </div>
          <div className="form-input">
            <label>Your email</label>
            <input type="email" name="user_email" required />
          </div>
          <div className="form-input">
            <label>Your phone</label>
            <input type="text" name="user_phone" />
          </div>
          <div className='form-input'>
            <label>Your message</label>
            <textarea rows='10' name='message' required/>
          </div>
          <button type='submit' value='send' className='main-btn'>send message</button>
        </form>  
        <div className="statue">
          <img src={Statue} alt="lot" />
        </div>
      </div>  
    </section>
  )
}

export default Request
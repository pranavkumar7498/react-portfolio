import React, { useState } from 'react';
import './Contact.css';
const Contact = ({ data }) => {
   const [url, setUrl] = useState('mailto:pranavkumar7498@gmail.com?subject=subject&body=body');
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   console.log(data)

    const handleClick = (e) => {
       e.preventDefault();
      window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
    }
    

    return (
      <section id="contact">

          <div className="page">

            <div className="two columns header-col">

               <h2><span><b>Send a message.</b></span></h2>

            </div>

            <div className="ten columns">

                  <p className="lead">{data?.message}</p>

            </div>

         

            <div className="eight columns">

               <form id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName"><b>Name </b><span className="required">*</span></label>
						   <input value={name} type="text" defaultValue="" size="40" id="contactName" name="contactName" placeholder="Enter Your name" onChange={e => setName(e.target.value)}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail"><b>Email </b><span className="required">*</span></label>
						   <input value={email} type="text" defaultValue="" size="40" id="contactEmail" name="contactEmail" placeholder="Enter Your Email" onChange={e=> setEmail(e.target.value)}/>
                  </div>

               

                  <div>
                     <label htmlFor="contactMessage"><b>Message </b><span className="required">*</span></label>
                     <textarea value={message} onChange={e => setMessage(e.target.value)} cols="40" rows="20" id="contactMessage" name="contactMessage" placeholder="Enter your message"></textarea>
                  </div>

                  <div>
                     <button type='submit' onClick={handleClick} className="submit">Submit</button>
                     
                  </div>
					</fieldset>
				   </form>

         
           </div>


           
           </div>
   </section>
    );
}

export default Contact;

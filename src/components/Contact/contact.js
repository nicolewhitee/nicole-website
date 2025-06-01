import './contact.css';
import twitterIcon from '../../assets/twitter.png';
import linkedInIcon from '../../assets/linkedin.png';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [nameStatus, setNameStatus] = useState("");
    const [emailStatus, setEmailStatus] = useState("");
    const [messageStatus, setMessageStatus] = useState("");
    const [emailMessageStatus, setEmailMessageStatus] = useState("");
    var sendMessage = true;
    const form = useRef();

    const clearState = () => {
        setNameStatus("");
        setEmailStatus("");
        setMessageStatus("");
        setEmailMessageStatus("");
    }

    const validateMessageContent = () => {
        const name = document.forms["form"]["from_name"].value;
        const email = document.forms["form"]["from_email"].value;
        const message = document.forms["form"]["message"].value;

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if ((name == null) || (name === "")) {
            setNameStatus("Please enter a valid name.");
            sendMessage = false;
        }

        if ((email == null) || (email === "") || (!email.match(validRegex))) {
            setEmailStatus("Please enter a valid email.");
            sendMessage = false;
        }

        if ((message == null) || (message === "")) {
            setMessageStatus("Please enter a valid message.");
            sendMessage = false;
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();

        sendMessage = true;
        clearState();
        validateMessageContent();

        if (sendMessage) {
            emailjs.sendForm('service_zf7ce9f', 'template_f28vzpq', form.current, 'LxgKr7pP3nRMDurse')
                .then((result) => {
                    console.log(result.text);
                    e.target.reset();
                    setEmailMessageStatus("Your message has been sent.");
                }, (error) => {
                    console.log(error.text);
                    setEmailMessageStatus("Your message is not able to be sent at this time. Please try again later.");
                });
        }
    };
    
    return (
        <div id='contactPage'>
            <div id="contact">
                <div className="headerTitle">Contact Me</div>
                <span className="contactDesc">Please fill out the form below.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail} name="form">
                    <input type="text" className="name" placeholder='Your Name' name='from_name' />
                    <p className="text-warning">{nameStatus}</p>
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <p className="text-warning">{emailStatus}</p>
                    <textarea placeholder='Your Message' rows={5} className='msg' name="message"></textarea>
                    <p className="text-warning">{messageStatus}</p>
                    <p>{emailMessageStatus}</p>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/wjeffwhite/" target="_blank" rel="noreferrer" aria-label="Linked In">
                            <img src={linkedInIcon} alt="LinkedIn" className="link" />
                        </a>
                        <a href="https://twitter.com/wjeffwhite?s=11&t=WfdM9Plu8tEwtS6ePJjaVQ" target="_blank" rel="noreferrer" aria-label="Twitter">
                            <img src={twitterIcon} alt="Twitter" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';

export default function Contact() {
    const [successPopup, setSuccessPopup] = useState(false);
    const [failPopup, setFailPopup] = useState(false);

    function close() {
        setSuccessPopup(false);
        setFailPopup(false);
    }

    function sendMessage(e) {
        e.preventDefault();

        emailjs.sendForm('service_rr51jxw', 'template_odt3j74', e.target, 'user_3I7FXBprpnHYBYo28VDOX')
        .then((result) => {
            setSuccessPopup(true);
        }, (error) => {
            setFailPopup(true);
        });
  }

  return (
        <>
            <h1>Contact</h1>
            <p>Feel free to contact me! Please tell me your name and email address so that I can respond.</p>
            <form className="contact-form" onSubmit={sendMessage}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Name:</label></td>
                            <td><input className="text-field" type="text" name="from_name" /></td>
                        </tr>
                        <tr>
                            <td><label>Email:</label></td>
                            <td><input className="text-field" type="text" name="from_name" /></td>
                        </tr>
                        <tr>
                            <td valign="top"><label>Message:</label></td>
                            <td><textarea className="message-input" name="message" /></td>
                        </tr>
                    </tbody>
                </table>
            <input className="btn-link submit-btn" type="submit" value="Send Message"/>
            </form>
            {(successPopup || failPopup) &&
                <div className="overlay">
                    <div className="popup">
                        <div className="popup-container">
                            {successPopup && 
                                <p>Your message has been sent!</p>
                            }
                            {failPopup && 
                                <p>There was a problem sending the message. Please email your message to naffymc@gmail.com and also include in your message that it could not be sent from this contact page.</p>
                            }
                            <div className="btn-container">
                                <button className="btn-link popup-btn" onClick={close}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
  );
}
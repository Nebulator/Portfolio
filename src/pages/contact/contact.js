import React from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';

export default function Contact() {

  function sendMessage(e) {
    e.preventDefault();

    emailjs.sendForm('service_rr51jxw', 'template_odt3j74', e.target, 'user_3I7FXBprpnHYBYo28VDOX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
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
        </>
  );
}
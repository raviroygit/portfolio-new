import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [done, setDone] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_bu5nrkk",
                "template_mpj43dj",
                {
                    from_name: form.name,
                    to_name: "Ravi Roy",
                    from_email: form.email,
                    to_email: "ravi140398@gmail.com",
                    message: form.message,
                },
                "j837Bq4gKodz-eXYz"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Thanks for contacting us, I will get back to you as soon as possible.")
                    setDone(true);
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <div className="contact-form" id="contact">
            {/* left side copy and paste from work section */}
            <div className="w-left">
                <div className="awesome">
                    {/* darkMode */}
                    <span
                        style={{ color: darkMode ? 'white' : '' }}
                    >Get in Touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            {/* right side form */}
            <div className="c-right">
                <form >
                    <input type="text" value={form.name} name="name" className="user" placeholder="Name" onChange={e => handleChange(e)} />
                    <input type="email" name="email" value={form.email} className="user" placeholder="Email" onChange={e => handleChange(e)} />
                    <textarea name="message" className="user" value={form.message} placeholder="Message" onChange={e => handleChange(e)} />
                    <input type="submit" value="Send" className="button" onClick={sendEmail} />
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                    <span>{done && "Thanks for Contacting me"}</span>

                </form>

            </div>
        </div>
    );
};

export default Contact;
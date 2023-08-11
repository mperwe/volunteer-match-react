import React from "react";
import "./contact.css"

const Contact = () => {
    return (
        <section id="contact" className="contact_us">
            <div className="contain">
                <div className="wrapper">
                    <div className="form">
                        <h4>GET IN TOUCH</h4>
                        <h2 className="form-headline">Send us a message</h2>
                        <form id="submit-form" action="">
                            <p>
                                <input id="name" className="form-input" type="text" placeholder="Your Name*" />
                                <small className="name-error"></small>
                            </p>
                            <p>
                                <input id="email" className="form-input" type="email" placeholder="Your Email*" />
                                <small className="name-error"></small>
                            </p>
                            <p className="full-width">
                                <input id="company-name" className="form-input" type="text" placeholder="Company Name*" required />
                                <small></small>
                            </p>
                            <p className="full-width">
                                <textarea minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
                                <small></small>
                            </p>
                            <p className="full-width">
                                <input type="checkbox" id="checkbox" name="checkbox" checked /> Yes, I would like to receive communications by call / email about the application services.
                            </p>
                            <p className="full-width">
                                <input type="submit" className="submit-btn" value="Submit" />
                                <button className="reset-btn" onclick="reset()">Reset</button>
                            </p>
                        </form>
                    </div>

                    <div className="contacts contact-wrapper">

                        <ul>
                            <li>We've have connected volunteers with nonprofits, driving community impact. <span className="highlight-text-grey">
                                Making a difference.</span>  Ready to know
                                how we can help you?</li>
                            <span className="hightlight-contact-info">
                                <li className="email-info"><i className="fa fa-envelope" aria-hidden="true"></i> info@volunteermatch.org</li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+256 759 555 517</span></li>
                                <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+256 771 283 054</span></li>
                            </span>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
import React from "react";
import ContactForm from "./component/ContactForm";
import contactbanner from"./assets/images/contact-us-banner.png";
// import ReCAPTCHA from "react-google-recaptcha";
const Contact = () =>{
    return <h1>Hello , Contact page!!!!</h1>;
    // function onChange(value) {
    //     console.log("Captcha value:", value)
    //   }
    return(
        <>
                <div className="home_page">
                    <div className="top_img">
                      <img src={contactbanner} alt="contactbanner"/>
                    </div>
                    <h1 class="inner upper">Contact Us</h1>
                    <section class="inner">
                        <p>Have a question about our products and services?&nbsp;Fill out this short form and an Acclaimed Home Warranty representative will follow up on your request.</p>
                        <p>&nbsp;</p>
                            <div className="container">
                                 <div className="form">
                                    <form>
                                    <label><input type="text" placeholder="Name" name="name" /></label>
                                    <label><input type="number" placeholder="Phone number" name="phonenumber" /></label>
                                        <label><input type="email" placeholder="Email" name="email" /></label>
                                        <label><textarea placeholder="Message" className="field-msg"></textarea></label>
                                        {/* <label><ReCAPTCHA sitekey="YOUR_CLIENT_SITE_KEY" onChange={onChange} /></label> */}
                                        <input type="submit" value="Submit"/>
                                    </form>
                                 </div>        
                          </div>
					</section>
            </div>
        </>
    )
};
export default Contact;
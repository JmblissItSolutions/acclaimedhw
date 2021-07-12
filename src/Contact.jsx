import React from "react";
import {Helmet} from "react-helmet";
import ContactForm from "./component/ContactForm";
import contactbanner from"./assets/images/contact-us-banner.png";
const Contact = () =>{
    return(
        <>
          <Helmet>         
            <title>Contact Acclaimed Home Warranty Team in one of our offices: Utah, Arizona, Idaho, Texas, or Nevada</title>
            <meta name="description" content="For all your home warranty needs, concerns and questions, reach out to the Acclaimed Home Warranty’s team."/>
          </Helmet>
          <div className="home_page">
                    <div className="top_img">
                      <img src={contactbanner} alt="contactbanner"/>
                    </div>
                    <h1 className="inner upper">Contact Us</h1>
                    <section className="inner">
                        <p>Have a question about our products and services?&nbsp;Fill out this short form and an Acclaimed Home Warranty representative will follow up on your request.</p>
                        <p>&nbsp;</p>
                            <div className="container">
                                 <div className="contact_form">
                                    <form>
                                        <input type="text" placeholder="Name" name="name" />
                                        <input type="number" placeholder="Phone number" name="phonenumber" />
                                        <input type="email" placeholder="Email" name="email" />
                                        <textarea placeholder="Message" className="field-msg"></textarea>
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
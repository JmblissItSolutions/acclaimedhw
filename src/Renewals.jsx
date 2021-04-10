import React from "react";
import { Helmet } from "react-helmet";
import RenewalsForm from "./component/RenewalsForm";
import contactbanner from "./assets/images/contact-us-banner.png";
import renewalsbackground from "./assets/images/leackage.jpeg";
const Renewals = () => {
    return (
        <>
            <Helmet>
                <title>Contact Acclaimed Home Warranty Team in one of our offices: Utah, Arizona, Idaho, Texas, or Nevada</title>
                <meta name="description" content="For all your home warranty needs, concerns and questions, reach out to the Acclaimed Home Warranty’s team." />
            </Helmet>
            <div className="home_page">
                <div className="top_img">
                    <img src={contactbanner} alt="contactbanner"/>
                </div>
                <section className="inner renewals">
                    <h1>Renewals</h1>
                    <div className="upper_text">
                        <p>Want to renew your policy and continue saving thousands? For those homeowners that currently have or had a policy with Acclaimed Home Warranty please review renewal options below.</p>
                        <p>If you are renewing from another company feel free to "chat" in, we are happy to help you move over your coverage.</p>
                        <p>1. You can login to your account (upper right corner) and renew there</p>
                        <p>2. You can chat with us M-F 8-6 MST</p>
                        <p>3. You can call into 888-494-9460 dial 4 (M-F 8-6 MST)</p>
                        <p>4. You can fill out this form below and we will quickly get back with you</p><br/>
                        <section className="video-sec claimPage" style={{ backgroundImage: `url(${renewalsbackground})` }}></section>
                        <RenewalsForm />
                    </div>
                </section>
            </div>
        </>
    )
};
export default Renewals;
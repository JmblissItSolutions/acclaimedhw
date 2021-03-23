import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import aboutus from "./assets/images/aubout-us.png";
import latticebackground from "./assets/images/lattice-background.png"
import kristincombs from "./assets/images/kristin-combs.png";
import RyanN from "./assets/images/RyanN.jpeg";
import sandraperkins from "./assets/images/sandra-perkins.png";
import timparelli from "./assets/images/tim-parelli.png";
import axios from 'axios'
const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Learn more about Acclaimed Home Warranty Services: Award winning home warranty company in Utah, Arizona, Idaho, Texas, and Nevada</title>
        <meta name="description" content="Acclaimed Home Warranty in offers a range of plans &amp; coverage options for protecting your property from high repair costs." />
      </Helmet>
      <div className="home_page">
        <section className="top-image">
          <img src={aboutus} alt="Checkoutbg" />
        </section>
        <div className="about-ttl">
          <h1>About Acclaimed</h1>
        </div>
        <div className="textured" style={{ backgroundImage: `url(${latticebackground})` }}></div>
        <section className="blueBack about-us">
          <div className="inner">
            <h2 className="whiteText">Our Mission</h2>
            <p>When you buy a new home, you’re making an investment in your family. We want you to purchase your home with confidence, so we provide peace of mind. If your furnace breaks down or you have a plumbing issue, you don’t have to research the companies available to fix it or how much it will cost—just call us. We’ll handle the rest.</p>
            <p>We only work with the best, so when we select a contractor for your issue, you’ll know you’re in good hands. And we’re available 24/7, because we never want you to stay up at night worrying about broken appliances. We want you to get back to what matters most: your family. That’s why we do what we do.</p>
          </div>
        </section>
        <section className="leadership">
          <h2>Leadership</h2>
          <div className="leader-cont inner">
            <div className="leader">
              <div className="leader-inner">
                <div className="img-cont">
                  <img src={kristincombs} alt="kristincombs" />
                </div>
                <h4>KRISTIN COMBS</h4>
                <p className="tittle">VP Business Development | Sales, Marketing COO</p>
                <p className="cell"><a href="tel:801-800-7211">801-800-7211</a></p>
                <p className="office"><a href="tel:888-494-9460">888-494-9460</a></p>
                <p className="email"><a href="mailto:kristin@acclaimedhw.com">kristin@acclaimedhw.com</a></p>
              </div>
            </div>
            <div className="leader">
              <div className="leader-inner">
                <div className="img-cont">
                  <img src={RyanN} alt="kristincombs" />
                </div>
                <h4>Ryan Nelson</h4>
                <p className="tittle">VP Claims & Contractor Management</p>
                <p className="cell"><a href="tel:801-800-7211">801-755-6127</a></p>
                <p className="office"><a href="tel:888-494-9460">888-494-9460</a></p>
                <p className="email"><a href="mailto:kristin@acclaimedhw.com">rnelson@acclaimedhw.com</a></p>
              </div>
            </div>
            <div className="leader">
              <div className="leader-inner">
                <div className="img-cont">
                  <img src={sandraperkins} alt="kristincombs" />
                </div>
                <h4>SANDRA PERKINS</h4>
                <p className="tittle">SLC & Northern UT Sales Representative</p>
                <p className="cell"><a href="tel:801-800-7211">385-232-6167</a></p>
                <p className="office"><a href="tel:888-494-9460">888-494-9460</a></p>
                <p className="email"><a href="mailto:kristin@acclaimedhw.com">sandra@acclaimedhw.com</a></p>
              </div>
            </div>
            <div className="leader">
              <div className="leader-inner">
                <div className="img-cont">
                  <img src={timparelli} alt="kristincombs" />
                </div>
                <h4>TIM PARELLI</h4>
                <p className="tittle">Southern Nevada Representative</p>
                <p className="cell"><a href="tel:801-800-7211">702-626-3319</a></p>
                <p className="office"><a href="tel:888-494-9460">888-494-9460</a></p>
                <p className="email"><a href="mailto:kristin@acclaimedhw.com">tparelli@acclaimedhw.com</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
};
export default AboutUs;
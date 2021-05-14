import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import aboutus from "./assets/images/aubout-us.png";
import latticebackground from "./assets/images/lattice-background.png"
import kristincombs from "./assets/images/kristin-combs.png";
import RyanN from "./assets/images/RyanN.jpeg";
import sandraperkins from "./assets/images/sandra-perkins.png";
import timparelli from "./assets/images/tim-parelli.png";
import stayceblake from "./assets/images/stayce-blake.png";
import Roy from "./assets/images/Roy.jpg";
import kylethomas from "./assets/images/Kyle-Thomas.jpg";
import linda from "./assets/images/linda.jpg";
import amber from "./assets/images/amber.jpg";
import matt from "./assets/images/Matt.png";
import paul from "./assets/images/Paul.jpg";
import theron from "./assets/images/Theron.jpeg";
import google from "./assets/images/googlelogo.png";
import ReactStars from "react-rating-stars-component";
import Carousel from 'react-bootstrap/Carousel';
import marggie from "./assets/images/marggie.png";
import smgoogle from "./assets/images/googleicon.png";
import vance from "./assets/images/vance.png";
import nathaun from "./assets/images/nathaun.png";
import stan from "./assets/images/stan.png";
import karma from "./assets/images/karma.png";
import talon from "./assets/images/talon.png";
import erica from "./assets/images/erica.png";
import adam from "./assets/images/adam.png";
import dominique from "./assets/images/dominique.png";
import michael from "./assets/images/michael.png";
import connue from "./assets/images/connue.jpg";
import roadhome from "./assets/images/roadhome.jpg";
import Thanksgiving from "./assets/images/Thanksgiving.png";
import walkcure from "./assets/images/walkcure.jpg";
import fisherhouse from "./assets/images/fisher-house.jpg";
import kwcares from "./assets/images/kwcares.png";
import humansociety from "./assets/images/humansociety.jpg";
import familypromise from "./assets/images/familypromise.jpg";
import theroad from "./assets/images/theroad.jpg";
import remindergate from "./assets/images/remindergate.jpg";
import liquid from "./assets/images/liquid.jpg";
import liquidready from "./assets/images/liquidready.jpg";
import loowks from "./assets/images/loowks.jpg";
import manwithkit from "./assets/images/manwithkit.jpg";
import axios from 'axios';

const AboutUs = () => {
  const ratingStart = {
    size: 30,
    value: 5,
    edit: false,
    color: "yellow",
    overflow: "hidden"
  };
  const [data, setData] = useState([]);
  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": "https://jsonplaceholder.typicode.com/photos",
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  useEffect(() => {
    fetchData()
  }, [fetchData])
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
        <div className="lattice-bg" style={{ backgroundImage: `url(${latticebackground})` }}></div>
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
            <div className="leader">
              <div className="leader-inner">
                <div className="img-cont">
                  <img src={stayceblake} alt="kristincombs" />
                </div>
                <h4>STACYE BLAKE</h4>
                <p className="title">Texas Manager|Sales Austin</p>
                <p className="cell"><a href="tel:801-800-7211">512-888-8028</a></p>
                <p className="office"><a href="tel:888-494-9460">888-494-9460</a></p>
                <p className="email"><a href="mailto:kristin@acclaimedhw.com">stacye@acclaimedhw.com</a></p>
              </div>
            </div>
            <div className="leader">
              <div className="leader-inner">
                <div className="img-cont">
                  <img src={Roy} alt="kristincombs" />
                </div>
                <h4>Roy Davis</h4>
                <p className="title">East Houston Sales</p>
                <p className="cell"><a href="tel:801-800-7211">832-246-9149</a></p>
                <p className="office"><a href="tel:888-494-9460">888-494-9460</a></p>
                <p className="email"><a href="mailto:kristin@acclaimedhw.com">rdavis@acclaimedhw.com</a></p>
              </div>
            </div>
            <div className="leader">
              <div className="leader-inner">
                <div className="img-cont">
                  <img src={kylethomas} alt="kristincombs" />
                </div>
                <h4>Kyle Thomas</h4>
                <p className="title">West Houston Sales</p>
                <p className="cell"><a href="tel:801-800-7211">832-928-4153</a></p>
                <p className="office"><a href="tel:888-494-9460">888-494-9460</a></p>
                <p className="email"><a href="mailto:kristin@acclaimedhw.com">kthomas@acclaimedhw.com</a></p>
              </div>
            </div>
            <div className="leader">
              <div className="leader-inner">
                <div className="img-cont">
                  <img src={linda} alt="kristincombs" />
                </div>
                <h4>Linda Wright</h4>
                <p className="title">San Antonio Sales</p>
                <p className="cell"><a href="tel:801-800-7211">210-727-5392</a></p>
                <p className="office"><a href="tel:888-494-9460">888-494-9460</a></p>
                <p className="email"><a href="mailto:kristin@acclaimedhw.com">linda@acclaimedhw.com</a></p>
              </div>
            </div>
            <div className="leader">
              <div className="leader-inner">
                <div className="img-cont">
                  <img src={amber} alt="kristincombs" />
                </div>
                <h4>Amber Fernandez</h4>
                <p className="title">Dallas/ Dallas Ft Worth Sales</p>
                <p className="cell"><a href="tel:801-800-7211">817-422-2113</a></p>
                <p className="office"><a href="tel:888-494-9460">888-494-9460</a></p>
                <p className="email"><a href="mailto:kristin@acclaimedhw.com">amber@acclaimedhw.com</a></p>
              </div>
            </div>
            <div className="leader">
              <div className="leader-inner">
                <div className="img-cont">
                  <img src={matt} alt="kristincombs" />
                </div>
                <h4>Matt Alexander</h4>
                <p className="title">Ft Worth Sales</p>
                <p className="cell"><a href="tel:801-800-7211">214-518-9355</a></p>
                <p className="office"><a href="tel:888-494-9460">888-494-9460</a></p>
                <p className="email"><a href="mailto:kristin@acclaimedhw.com">matt@acclaimedhw.com</a></p>
              </div>
            </div>
            <div className="leader">
              <div className="leader-inner">
                <div className="img-cont">
                  <img src={paul} alt="kristincombs" />
                </div>
                <h4>Paul Anderson</h4>
                <p className="title">Central Texas Sales</p>
                <p className="cell"><a href="tel:801-800-7211">512-763-9654</a></p>
                <p className="office"><a href="tel:888-494-9460">888-494-9460</a></p>
                <p className="email"><a href="mailto:kristin@acclaimedhw.com">paul@acclaimedhw.com</a></p>
              </div>
            </div>
            <div className="leader">
              <div className="leader-inner">
                <div className="img-cont">
                  <img src={theron} alt="kristincombs" />
                </div>
                <h4>Theron Smith</h4>
                <p className="title">Dallas/Ft Worth Area Manager</p>
                <p className="cell"><a href="tel:801-800-7211">214-250-1320</a></p>
                <p className="office"><a href="tel:888-494-9460">888-494-9460</a></p>
                <p className="email"><a href="mailto:kristin@acclaimedhw.com">theron@acclaimedhw.com</a></p>
              </div>
            </div>
          </div>
        </section>
        <section className="google-review-feed">
          <h2>Review</h2>
          <div className="inner">
            <div className="ti-widget">
              <div className="ti-widget-container ti-col-4">
                <div className="ti-footer source-Google">
                  <div className="ti-large-logo">
                    <div className="ti-v-center">
                      <img src={google} alt="google" />
                    </div>
                  </div>
                  <div className="ti-stars star-lg">
                    <div className="rating-cont" data-rating="5">
                      <ReactStars {...ratingStart} />
                    </div>
                  </div>
                  <div className="ti-rating-text">
                    <strong className="ti-rating"> EXCELLENT </strong>
                    <span className="nowrap">Based on <strong>314 reviews</strong>.</span>
                  </div>
                </div>
                <div className="ti-reviews-container">
                  <Carousel>
                    <Carousel.Item className="about-crousel-item">
                      <div className="ti-review-item source-Google">
                        <div className="ti-inner">
                          <div className="ti-review-header">
                            <div className="ti-profile-img">
                              <img src={marggie} alt="marggie" />
                            </div>
                            <div className="ti-profile-details">
                              <div className="ti-name">
                                Marggie Riley
                              </div>
                              <div className="ti-date">
                                2020-07-24
                              </div>
                              <div className="ti-logo">
                                <img src={smgoogle} alt="sm-google" />
                              </div>
                            </div>
                          </div>
                          <div className="ti-stars star-lg">
                            <div className="rating-cont" data-rating="5">
                              <ReactStars {...ratingStart} />
                            </div>
                          </div>
                          <div className="ti-review-content">
                            Roy Davis was amazing in explaining the benefits to my client why Acclaimed Home Warranty was the only Home Warranty to choose. Roy's professionalism and punctuality with all question was over the top. I will definitely refer all my clients to Roy Davis with Acclaimed Home Warranty.
                          </div>
                        </div>
                      </div>

                      <div className="ti-review-item source-Google">
                        <div className="ti-inner">
                          <div className="ti-review-header">
                            <div className="ti-profile-img">
                              <img src={vance} alt="vance" />
                            </div>
                            <div className="ti-profile-details">
                              <div className="ti-name">
                                Vance Skidmore
                              </div>
                              <div className="ti-date">
                                2020-07-24
                              </div>
                              <div className="ti-logo">
                                <img src={smgoogle} alt="sm-google" />
                              </div>
                            </div>
                          </div>
                          <div className="ti-stars star-lg">
                            <div className="rating-cont" data-rating="5">
                              <ReactStars {...ratingStart} />
                            </div>
                          </div>
                          <div className="ti-review-content"></div>
                        </div>
                      </div>

                      <div className="ti-review-item source-Google">
                        <div className="ti-inner">
                          <div className="ti-review-header">
                            <div className="ti-profile-img">
                              <img src={nathaun} alt="nathaun" />
                            </div>
                            <div className="ti-profile-details">
                              <div className="ti-name">
                                Nathan Hauser
                              </div>
                              <div className="ti-date">
                                2020-07-24
                              </div>
                              <div className="ti-logo">
                                <img src={smgoogle} alt="sm-google" />
                              </div>
                            </div>
                          </div>
                          <div className="ti-stars star-lg">
                            <div className="rating-cont" data-rating="5">
                              <ReactStars {...ratingStart} />
                            </div>
                          </div>
                          <div className="ti-review-content"> </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item className="about-crousel-item">
                      <div className="ti-review-item source-Google">
                        <div className="ti-inner">
                          <div className="ti-review-header">
                            <div className="ti-profile-img">
                              <img src={stan} alt="stan" />
                            </div>
                            <div className="ti-profile-details">
                              <div className="ti-name">
                                Stan Geniusz
                              </div>
                              <div className="ti-date">
                                2020-07-24
                              </div>
                              <div className="ti-logo">
                                <img src={smgoogle} alt="sm-google" />
                              </div>
                            </div>
                          </div>
                          <div className="ti-stars star-lg">
                            <div className="rating-cont" data-rating="5">
                              <ReactStars {...ratingStart} />
                            </div>
                          </div>
                          <div className="ti-review-content"> </div>
                        </div>
                      </div>

                      <div className="ti-review-item source-Google">
                        <div className="ti-inner">
                          <div className="ti-review-header">
                            <div className="ti-profile-img">
                              <img src={karma} alt="karma" />
                            </div>
                            <div className="ti-profile-details">
                              <div className="ti-name">
                                Karma Martinez
                              </div>
                              <div className="ti-date">
                                2020-07-24
                              </div>
                              <div className="ti-logo">
                                <img src={smgoogle} alt="sm-google" />
                              </div>
                            </div>
                          </div>
                          <div className="ti-stars star-lg">
                            <div className="rating-cont" data-rating="5">
                              <ReactStars {...ratingStart} />
                            </div>
                          </div>
                          <div className="ti-review-content">If it's within your budget it's fine</div>
                        </div>
                      </div>

                      <div className="ti-review-item source-Google">
                        <div className="ti-inner">
                          <div className="ti-review-header">
                            <div className="ti-profile-img">
                              <img src={talon} alt="talon" />
                            </div>
                            <div className="ti-profile-details">
                              <div className="ti-name">
                                Talon Sickler
                              </div>
                              <div className="ti-date">
                                2020-07-22
                              </div>
                              <div className="ti-logo">
                                <img src={smgoogle} alt="sm-google" />
                              </div>
                            </div>
                          </div>
                          <div className="ti-stars star-lg">
                            <div className="rating-cont" data-rating="5">
                              <ReactStars {...ratingStart} />
                            </div>
                          </div>
                          <div className="ti-review-content">If it's within your budget it's fine</div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item className="about-crousel-item">
                      <div className="ti-review-item source-Google">
                        <div className="ti-inner">
                          <div className="ti-review-header">
                            <div className="ti-profile-img">
                              <img src={erica} alt="erica" />
                            </div>
                            <div className="ti-profile-details">
                              <div className="ti-name">
                                Erica Burroughs
                              </div>
                              <div className="ti-date">
                                2020-07-21
                              </div>
                              <div className="ti-logo">
                                <img src={smgoogle} alt="sm-google" />
                              </div>
                            </div>
                          </div>
                          <div className="ti-stars star-lg">
                            <div className="rating-cont" data-rating="5">
                              <ReactStars {...ratingStart} />
                            </div>
                          </div>
                          <div className="ti-review-content">
                            Update 7.21.2020 - Thank you Ryan and Roy for reaching out! Ryan and Roy called to ensure the matter was handled, and to see if it could be settled. They both apologized and were empathetic to the situation. We were able to come to an agreement and now I have moved them from 1 to 5 stars. Whatever the "after hours call center" issue was they said they are looking into it and would like our continued business. My husband and I agreed to review their packages for possible renewal. Thank you again Ryan and Roy for reaching out and showing concern regarding this matter.
                          </div>
                        </div>
                      </div>

                      <div className="ti-review-item source-Google">
                        <div className="ti-inner">
                          <div className="ti-review-header">
                            <div className="ti-profile-img">
                              <img src={adam} alt="adam" />
                            </div>
                            <div className="ti-profile-details">
                              <div className="ti-name">
                                Adam Hofman
                              </div>
                              <div className="ti-date">
                                2020-07-21
                              </div>
                              <div className="ti-logo">
                                <img src={smgoogle} alt="sm-google" />
                              </div>
                            </div>
                          </div>
                          <div className="ti-stars star-lg">
                            <div className="rating-cont" data-rating="5">
                              <ReactStars {...ratingStart} />
                            </div>
                          </div>
                          <div className="ti-review-content">
                            I'm updating my review based on my recent experience with Acclaimed. Ryan has been very helpful and has gone out of his way to make sure that I was informed through the rest of the repair process. The repair company was here today with parts and everything is now functional again. My impression of the company has now changed and I am pleased to have a home warranty with them!
                          </div>
                        </div>
                      </div>

                      <div className="ti-review-item source-Google">
                        <div className="ti-inner">
                          <div className="ti-review-header">
                            <div className="ti-profile-img">
                              <img src={dominique} alt="dominique" />
                            </div>
                            <div className="ti-profile-details">
                              <div className="ti-name">
                                Dominique Van der Weken-Hevesi
                              </div>
                              <div className="ti-date">
                                2020-07-17
                              </div>
                              <div className="ti-logo">
                                <img src={smgoogle} alt="sm-google" />
                              </div>
                            </div>
                          </div>
                          <div className="ti-stars star-lg">
                            <div className="rating-cont" data-rating="5">
                              <ReactStars {...ratingStart} />
                            </div>
                          </div>
                          <div className="ti-review-content">
                            I used Acclaimed warranties for 3 years now, and they have been great to work with!<br />Whenever I had an issue, they were responsive & helpful.<br />Kristin Combs was amazing to work with, and for every question I had. I can only highly recommend them!!
                          </div>
                        </div>
                      </div>

                      <div className="ti-review-item source-Google">
                        <div className="ti-inner">
                          <div className="ti-review-header">
                            <div className="ti-profile-img">
                              <img src={michael} alt="michael" />
                            </div>
                            <div className="ti-profile-details">
                              <div className="ti-name">
                                Michael Hill
                              </div>
                              <div className="ti-date">
                                2020-07-12
                              </div>
                              <div className="ti-logo">
                                <img src={smgoogle} alt="sm-google" />
                              </div>
                            </div>
                          </div>
                          <div className="ti-stars star-lg">
                            <div className="rating-cont" data-rating="5">
                              <ReactStars {...ratingStart} />
                            </div>
                          </div>
                          <div className="ti-review-content"></div>
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="giving-back">
          <h2 className="upper">Giving Back</h2>
          <div className="inner">
            <p>We believe in supporting the communities we serve. That’s why a portion of all proceeds from every order goes to a local cause. We work with a variety of charitable organizations to make sure every dollar has an impact.</p>
            <div className="organizations">
              <div className="img-cont">
                <img src={connue} alt="connue" />
              </div>
              <div className="img-cont">
                <img src={roadhome} alt="roadhome" />
              </div>
              <div className="img-cont">
                <img src={Thanksgiving} alt="Thanksgiving" />
              </div>
              <div className="img-cont">
                <img src={walkcure} alt="walkcure" />
              </div>
              <div className="img-cont">
                <img src={fisherhouse} alt="fisher-house" />
              </div>
              <div className="img-cont">
                <img src={kwcares} alt="kwcares" />
              </div>
              <div className="img-cont">
                <img src={humansociety} alt="humansociety" />
              </div>
              <div className="img-cont">
                <img src={familypromise} alt="familypromise" />
              </div>
            </div>
          </div>
        </section>
        <section className="instagram-feed">
          <h2 className="upper">Instagram</h2>
          <div className="inner"> 
             <div className="sb_instagram">
               <div className="sbi_images">
                <div className="sbi_item sbi_type_image">
                  <div className="sbi_photo_wrap">
                    <a className="sbi_photo"><img src={theroad} alt="the-road" /></a>
                  </div>
                </div>

                <div className="sbi_item sbi_type_image">
                  <div className="sbi_photo_wrap">
                    <a className="sbi_photo"><img src={remindergate} alt="remindergate" /></a>
                  </div>
                </div>
                <div className="sbi_item sbi_type_image">
                  <div className="sbi_photo_wrap">
                    <a className="sbi_photo"><img src={liquid} alt="liquid" /></a>
                  </div>
                </div>
                <div className="sbi_item sbi_type_image">
                  <div className="sbi_photo_wrap">
                    <a className="sbi_photo"><img src={liquidready} alt="liquidready" /></a>
                  </div>
                </div>
                <div className="sbi_item sbi_type_image">
                  <div className="sbi_photo_wrap">
                    <a className="sbi_photo"><img src={loowks} alt="loowks"/></a>
                  </div>
                </div>
                <div className="sbi_item sbi_type_image">
                  <div className="sbi_photo_wrap">
                    <a className="sbi_photo"><img src={manwithkit} alt="manwithkit"/></a>
                  </div>
                </div>
               </div>
             </div>
          </div>
        </section>
      </div>
    </>
  )
};
export default AboutUs;
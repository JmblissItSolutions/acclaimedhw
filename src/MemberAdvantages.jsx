import React from "react";
import { Helmet } from "react-helmet";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Memberadvantages from "./assets/images/MemberAdvantages.png";
import shutterstock from "./assets/images/shutterstock.jpg";
import mariam from "./assets/images/mariam.jpg";
import haydee from "./assets/images/haydee.jpg";
import comparebox from "./assets/images/compare-box.jpg"
import guyplaceholder from "./assets/images/guyplaceholder.png";
import steve from "./assets/images/steve.jpg";
import stephanie from "./assets/images/stephanie.png";
import ReactStars from "react-rating-stars-component";
import Advantagesform from "./component/Advantagesform";

const MemberAdvantages = () => {
  const ratingStart = {
    size: 30,
    value: 5,
    edit: false,
    color: "yellow",
  };
  return (
    <>
      <Helmet>
        <title>Member Advantages for Home Warranty Coverages</title>
        <meta name="description" content="Visit Acclaimed Home Warranty’s website for details about member advantages. For warranty coverages for your home in Arizona, get in touch with us today." />
      </Helmet>
      <div className="home_page">
        <div className="top_img">
          <img src={Memberadvantages} alt="contactbanner" />
        </div>
        <div className="container">
          <div className="upper_text">
            <h1>Member advantages</h1>
            <p>Partnering with Acclaimed Home Warranty has many advantages. In addition to our extensive warranty coverage, our clients also benefit from the special prices we’ve negotiated for many common home services. Feel free to contact us for details about the discounted services available near you.</p>
          </div>
        </div>
        <div className="accordion member_advantage">
          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="container"> BENIFITS IN UTAH </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="body">
                  <div className="container">
                    <div className="main-stuff">
                      <div className="advantages">
                        <h2>ADVANTAGES AVAILABLE <br></br>FOR A $60 SERVICE FEE</h2>
                        <p><strong>Re-Key Services –</strong>Change up to six locks and receive four copies of the new key.</p>
                        <p><strong>Pre-Season Tune-Ups for Heating and Air Conditioning Units –</strong>Twice a year you can get your systems cleaned and checked for the season.* Dates for A/C tune-ups are March 1–May 1. Dates for heating tune-up are September 1–December 1. $60 for the first system and $30 for additional systems.</p>
                        <p><strong>Garage Door Reprogramming –</strong>Have your keypad and remotes reprogrammed. We can also have someone check your garage door springs.</p>
                      </div>
                      <div className="services mb-5">
                        <h3>OTHER GREAT ADVANTAGES</h3>
                        <p>We’ve negotiated some great pricing for services you’ll need while enjoying your home. If you’re interested in any of the services below, just email or call us and we’ll put you in touch with the companies to get you a free quote.**</p>
                        <div className="list">
                          <div className="service">
                            Free Ring Doorbell or Next Thermostat with Home Security sign up. As low as $40 a month.
                                                        </div>
                          <div className="service">
                            Window and Gutter Cleaning -Get $15 off your first service or $30 off two services. Available from Bountiful through Utah County.
                                                        </div>
                          <div className="service">
                            Carpet, Rug, Tile and Upholstery Cleaning – Specials always offered, email for information. Available from Ogden to Utah County.
                                                        </div>
                          <div className="disclaimer">
                            *Not offered in all areas. Fill out the form and we will let you know which services are available near you.
                                                        </div>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review">
                          <div className="review-left">
                            <div className="img_cont">
                              <img src={shutterstock} alt="shuttersock" />
                            </div>
                          </div>
                          <div className="review-right">
                            <div className="top">
                              <p>Janelle C.</p>
                            </div>
                            <div className="rating-cont" data-rating="5">
                              <div className="white">
                                <ReactStars {...ratingStart} />
                              </div>
                              <span>1 year ago</span>
                            </div>
                            <div className="message">We are so glad that our realtor goes through Acclaimed Home Warranty every time we purchase/sell a home with him. We have used them numerous times this last year and are highly considering renewing with them for the future. They were able t</div>
                          </div>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review">
                          <div className="review-left">
                            <div className="img_cont">
                              <img src={mariam} alt="mariam" />
                            </div>
                          </div>
                          <div className="review-right">
                            <div className="top">
                              <p>Miriam P.</p>
                            </div>
                            <div className="rating-cont" data-rating="5">
                              <div className="white">
                                <ReactStars {...ratingStart} />
                              </div>
                              <span>1 year ago</span>
                            </div>
                            <div className="message">Everything went fine. The provider arrived on time and reviewed his findings. I'm grateful to know the AC unit is working well and ready for the summer. Thank you!!!</div>
                          </div>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review">
                          <div className="review-left">
                            <div className="img_cont">
                              <img src={haydee} alt="haydee" />
                            </div>
                          </div>
                          <div className="review-right">
                            <div className="top">
                              <p>Haydee L.</p>
                            </div>
                            <div className="rating-cont" data-rating="5">
                              <div className="white">
                                <ReactStars {...ratingStart} />
                              </div>
                              <span>1 year ago</span>
                            </div>
                            <div className="message">I am a real estate agent and I refer all my buyers to Acclaimed home warranty. They do a great job and fast! Friendly and always there when I have needed them :)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar">
                      <Advantagesform />
                      <div className="compare-box" style={{ backgroundImage: `url(${comparebox})` }}>
                        <div className="text">
                          <p className="strong">Don't Have a<br></br>Home Warranty Plan?</p>
                          <p>When purchasing a home warranty through Acclaimed, you have a partner in addressing unexpected appliance or major systems problems.</p>
                          <a href="" className="btn">Compare Utah Plans</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="container">BENIFITS IN IDAHO</div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="body">
                  <div className="container">
                    <div className="main-stuff">
                      <div className="advantages">
                        <h2>ADVANTAGES AVAILABLE <br></br>FOR A $60 SERVICE FEE</h2>
                        <p><strong>Re-Key Services –</strong>Change up to six locks and receive four copies of the new key.</p>
                        <p><strong>Pre-Season Tune-Ups for Heating and Air Conditioning Units –</strong>Twice a year you can get your systems cleaned and checked for the season.* Dates for A/C tune-ups are March 1–May 1. Dates for heating tune-up are September 1–December 1. $60 for the first system and $30 for additional systems.</p>
                        <p><strong>Garage Door Reprogramming –</strong>Have your keypad and remotes reprogrammed. We can also have someone check your garage door springs.</p>
                      </div>
                      <div className="services">
                        <h3>OTHER GREAT ADVANTAGES</h3>
                        <p>We’ve negotiated some great pricing for services you’ll need while enjoying your home. If you’re interested in any of the services below, just email or call us and we’ll put you in touch with the companies to get you a free quote.**</p>
                        <div className="list">
                          <div className="service">
                            Free Ring Doorbell or Next Thermostat with Home Security sign up. As low as $40 a month.
                                                        </div>
                          <div className="service">
                            Window and Gutter Cleaning -Get $15 off your first service or $30 off two services. Available from Bountiful through Utah County.
                                                        </div>
                          <div className="service">
                            Carpet, Rug, Tile and Upholstery Cleaning – Specials always offered, email for information. Available from Ogden to Utah County.
                                                        </div>
                          <div className="disclaimer">
                            *Not offered in all areas. Fill out the form and we will let you know which services are available near you.
                                                        </div>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review">
                          <div className="review-left">
                            <div className="img_cont">
                              <img src={shutterstock} alt="shuttersock" />
                            </div>
                          </div>
                          <div className="review-right">
                            <div className="top">
                              <p>Janelle C.</p>
                            </div>
                            <div className="rating-cont" data-rating="5">
                              <div className="white">
                                <ReactStars {...ratingStart} />
                              </div>
                              <span>1 year ago</span>
                            </div>
                            <div className="message">We are so glad that our realtor goes through Acclaimed Home Warranty every time we purchase/sell a home with him. We have used them numerous times this last year and are highly considering renewing with them for the future. They were able t</div>
                          </div>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review">
                          <div className="review-left">
                            <div className="img_cont">
                              <img src={mariam} alt="mariam" />
                            </div>
                          </div>
                          <div className="review-right">
                            <div className="top">
                              <p>Miriam P.</p>
                            </div>
                            <div className="rating-cont" data-rating="5">
                              <div className="white">
                                <ReactStars {...ratingStart} />
                              </div>
                              <span>1 year ago</span>
                            </div>
                            <div className="message">Everything went fine. The provider arrived on time and reviewed his findings. I'm grateful to know the AC unit is working well and ready for the summer. Thank you!!!</div>
                          </div>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review">
                          <div className="review-left">
                            <div className="img_cont">
                              <img src={haydee} alt="haydee" />
                            </div>
                          </div>
                          <div className="review-right">
                            <div className="top">
                              <p>Haydee L.</p>
                            </div>
                            <div className="rating-cont" data-rating="5">
                              <div className="white">
                                <ReactStars {...ratingStart} />
                              </div>
                              <span>1 year ago</span>
                            </div>
                            <div className="message">I am a real estate agent and I refer all my buyers to Acclaimed home warranty. They do a great job and fast! Friendly and always there when I have needed them :)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar">
                      <Advantagesform />
                      <div className="compare-box" style={{ backgroundImage: `url(${comparebox})` }}>
                        <div className="text">
                          <p className="strong">Don't Have a<br></br>Home Warranty Plan?</p>
                          <p>When purchasing a home warranty through Acclaimed, you have a partner in addressing unexpected appliance or major systems problems.</p>
                          <a href="" className="btn">Compare Idaho Plans</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="container">Benefits In Nevada</div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="body">
                  <div className="container">
                    <div className="main-stuff">
                      <div className="advantages">
                        <h2>ADVANTAGES AVAILABLE <br></br>FOR A $60 SERVICE FEE</h2>
                        <p><strong>Re-Key Services –</strong>Change up to six locks and receive four copies of the new key.</p>
                        <p><strong>Pre-Season Tune-Ups for Heating and Air Conditioning Units –</strong>Twice a year you can get your systems cleaned and checked for the season.* Dates for A/C tune-ups are March 1–May 1. Dates for heating tune-up are September 1–December 1. $60 for the first system and $30 for additional systems.</p>
                        <p><strong>Garage Door Reprogramming –</strong>Have your keypad and remotes reprogrammed. We can also have someone check your garage door springs.</p>
                      </div>
                      <div className="services">
                        <h3>OTHER GREAT ADVANTAGES</h3>
                        <p>We’ve negotiated some great pricing for services you’ll need while enjoying your home. If you’re interested in any of the services below, just email or call us and we’ll put you in touch with the companies to get you a free quote.**</p>
                        <div className="list">
                          <div className="service">
                            Free Ring Doorbell or Next Thermostat with Home Security sign up. As low as $40 a month.
                                                        </div>
                          <div className="disclaimer">
                            *Not offered in all areas. Fill out the form and we will let you know which services are available near you.
                                                        </div>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review">
                          <div className="review-left">
                            <div className="img_cont">
                              <img src={guyplaceholder} alt="shuttersock" />
                            </div>
                          </div>
                          <div className="review-right">
                            <div className="top">
                              <p>Paul S.</p>
                            </div>
                            <div className="rating-cont" data-rating="5">
                              <div className="white">
                                <ReactStars {...ratingStart} />
                              </div>
                              <span>1 year ago</span>
                            </div>
                            <div className="message">I can’t say enough good things! The warranty was included with our home purchase and we most likely wouldn’t have chosen to buy it on our own- just because of all the costs associated with moving and buying a house, etc. 9 days before the o</div>
                          </div>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review">
                          <div className="review-left">
                            <div className="img_cont">
                              <img src={steve} alt="mariam" />
                            </div>
                          </div>
                          <div className="review-right">
                            <div className="top">
                              <p>steve B</p>
                            </div>
                            <div className="rating-cont" data-rating="5">
                              <div className="white">
                                <ReactStars {...ratingStart} />
                              </div>
                              <span>1 year ago</span>
                            </div>
                            <div className="message">As a real estate agent I highly recommend Acclaimed Home Warranty. I used to use another company but after repeated instances wherein my client's reasonable and covered needs were not taken care of I switched to Acclaimed and have never loo</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar">
                      <Advantagesform />
                      <div className="compare-box" style={{ backgroundImage: `url(${comparebox})` }}>
                        <div className="text">
                          <p className="strong">Don't Have a<br></br>Home Warranty Plan?</p>
                          <p>When purchasing a home warranty through Acclaimed, you have a partner in addressing unexpected appliance or major systems problems.</p>
                          <a href="" className="btn">Compare Nevada Plans</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="container">Benefits In Texas</div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="body">
                  <div className="container">
                    <div className="main-stuff">
                      <div className="advantages">
                        <h2>ADVANTAGES AVAILABLE <br></br>FOR A $60 SERVICE FEE</h2>
                        <p><strong>Re-Key Services –</strong>Change up to six locks and receive four copies of the new key.</p>
                        <p><strong>Pre-Season Tune-Ups for Heating and Air Conditioning Units –</strong>Twice a year you can get your systems cleaned and checked for the season.* Dates for A/C tune-ups are March 1–May 1. Dates for heating tune-up are September 1–December 1. $60 for the first system and $30 for additional systems.</p>
                        <p><strong>Garage Door Reprogramming –</strong>Have your keypad and remotes reprogrammed. We can also have someone check your garage door springs.</p>
                      </div>
                      <div className="services">
                        <h3>OTHER GREAT ADVANTAGES</h3>
                        <p>We’ve negotiated some great pricing for services you’ll need while enjoying your home. If you’re interested in any of the services below, just email or call us and we’ll put you in touch with the companies to get you a free quote.**</p>
                        <div className="list">
                          <div className="service">
                            Free Ring Doorbell or Next Thermostat with Home Security sign up. As low as $40 a month.
                                                        </div>
                          <div className="disclaimer">
                            *Not offered in all areas. Fill out the form and we will let you know which services are available near you.
                                                        </div>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review">
                          <div className="review-left">
                            <div className="img_cont">
                              <img src={guyplaceholder} alt="shuttersock" />
                            </div>
                          </div>
                          <div className="review-right">
                            <div className="top">
                              <p>Matt W.</p>
                            </div>
                            <div className="rating-cont" data-rating="5">
                              <div className="white">
                                <ReactStars {...ratingStart} />
                              </div>
                              <span>1 year ago</span>
                            </div>
                            <div className="message">They have the best customer service and helped me when I set up a repair outside the service contract. Really stepped it up to help me when they did not have to. Great Job!!</div>
                          </div>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review">
                          <div className="review-left">
                            <div className="img_cont">
                              <img src={stephanie} alt="mariam" />
                            </div>
                          </div>
                          <div className="review-right">
                            <div className="top">
                              <p>Theresa S.</p>
                            </div>
                            <div className="rating-cont" data-rating="5">
                              <div className="white">
                                <ReactStars {...ratingStart} />
                              </div>
                              <span>1 year ago</span>
                            </div>
                            <div className="message">I bought my home and within days discovered a kitchen plumbing leak.    I filed a claim with Acclaimed Home Warranty.  After the initial repair, it was discovered that the entire faucet needed to be replaced. I was shocked at the cost to r</div>
                          </div>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review">
                          <div className="review-left">
                            <div className="img_cont">
                              <img src={guyplaceholder} alt="shuttersock" />
                            </div>
                          </div>
                          <div className="review-right">
                            <div className="top">
                              <p>John B.</p>
                            </div>
                            <div className="rating-cont" data-rating="5">
                              <div className="white">
                                <ReactStars {...ratingStart} />
                              </div>
                              <span>1 year ago</span>
                            </div>
                            <div className="message">Scott and Kristin did a great job of handling our warranty claim on our air conditioning and heating systems.  Kristin scheduled our annual air conditioning review with Eco-Air.  Their service was timely and discovered issues with the evapo</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar">
                      <Advantagesform />
                      <div className="compare-box" style={{ backgroundImage: `url(${comparebox})` }}>
                        <div className="text">
                          <p className="strong">Don't Have a<br></br>Home Warranty Plan?</p>
                          <p>When purchasing a home warranty through Acclaimed, you have a partner in addressing unexpected appliance or major systems problems.</p>
                          <a href="" className="btn">Compare Texas Plans</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="container">Benefits In Arizona</div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="body">
                  <div className="container">
                    <div className="main-stuff">
                      <div className="advantages">
                        <h2>ADVANTAGES AVAILABLE <br></br>FOR A $60 SERVICE FEE</h2>
                        <p><strong>Re-Key Services –</strong>Change up to six locks and receive four copies of the new key.</p>
                        <p><strong>Pre-Season Tune-Ups for Heating and Air Conditioning Units –</strong>Twice a year you can get your systems cleaned and checked for the season.* Dates for A/C tune-ups are March 1–May 1. Dates for heating tune-up are September 1–December 1. $60 for the first system and $30 for additional systems.</p>
                        <p><strong>Garage Door Reprogramming –</strong>Have your keypad and remotes reprogrammed. We can also have someone check your garage door springs.</p>
                      </div>
                      <div className="services">
                        <h3>OTHER GREAT ADVANTAGES</h3>
                        <p>We’ve negotiated some great pricing for services you’ll need while enjoying your home. If you’re interested in any of the services below, just email or call us and we’ll put you in touch with the companies to get you a free quote.**</p>
                        <div className="list">
                          <div className="service">
                            Free Ring Doorbell or Next Thermostat with Home Security sign up. As low as $40 a month.
                                                        </div>
                          <div className="disclaimer">
                            *Not offered in all areas. Fill out the form and we will let you know which services are available near you.
                                                        </div>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review">
                          <div className="review-left">
                            <div className="img_cont">
                              <img src={guyplaceholder} alt="shuttersock" />
                            </div>
                          </div>
                          <div className="review-right">
                            <div className="top">
                              <p>Matt W.</p>
                            </div>
                            <div className="rating-cont" data-rating="5">
                              <div className="white">
                                <ReactStars {...ratingStart} />
                              </div>
                              <span>1 year ago</span>
                            </div>
                            <div className="message">They have the best customer service and helped me when I set up a repair outside the service contract. Really stepped it up to help me when they did not have to. Great Job!!</div>
                          </div>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review">
                          <div className="review-left">
                            <div className="img_cont">
                              <img src={stephanie} alt="mariam" />
                            </div>
                          </div>
                          <div className="review-right">
                            <div className="top">
                              <p>Theresa S.</p>
                            </div>
                            <div className="rating-cont" data-rating="5">
                              <div className="white">
                                <ReactStars {...ratingStart} />
                              </div>
                              <span>1 year ago</span>
                            </div>
                            <div className="message">I bought my home and within days discovered a kitchen plumbing leak.    I filed a claim with Acclaimed Home Warranty.  After the initial repair, it was discovered that the entire faucet needed to be replaced. I was shocked at the cost to r</div>
                          </div>
                        </div>
                      </div>
                      <div className="reviews">
                        <div className="review">
                          <div className="review-left">
                            <div className="img_cont">
                              <img src={guyplaceholder} alt="shuttersock" />
                            </div>
                          </div>
                          <div className="review-right">
                            <div className="top">
                              <p>John B.</p>
                            </div>
                            <div className="rating-cont" data-rating="5">
                              <div className="white">
                                <ReactStars {...ratingStart} />
                              </div>
                              <span>1 year ago</span>
                            </div>
                            <div className="message">Scott and Kristin did a great job of handling our warranty claim on our air conditioning and heating systems.  Kristin scheduled our annual air conditioning review with Eco-Air.  Their service was timely and discovered issues with the evapo</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar">
                      <Advantagesform />
                      <div className="compare-box" style={{ backgroundImage: `url(${comparebox})` }}>
                        <div className="text">
                          <p className="strong">Don't Have a<br></br>Home Warranty Plan?</p>
                          <p>When purchasing a home warranty through Acclaimed, you have a partner in addressing unexpected appliance or major systems problems.</p>
                          <a href="" className="btn">Compare Texas Plans</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  )
};
export default MemberAdvantages;
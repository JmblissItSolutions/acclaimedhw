import React from "react";
import { Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel,} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import  Memberadvantages from"./assets/images/MemberAdvantages.png";
import  shutterstock from "./assets/images/shutterstock.jpg";
  
const MemberAdvantages = () =>{
    return(
       <>
         <div className="home_page">
                  <div className="top_img">
                  <img src={Memberadvantages} alt="contactbanner"/>
                  </div>
                    <div className="container">
                        <div className="upper_text">
                                <h1>Member advantages</h1>
                                <p>Partnering with Acclaimed Home Warranty has many advantages. In addition to our extensive warranty coverage, our clients also benefit from the special prices we’ve negotiated for many common home services. Feel free to contact us for details about the discounted services available near you.</p>
                        </div>
                     </div>
                       <div className="accordion">
                              <Accordion>
                                  <AccordionItem>
                                    <AccordionItemHeading>
                                      <AccordionItemButton>
                                        BENIFITS IN UTAH
                                      </AccordionItemButton>
                                      </AccordionItemHeading>
                                      <AccordionItemPanel>
                                         <div className="body">
                                           <div className="inner">
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
                                                        <div class="service">
                                                          Free Ring Doorbell or Next Thermostat with Home Security sign up. As low as $40 a month.
                                                        </div>
                                                        <div class="service">
                                                          Window and Gutter Cleaning -Get $15 off your first service or $30 off two services. Available from Bountiful through Utah County.
                                                        </div>
                                                        <div class="service">
                                                          Carpet, Rug, Tile and Upholstery Cleaning – Specials always offered, email for information. Available from Ogden to Utah County.
                                                        </div>
                                                        <div class="disclaimer">
                                                          *Not offered in all areas. Fill out the form and we will let you know which services are available near you.
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="reviews">
                                                    <div className="review">
                                                       <div className="left">
                                                         <div className="img_cont">
                                                             <img src={shutterstock} alt="shuttersock"/>
                                                         </div>
                                                       </div>
                                                       <div className="right">
                                                          <div className="top">
                                                            <p>Janelle C.</p>
                                                          </div>
                                                          <div className="rating-cont" data-rating="5">
                                                            <div className="white">
                                                              <i class="achi gray-star"></i>
                                                              <i class="achi gray-star"></i>
                                                              <i class="achi gray-star"></i>
                                                              <i class="achi gray-star"></i>
                                                              <i class="achi gray-star"></i>
                                                            </div>
                                                          </div>
                                                       </div>

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
                                    BENIFITS IN IDAHO
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                  <p>
                                      In ad velit in ex nostrud dolore cupidatat consectetur
                                      ea in ut nostrud velit in irure cillum tempor laboris
                                      sed adipisicing eu esse duis nulla non.
                                  </p>
                              </AccordionItemPanel>
                              </AccordionItem>
                              <AccordionItem>
                                 <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Benefits In Nevada
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                  <p>
                                      In ad velit in ex nostrud dolore cupidatat consectetur
                                      ea in ut nostrud velit in irure cillum tempor laboris
                                      sed adipisicing eu esse duis nulla non.
                                  </p>
                              </AccordionItemPanel>
                              </AccordionItem>
                              <AccordionItem>
                                 <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Benefits In Texas
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                  <p>
                                      In ad velit in ex nostrud dolore cupidatat consectetur
                                      ea in ut nostrud velit in irure cillum tempor laboris
                                      sed adipisicing eu esse duis nulla non.
                                  </p>
                              </AccordionItemPanel>
                              </AccordionItem>
                           </Accordion>
                     </div>  




         </div>
       </>
    )
};
export default MemberAdvantages;
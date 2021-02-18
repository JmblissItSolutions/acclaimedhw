import React from "react";
import Slider from "./component/Homeslider";
import bluephone from "./assets/images/blue-phone.svg";
import bluepiggy from "./assets/images/blue-piggy.svg";
import bluecall from "./assets/images/blue-call.svg";
import bluemarker from "./assets/images/blue-marker.svg";
import leackage from "./assets/images/leackage.jpeg";
import playicon from "./assets/images/play-icon.png";
import Iframe from 'react-iframe';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import homeperfect from "./assets/images/home-perfect-bg.png";
import comparedoor from "./assets/images/compare-door-bg.png";
import arizona from "./assets/images/compare-arizona.jpg";
import Utah from "./assets/images/compare-utah.jpg";
import Nevada from "./assets/images/compare-nevada.jpg";
import Texas from "./assets/images/compare-texas.jpg";
import Idaho from "./assets/images/compare_idaho.jpg";

const Home = () =>{
    return (
        <>
        <div className="home_page">
            <div className="banner">
               <Slider/>
               <div className="inner-bnr container">
					<div className="info-box">
						<p>We offer competitive prices for everyone who wants to make a home more secure.</p>
						<div className="btn-cont">
							<a href="/order-now/arizona" className="btn home">Current Homeowner<br/>See Options</a>
							<a href="/real-estate-orders/" className="btn">Title Company &amp;<br/>Real Estate Transactions</a>
						</div>
					</div>
				</div>
            </div>
            <div className="container">
                <div className="home">
                    <h1>Find the Perfect Home Warranty Plan for You</h1>
                    <h3>Acclaimed Home Warranty Helps You Protect Your Home</h3>
                    <p>Purchasing a new home is a big investment, which means you should do everything you can to protect it. Though homeowner’s insurance protects your home from natural disasters and other unforeseen circumstances, it doesn’t fully protect your home and the appliances inside. The best way to protect your home and ensure you aren’t left with expensive bills when things break after your purchase is to invest in a home warranty plan. The team at Acclaimed Home Warranty can help you obtain the protection you need with our home warranty options in Arizona, Utah, Nevada, Texas, and Idaho. We encourage you to reach out to us if you have any questions or would like to learn more about our plans and what they cover. </p>
                </div>
            </div>  
            <div className="home_wrranty">
                <div className="container">
                    <h1>Why Choose Us</h1>
                    <p>When choosing a home warranty company, you want to be sure you’ll have options to meet your needs and a team you can trust. Acclaimed Home Warranty will ensure all your most important appliances are protected and will be repaired by an experienced team of technicians from one of our qualifiedpartners. You’ll receive numerous member advantages with a warranty plan from us. We’re the team to choose for your home warranty protections for the following reasons:</p>  
                    <div className="inner_slider">
                            <div className="reason">
                                <i className="achi blue-phone"> 
                                <img src={bluephone} alt="Blue phone" /></i>
                                <h4>Only Choose What You Need</h4>
                                <p>We offer a range of home warranty plans to meet the unique needs of every homeowner. This way, you’ll only have to choose the protection you need, eliminating the need to pay for unnecessary coverage. Our team is here to help you protect you from unforeseen repairs while also saving you money on a warranty plan.</p>
                            </div>
                            <div className="reason">
                                <i className="achi blue-phone">
                                <img src={bluepiggy} alt="blue piggy"/>
                                </i>
                                <h4>Experienced Team</h4>
                                <p>We have an experienced customer service team as well as a network of qualified partners to ensure your home repairs are completed in a timely manner and performed by a professional.</p>
                            </div>
                            <div className="reason">
                                <i className="achi blue-phone">
                                <img src={bluecall} alt="blue call" />
                                </i>
                                <h4>Convenience</h4>
                                <p>Our technicians have a wide availability and flexible schedule to ensure we can complete your repairs at a time that works best for you. We’ll work with you to find a convenient repair time.</p>
                            </div>
                            <div className="reason">
                                <i className="achi blue-phone">
                                <img src={bluemarker} alt="blue marker"/>
                                </i>
                                <h4>A Company that Gives Back</h4>
                                <p>At Acclaimed Home Warranty, we give back to the local community. A portion of all our proceeds is donated to a local cause.</p>
                            </div>
                     </div>
               </div> 
            </div>
          <div className="home_advantage">
                <h3>Advantages of Choosing Our Warranty Plans</h3>
                <p>At Acclaimed Home Warranty, we offer numerous home warranty options, including options forreal estateproperties about to hit the market, as well as for new homeowners. Our warranty plans provide many advantages, including:</p>
                <div className="container">
                        <div className="inner_reason">
                            <div className="advantage_reason">
                                <i className="achis blue-phone">
                                <img src={bluephone} alt="Blue phone" /></i>
                                <h4>Faster Fixes</h4>
                                <p>We have experienced contractors available to complete repairs 24 hours a day 365 days a year.</p>
                            </div>
                            <div className="advantage_reason">
                                <i className="achis blue-phone">
                                <img src={bluepiggy} alt="Blue phone" /></i>
                                <h4>Numerous Plan Options</h4>
                                <p>You’ll have the option to choose from numerous plans that will cater to your best interests and fit within your budget.</p>
                            </div>       
                        </div>
                        <div className="inner_reason">
                            <div className="advantage_reason">
                                <i className="achis blue-phone">
                                <img src={bluecall} alt="Blue phone" /></i>
                                <h4>Responsive Customer Service</h4>
                                <p>Our customer service team is always ready to take your call and connect you with a qualified contractor.</p>
                            </div>
                            <div className="advantage_reason">
                                <i className="achis blue-phone">
                                <img src={bluemarker} alt="Blue phone" /></i>
                                <h4>Locally Owned</h4>
                                <p>Our company is locally owned and managed, which means we know the area and the unique challenges homeowners face.</p>
                            </div>       
                        </div>
                  </div>   
                  <section className="video-sec claimPage" style={{ backgroundImage: `url(${leackage})` }}>
                  <h1><small>Why Choose</small> Acclaimed Home Warranty?</h1>
                        <div className="img-pop">
                            <Popup trigger={<button className="play-btn"><img src={playicon } alt="playicon"/> </button>} modal nested>
                                {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                    &times;
                                    </button>
                                    <div className="content">
                                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/1mzkbJSIMHc" frameborder="0"></iframe>
                                    </div>
                                </div>
                                )}
                          </Popup>
                        </div>
                 </section> 
                 <section id="home-perfect-plan"  style={{ backgroundImage: `url(${homeperfect})` }}>
				   <div class="plans"  style={{ backgroundImage: `url(${comparedoor})` }}> 
					  <div class="inner">
						   <div class="col-3" style={{ backgroundImage: `url(${arizona})` }}>
							  <div class="perfect-cta">
                                <span class="perfect-cta__compare cormor">Compare</span>
                                <span class="perfect-cta__state">Arizona</span>
                                <span class="perfect-cta__plans">Plans</span>
							  </div>
							  <div class="btn-cont">
								<a href="/homeowner-plans/arizona" class="btn">compare homeowner&nbsp;plans</a>
								<a href="/real-estate-orders/" class="btn">compare real estate&nbsp;plans&nbsp;</a>
							  </div>
						 </div>
						<div class="col-2" style={{ backgroundImage: `url(${Utah})` }}>
							<div class="perfect-cta">
                                <span class="perfect-cta__compare cormor">Compare</span>
                                <span class="perfect-cta__state">Utah</span>
                                <span class="perfect-cta__plans">Plans</span>
							</div>
							<div class="btn-cont">
							   <a href="/homeowner-plans/utah" class="btn">compare homeowner&nbsp;plans</a>
							   <a href="/real-estate-orders/" class="btn">compare real&nbsp;estate&nbsp;plans</a>
							</div>
						</div>
						<div class="col-3" style={{ backgroundImage: `url(${Nevada})` }}>
							<div class="perfect-cta">
								<span class="perfect-cta__compare cormor">Compare</span>
								<span class="perfect-cta__state">Nevada</span>
								<span class="perfect-cta__plans">Plans</span>
							</div>
							<div class="btn-cont">
								<a href="/homeowner-plans/nevada" class="btn">compare homeowner&nbsp;plans</a>
								<a href="/real-estate-orders/" class="btn">compare real estate&nbsp;plans&nbsp;</a>
							</div>
						</div>
						<div class="col-4" style={{ backgroundImage: `url(${Texas})` }}>
							<div class="perfect-cta">
								<span class="perfect-cta__compare cormor">Compare</span>
								<span class="perfect-cta__state">Texas</span>
								<span class="perfect-cta__plans">Plans</span>
							</div>
							<div class="btn-cont">
								<a href="/homeowner-plans/texas" class="btn">compare homeowner&nbsp;plans</a>
								<a href="/real-estate-orders/" class="btn">compare real&nbsp;estate&nbsp;plans</a>
							</div>
						</div>
						<div class="col-2 idaho_img" style={{ backgroundImage: `url(${Idaho})` }}>
							<div class="perfect-cta">
								<span class="perfect-cta__compare cormor">Compare</span>
								<span class="perfect-cta__state">Idaho</span>
								<span class="perfect-cta__plans">Plans</span>
							</div>
							<div class="btn-cont">
								<a href="/homeowner-plans/idaho" class="btn">compare homeowner&nbsp;plans</a>
								<a href="/real-estate-orders/" class="btn">compare real&nbsp;estate&nbsp;plans</a>
							</div>
						</div>
					</div>
			  </div>
			</section> 
            <div className="container">
                <div className="contact_con">
                    <h3>Contact Acclaimed Home Warranty</h3>
                    <p>If you’re looking for the best home warranty company, you’ve come to the right place. Acclaimed Home Warranty can provide the coverage you need at an affordable price. Please contact us today to learn more about our plan options!</p>
                </div>    
            </div>
          </div>
        </div>
        </>
    )
};
export default Home;

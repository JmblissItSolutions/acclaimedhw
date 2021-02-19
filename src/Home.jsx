import React from "react";
import Slider from "./component/Homeslider";
import {ChooseWhat,Experienced,Convenience,CompanyBack,Slideshow} from "./component/WhyChooseUs";
import {Fasterfixes,Numerousplan,ResponsiveCustomer,LocallyOwned,AdvantageSlideshow} from "./component/AdvantagesWarranty";
import bluephone from "./assets/images/blue-phone.jpg";
import bluepiggy from "./assets/images/blue-piggy.jpg";
import bluecall from "./assets/images/blue-call.jpg";
import bluemarker from "./assets/images/blue-marker.jpg";
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
                               <ChooseWhat/>
                            </div>
                            <div className="reason">
                             <Experienced/> 
                            </div>
                            <div className="reason">
                              <Convenience/>
                            </div>
                            <div className="reason">
                              <CompanyBack/>
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
                              <Fasterfixes/>
                            </div>
                            <div className="advantage_reason">
                               <Numerousplan/>
                            </div>       
                        </div>
                        <div className="inner_reason">
                            <div className="advantage_reason">
                              <ResponsiveCustomer/>
                            </div>
                            <div className="advantage_reason">
                              <LocallyOwned/>
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
				   <div className="plans"  style={{ backgroundImage: `url(${comparedoor})` }}> 
					  <div className="inner">
						   <div className="col-3" style={{ backgroundImage: `url(${arizona})` }}>
							  <div className="perfect-cta">
                                <span className="perfect-cta__compare cormor">Compare</span>
                                <span className="perfect-cta__state">Arizona</span>
                                <span className="perfect-cta__plans">Plans</span>
							  </div>
							  <div className="btn-cont">
								<a href="/homeowner-plans/arizona" className="btn">compare homeowner&nbsp;plans</a>
								<a href="/real-estate-orders/" className="btn">compare real estate&nbsp;plans&nbsp;</a>
							  </div>
						 </div>
						<div className="col-2" style={{ backgroundImage: `url(${Utah})` }}>
							<div className="perfect-cta">
                                <span className="perfect-cta__compare cormor">Compare</span>
                                <span className="perfect-cta__state">Utah</span>
                                <span className="perfect-cta__plans">Plans</span>
							</div>
							<div className="btn-cont">
							   <a href="/homeowner-plans/utah" className="btn">compare homeowner&nbsp;plans</a>
							   <a href="/real-estate-orders/" className="btn">compare real&nbsp;estate&nbsp;plans</a>
							</div>
						</div>
						<div className="col-3" style={{ backgroundImage: `url(${Nevada})` }}>
							<div className="perfect-cta">
								<span className="perfect-cta__compare cormor">Compare</span>
								<span className="perfect-cta__state">Nevada</span>
								<span className="perfect-cta__plans">Plans</span>
							</div>
							<div className="btn-cont">
								<a href="/homeowner-plans/nevada" className="btn">compare homeowner&nbsp;plans</a>
								<a href="/real-estate-orders/" className="btn">compare real estate&nbsp;plans&nbsp;</a>
							</div>
						</div>
						<div className="col-4" style={{ backgroundImage: `url(${Texas})` }}>
							<div className="perfect-cta">
								<span className="perfect-cta__compare cormor">Compare</span>
								<span className="perfect-cta__state">Texas</span>
								<span className="perfect-cta__plans">Plans</span>
							</div>
							<div className="btn-cont">
								<a href="/homeowner-plans/texas" className="btn">compare homeowner&nbsp;plans</a>
								<a href="/real-estate-orders/" className="btn">compare real&nbsp;estate&nbsp;plans</a>
							</div>
						</div>
						<div className="col-2 idaho_img" style={{ backgroundImage: `url(${Idaho})` }}>
							<div className="perfect-cta">
								<span className="perfect-cta__compare cormor">Compare</span>
								<span className="perfect-cta__state">Idaho</span>
								<span className="perfect-cta__plans">Plans</span>
							</div>
							<div className="btn-cont">
								<a href="/homeowner-plans/idaho" className="btn">compare homeowner&nbsp;plans</a>
								<a href="/real-estate-orders/" className="btn">compare real&nbsp;estate&nbsp;plans</a>
							</div>
						</div>
					</div>
			  </div>
			</section> 
            <div className="slidershow">
                <Slideshow/>
            </div>
            <div className="advantageslidershow">
                <AdvantageSlideshow/>
            </div>
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

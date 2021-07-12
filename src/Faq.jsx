import React from "react";
import MakeAClaim from"./assets/images/MakeAClaim.png";
import {Helmet} from "react-helmet";

const Faq = () =>{
    return(
       <>
          <Helmet>         
            <title>What Is a Home Warranty? Pros, Cons, Costs, FAQ's to put your mind at ease</title>
            <meta name="description" content="What's covered under a home warranty, and how can you, as a homeowner, get the maximum benefit when purchased your customized plan." />
          </Helmet>
       <div className="home_page">
          <div className="top_img">
            <img src={MakeAClaim } alt="MakeClaim"/>
          </div>
            <div className="container">
                    <div className="first_sec">
                        <h1>You Can Count Acclaimed Home Warranty</h1>
                        <h2>Acclaimed Home Warranty Answers Your Questions</h2>
                        <p>As a homeowner, you want to do everything you can to protect your home. An excellent way to do so is with the purchase of a home warranty plan for your home in Arizona, Utah, Nevada, Texas, and Idaho. Acclaimed Home Warranty offers a range ofwarranty options for current homeowners, new home purchasers, home sellers, and real estate agents. We’re here to help you find the right coverage for your needs. We fully understand that you may have questions about the coverage we offer and what’s included in the plans. To help you get the answers you need, we’ve compiled a list of our most frequently asked questions and their answers. Please feel free to contact us if you have any additional questions.</p>
                    </div>
                  <div className="row">
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>What Is a Home Warranty?</h3>
                                    <p>A home warranty is a service contract that covers breakdowns of important home systems and appliances. This coverage essentially pays for the repairs and replacements of the covered items when they break down due to normal wear and tear. The purchaser of the plan pays an annual fee for the warranty coverage and signs the service contract. Then, when you encounter a system breakdown, the warranty company pays for the repairs or replacement, provided the malfunctioning system is covered under your contract. Many warranty companies allow you to choose which appliances and systems are covered in your plan before agreeing to the contract.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>What Does a Home Warranty Cover?</h3>
                                    <p>Your home warranty plan can cover a range of home appliances and systems. The best part is, with our coverage, you’ll have the option to choose what’s covered under you plan. This allows you to only pay for the coverage you need. Regardless of which plan you choose, a home warranty helps to reduce the financial risk and stress that comes with fixing systems and appliances that break down unexpectedly. Our coverage options also include many other member advantages that you’ll be permitted to utilize.Though coverage will vary from plan to plan, some of the most common items covered under home warranties includ</p>
                                    <li>Heating and air conditioning systems</li>
                                    <li>Refrigerators</li>
                                    <li>Washers and dryers</li>
                                    <li>Garage door systems</li>
                                    <li>Ovens or ranges</li>
                                    <li>Plumbing systems</li>
                                    <li>Dishwashers</li> 
                                </div>
                            </div> 
                        </div>
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>How Much Does a Home Warranty Cost?</h3>
                                    <p>The cost of a home warranty plan will vary depending on which option you choose. The more items your plan covers, the higher the cost will be. We offer three plan options for single-family homeowners, as well as additional coverage options for multi-family properties. Our team can tell you more about the specifics of each option and provide you with exact prices for each plan. We encourage you to reach out to us to discuss your needs.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>What’s the Difference between a Home Warranty and Homeowner’s Insurance?</h3>
                                    <p>If you’re thinking that a home warranty sounds pretty similar to homeowner’s insurance, you aren’t alone. These two types of plans do work in a similar way to protect your home and the items within it, however there is a difference. Your home insurance policy covers unexpected damage to the structure and contents of your home due to unforeseen events like fires, storms, or natural disasters, and may also cover theft of your personal property. Unfortunately, homeowner’s insurance does not cover everyday breakdowns of your systems or appliances, and that’s where home warranty comes in handy. A home warranty plan will cover most breakdowns of primary mechanical systems and appliances at your home, making it an excellent counterpart to home insurance.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>What’s NOT Covered by a Home Warranty?</h3>
                                    <p>As previously mentioned, a home warranty covers the cost of repairs or replacements for items that have broken down due to normal wear and tear during the contract period. This means that any appliance or home system that breaks down because of improper use or inadequate care will not be covered by the warranty. The same goes for items that were malfunctioning prior to the effective state date of the contract. In addition, any non-mechanical parts of the system or appliance that don’t contribute to its primary function will not be covered by the plan.</p>
                                </div>
                            </div> 
                        </div>
                        <div className="col-md-6">
                            <div className="home_wranty">
                                <div className="inner_homewranty">
                                    <h3>How Long Does My Contract Last?</h3>
                                    <p>In most cases, a home warranty contract will last for one year. As the end of your contract approaches, you’ll have the opportunity to sign a new contract that will last for an additional year. If you choose not to sign a new agreement, your coverage will lapse on the specified date, which will terminate all member advantages and end the protection coverage on your home.</p>
                                </div>
                            </div> 
                        </div>
                  </div> 
             </div>
              <div className="contact_us">
                <h3>Contact Us Today with Additional Questions</h3>
                <p>If you have additional questions about our home warranty options for buyers, sellers, or real estate agents, please reach out to Acclaimed Home Warranty today. We can provide you with all the information you need and tell you about the specifics of each plan we offer. You’ll have the freedom to choose the type of coverage that works best for you, so you don’t have to pay extra for coverage you don’t need. Give us a call today to get the process started!</p>
                <button>Contact Us</button>
              </div>    
        </div>
       </>
    )
};
export default Faq;
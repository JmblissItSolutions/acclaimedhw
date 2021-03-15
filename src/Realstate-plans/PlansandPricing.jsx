import React from 'react'
import { Helmet } from "react-helmet";
import { TiChevronLeft } from 'react-icons/ti';
import latticebackground from "../assets/images/lattice-background.png"
const PlansandPricing = () => {
    return (
        <>
            <Helmet>
                <title>Arizona Resources - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
                <meta name="description" content="Arizona Resources - Acclaimed Home Warranty" />
            </Helmet>
            <div className="home_page">
                <div className="container">
                    <div className="plan-ttl">
                        <h2>PLANS & PRICING</h2>
                        <button type="button" className="btn"><TiChevronLeft />Go back</button>
                    </div>
                    <section className="planPricingHolder">
                        <div className="toplist">
                            <ul className="topList">
                                <li> Scan each of our <strong>Home Warranty</strong> plans side-by-side to compare features.</li>
                                <li> Selefct the Plan that’s best for your needs by clicking the radio button in the column of your choice.</li>
                                <li> Review <strong className="strong underline">Coverage Upgrades</strong> below. Customize your chosen Plan and get a live total by changing option quantities.</li>
                                <li> Select the Plan that’s best for your needs by clicking the radio button in the column of your choice.</li>
                                <li> Click the <strong className="strong green">Continue</strong> button at the bottom of the page. After submitting the form you may download the invoice or receive an invoice via email.</li>
                            </ul>
                        </div>
                    </section>
                    <div className='pricingboxholder'>
                        <div className="standard-features pricing">
                            <h3>Standard Features for all plans <br />
                                <span>*(service fee may be required)</span></h3>
                            <div className="standard-flexy">
                                <div className="feature_group">
                                    <p className="feature_header">HVAC</p>
                                    <p>Air Conditioner/Cooler</p>
                                    <p>Now No contract limits or unit limits </p>
                                    <p>Heating System / Furnace</p>
                                    <p>Heat pump</p>
                                    <p>Thermostat</p>
                                    <p>Duct from Heating or Cooling Unit</p>
                                </div>
                                <div className="feature_group">
                                    <p className="feature_header">Plumbing </p>
                                    <p>Toilets (Parts)</p>
                                    <p>Drain line stoppages</p>
                                    <p>Water Heater</p>
                                    <p>Shower/Diverter Valves</p>
                                    <p>Built-in Bath Whirlpool Motor & Pump Assembly</p>
                                    <p>Plumbing Leaks (Water, Drain, Gas, or Vent)</p>
                                </div>
                                <div className="feature_group">
                                    <p className="feature_header">Electrical </p>
                                    <p>Electrical System</p>
                                    <p>Panels and Subpanels</p>
                                    <p>Junction Boxes</p>
                                    <p>Exhaust Fans</p>
                                    <p>Circuit Breakers</p>
                                    <p>Ceiling Fans</p>
                                    <p>Garage Door Systems</p>
                                </div>
                                <div className="feature_group">
                                    <p className="feature_header">Appliances</p>
                                    <p>Oven</p>
                                    <p>Range</p>
                                    <p>Cooktop</p>
                                    <p>Dishwasher</p>
                                    <p>Built in microwave</p>
                                    <p>Garbage disposal</p>
                                    <p>Trash compactor</p>
                                </div>
                                <div className="feature_group">
                                    <p className="feature_header">Member benefits</p>
                                    <p>Pre-Season Tune-Ups for Heating and A/C Units*</p>
                                    <p>Re-Key Services</p>
                                    <p>Filter delivery</p>
                                    <p>Garage Reprogramming</p>
                                    <p>Discounted Home Security</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="light-back feature_plan_option">
                        <div className="table-cont">
                            <h2>INDIVIDUAL PLANS INCLUDE THESE ADDITIONAL OPTIONS</h2>
                            <div className="right-table">
                                <div className="standard_card header">
                                    <div className="tagdown standard">
                                        <span className="tagtxt-top">You've selected</span>
                                        <h4>Standard</h4>
                                        <span  className="tagtxt-mid">Home Warranty</span><br />
                                        <span className="tagtxt-bot">$300</span>
                                    </div>
                                </div>
                                <div className="premium header">
                                    <div className="tagdown standard">
                                        <span className="tagtxt-top">Click to add</span>
                                        <h4>Premium+</h4>
                                        <span  className="tagtxt-mid">Home Warranty</span><br/>
                                        <span className="fridge-txt">+ Fridge</span><br/>
                                        <span className="tagtxt-bot">$400</span>
                                    </div>
                                </div>
                                <div className="premiumone header">
                                    <div className="tagdown standard">
                                    <span className="tagtxt-top">Click to add</span>
                                        <h4>Premium+1</h4> 
                                        <span  className="tagtxt-mid">Home Warranty</span><br />
                                        <span className="fridge-txt">+Fridge,No Fault</span><br/>
                                        <span className="tagtxt-bot">$450</span>
                                    </div>
                                </div>
                                <div className="Ultimate header">
                                    <div className="tagdown standard">
                                        <span className="tagtxt-top">You've selected</span>
                                        <h4>Ultimate</h4>
                                        <span  className="tagtxt-mid">Home Warranty</span><br />
                                        <span className="tagtxt-bot">$500</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="textured">
                          <img src={latticebackground} alt="latticebackground"/>
                        </div>
                        {/* <hr className="textured"></hr> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PlansandPricing;
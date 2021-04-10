import React from 'react'
import { Helmet } from "react-helmet";
import { TiChevronLeft } from 'react-icons/ti';
import latticebackground from "../assets/images/lattice-background.png"
import { CheckOutlined } from '@ant-design/icons';

const TexasSingleFam = () => {
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
                                <li> Scan the listing coverage choice below.</li>
                                <li>Note: No payment is due until closing. Please let us know when your property obtains a buyer & what plan will be chosen.</li>
                                <li>Click the <strong>Continue</strong> button at the bottom of the page. After submitting the form you may download the invoice or receive an invoice via email.</li>
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
                                        <span className="tagtxt-top">You've selected Standard</span>
                                        <h4>Standard</h4>
                                        <span className="tagtxt-mid">Home Warranty</span><br />
                                        <span className="tagtxt-bot">$395</span>
                                    </div>
                                </div>
                                <div className="premium header">
                                    <div className="tagdown standard">
                                        <span className="tagtxt-top">Click to add</span>
                                        <h4>Premium</h4>
                                        <span className="tagtxt-mid">Home Warranty</span><br />
                                        <span className="fridge-txt">+ Fridge</span><br />
                                        <span className="tagtxt-bot">$495</span>
                                    </div>
                                </div>
                                <div className="Ultimate header">
                                    <div className="tagdown standard">
                                        <span className="tagtxt-top">Click to add</span>
                                        <h4>Ultimate</h4>
                                        <span className="tagtxt-mid">Home Warranty</span><br />
                                        <span className="frdg-txt">+ Fridge,Washer/Drayer,Kit Appliances</span><br />
                                        <span className="tagtxt-bot">$575</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="textured">
                            <img src={latticebackground} alt="latticebackground" />
                        </div>
                    </div>
                    <div className="row-heading">
                        <strong>HVAC System</strong>
                        <img src={latticebackground} alt="latticebackground" />
                    </div>
                    <section className="unique-feature pricing_plan">
                        <div className="inner">
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Registers</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Grills</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>SEER/R-410A Mods.</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>

                            <div className="row-heading">
                                <strong>Plumbing System</strong>
                                <img src={latticebackground} alt="latticebackground" />
                            </div>

                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Angle Stops / Gate Valves</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Toilet Replacement</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Interior Hose Bibs</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Faucets, Shower Heads & Arms</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Shower/Diverter Valves</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>

                            <div className="row-heading">
                                <strong>Electrical System</strong>
                                <img src={latticebackground} alt="latticebackground" />
                            </div>

                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Exhaust Fan - Attic</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Exhaust Fan - Whole House</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>

                            <div className="row-heading">
                                <strong>Appliances</strong>
                                <img src={latticebackground} alt="latticebackground" />
                            </div>

                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Kit. Fridge w/ ice maker</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Washer/Dryer</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div> 
                                </div>
                            </div>

                            <div className="row-heading">
                                <strong>No Fault Coverage</strong>
                                <img src={latticebackground} alt="latticebackground" />
                            </div>

                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Permits</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Code Violations</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Haul Away</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Mismatched systems</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Improper Installs</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Crane</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>

                            <div className="row-heading">
                                <strong>Premium Upgrade Package</strong>
                                <img src={latticebackground} alt="latticebackground" />
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Angle Stops / Gate Valves</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Interior Hose Bibs</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Faucets, Shower Heads & Arms</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Shower/Diverter Valves</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>registers/grills/disposable filters</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Freon recovery/recharge, window units</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>TC Key assemblies/locks/remv. buckets</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>DW-rollers/baskets/racks/dials/hinges/dr. seals</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Fridge-icemaker,freon recov/recapture</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Oven-racks/clocks/rotis./knob/dial/handle,int. lining</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                            <div className="table-cont-2">
                                <div className="table-left">
                                    <div>Grge Dr.-Springs/hinges, remote transmitters, keypad</div>
                                </div>
                                <div className="table-right">
                                    <div className="feature"></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                    <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="feature_img">
                            <img src={latticebackground} alt="latticebackground" />
                        </div>
                    </section>
                    <section className="coverage_upgrades">
                        <div className="container">
                            <div className="coverage-ttl">
                                <strong>COVERAGE UPGRADES</strong><br />
                                <span>SELECT ADDITIONAL ITEMS TO CUSTOMIZE YOUR PLAN</span>
                            </div>
                            <div className="upgrade-table">
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="checkbox" />
                                        <div className="upgrade-table__price">$175</div>
                                        <div className="upgrade-table__title">Pool</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" min="0" />
                                        <div className="upgrade-table__price">$195</div>
                                        <div className="upgrade-table__title">Pool - Salt Water</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="checkbox" />
                                        <div className="upgrade-table__price">$85</div>
                                        <div className="upgrade-table__title">Roof Leak</div>
                                    </div>
                                </div>
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$85</div>
                                        <div className="upgrade-table__title">Washer & Dryer</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" min="0" />
                                        <div className="upgrade-table__price">$55</div>
                                        <div className="upgrade-table__title">Refrigerator</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$55</div>
                                        <div className="upgrade-table__title">Additional Refrigerator</div>
                                    </div>
                                </div>
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$95</div>
                                        <div className="upgrade-table__title">Washer/Dryer, Kit. Fridge with ice maker (COMBO)</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" min="0" />
                                        <div className="upgrade-table__price">$85</div>
                                        <div className="upgrade-table__title">Appliance Limits Increase (adds on $1000 coverage on built in kitchen appliances)</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="checkbox" />
                                        <div className="upgrade-table__price">$45</div>
                                        <div className="upgrade-table__title">Stand Alone Fridge or Freezer</div>
                                    </div>
                                </div>
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$45</div>
                                        <div className="upgrade-table__title">Additional Kit. Appliance (ea.)</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="checkbox" min="0" />
                                        <div className="upgrade-table__price">$85</div>
                                        <div className="upgrade-table__title">Prof. Series Appliances - Kit.</div>
                                    </div>
                                    <div className="upgrade-table__input"></div>
                                </div>
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$65</div>
                                        <div className="upgrade-table__title">Water Softener</div>
                                    </div>
                                    <div className="upgrade-table__input"></div>
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$75</div>
                                        <div className="upgrade-table__title">Well Pump</div>
                                    </div>
                                </div>
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$75</div>
                                        <div className="upgrade-table__title">Booster Pump - House</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" min="0" />
                                        <div className="upgrade-table__price">$85</div>
                                        <div className="upgrade-table__title">External Pipe leak</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$65</div>
                                        <div className="upgrade-table__title">Septic System, Pumping & Sewage Ejector Pump</div>
                                    </div>
                                </div>
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$150</div>
                                        <div className="upgrade-table__title">Casita </div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" min="0" />
                                        <div className="upgrade-table__price">$55</div>
                                        <div className="upgrade-table__title">Discounted Service Call</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="checkbox" />
                                        <div className="upgrade-table__price">$55</div>
                                        <div className="upgrade-table__title">Extra Water Heater</div>
                                    </div>
                                </div>
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="checkbox" />
                                        <div className="upgrade-table__price">$75</div>
                                        <div className="upgrade-table__title">Premium Coverage Upgrade <br/> <a>(adds over 40 items to standard coverage)</a></div>
                                    </div>
                                </div>
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="checkbox" />
                                        <div className="upgrade-table__price">$395</div>
                                        <div className="upgrade-table__title">2nd Year Coverage</div>
                                    </div>
                                </div>
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="checkbox" />
                                        <div className="upgrade-table__price">$395</div>
                                        <div className="upgrade-table__title">3rd Year Coverage</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="running-total">
                        <div className="inner">
                            <div className="running-total__title">
                                <h4>Standard</h4>
                                <span>Home Warranty</span>
                                <span><strong>$395</strong></span>
                            </div>
                            <div className="running-total__additions">
                                <span>2x Air Conditioner/Cooler</span>
                                <span>2x Heating/Furnace</span>
                            </div>
                            <div className="running-total__final">
                                <h4>Total Amount:</h4>
                                <span><strong>$395</strong></span>
                            </div>
                        </div>
                    </div>
                    <div className="cont-btn">
                        <button type="button" className="btn">CONTINUE</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TexasSingleFam;
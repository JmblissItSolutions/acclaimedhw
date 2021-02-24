import React from "react";
import {Helmet} from "react-helmet";
const SingleFamily = () =>{
    return(
        <>
          <Helmet>         
            <title>See Benefits and Resource Guides for Home Warranty Services in Arizona</title>
            <meta name="description" content="Acclaimed Home Warranty has shared some of the useful resources for those looking out for home warranty plans in Arizona. Contact us today for more information."/>
          </Helmet>
          <div className="wrapper">
        {/* fix on top header while scroll */}
        <section className="light-back plan-options">
          <div className="container">
            <div className="table-cont">
              <h2 className="upper table-left">plan options<br />
                <span>Single Family</span></h2>
              <div className="option-cont table-right">
                <div className="option">
                  <div className="star-cont"><i className="achi white-star"></i></div>
                  <div className="body">
                    <h6 className="upper">Standard</h6>
                    <h4 className="lato">$45.00<span style={{fontSize:"0.4em"}}>/MO</span></h4>
                    <h5 className="lato">$400/YR</h5>
                    <a className="btn">Buy Now</a>
                  </div>
                </div>
                {/* end of option  */}
                <div className="option">
                  <div className="star-cont"><i className="achi white-star"></i><i className="achi white-star"></i></div>
                  <div className="body">
                    <h6 className="upper">Premium</h6>
                    <h4 className="lato">$50.00<span style={{fontSize:"0.4em"}}>/MO</span></h4>
                    <h5 className="lato">$475/YR</h5>
                    <a className="btn">Buy Now</a>
                  </div>
                </div>
                {/* end of option */}
                <div className="option">
                  <div className="star-cont"><i className="achi white-star"></i><i className="achi white-star"></i><i className="achi white-star"></i><i className="achi white-star"></i><i className="achi white-star"></i></div>
                  <div className="body">
                    <h6 className="upper">Ultimate</h6>
                    <h4 className="lato">$60.00<span style={{fontSize:"0.4em"}}>/MO</span></h4>
                    <h5 className="lato">$600/YR</h5>
                    <a className="btn">Buy Now</a>
                  </div>
                </div>
                {/* end of option */}
              </div>
            </div>
          </div>
          <hr className="textured" />
        </section>
        {/* end of scroll header section */}
        {/* standard featuers on here  */}
        <section className="standard-features blueBack">
          <div className="container">
            <h3 className="upper text-center lato">
              Standard Features for all plans
         <div style={{fontSize:"10px"}}>*(service fee may be required)</div>
            </h3>
            <div className="standard-flexy">
              <div className="feature_group">
                <p className="feature_header">Member benefits &amp; discounts</p>
                <p>Re-Key*</p>
                <p>Pre Season tune up’s for heating and cooling*</p>
                <p>Filter delivery*</p>
                <p>Discounted home security</p>
                <p>Garage door reprogramming</p>
              </div>
              <div className="feature_group">
                <p className="feature_header">HVAC</p>
                <p>A/C </p>
                <p>Heating </p>
                <p>Duct from heating and cooling</p>
                <p>Heat pump</p>
                <p>Thermostat</p>
              </div>
              <div className="feature_group">
                <p className="feature_header">Plumbing </p>
                <p>Inside plumbing systems</p>
                <p>Drain line stoppages</p>
                <p>Toilet (parts)</p>
                <p>Water heater (1) (up to 50 Gal)</p>
              </div>
              <div className="feature_group">
                <p className="feature_header">Electrical </p>
                <p>Interior electrical systems</p>
                <p>Exhaust fans</p>
                <p>Circuit breakers</p>
                <p>Ceiling fans</p>
                <p>Panels and subpanels</p>
                <p>Garage door systems</p>
              </div>
              <div className="feature_group">
                <p className="feature_header">Appliances (Built In)</p>
                <p>Oven</p>
                <p>Range</p>
                <p>Cooktop</p>
                <p>Dishwasher</p>
                <p>Built in microwave</p>
                <p>Garbage disposal</p>
                <p>Trash compactor</p>
                <p>1 Refrigerator per unit *(not available to single family properties)</p>
              </div>
            </div>
          </div>
        </section>
        {/* end of standard features  */}
        {/* uniqe features */}
        <section className="unique-features">
          <h3 className="upper text-center lato light-back">Unique Features</h3>
          <div className="container">
            <div className="table-cont">
              <div className="table-left">
                <p><span>Central Vacuum</span></p>
                <p><span>Registers</span></p>
                <p><span>Free ReKey (travel fees may apply)</span></p>
                <p><span>Grills</span></p>
                <p><span>Heat Lamps</span></p>
                <p><span>Exterior hose bibs</span></p>
                <p><span>Pressure Regulator Valve</span></p>
                <p><span>Angle Stops, and Gate Valves</span></p>
                <p><span>Toilet Replacement</span></p>
                <p><span>Interior Hose Bibs</span></p>
                <p><span>Shower Heads</span></p>
                <p><span>Shower Arms - Faucets</span></p>
                <p><span>Toilet replacement</span></p>
                <p>
                  <span>
                    <span>
                      <a data-toggle="modal" data-target="#forty_items_popup_utah">Premium Coverage Upgrade</a>
                    </span>
                  </span>
                </p>
                <p><span>Refrigerator</span></p>
                <p><span>R-22 Conversion</span></p>
                <p><span>No Fault (code upgrades &amp; mismatched systems)</span></p>
                <p>
                  <span>
                    <span>
                      <a data-toggle="modal" data-target="#no_fault_popup_utah">No Fault Coverage</a>
                    </span>
                  </span>
                </p>
                <p><span>Radiant heating/broiler</span></p>
                <p><span>Washer and Dryer</span></p>
              </div>
              <div className="table-right desktop">
                <div className="feature-col">
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                </div>
                <div className="feature-col">
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                </div>
                <div className="feature-col">
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                </div>
                <div className="feature-col">
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                </div>
                <div className="feature-col">
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                  <div className="feature included"><i className="achi white-checkmark"></i></div>
                </div>
              </div>
              <div data-num="5" className="table-right mobile">
                <p className="feature-text-mobile"><span>Central Vacuum</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Registers</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Free ReKey (travel fees may apply)</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Grills</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Heat Lamps</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Exterior hose bibs</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Pressure Regulator Valve</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Angle Stops, and Gate Valves</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Toilet Replacement</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Interior Hose Bibs</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Shower Heads</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Shower Arms - Faucets</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Toilet replacement</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile">
                  <span>
                    <span>
                      <a data-toggle="modal" data-target="#forty_items_popup_utah">Premium Coverage Upgrade</a>
                    </span>
                  </span>
                </p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Refrigerator</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>R-22 Conversion</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>No Fault (code upgrades &amp; mismatched systems)</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile">
                  <span>
                    <span>
                      <a data-toggle="modal" data-target="#no_fault_popup_utah">No Fault Coverage</a>
                    </span>
                  </span>
                </p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Radiant heating/broiler</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
                <p className="feature-text-mobile"><span>Washer and Dryer</span></p>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature"  ><i className="achi white-checkmark"></i></div>
                <div className="feature included"  ><i className="achi white-checkmark"></i></div>
              </div>
            </div>
          </div>
        </section>
      </div>
        </>
    ) 
};
export default SingleFamily;
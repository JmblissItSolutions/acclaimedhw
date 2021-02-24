import React from "react";
import {Helmet} from "react-helmet";
const Fourplex = () =>{
    return(
        <>
          <Helmet>         
            <title>See Benefits and Resource Guides for Home Warranty Services in Arizona</title>
            <meta name="description" content="Acclaimed Home Warranty has shared some of the useful resources for those looking out for home warranty plans in Arizona. Contact us today for more information."/>
          </Helmet>
          <div className="table-cont">
        <h2 className="upper table-left">plan options<br/>
          <span>Fourplex</span></h2>
        <div className="option-cont table-right">
          <div className="option">
            <div className="star-cont"><i className="achi white-star"></i></div>
            <div className="body">
              <h6 className="upper">Standard</h6>
              <h4 className="lato">$1095.00<span style={{ fontSize: "0.4em" }}>/MO</span></h4>
              <h5 className="lato">$400/YR</h5>
              <a className="btn">Buy Now</a>
            </div>
          </div>
        </div>
        </div>
        <hr className="textured"/>
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
        </>
    ) 
};
export default Fourplex;
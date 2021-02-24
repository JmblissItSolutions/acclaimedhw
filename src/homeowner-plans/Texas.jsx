import React, { useState } from "react";
import SingleFamily from "./TexasUnitSize/SingleFamily";
import Duplex from "./TexasUnitSize/Duplex";
import Triplex from "./TexasUnitSize/Triplex";
import Fourplex from "./TexasUnitSize/Fourplex";
import UtahHomeowner from  "./../assets/images/UtahHomeowner.png"
import { Helmet } from "react-helmet"; 
import { BrowserRouter as Router, useHistory} from "react-router-dom";
const Texas = () =>{
  const [arizonaState, setArizonaState] = useState("");
  let history = useHistory();
  function handleChange(e){
   history.push(e.target.value)
  }
    return(
        <>
         <Helmet>         
            <title>See Benefits and Resource Guides for Home Warranty Services in Texas</title>
            <meta name="description" content="We at Acclaimed Home Warranty have provided some of the useful resources for those looking out for home warranty plans in Texas. Get in touch with us today."/>
          </Helmet>
          <div className="home_page">
        {/* start inner banner */}
        <section className="top-image">
        <img src={UtahHomeowner} alt="UtahHomeowner"/>
        </section>
        {/* end inner banner */}
        <section className="plans-title">
          <div className="container text-center mx-900">
            <h1 className="upper">Plans for every home</h1>
            <p className="text-center sub-txt">We want you to feel confident in your home—that’s why we provide a variety of coverage options for different needs. While all of our plans cover a variety of appliances and accessories, you can choose a more extensive option to make sure every item in your home is in good hands.</p>
          </div>
        </section>
        {/* end of text titile  */}
        <section className="change-location-header">
          <div className="container d-flex just-space">
            <span className="big upper">Texas Homeowner Plans</span>
            <div>
              <div>
                <span>Unit Size</span>
                <select name="size" className=""  onChange={(e) => { const selectedd = e.target.value; setArizonaState(selectedd); }}>
                  <option value="0">Single Family</option>
                  <option value="1">Duplex</option>
                  <option value="2">Triplex</option>
                  <option value="3">Fourplex</option>
                </select>
              </div>
              <div>
                <span style={{display: "block"}}>
                  Location
            </span>
                <select name="size" className="" onChange={handleChange}>
                  <option value="/homeowner-plans/utah">Utah</option>
                  <option value="/homeowner-plans/nevada">Nevada</option>
                  <option value="/homeowner-plans/texas">Texas</option>
                  <option value="/homeowner-plans/arizona">Arizona</option>
                  <option value="/homeowner-plans/idaho">Idaho</option>
               </select>
              </div>
            </div>
          </div>
        </section>
         {/* fix on top header while scroll */}
         <section className="light-back plan-options">
            {arizonaState === "0" ? <SingleFamily /> : arizonaState === "1" ? <Duplex />
              : arizonaState === "2" ? <Triplex /> : arizonaState === "3" ? <Fourplex /> : <SingleFamily />}
          <hr className="textured" />
        </section>
      </div>
        </>
    ) 
};
export default Texas;
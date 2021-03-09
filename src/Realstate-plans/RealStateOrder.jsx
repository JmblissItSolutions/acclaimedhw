import React, { useState, useRef } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import homewarranty from "../assets/images/homewarranty.png";

const RealStateOrder = () => {
    // const [radio, setRadio] = useState("");
    // const onChange = (e) => {
    //     setRadio(e.target.value)
    // }
    const [isActive, setActive] = useState("false");
    const handleShow = () => {
        setActive(!isActive);
    };
    const [isSeller, setSeller] = useState("false");
    const handleToggle = () => {
        setSeller(!isSeller);
    }
    const [isListing, setListing] = useState("false");
    const handleClick = () => {
        setListing(!isListing);
    }

    const [show, setSate] = useState("false");
    const onChange = () => {
        setSate(!show);
    }
    return (
        <>
            <div className="home_page">
                <div className="top_img">
                    <img src={homewarranty} alt="homewarranty" />
                </div>
                <div className="realstate">
                    <h1>Real Estate Orders</h1>
                </div>
                <div className="container">
                    <div className="contentbox0">
                        <h4>I want to get a home warranty for a property in:</h4>
                        <FormControl >
                            <RadioGroup>
                                <FormControlLabel value="utah" control={<Radio />} label="UTAH" onClick={handleShow} />
                                <FormControlLabel value="idaho" control={<Radio />} label="IDAHO" onClick={handleShow} />
                                <FormControlLabel value="nevada" control={<Radio />} label="NEVADA" onClick={handleShow} />
                                <FormControlLabel value="arizona" control={<Radio />} label="ARIZONA" onClick={handleShow} />
                                <FormControlLabel value="texas" control={<Radio />} label="TEXAS" onClick={handleShow} />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className={`contentbox0 ${isActive ? "contentbox1" : ""}`}>
                        <h4>Let us know what type of coverage this is...</h4>
                        <FormControl>
                            <RadioGroup>
                                <FormControlLabel value="Buyer's Coverage" control={<Radio />} label="Buyer's Coverage" onClick={handleToggle} />
                                <FormControlLabel value="Listing/Seller's Coverage" control={<Radio />} label="Listing/Seller's Coverage" onClick={handleClick} />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className={`contentbox0 ${isSeller ? "contentbox2" : "null"}`}>
                        <h4>Please begin by answering these questions...</h4>
                        <div className="orders__flex i-am">
                            <div className="orders__flex-child">
                                <article className="ccol n1">
                                    <span>I am the
						             <select ng-model="fields.userTitle" className="ng-valid ng-dirty ng-valid-parse ng-touched">
                                            <option value="escrow-officer">Escrow Officer</option>
                                            <option value="buyer-agent">Buyer's Agent</option>
                                            <option value="listing-agent">Listing Agent</option>
                                            <option value="buyer">Buyer</option>
                                        </select>
                                    </span>
                                </article>
                            </div>
                            <div className="orders__flex-child">
                                <div className="ccol n2">
                                    <span>This home warranty order is for a:</span>
                                    <FormControl >
                                        <RadioGroup>
                                            <FormControlLabel value="Single-family" onClick={onChange} control={<Radio />} label="Single-family home less than 6k sq ft, or condominium, townhome, mobile home under 2K sq ft." />
                                            <div className={show ? "orders__conditional" : null}>
                                                <article className="home_type_single n2 ng-scope">
                                                    <label>Is the square-footage of this home <em className="adjustBaseLineHigher">less than 6,000 feet?</em></label>
                                                    <div className="part n1">
                                                        <FormControl>
                                                            <RadioGroup>
                                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </div>
                                                </article>
                                                <article className="home_type_single n2 ng-scope">
                                                    <label>Is this a new construction home?<em className="adjustBaseLineHigher">less than 6,000 feet?</em></label>
                                                    <div className="part n1">
                                                        <FormControl>
                                                            <RadioGroup>
                                                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </div>
                                                </article>
                                            </div>
                                            <FormControlLabel value="Condominium" control={<Radio />} label="Condominium, townhome less than 2k sq ft" />
                                            <FormControlLabel value="Duplex" control={<Radio />} label="Duplex" />
                                            <FormControlLabel value="Triplex" control={<Radio />} label="Triplex" />
                                            <FormControlLabel value="Fourplex" control={<Radio />} label="Fourplex" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="orders__flex-child">
                                <a className="btn">Start Over</a>
                            </div>
                        </div>
                    </div>
                    <div className={`contentbox0 ${isSeller ? "cwell" : ""}`}>
                    </div>
                    <div className={`contentbox0 ${isListing ? "cwellcrow" : ""}`}>
                        <h4>Listing/Seller's Coverage Terms...</h4>
                        <article className="ccol n1">
                            <span className="">Listing/Seller's Coverage is effective upon receipt of application. Plan continues until expiration of the initial listing period not to exceed 180 days or until listing cancellation or close of sale, whichever occurs first. AHW, in its sole discretion, may extend coverage period. Pre-existing conditions are not covered for the Seller. Optional coverages set forth in this Contract are not available for Seller’s Coverage. If a claim is made by the Seller during the listing period a service fee will be required and paid by the Seller. If the property does not close and a claim has been made during the listing period, the Seller is responsible for full payment of services rendered or full payment of the home warranty coverage plan whichever is less.</span>
                            <label><input type="checkbox" ng-model="fields.termsAccepted" value="1" className="ng-valid ng-dirty ng-valid-parse ng-touched" /> Yes. I agree to these terms.</label>
                        </article>
                        <article className="ccol n1">
                            <label style={{ textalign: "left" }}><input type="checkbox" ng-model="fields.invoiceSellerNoticeAccepted" value="1" className="ng-pristine ng-untouched ng-valid" /> I understand the invoice I will receive when this form is completed is just for my records. No monies are due until closing. I will notify Acclaimed Home Warranty when a buyer has been identified.</label>
                        </article>
                    </div>
                    <div className={`contentbox0 ${show ? "cwellorder" : ""}`} >
                        <div className="orders__flex">
                            <div style={{ marginBottom: "36px" }}>
                                <div className="form_first_page_best_plan">
                                    <div className="form_first_page_best_plan_one">
                                        <h4>Let our system select the best plan</h4>
                                        <p>Enter Your Home Warranty Budget</p>
                                    </div>
                                    <div className="form_first_page_best_plan_input">
                                        $<input type="number" min="300" max="2000" style={{ textalign: "right" }}></input>
                                        <p className="errorMessage ng-binding"></p>
                                    </div>
                                    <div className="form_first_page_best_plan_button">
                                        <p className="ng-binding">Enter an amount from $300-$2000</p>
                                        <button type="button" ng-click="changePage(2);" className="btn">GO</button>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="or">OR</h4>
                            </div>
                            <div className="form_first_page_bottom_compare">
                               <div className="form_first_page_bottom_compare_left_button" style={{paddingTop:"15px"}}>
                               <button type="button" className="btn">Click Here</button><br/>
                               <span id="comp-side"><em>to Compare Home Warranty Plans Side-By-Side and make your selection/customize</em></span>
                               </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};
export default RealStateOrder;
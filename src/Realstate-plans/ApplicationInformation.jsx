import React from 'react'
import { Helmet } from "react-helmet";
import { TiChevronLeft } from 'react-icons/ti';

const ApplicationInformation = () => {
    return (
        <>
            <Helmet>
                <title>Arizona Resources - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
                <meta name="description" content="Arizona Resources - Acclaimed Home Warranty" />
            </Helmet>
            <div className="home_page">
                <div className="container">
                    <div className="app_form">
                        <h2>Application Information</h2>
                        <button type="button" className="btn"><TiChevronLeft />GO BACK</button>
                        <form>
                            <div className="appForm__child">
                                <h4>Property's Address</h4>
                                <div className="appForm__flex">
                                    <div className="appForm__field two-thirds">
                                        <label>Street Address*</label>
                                        <input type="text" name="propertyAddress" placeholder="Street Address*"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Unit Number</label>
                                        <input type="text" placeholder="Unit #"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>City*</label>
                                        <input type="text" name="propertyCity" placeholder="City*"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>State*</label>
                                        <input type="text" name="propertyCity" placeholder="City*"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Zip Code*</label>
                                        <input type="text" name="propertyCity" placeholder="City*"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="appForm__child">
                                <h4>Buyer's Information</h4>
                                <div className="appForm__flex">
                                    <div className="appForm__field third">
                                        <label>Buyer's Name*</label>
                                        <input type="text" name="buyerName" placeholder="Buyer's Name*"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Buyer's Phone*</label>
                                        <input type="tel" name="buyerPhone" placeholder="Buyer's Phone*"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Buyer's Email</label>
                                        <input type="email" placeholder="Buyer's Email"></input>
                                    </div>
                                    <div className="appForm__field two-thirds">
                                        <label>Buyer's Agent Name*</label>
                                        <input type="text" name="application.buyer.agent.name" placeholder="Buyer's Agent Name*"></input>
                                    </div>
                                    <div className="appForm__field third has-checkbox">
                                        <input type="checkbox" name="application.buyer.agent.name" placeholder="Buyer's Agent Name*"></input>
                                        <label>No Buyer's Agent Name</label>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Buyer's Agent Phone</label>
                                        <input type="text" placeholder="Buyer's Agent Phone"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Buyer's Agent Email</label>
                                        <input type="email" placeholder="Buyer's Agent Email"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Real Estate Company</label>
                                        <input type="text" placeholder="Real Estate Company"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Assistant/Transaction Coordinator's Name</label>
                                        <input type="text" placeholder="Assistant/Transaction Coordinator's Name"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Assistant/Transaction Coordinator's Phone</label>
                                        <input type="tel" placeholder="Assistant/Transaction Coordinator's Phone"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Assistant/Transaction Coordinator's Email</label>
                                        <input type="email" placeholder="Assistant/Transaction Coordinator's Email"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="appForm__child">
                                <h4>Seller's Information</h4>
                                <div className="appForm__flex">
                                    <div className="appForm__field third">
                                        <label>Seller's Name</label>
                                        <input type="text" placeholder="Seller's Name"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Seller's Phone</label>
                                        <input type="tel" placeholder="Seller's Phone"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Seller's Email</label>
                                        <input type="email" placeholder="Seller's Email"></input>
                                    </div>
                                    <div className="appForm__field two-thirds">
                                        <label>Seller's Agent Name*</label>
                                        <input type="text" placeholder="Seller's Agent Name*"></input>
                                    </div>
                                    <div className="appForm__field third has-checkbox">
                                        <input type="checkbox"></input>
                                        <label>No Seller's Agent Name</label>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Seller's Agent Phone</label>
                                        <input type="text" placeholder="Seller's Agent Phone"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Seller's Agent Email</label>
                                        <input type="email" placeholder="Seller's Agent Email"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Real Estate Company</label>
                                        <input type="text" placeholder="Real Estate Company"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Assistant/Transaction Coordinator's Name</label>
                                        <input type="text" placeholder="Assistant/Transaction Coordinator's Name"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Assistant/Transaction Coordinator's Phone</label>
                                        <input type="tel" placeholder="Assistant/Transaction Coordinator's Phone"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Assistant/Transaction Coordinator's Email</label>
                                        <input type="email" placeholder="Assistant/Transaction Coordinator's Email"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="appForm__child">
                                <h4>Title/Escrow Information</h4>
                                <div className="appForm__flex">
                                    <div className="appForm__field">
                                        <label>Title/Escrow Company*</label>
                                        <input type="text" name="escrowCompany" placeholder="Title/Escrow Company*"></input>
                                    </div>
                                    <div className="appForm__field two-thirds">
                                        <label>Street Address</label>
                                        <input type="text" placeholder="Street Address"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Unit Number</label>
                                        <input type="text" placeholder="Unit #"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>City</label>
                                        <input type="text" placeholder="City"></input>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>State</label>
                                        <select>
                                            <option value="" disabled="">State*</option>
                                            <option value="0" label="Alabama">Alabama</option>
                                            <option value="1" label="Alaska">Alaska</option>
                                            <option value="2" label="Arizona">Arizona</option>
                                            <option value="3" label="Arkansas">Arkansas</option>
                                            <option value="4" label="California">California</option>
                                            <option value="5" label="Colorado">Colorado</option>
                                            <option value="6" label="Connecticut">Connecticut</option>
                                            <option value="7" label="Delaware">Delaware</option>
                                            <option value="8" label="District Of Columbia">District Of Columbia</option>
                                            <option value="9" label="Florida">Florida</option>
                                            <option value="10" label="Georgia">Georgia</option>
                                            <option value="11" label="Hawaii">Hawaii</option>
                                            <option value="12" label="Idaho">Idaho</option>
                                            <option value="13" label="Illinois">Illinois</option>
                                            <option value="14" label="Indiana">Indiana</option>
                                            <option value="15" label="Iowa">Iowa</option>
                                            <option value="16" label="Kansas">Kansas</option>
                                            <option value="17" label="Kentucky">Kentucky</option>
                                            <option value="18" label="Louisiana">Louisiana</option>
                                            <option value="19" label="Maine">Maine</option>
                                            <option value="20" label="Maryland">Maryland</option>
                                            <option value="21" label="Massachusetts">Massachusetts</option>
                                            <option value="22" label="Michigan">Michigan</option>
                                            <option value="23" label="Minnesota">Minnesota</option>
                                            <option value="24" label="Mississippi">Mississippi</option>
                                            <option value="25" label="Missouri">Missouri</option>
                                            <option value="26" label="Montana">Montana</option>
                                            <option value="27" label="Nebraska">Nebraska</option>
                                            <option value="28" label="Nevada">Nevada</option>
                                            <option value="29" label="New Hampshire">New Hampshire</option>
                                            <option value="30" label="New Jersey">New Jersey</option>
                                            <option value="31" label="New Mexico">New Mexico</option>
                                            <option value="32" label="New York">New York</option>
                                            <option value="33" label="North Carolina">North Carolina</option>
                                            <option value="34" label="North Dakota">North Dakota</option>
                                            <option value="35" label="Ohio">Ohio</option>
                                            <option value="36" label="Oklahoma">Oklahoma</option>
                                            <option value="37" label="Oregon">Oregon</option>
                                            <option value="38" label="Pennsylvania">Pennsylvania</option>
                                            <option value="39" label="Rhode Island">Rhode Island</option>
                                            <option value="40" label="South Carolina">South Carolina</option>
                                            <option value="41" label="South Dakota">South Dakota</option>
                                            <option value="42" label="Tennessee">Tennessee</option>
                                            <option value="43" label="Texas">Texas</option>
                                            <option value="44" label="Utah">Utah</option>
                                            <option value="45" label="Vermont">Vermont</option>
                                            <option value="46" label="Virginia">Virginia</option>
                                            <option value="47" label="Washington">Washington</option>
                                            <option value="48" label="West Virginia">West Virginia</option>
                                            <option value="49" label="Wisconsin">Wisconsin</option>
                                            <option value="50" label="Wyoming">Wyoming</option>
                                        </select>
                                    </div>
                                    <div className="appForm__field third">
                                        <label>Zip Code</label>
                                        <input type="text" placeholder="Zip Code"></input>
                                    </div>
                                    <div className="appForm__field half">
                                        <label>Closing Officer's Name*</label>
                                        <input type="text" placeholder="Closing Officer's Name*"></input>
                                    </div>
                                    <div className="appForm__field half">
                                        <label>Closing Officer's Email*</label>
                                        <input type="email" placeholder="Closing Officer's Email*"></input>
                                    </div>
                                    <div className="appForm__field half">
                                        <label>Closing Officer's Phone</label>
                                        <input type="text" placeholder="Closing Officer's Phone"></input>
                                    </div>
                                    <div className="appForm__field half">
                                        <label>Estimated Close Date</label>
                                        <input type="text" placeholder="Estimated Close Date (mm/dd/yyyy)"></input>
                                    </div>
                                    <div className="appForm__field half">
                                        <label>Escrow Assistant's Name</label>
                                        <input type="text" placeholder="Escrow Assistant's Name"></input>
                                    </div>
                                    <div className="appForm__field half">
                                        <label>Escrow Assistant's Email</label>
                                        <input type="email" placeholder="Escrow Assistant's Email"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="appForm__child">
                                <h4>Who Will This Order Be Billed To?*</h4>
                                <div>
                                    <label><input type="radio" value="seller" />The Seller</label><br />
                                    <label><input type="radio" value="seller" />The Seller's Agent</label><br />
                                    <label><input type="radio" value="seller" />The Buyer</label><br />
                                    <label><input type="radio" value="seller" />The Buyer's Agent</label><br />
                                </div>
                            </div>
                            <div className="appForm__child">
                                <h4>Additional Instructions/Notes</h4>
                                <textarea rows="10" name="addlNotes"></textarea>
                                <div className="appForm__flex">
                                    <div className="appForm__field half">
                                        <label>Who is your sales person?</label>
                                        <input type="text" placeholder="Who is Your Sales Person?"></input>
                                    </div>
                                    <div className="appForm__field half">
                                        <label>Coupon Code</label>
                                        <input type="text" placeholder="Coupon Code"></input>
                                        <span>*This will be applied at a later time*</span>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn">CONTINUE</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ApplicationInformation;
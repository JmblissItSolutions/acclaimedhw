import React, { useState, useRef } from 'react';
import { Helmet } from "react-helmet";
import homewarranty from "../assets/images/homewarranty.png";

const RealStateOrder = () => {
    let hompalan = ["Utah", "Idaho", "Nevada", "Arizona", "Texas"];
    const [radiovalue, setRadio] = useState('');
    let coverageoption = ["Buyer's Coverage", "Listing/Seller's Coverage"];
    const [coveragevalue, setCoverage] = useState('');

    let iamoptions = ["escrow-officer", "buyer-agent", "listing-agent", "buyer"];
    let warantyorder = ["Single-family home less than 6k sq ft, or condominium, townhome, mobile home under 2K sq ft.", "Condominium, townhome less than 2k sq ft", "Duplex", "Triplex", "Fourplex"];
    const [ordervalue, setWarranty] = useState('');

    let suarefootage = ["yes", "no"];
    const [squarevalue, setSqure] = useState('yes');

    let construction = ["no", "yes"];
    const [constructionvalue, setConstruction] = useState('no');

    const [listcheckbox1, setListcheck1] = useState('');
    const [listcheckbox2, setListcheck2] = useState('');
console.log(listcheckbox1)

    const Homeplan = () => (
        <>
            <div className="homplan">
                <h4>I want to get a home warranty for a property in:</h4>
                {hompalan.map(palan => (
                    <label key={palan} className="radiodesign">
                        <input checked={radiovalue === palan}
                            {...setRadio} type="radio" value={palan} onChange={e => setRadio(e.target.value)} />
                        {palan}
                        <span className="checkmark"></span>
                    </label>
                ))}
            </div>
        </>
    )
    const Coverage = () => (
        <>
            <div className="coverage">
                <h4>Let us know what type of coverage this is...</h4>
                {coverageoption.map(coverage => (
                    <label key={coverage} className="radiodesign">
                        <input checked={coveragevalue === coverage}
                            {...setCoverage} type="radio" value={coverage} onChange={e => setCoverage(e.target.value)} />
                        {coverage}
                        <span className="checkmark"></span>
                    </label>
                ))}
            </div>
        </>
    )
    const Squarefootege = () => (
        <>
            <div className="square">
                <h4>Is the square-footage of this home less than 6,000 feet?</h4>
                {suarefootage.map(square => (
                    <label key={square} className="radiodesign">
                        <input checked={ squarevalue === square}
                            {...setSqure} type="radio" value={square} onChange={e => setSqure(e.target.value)} />
                        {square}
                        <span className="checkmark"></span>
                    </label>
                ))}
                {squarevalue === "yes" ? <Construction /> : null}
            </div>
        </>
    )
    const Construction = () => (
        <>
            <div>
                <h4>Is this a new construction home?</h4>
                {construction.map(construct => (
                    <label key={construct} className="radiodesign">
                        <input checked={ constructionvalue === construct}
                            {...setConstruction} type="radio" value={construct} onChange={e => setConstruction(e.target.value)} />
                        {construct}
                        <span className="checkmark"></span>
                    </label>
                ))}

            </div>
        </>
    )
    const ConstCall = () => (
        <>
            <div className="constcall">
                <p>Standard Home Warranty Plan for a new single-family home, condominium, townhome or mobile home for years 2-4 :</p>
                <span><strong>$595</strong></span>
                <p> Need COVERAGE UPGRADES?</p>
                <span>Call Acclaimed at<strong>888-494-9460</strong></span>
                <div>
                    <button type="button" className="btn">CONTINUE</button>
                </div>
            </div>
        </>
    )
    const Assitance = () => (
        <>
            <div className="border-container">
                <div className="assitance">
                    <p>This order requires special assistance.</p>
                    <p>Call an Acclaimed Home Warranty agent at: <a><strong className="greentxt">888-494-9460</strong></a></p>
                    <p>We will be able to add <strong className="bluetxt">COVERAGE UPDGRADES</strong>, finalize you order, and provide an invoice.</p>
                </div>
            </div>
        </>
    )
    const Answering = () => (
        <>
            <div className="answering">
                <h4>Please begin by answering these questions...</h4>
                <div className="orders">
                    <div className="order_flex">
                        <div className="order_col">
                            <span>I am the
						             <select className="order_sel">
                                    {iamoptions.map(iam => (
                                        <option key={iam} value={iam}>{iam}</option>
                                    ))}
                                </select>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="warranty_order">
                            <span>This home warranty order is for a:</span>
                            {warantyorder.map(order => (
                                <label key={order} className="radiodesign">
                                    <input checked={ ordervalue === order}
                            {...setWarranty} type="radio" value={order} onChange={e => setWarranty(e.target.value)} />
                                    {order}
                                    <span className="checkmark"></span>
                                </label>
                            ))}
                            {ordervalue === "Single-family home less than 6k sq ft, or condominium, townhome, mobile home under 2K sq ft." ? <Squarefootege /> : null}
                        </div>
                    </div>
                    <div className="order_flex">
                        <a className="btn">Start Over</a>
                    </div>
                </div>
            </div>
        </>
    )
    const Terms = () => (
        <>
            <div className="listing_seller">
                <h4>Listing/Seller's Coverage Terms...</h4>
                <span className="">Listing/Seller's Coverage is effective upon receipt of application. Plan continues until expiration of the initial listing period not to exceed 180 days or until listing cancellation or close of sale, whichever occurs first. AHW, in its sole discretion, may extend coverage period. Pre-existing conditions are not covered for the Seller. Optional coverages set forth in this Contract are not available for Seller’s Coverage. If a claim is made by the Seller during the listing period a service fee will be required and paid by the Seller. If the property does not close and a claim has been made during the listing period, the Seller is responsible for full payment of services rendered or full payment of the home warranty coverage plan whichever is less.</span>
                <label><input checked={listcheckbox1} type="checkbox" value="1" 
                onChange={e => setListcheck1(e.target.checked)}/> 
                Yes. I agree to these terms.</label>

                <label>
                <input checked={listcheckbox2} type="checkbox" value="2" 
                onChange={e => setListcheck2(e.target.checked)} /> 
                I understand the invoice I will receive when this form is 
                completed is just for my records. No monies are due until closing. 
                I will notify Acclaimed Home Warranty when a buyer has been 
                identified.</label>
               
            </div>
        </>
    )
    const Bestplan = () => (
        <>
            <div className="bestplan" >
                <div className="plan_system">
                    <div>
                        <div>
                            <div>
                                <h4>Let our system select the best plan</h4>
                                <p>Enter Your Home Warranty Budget</p>
                            </div>
                            <div>
                                $<input type="number" min="300" max="2000" className="select"></input>
                                <p></p>
                            </div>
                            <div>
                                <p>Enter an amount from $300-$2000</p>
                                <button type="button" className="btn">GO</button>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="planside">
                    <div>
                        <h4 className="or">OR</h4>
                    </div>
                    <div className="click_here">
                        <button type="button" className="btn">Click Here</button><br />
                        <span id="click_span"><em>to Compare Home Warranty Plans Side-By-Side and make your selection/customize</em></span>
                    </div>
                </div>

            </div>
        </>
    )
    const Baseprice = () => (
        <>
            <div className="baseprice" >
                <div className="base_price_plan">
                    <div className="baseprice_plan">
                        <h4>The base price for this coverage is $595</h4>
                        <p>The remaining balance can be applied towards Coverage Upgrades or service calls.</p>
                    </div>
                    <div className="baseprice_amnt">
                        <input type="number" min="595" max="2000"></input>
                        <div className="">
                            <p className="">Enter an amount from $300-$2000</p>
                            <button type="button" className="btn">GO</button>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    const Condominium = () => (
        <>
            <div className="Condominium">
                <div className="Condominium">
                    <p>Standard Home Warranty Plan for a condominium, townhome, mobile home less than 2k sq ft:</p>
                    <p><strong className="blacktext">$285</strong></p>
                    <p>Need COVERAGE UPGRADES?</p>
                    <p>Call Acclaimed at<strong className="blacktext">888-494-9460</strong></p>
                    <div>
                        <button type="button" className="btn">CONTINUE</button>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <>
            <Helmet>
                <title>Real Estate Orders in Arizona by Acclaimed Home Warranty</title>
                <meta name="description" content="Are you looking for a home warranty for your property in Arizona? Reach out to Acclaimed Home Warranty for coverage details for buyers and sellers." />
            </Helmet>
            <div className="home_page">
                <div className="top_img">
                    <img src={homewarranty} alt="homewarranty" />
                </div>
                <div className="realstate">
                    <h1>Real Estate Orders</h1>
                </div>
                <div className="container">
                    <Homeplan />
                    {(radiovalue === 'Utah') || (radiovalue === 'Idaho') || (radiovalue === 'Nevada') || (radiovalue === 'Arizona') || (radiovalue === 'Texas') ? <Coverage /> : null}
                    {coveragevalue === "Buyer's Coverage" ? <Answering /> : null}
                    {coveragevalue === "Listing/Seller's Coverage" ? <Terms /> : null}
                    {(squarevalue === "no") && (ordervalue === "Single-family home less than 6k sq ft, or condominium, townhome, mobile home under 2K sq ft.") && (coveragevalue === "Buyer's Coverage") ? <Assitance /> : null}
                    {(ordervalue === "Single-family home less than 6k sq ft, or condominium, townhome, mobile home under 2K sq ft.") && (squarevalue === 'yes') && (constructionvalue === 'no') && (coveragevalue === "Buyer's Coverage") ? <Bestplan /> : null}
                    {(ordervalue === "Single-family home less than 6k sq ft, or condominium, townhome, mobile home under 2K sq ft.") && (squarevalue === 'yes') && (constructionvalue === 'yes') && (coveragevalue === "Buyer's Coverage") ? <ConstCall /> : null}
                    {(ordervalue === 'Duplex') && (coveragevalue === "Buyer's Coverage") || (ordervalue === 'Triplex') && (coveragevalue === "Buyer's Coverage") || (ordervalue === 'Fourplex') && (coveragevalue === "Buyer's Coverage") ? <Baseprice /> : null}
                    {(ordervalue === "Condominium, townhome less than 2k sq ft") && (coveragevalue === "Buyer's Coverage") ? <Condominium /> : null}
                    
                    
                    {(listcheckbox1 === true) && (listcheckbox2 === true) ? <Answering /> : null}
                </div>
            </div>
        </>
    )
};
export default RealStateOrder;
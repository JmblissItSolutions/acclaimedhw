import React, { useState, useRef } from 'react';
import { Helmet } from "react-helmet";
import homewarranty from "../assets/images/homewarranty.png";

const RealStateOrder = () => {
    let hompalan = ["utah", "idaho", "nevada", "arizona", "texas"];
    const [radiovalue, setRadio] = useState('');

    let coverageoption = ["Buyer's Coverage", "Listing/Seller's Coverage"];
    const [coveragevalue, setCoverage] = useState('');

    let iamoptions = ["escrow-officer", "buyer-agent", "listing-agent", "buyer"];
    let warantyorder = ["Single-family home less than 6k sq ft, or condominium, townhome, mobile home under 2K sq ft.", "Condominium, townhome less than 2k sq ft", "Duplex", "Triplex", "Fourplex"];
    const [ordervalue, setWarranty] = useState('');

    let suarefootage = ["yes", "no"];
    const [squarevalue, setSqure] = useState('');

    let construction = ["no", "yes"];
    const [constructionvalue, setConstruction] = useState('no');



    const Homeplan = () => (
        <>
            <div className="homplan">
                <h4>I want to get a home warranty for a property in:</h4>
                {hompalan.map(palan => (
                    <div className="homeradiobtn">
                        <input key={palan} type="radio" value={palan} name="radio" onChange={e => setRadio(e.target.value)} />
                        <label>{palan}</label>
                    </div>
                ))}
            </div>
        </>
    )
    const Coverage = () => (
        <>
            <div className="coverage">
                <h4>Let us know what type of coverage this is...</h4>
                {coverageoption.map(coverage => (
                    <div className="homeradiobtn">
                        <input type="radio" value={coverage} name="radio" onChange={e => setCoverage(e.target.value)} />
                        <label>{coverage}</label>
                    </div>
                ))}
            </div>
        </>
    )
    const Squarefootege = () => (
        <>
            <div className="">
                <h4>Is the square-footage of this home less than 6,000 feet?</h4>
                {suarefootage.map(square => (
                    <div className="">
                        <input type="radio" value={square} name="radio" onChange={e => setSqure(e.target.value)} />
                        <label>{square}</label>
                    </div>
                ))}
                {squarevalue === "yes" ? <Construction /> : null}
            </div>
        </>
    )
    const Construction = () => (
        <>
            <div className="">
                <h4>Is this a new construction home?</h4>
                {construction.map(construct => (
                    <div className="">
                        <input type="radio" value={construct} name="radio" onChange={e => setConstruction(e.target.value)} />
                        <label>{construct}</label>
                    </div>
                ))}

            </div>
        </>
    )
    const ConstCall = () => (
        <>
            <div className="">
            Standard Home Warranty Plan for a new single-family home, condominium, townhome or mobile home for years 2-4 :
$525
Need COVERAGE UPGRADES?
Call Acclaimed at 888-494-9460

            </div>
        </>
    )
    const Assitance = () => (
        <>
            <div className="">
                This order requires special assistance.
                Call an Acclaimed Home Warranty agent at: 888-494-9460
                We will be able to add COVERAGE UPDGRADES, finalize you order, and provide an invoice.
            </div>
        </>
    )
    const Answering = () => (
        <>
            <div className="answering">
                <h4>Please begin by answering these questions...</h4>
                <div className="">
                    <div className="">
                        <div className="">
                            <span>I am the
						             <select className="">
                                    {iamoptions.map(iam => (
                                        <option value={iam}>{iam}</option>
                                    ))}
                                </select>
                            </span>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <span>This home warranty order is for a:</span>
                            {warantyorder.map(order => (
                                <div className="warantyorder">
                                    <input type="radio" value={order} name="radio" onChange={e => setWarranty(e.target.value)} />
                                    <label>{order}</label>
                                </div>
                            ))}
                            {ordervalue === "Single-family home less than 6k sq ft, or condominium, townhome, mobile home under 2K sq ft." ? <Squarefootege /> : null}
                        </div>
                    </div>
                    <div className="">
                        <a className="btn">Start Over</a>
                    </div>
                </div>
            </div>
        </>
    )
    const Terms = () => (
        <>
            <div className="">
            </div>
            <div className="">
                <h4>Listing/Seller's Coverage Terms...</h4>
                <div className="">
                    <span className="">Listing/Seller's Coverage is effective upon receipt of application. Plan continues until expiration of the initial listing period not to exceed 180 days or until listing cancellation or close of sale, whichever occurs first. AHW, in its sole discretion, may extend coverage period. Pre-existing conditions are not covered for the Seller. Optional coverages set forth in this Contract are not available for Seller’s Coverage. If a claim is made by the Seller during the listing period a service fee will be required and paid by the Seller. If the property does not close and a claim has been made during the listing period, the Seller is responsible for full payment of services rendered or full payment of the home warranty coverage plan whichever is less.</span>
                    <label><input type="checkbox" value="1" className="" /> Yes. I agree to these terms.</label>
                </div>
                <div className="">
                    <label><input type="checkbox" value="1" /> I understand the invoice I will receive when this form is completed is just for my records. No monies are due until closing. I will notify Acclaimed Home Warranty when a buyer has been identified.</label>
                </div>
            </div>
        </>
    )
    const Bestplan = () => (
        <>
            <div className="" >
                <div className="">
                    <div style={{ marginBottom: "36px" }}>
                        <div className="">
                            <div className="">
                                <h4>Let our system select the best plan</h4>
                                <p>Enter Your Home Warranty Budget</p>
                            </div>
                            <div className="">
                                $<input type="number" min="300" max="2000"></input>
                                <p className=""></p>
                            </div>
                            <div className="">
                                <p className="">Enter an amount from $300-$2000</p>
                                <button type="button" className="btn">GO</button>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="or">OR</h4>
                    </div>
                    <div className="">
                        <div className="">
                            <button type="button" className="btn">Click Here</button><br />
                            <span id=""><em>to Compare Home Warranty Plans Side-By-Side and make your selection/customize</em></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    const Baseprice = () => (
        <>
            <div className="" >
                <div className="">
                    <div>
                        <div className="">
                            <div className="">
                                <h4>The base price for this coverage is</h4>
                                <p>The remaining balance can be applied towards Coverage Upgrades or service calls.</p>
                            </div>
                            <div className="">
                                $<input type="number" min="300" max="2000"></input>
                                <p className=""></p>
                            </div>
                            <div className="">
                                <p className="">Enter an amount from $300-$2000</p>
                                <button type="button" className="btn">GO</button>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    const Condominium = () => (
        <>
            <div className="">
            Standard Home Warranty Plan for a condominium, townhome, mobile home less than 2k sq ft:
$285
Need COVERAGE UPGRADES?
Call Acclaimed at 888-494-9460

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
                    {(radiovalue === 'utah') || (radiovalue === 'idaho') || (radiovalue === 'nevada') || (radiovalue === 'arizona') || (radiovalue === 'texas') ? <Coverage /> : null}
                    {coveragevalue === "Buyer's Coverage" ? <Answering /> : null}
                    {coveragevalue === "Listing/Seller's Coverage" ? <Terms /> : null}
                    {(ordervalue === "Single-family home less than 6k sq ft, or condominium, townhome, mobile home under 2K sq ft.") && (squarevalue === 'yes') && (constructionvalue === 'no') ? <Bestplan /> : null}
                    {(ordervalue === "Single-family home less than 6k sq ft, or condominium, townhome, mobile home under 2K sq ft.") && (squarevalue === 'yes') && (constructionvalue === 'yes') ? <ConstCall /> : null}
                    {(ordervalue === 'Duplex') || (ordervalue === 'Triplex') || (ordervalue === 'Fourplex') ? <Baseprice /> : null}
                    {ordervalue === "Condominium, townhome less than 2k sq ft" ? <Condominium /> : null}
                    {squarevalue === "no" ? <Assitance /> : null}


                </div>
            </div>
        </>
    )
};
export default RealStateOrder;
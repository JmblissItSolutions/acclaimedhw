import React, { useState, useEffect } from 'react';
import APIUrl from "../Api"
import { Helmet } from "react-helmet";
import { TiChevronLeft } from 'react-icons/ti';
import latticebackground from "../assets/images/lattice-background.png"
import { CheckOutlined } from '@ant-design/icons';
import RealStateOrder from "./RealStateOrder";
import homewarranty from "../assets/images/homewarranty.png";
import { Radio } from 'antd';


const SingleSquare = ({ productlist}) => {
   const pricesal = [];
    productlist.map(res => {
        pricesal.push(Number(res.price));
    })
    const minpriceval = JSON.parse(localStorage.getItem('minpriceval'));
    const priceval = JSON.parse(localStorage.getItem('priceval'));
    const [showResults, setShowResults] = useState("SingleSquareContent")
    const changehandle = () => {
        setShowResults("RealStateOrder") 
        localStorage.clear();
    };

    let selprice = minpriceval;
    function selectedamount() {
        if(pricesal && pricesal.length) {
            let selamount 
            const minprice = priceval;
            const prices = pricesal.reduce((a, b) => {
                let aDiff = Math.abs(a - minprice);
                let bDiff = Math.abs(b - minprice);
                if (aDiff == bDiff) {
                    return a < b ? a : b;
                } else {
                    return bDiff < aDiff ? b : a;
                }
            });
            if (prices > minprice) {
                const index = pricesal.indexOf(prices)
                pricesal.splice(index,1)
                selectedamount();
            } else if(prices < minpriceval) {
                selamount = minpriceval

            } else {
                selamount = prices
            }
            if(selamount) {
                selprice = selamount
            }
        }
    }
    selectedamount();
   const selectedCard = productlist.find(res => Number(res.price) == selprice);
    const [proprice, setValue] = useState(selprice);
    const [proId, setId] = useState(selectedCard ? selectedCard.id :  '');
    const [proname, setproname] = useState(selectedCard ? selectedCard.name :  '');
    const onChange = e => {
        setValue(e.target.value);
        setId(e.target.id);
        setproname(e.target.name);
    };

    const [coverage, setCoverage] = useState([]);
    useEffect(async () => {
        const url = "/get_realstate_coverage/" + `${proId}`
        const coverages = await APIUrl.get(`${url}`)
        setCoverage(coverages.data.coverage_upgrades);
    }, [proId]);
console.log(coverage)
    const SingleSquareContent = () => (
        <div className="home_page">
            <div className="top_img">
                <img src={homewarranty} alt="homewarranty" />
            </div>
            <div className="realstate">
                <h1>Real Estate Orders</h1>
            </div>
            <div className="container">
                <div className="plan-ttl">
                    <h2>PLANS & PRICING</h2>
                    <button type="button" className="btn" onClick={changehandle} ><TiChevronLeft />Go back</button>
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
                            {productlist.map((pro, index) => (
                                <div key={index} className={`standard_card header ${proprice == pro.price ? 'selectedpro' : ''}`}>
                                    <div className="tagdown standard">
                                        {proprice == pro.price ? <span className="tagtxt-top">You've selected</span> : <span>Click to add</span>}

                                        <label>
                                            <input
                                                type="radio"
                                                name={pro.name}
                                                id={pro.id}
                                                value={pro.price}
                                                checked={(proprice == pro.price)}
                                                onChange={onChange}
                                            />
                                            <h4>{pro.name}</h4><span className="tagtxt-mid"><div dangerouslySetInnerHTML={{ __html: pro.short_desc }} /></span><br />
                                            <span className="tagtxt-bot">${pro.price}</span>
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="textured">
                        <img src={latticebackground} alt="latticebackground" />
                    </div>
                </div>
                <section className="unique-feature pricing_plan">
                    <div className="inner">
                        <div className="table-cont-2">
                            <div className="table-left">
                                <div>Angle Stops and Gate Valves Toilet Replacement</div>
                            </div>
                            <div className="table-right">
                                <div className="feature"></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
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
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                            </div>
                        </div>
                        <div className="table-cont-2">
                            <div className="table-left">
                                <div>Shower Heads</div>
                            </div>
                            <div className="table-right">
                                <div className="feature"></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                            </div>
                        </div>
                        <div className="table-cont-2">
                            <div className="table-left">
                                <div>Shower Arms - Faucets</div>
                            </div>
                            <div className="table-right">
                                <div className="feature"></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
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
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                            </div>
                        </div>
                        <div className="table-cont-2">
                            <div className="table-left">
                                <div>Heat Lamps</div>
                            </div>
                            <div className="table-right">
                                <div className="feature"></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                            </div>
                        </div>
                        <div className="table-cont-2">
                            <div className="table-left">
                                <div>Premium Coverage Upgrade<br />(adds over<a>40 items</a> to standard coverage)</div>
                            </div>
                            <div className="table-right">
                                <div className="feature"></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                            </div>
                        </div>
                        <div className="table-cont-2">
                            <div className="table-left">
                                <div>No Fault Coverage</div>
                            </div>
                            <div className="table-right">
                                <div className="feature"></div>
                                <div className="feature"></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                            </div>
                        </div>
                        <div className="table-cont-2">
                            <div className="table-left">
                                <div>Refrigerator</div>
                            </div>
                            <div className="table-right">
                                <div className="feature"></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
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
                                <div className="feature"></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                            </div>
                        </div><div className="table-cont-2">
                            <div className="table-left">
                                <div>Toilet Replacement</div>
                            </div>
                            <div className="table-right">
                                <div className="feature"></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                            </div>
                        </div>
                        <div className="table-cont-2">
                            <div className="table-left">
                                <div>Free ReKey (travel fees may apply)</div>
                            </div>
                            <div className="table-right">
                                <div className="feature"></div>
                                <div className="feature"></div>
                                <div className="feature"></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                            </div>
                        </div>
                        <div className="table-cont-2">
                            <div className="table-left">
                                <div>Radiant Heaters - Broilers (up to $1000)</div>
                            </div>
                            <div className="table-right">
                                <div className="feature"></div>
                                <div className="feature"></div>
                                <div className="feature"></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                            </div>
                        </div>
                        <div className="table-cont-2">
                            <div className="table-left">
                                <div>R-22 Conversion to 410A</div>
                            </div>
                            <div className="table-right">
                                <div className="feature"></div>
                                <div className="feature"></div>
                                <div className="feature"></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                            </div>
                        </div>
                        <div className="table-cont-2">
                            <div className="table-left">
                                <div>No Fault (code upgrades & mismatched systems</div>
                            </div>
                            <div className="table-right">
                                <div className="feature"></div>
                                <div className="feature"></div>
                                <div className="feature"></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                            </div>
                        </div>
                        <div className="table-cont-2">
                            <div className="table-left">
                                <div>Exterior hose bibs</div>
                            </div>
                            <div className="table-right">
                                <div className="feature"></div>
                                <div className="feature"></div>
                                <div className="feature"></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                            </div>
                        </div>
                        <div className="table-cont-2">
                            <div className="table-left">
                                <div>Pressure Relief Valve Inside Home</div>
                            </div>
                            <div className="table-right">
                                <div className="feature"></div>
                                <div className="feature"></div>
                                <div className="feature"></div>
                                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="feature_img">
                        <img src={latticebackground} alt="latticebackground"/>
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
                                {coverage.map(coveragepro => (
                                    <div className="upgrade-table__input">
                                        <input type={coveragepro.coverage_type} />
                                        <div className="upgrade-table__price">${coveragepro.coverage_price}</div>
                                        <div className="upgrade-table__title">{coveragepro.coverage_name}<span></span></div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </section>
                <div className="running-total">
                    <div className="inner">
                        <div className="running-total__title">
                            <h4>{proname}</h4>
                            <span>Home Warranty</span>
                            <span><strong>${proprice}</strong></span>
                        </div>
                        <div className="running-total__additions">
                            <span>2x Air Conditioner/Cooler</span>
                            <span>2x Heating/Furnace</span>
                        </div>
                        <div className="running-total__final">
                            <h4>Total Amount:</h4>
                            <span><strong>${priceval}</strong></span>  
                        </div>
                    </div>
                </div>
                <div className="cont-btn">
                    <button type="button" className="btn">CONTINUE</button>
                </div>
            </div>
        </div>
    )
    return (
        <>
            <Helmet>
                <title>Arizona Resources - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
                <meta name="description" content="Arizona Resources - Acclaimed Home Warranty" />
            </Helmet>
            {showResults === "RealStateOrder" ? <RealStateOrder /> : <SingleSquareContent />}
        </>
    )
}
export default SingleSquare;
import React from 'react'
import { Helmet } from "react-helmet";
import { TiChevronLeft } from 'react-icons/ti';

const TriplexPlans = () => {
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
                    <section className="coverage_upgrades">
                        <div className="container">
                            <div className="coverage-ttl">
                                <strong>COVERAGE UPGRADES</strong><br />
                                <span>SELECT ADDITIONAL ITEMS TO CUSTOMIZE YOUR PLAN</span>
                            </div>
                            <div className="upgrade-table">
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$120</div>
                                        <div className="upgrade-table__title">Additional Refrigerator/Freezer</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="checkbox" min="0" />
                                        <div className="upgrade-table__price">$150</div>
                                        <div className="upgrade-table__title">Extra Water Heater<br/></div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$255</div>
                                        <div className="upgrade-table__title">Washer & Dryer</div>
                                    </div>
                                </div>
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$150</div>
                                        <div className="upgrade-table__title">Water Softener</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" min="0" />
                                        <div className="upgrade-table__price">$300</div>
                                        <div className="upgrade-table__title">Enhanced External Pipe Leak Coverage</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                    <input type="text" min="0" />
                                        <div className="upgrade-table__price">$255</div>
                                        <div className="upgrade-table__title">Second Kitchen (does not incl fridge)</div>
                                    </div>
                                </div>
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$255</div>
                                        <div className="upgrade-table__title">Appliance Limits Increase (adds on $1000 coverage on built in kitchen appliances)</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="checkbox" min="0" />
                                        <div className="upgrade-table__price">$225</div>
                                        <div className="upgrade-table__title">Premium Coverage Upgrade<br/>
                                        <a style={{fontSize:"11px"}}>(adds over 40 items to standard coverage)</a>
                                        </div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$150</div>
                                        <div className="upgrade-table__title">Discounted Service Call</div>
                                    </div>
                                </div>
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="checkbox" />
                                        <div className="upgrade-table__price">$450</div>
                                        <div className="upgrade-table__title">Casita</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$465</div>
                                        <div className="upgrade-table__title">Grinder Pump</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$300</div>
                                        <div className="upgrade-table__title">Roof Leak Repairs</div>
                                    </div>
                                </div>
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$300</div>
                                        <div className="upgrade-table__title">Septic System/Pumping</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$525</div>
                                        <div className="upgrade-table__title">Swimming Pool/Spa Equipment</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$1050</div>
                                        <div className="upgrade-table__title">Salt Water Swimming Pool</div>
                                    </div>
                                </div>
                                <div className="upgrade-table__repeater">
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$300</div>
                                        <div className="upgrade-table__title">Well Pump</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$255</div>
                                        <div className="upgrade-table__title">Booster Pump</div>
                                    </div>
                                    <div className="upgrade-table__input">
                                        <input type="text" />
                                        <div className="upgrade-table__price">$180</div>
                                        <div className="upgrade-table__title">No-Fault Coverage</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="running-total">
                        <div className="inner">
                            <div className="running-total__title">
                                <h4>Triplex</h4>
                                <span>Home Warranty</span>
                                <span><strong>$795</strong></span>
                            </div>
                            <div className="running-total__additions">
                                <span>2x Air Conditioner/Cooler</span>
                                <span>2x Heating/Furnace</span>
                                <span>2x Refrigerator</span>
                            </div>
                            <div className="running-total__final">
                                <h4>Total Amount:</h4>
                                <span><strong>$795</strong></span>
                            </div>
                        </div>
                    </div>
                    <div className="cont-btn">
                        <button type="button" className="btn">CONTINUE</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TriplexPlans;
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useHistory, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import UtahHomeowner from "./../assets/images/UtahHomeowner.png"
import { StarFilled, CheckOutlined } from '@ant-design/icons';
import lattice from "../assets/images/lattice-background.png"
import { Radio } from 'antd';
const Texas = () => {
  const [products, setproducts] = useState([]);
  const [product, setproduct] = useState("Single Family");

  const handleChangeCourse = event => {
    setproduct(event.target.value);
  };
  const getUnique = (arr, comp) => {
    const unique = arr
      .map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e])
      .map(e => arr[e]);
    return unique;
  }
  useEffect(() => {
    const productss = require("../data.json");
    const products = productss.TexasproList;
    setproducts(products)
  }, []);

  const uniqueCouse = getUnique(products, "unitsize");
  const filterDropdown = products.filter(function (result) {
    return result.unitsize === product;
  });

  // above all code for filter only dont touch above
  //  code you can add you code belove this line

  const location = useLocation();
  const sel = location.pathname;

  let history = useHistory();
  function handleChange(e) {
    history.push(e.target.value);
  }
  const [showPlans, setShowPlans] = useState("ProductsInfo")
  
  const [value, setValue] =useState(1);
  const onChange = e => {
    setValue(e.target.value);
  };

  const Produfilter = () => (
    <>
      <section className="top-image">
        <img src={UtahHomeowner} alt="UtahHomeowner" />
      </section>
      <section className="plans-title">
        <div className="container text-center mx-900">
          <h1 className="upper">Plans for every home</h1>
          <p className="text-center sub-txt">We want you to feel confident in your home—that’s why we provide a variety of coverage options for different needs. While all of our plans cover a variety of appliances and accessories, you can choose a more extensive option to make sure every item in your home is in good hands.</p>
        </div>
      </section>

      <section className="change-location-header">
        <div className="container d-flex just-space">
          <span className="big upper">Texas Homeowner Plans</span>
          <div>
            <div>
              <span>Unit Size</span>
              <select value={product} onChange={handleChangeCourse}>
                {uniqueCouse.map(product => (
                  <option key={product.id} value={product.unitsize}>
                    {product.unitsize}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <span style={{ display: "block" }}>
                Location
                  </span>
              <select name="size" className="" onChange={handleChange} defaultValue={sel}>
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
    </>
  )
  const ProductsInfo = () => (
    <>
      <section className="light-back plan-options">
        <div className="container">
          <div className="table-cont">
            <h2 className="upper table-left">plan options<br />
              <span>{product}</span></h2>
            <div className="option-cont table-right">
              {filterDropdown.map(product => (
                <div className="option" key={product.id}>
                  <div className="star-cont">
                    <StarFilled className="antstar" />
                  </div>
                  <div className="body">
                    <h6 className="upper">{product.name}</h6>
                    {product.price ? <h4 className="lato">{product.price}
                    <span style={{ fontSize: "0.4em" }}>/MO</span></h4> :
                    <h4 className="lato">{product.yearly}
                    <span style={{ fontSize: "0.4em" }}>/YR</span></h4>}
                   {product.price ? <h5 className="lato">{product.yearly}/YR</h5> : null }
                    <input className="btn" type="submit" value="Buy Now" onClick={()=>setShowPlans("Plans")} />
                  </div>
                </div>
              ))}

            </div>
            <hr className="textured" />
          </div>
        </div>
      </section>
      <section className="standard-features blueBack">
        <div className="container">
          <h3 className="upper text-center lato">
            Standard Features for all plans
         <div style={{ fontSize: "10px" }}>*(service fee may be required)</div>
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
      <section className="unique-features">
        <h3 className="upper text-center lato light-back">Unique Features</h3>
        <div className="container">
          <div className="table-cont">
            <div className="table-left">
              <p><span>Central Vacuum</span></p>
              <p><span>Registers</span></p>
              <p><span>Grills</span></p>
              <p><span>Heat Lamps</span></p>
              <p><span>Angle Stops, and Gate Valves</span></p>
              <p><span>Toilet Replacement</span></p>
              <p><span>Interior Hose Bibs</span></p>
              <p><span>Shower Heads</span></p>
              <p><span>Shower Arms - Faucets</span></p>
              <p>
                <span>
                  <span>
                    <a data-toggle="modal" data-target="#forty_items_popup_utah">Premium Coverage Upgrade</a>
                  </span>
                </span>
              </p>
              <p>
                <span>
                  <a data-toggle="modal" data-target="#forty_items_popup_utah">No Fault Coverage</a>
                </span>
              </p>
              <p><span>Refrigerator</span></p>
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
              </div>
              <div className="feature-col">
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature"><i className="achi white-checkmark"></i></div>
                <div className="feature"><i className="achi white-checkmark"></i></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature"></div>
              </div>
              <div className="feature-col">
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature"><i className="achi white-checkmark"></i></div>
                <div className="feature"><i className="achi white-checkmark"></i></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
                <div className="feature included"><CheckOutlined className="antcheck" /></div>
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
                <span>
                  <span>
                    <a data-toggle="modal" data-target="#forty_items_popup_utah">No Fault Coverage</a>
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
    </>
  );
  const Plans = () => (
    <>
      <div id="plans" className="search-results">
        <section id="upgrades_and_cart">
          <div className="container">
            <h2>You have selected the<strong> {product} Standard </strong>plan</h2>
            <div className="plan_interval">
              <p style={{ margin: "0px", textalign: "center", fontsize: "18px" }}>
                <strong>Payment Options:</strong>
                <span className="spacer"></span>
                <label><Radio.Group onChange={onChange} value={value}>
            <label><Radio value={1}>$400/YR</Radio></label>
            <label><Radio value={2}>$35.00</Radio></label></Radio.Group></label>
              </p>
            </div>
          </div>
          <div className="textured-back" style={{ backgroundImage: `url(${lattice})` }}>
            <div className="container">
              <h3>COVERAGE UPGRADES</h3>
              <h4>SELECT ADDITIONAL ITEMS TO CUSTOMIZE YOUR PLAN</h4>
            </div>
          </div>
          <div className="container">
            <div className="upgrade_cont">
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="3" className="price">$175</span>
                <span className="name">Swimming Pool/Spa Equipment</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="3" className="price">$100</span>
                <span className="name">Septic System/Pumping</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="3" className="price">$350</span>
                <span className="name">Salt Water Swimming Pool</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="3" className="price">$100</span>
                <span className="name">Roof Leak Repairs</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="2" className="price">$60</span>
                <span className="name">
                  <span><a data-toggle="modal" data-target="#no_fault_popup_utah">No Fault Coverage</a></span></span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="2" className="price">$50</span>
                <span className="name">Kitchen Refrigerator (inc in Premium &amp; Ultimate plans)</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="3" className="price">$155</span>
                <span className="name">Grinder Pump</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="2" className="price">$85</span>
                <span className="name">Furnace (Additional Coverage)</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="3" className="price">$100</span>
                <span className="name">Enhanced External Pipe Coverage</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="2" className="price">$50</span>
                <span className="name">Discounted Pre-Paid Service Call Fee (ONE TIME FEE)</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="3" className="price">$150</span>
                <span className="name">Casita</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="2" className="price">$85</span>
                <span className="name">Air Conditioning (additional unit)</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="2" className="price">$40</span>
                <span className="name">Additional Refrigeration/Freezer</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="2" className="price">$50</span>
                <span className="name">Water Softener</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="2" className="price">$85</span>
                <span className="name">Additional Washer Dryer (1 set incl in Ultimate Plans)</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="3" className="price">$400</span>
                <span className="name">3rd Year Coverage</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="3" className="price">$400</span>
                <span className="name">2nd Year Coverage</span>
              </div>
              <div className="upgrade">
                <input type="number" min="0" />
                <span data-num="2" className="price">$75</span>
                <span className="name"><span>
                  <a data-toggle="modal" data-target="#forty_items_popup_utah">Premium Coverage Upgrade</a>
                </span></span>
              </div>
            </div>
            <div className="bottom-cont" />
            <div className="cart">
              <h4>Cart</h4>
              <ul><li>1x Single Family-Standard</li><li></li><li></li><li></li><li></li><li></li></ul>
            </div>
            <div className="total">
              <h4>Total</h4>
        $400/<span>YR</span>
            </div>
            <div className="footy">
              <button className="btn">Check out</button>
              <button className="btn cancel" onClick={()=>setShowPlans("ProductsInfo")}>Cancel</button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
  return (
    <>
      <Helmet>
        <title>See Benefits and Resource Guides for Home Warranty Services in Arizona</title>
        <meta name="description" content="Acclaimed Home Warranty has shared some of the useful resources for those looking out for home warranty plans in Arizona. Contact us today for more information." />
      </Helmet>
      <div className="product_page">
        <Produfilter />
         {showPlans==="ProductsInfo"&&<ProductsInfo />}
         {showPlans==="Plans"&&<Plans />}
         
      </div>
    </>
  )
}
export default Texas;
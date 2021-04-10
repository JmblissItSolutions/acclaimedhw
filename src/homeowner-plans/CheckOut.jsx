import React, { useState, useEffect } from "react";
import APIUrl from "../Api"
import { Helmet } from "react-helmet";
import Checkoutbg from "../assets/images/Checkoutbg.png";
import { FaRegWindowMaximize } from 'react-icons/fa';
import visa from "../assets/images/card-visa.png";
import master from "../assets/images/card-mastercard.png";
import american from "../assets/images/card-amex.png";
import discover from "../assets/images/card-discover.png";
import dinnerclub from "../assets/images/card-dinersclub.png";
import jcb from "../assets/images/card-jcb.png";
import cardccplain from "../assets/images/card-cc-plain.png";

const CheckOut = ({ value }) => {
    let localdata = JSON.parse(localStorage.getItem('cart'));
    let val = JSON.parse(localStorage.getItem('value'));
    let protype = JSON.parse(localStorage.getItem('product'));
    let covrage = JSON.parse(localStorage.getItem('coverage'));
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [company, setCompany] = useState("");
    const [country, setCountry] = useState("");
    const [street1, setStreet1] = useState("");
    const [street2, setStreet2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pincode, setPincode] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [prop_street1, SetProp_Street1] = useState("");
    const [prop_street2, SetProp_Street2] = useState("");
    const [prop_city, SetProp_City] = useState("");
    const [prop_state, SetProp_state] = useState("");
    const [prop_zipcode, SetProp_zipcode] = useState("");
    const [order_notes, SetOrder_notes] = useState("");
    const [subtotal, SetSubtotal] = useState("1000");
    const [total, SetTotal] = useState("500");
    const [pay_method, SetPay_method] = useState("Cash");

    function saveData() {
        let data = { firstname, lastname, company, country, street1, street2, city, state, pincode, phone, email, prop_street1, prop_street2, prop_city, prop_state, prop_zipcode, order_notes, subtotal, total, pay_method }
        fetch("https://replatform.acclaimedhw.com/replatform/api/create_checkout", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((resp) => {
                // console.warn("resp",resp);;
                resp.json().then((result) => {
                    console.warn("result", result)
                })
            })
    }
    const Cove = ()=>(
        <>
         {covrage.map((pro, index) => (
                <div className="option" key={index}>
                  <ul>{pro.quantity > 0 ? <li>{pro.quantity}x{pro.name} </li> :""}</ul>
                </div>
              ))}
        </>
      )
    return (
        <>
            <Helmet>
                <title>Arizona Resources - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
                <meta name="description" content="Arizona Resources - Acclaimed Home Warranty" />
            </Helmet>
            <div className="home_page">
                <section className="top-image">
                    <img src={Checkoutbg} alt="Checkoutbg" />
                </section>
                <div className="container">
                    <div className="checkout_ttl">
                        <h1>Checkout</h1>
                    </div>
                </div>
                <section className="inner">
                    <div className="woocommerce">
                        <div className="woocommerce-notices-wrapper"></div>
                        <div className="woocommerce-form-coupon-toggle">
                            <div className="woocommerce-info">
                                <FaRegWindowMaximize className="windowmaximize" />Have a coupon?
                                 <a className="showcoupon" href="#">Click here to enter your code</a>
                            </div>
                        </div>
                        <form className="checkout_coupon woocommerce-form-coupon">
                            <p>If you have a coupon code, please apply it below.</p>
                            <p className="form-row form-row-first">
                                <input type="text" className="input-text" placeholder="Coupon code"></input>
                            </p>
                            <p className="form-row form-row-last">
                                <button type="submit" className="button" value="Apply coupon">Apply coupon</button>
                            </p>
                        </form>
                        <form className="checkout woocommerce-checkout">
                            <div className="col2-set">
                                <div className="col-1">
                                    <div className="woocommerce-billing-fields">
                                        <h3>Billing details</h3>
                                        <div className="woocommerce-billing-fields__field-wrapper">
                                            <p className="form-row form-row-first validate-required">
                                                <label>First name<abbr className="required" title="required">*</abbr></label>
                                                <input type="text" name="firstname" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} className="input-text" />
                                            </p>
                                            <p className="form-row form-row-first validate-required">
                                                <label>Last name<abbr className="required" title="required">*</abbr></label>
                                                <input type="text" name="lastname" value={lastname} onChange={(e) => { setLastname(e.target.value) }} className="input-text" />
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>Company name<span>(optional)</span></label>
                                                <input type="text" className="input-text" value={company} onChange={(e) => { setCompany(e.target.value) }}></input>
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>Country/Region<abbr className="required" title="required">*</abbr></label>
                                                <select name="country" value={country} onChange={(e) => { setCountry(e.target.value) }}>
                                                    <option value="default">Select a country / region…</option>
                                                    <option value="AF">Afghanistan</option>
                                                    <option value="AX">Åland Islands</option>
                                                    <option value="AL">Albania</option>
                                                    <option value="DZ">Algeria</option>
                                                    <option value="AS">American Samoa</option>
                                                    <option value="AD">Andorra</option>
                                                </select>
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>Street address<abbr className="required" title="required">*</abbr></label>
                                                <input type="text" className="input-text" value={street1} onChange={(e) => { setStreet1(e.target.value) }} placeholder="House number and street name"></input>
                                                <input type="text" className="input-text" value={street2} onChange={(e) => { setStreet2(e.target.value) }} placeholder="Apartment, suite, unit, etc. (optional)"></input>
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>Town/City<abbr className="required" title="required">*</abbr></label>
                                                <input type="text" className="input-text" value={city} onChange={(e) => { setCity(e.target.value) }}></input>
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>State<abbr className="required" title="required">*</abbr></label>
                                                <select value={state} onChange={(e) => { setState(e.target.value) }}>
                                                    <option value="AX">Tennessee</option>
                                                    <option value="default">Texsas</option>
                                                    <option value="AF">Utah</option>
                                                    <option value="AL">Vermont</option>
                                                    <option value="DZ">Virginia</option>
                                                    <option value="AS">Washington</option>
                                                    <option value="AD">West Virginia</option>
                                                </select>
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>ZIP<abbr className="required" title="required">*</abbr></label>
                                                <input type="number" className="input-text" value={pincode} onChange={(e) => { setPincode(e.target.value) }}></input>
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>Phone<abbr className="required" title="required">*</abbr></label>
                                                <input type="text" name="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} className="input-text" />
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>Email address<abbr className="required" title="required">*</abbr></label>
                                                <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="input-text" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="woocommerce-shipping-fields"></div>
                                    <div className="woocommerce-additional-fields">
                                        <h3>Warrantied Property Address</h3>
                                        <p className="form-row form-row-wide">
                                            <label>Street address<abbr className="required" title="required">*</abbr></label>
                                            <input type="text" className="input-text" value={prop_street1} onChange={(e) => { SetProp_Street1(e.target.value) }} placeholder="House number and street name"></input>
                                            <input type="text" className="input-text" value={prop_street2} onChange={(e) => { SetProp_Street2(e.target.value) }} placeholder="Apartment, suite, unit, etc. (optional)"></input>
                                        </p>
                                        <p className="form-row form-row-wide">
                                            <label>City<abbr className="required" title="required">*</abbr></label>
                                            <input type="text" className="input-text" value={prop_city} onChange={(e) => { SetProp_City(e.target.value) }}></input>
                                        </p>
                                        <p className="form-row form-row-wide">
                                            <label>State<abbr className="required" title="required">*</abbr></label>
                                            <select value={prop_state} onChange={(e) => { SetProp_state(e.target.value) }}>
                                                <option value="default">Select an option...</option>
                                                <option value="AF">Afghanistan</option>
                                                <option value="AX">Åland Islands</option>
                                                <option value="AL">Albania</option>
                                                <option value="DZ">Algeria</option>
                                                <option value="AS">American Samoa</option>
                                                <option value="AD">Andorra</option>
                                            </select>
                                        </p>
                                        <p className="form-row form-row-wide">
                                            <label>Zip Code<abbr className="required" title="required">*</abbr></label>
                                            <input type="number" className="input-text" value={prop_zipcode} onChange={(e) => { SetProp_zipcode(e.target.value) }}></input>
                                        </p>
                                        <h3>Additional information</h3>
                                        <p className="form-row form-row-wide">
                                            <label>Order notes<span>(optional)</span></label>
                                            <textarea className="input-text" rows="2" col="5" placeholder="Notes about your order, e.g. special notes for delivery." value={order_notes} onChange={(e) => { SetOrder_notes(e.target.value) }}></textarea>
                                        </p>
                                        <input type="hidden" value={subtotal} onChange={(e) => { SetSubtotal(e.target.value) }} />
                                        <input type="hidden" value={total} onChange={(e) => { SetTotal(e.target.value) }} />
                                        <input type="hidden" value={pay_method} onChange={(e) => { SetPay_method(e.target.value) }} />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <h3>Your order</h3>
                        <div className="order_review">
                            <table className="shop_table woocommerce-checkout-review-order-table">
                                <thead>
                                    <tr>
                                        <th className="product-name">Product</th>
                                        <th className="product-total">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {localdata.map((item, index) => (
                                        <tr className="cart_item" key={index}>
                                            <td className="product-name">{item.name} - {val == 2 ? "Monthly" : "Annual"} ,{protype}
                                                <strong className="product-quantity"> × 1</strong>
                                                {covrage ? <Cove/> : null }
                                            </td>

                                            <td className="product-total">
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>
                                                        {val == 2 ? item.monthly_price : item.yearly_price}
                                                    </bdi>
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {/* <tr className="cart_item">
                                            <td className="product-name">Swimming Pool/Spa Equipment - Utah,Annual
                                         <strong className="product-quantity"> × 2</strong>
                                            </td>
                                            <td className="product-total">
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>
                                                    350.00
                                                </bdi>
                                                </span>
                                            </td>
                                        </tr> */}
                                </tbody>
                                <tfoot>
                                    <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td>
                                            <strong>
                                                <span className="woocommerce-Price-amount amount">
                                                    {localdata.map((item, index) => (
                                                        <bdi key={index} >
                                                            <span className="woocommerce-Price-currencySymbol">$</span>
                                                            {val == 2 ? item.monthly_price : item.yearly_price}
                                                        </bdi>
                                                    ))}
                                                </span>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr className="order-total">
                                        <th>Total</th>
                                        <td>
                                            <strong>
                                                <span className="woocommerce-Price-amount amount">
                                                    {localdata.map((item, index) => (
                                                        <bdi key={index}>
                                                            <span className="woocommerce-Price-currencySymbol">$</span>
                                                            {val == 2 ? item.monthly_price : item.yearly_price}
                                                        </bdi>
                                                    ))}
                                                </span>
                                            </strong>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="woocommerce-checkout-payment">
                            <ul className="wc_payment_methods payment_methods methods">
                                <li className="wc_payment_method payment_method_authorize_net_aim">
                                    <input type="radio" className="input-radio" name="payment_method" />
                                    <label>Credit Card
                                       <img src={visa} alt="visa" />
                                        <img src={master} alt="master" />
                                        <img src={american} alt="american" />
                                        <img src={discover} alt="discover" />
                                        <img src={dinnerclub} alt="dinnerclub" />
                                        <img src={jcb} alt="jcb" />
                                    </label>
                                    <div className="payment_box payment_method_authorize_net_aim">
                                        <p>Pay securely using your credit card.</p>
                                        <fieldset>
                                            <div className="payment-method-form">
                                                <p className="form-row form-row-wide validate-required woocommerce-invalid">
                                                    <label>Card Number</label>
                                                    <abbr className="required" title="required">*</abbr>
                                                    <input type="text" className="input-text" maxLength="20" placeholder="••••••••••••••••" />
                                                </p>
                                                <div>
                                                    <p className="form-row form-row-first validate-required woocommerce-invalid woocommerce-invalid-required-field">
                                                        <label>Expiration (MM/YY) </label>
                                                        <abbr className="required" title="required">*</abbr>
                                                        <input type="text" className="input-text" maxLength="20" placeholder="MM / YY" />
                                                    </p>
                                                    <p className="form-row form-row-last validate-required woocommerce-invalid woocommerce-invalid-required-field">
                                                        <label>Card Security Code </label>
                                                        <abbr className="required" title="required">*</abbr>
                                                        <input type="text" className="input-text" maxLength="20" placeholder="CSC" />
                                                    </p>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </li>
                            </ul>
                            <div className="form-row place-order">
                                <div className="woocommerce-terms-and-conditions-wrapper">
                                    <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our </p>
                                </div>
                                <button type="submit" onClick={saveData} className="button alt" value="Place order">Place order</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default CheckOut;
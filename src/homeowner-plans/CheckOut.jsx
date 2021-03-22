import React from 'react'
import { Helmet } from "react-helmet";
import Checkoutbg from "../assets/images/Checkoutbg.png";
import { FaRegWindowMaximize } from 'react-icons/fa';
const CheckOut = () => {
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
                                                <input type="text" className="input-text"></input>
                                            </p>
                                            <p className="form-row form-row-first validate-required">
                                                <label>Last name<abbr className="required" title="required">*</abbr></label>
                                                <input type="text" className="input-text"></input>
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>Company name<span>(optional)</span></label>
                                                <input type="text" className="input-text"></input>
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>Country/Region<abbr className="required" title="required">*</abbr></label>
                                                <select>
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
                                                <input type="text" className="input-text" placeholder="House number and street name"></input>
                                                <input type="text" className="input-text" placeholder="Apartment, suite, unit, etc. (optional)"></input>
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>Town/City<abbr className="required" title="required">*</abbr></label>
                                                <input type="text" className="input-text"></input>
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>State<abbr className="required" title="required">*</abbr></label>
                                                <select>
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
                                                <input type="number" className="input-text"></input>
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>Phone<abbr className="required" title="required">*</abbr></label>
                                                <input type="number" className="input-text"></input>
                                            </p>
                                            <p className="form-row form-row-wide">
                                                <label>Email address<abbr className="required" title="required">*</abbr></label>
                                                <input type="email" className="input-text"></input>
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
                                            <input type="text" className="input-text" placeholder="House number and street name"></input>
                                            <input type="text" className="input-text" placeholder="Apartment, suite, unit, etc. (optional)"></input>
                                        </p>
                                        <p className="form-row form-row-wide">
                                            <label>City<abbr className="required" title="required">*</abbr></label>
                                            <input type="text" className="input-text"></input>
                                        </p>
                                        <p className="form-row form-row-wide">
                                            <label>Country/Region<abbr className="required" title="required">*</abbr></label>
                                            <select>
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
                                            <input type="number" className="input-text"></input>
                                        </p>
                                        <h3>Additional information</h3>
                                        <p className="form-row form-row-wide">
                                            <label>Order notes<span>(optional)</span></label>
                                            <textarea className="input-text" rows="2" col="5" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <h3 id="order_review_heading">Your order</h3>
                    </div>
                </section>
            </div>
        </>
    )
}
export default CheckOut;
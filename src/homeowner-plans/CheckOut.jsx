import React, { useRef, useEffect, useState } from "react";
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
import { Radio } from 'antd';

const CheckOut = ({ value }) => {
    let localdata = JSON.parse(localStorage.getItem('cart'));
    let val = JSON.parse(localStorage.getItem('value'));
    let protype = JSON.parse(localStorage.getItem('product'));
    let covrage = JSON.parse(localStorage.getItem('coverage'));
    let totalMonthly = JSON.parse(localStorage.getItem('totalMonthly'));
    let totalYearly = JSON.parse(localStorage.getItem('totalYearly'));
    let MonthlyPrice = JSON.parse(localStorage.getItem('MonthlyPrice'));
    let YearlyPrice = JSON.parse(localStorage.getItem('YearlyPrice'));
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
    const [pay_method, setPayment] = useState("card")
    const [status, setStatus] = useState("pending")
    const [visible, setVisible] = useState(false);
    const [coupon_code, setCoupon_code] = useState("");
    const [couponresult, setCouponresult] = useState([]);

    const onClick = (e) => {
        e.preventDefault();
        setVisible(!visible);
    }
    const [result, setResult] = useState([]);
    function saveData() {
        let data = { firstname, lastname, company, country, street1, street2, city, state, pincode, phone, email, prop_street1, prop_street2, prop_city, prop_state, prop_zipcode, order_notes, subtotal, total, pay_method, status }
        fetch("https://replatform.acclaimedhw.com/replatform/api/create_checkout", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((resp) => {
                resp.json().then((result) => {
                    console.warn("result", result)
                    // const resultMsg = (result.message)
                    setResult(result);
                })
            })
    }
    let resultMsg = (result.message)
    let orderid = (result.order_id)
    let res = (result.result)

    function CouponData(e) {
        e.preventDefault();
        let data = { coupon_code }
        fetch("https://replatform.acclaimedhw.com/replatform/api/check_coupon", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((resp) => {
                resp.json().then((couponresult) => {
                    console.warn("couponresult", couponresult)
                    setCouponresult(couponresult);
                })
            })
    }
    let couponMsg = (couponresult.message)

    function interval() {
        if (val == 1 || val == null) {
            return 'yearly'
        }
        else if (val == 2) {
            return 'monthly'
        }
    }
    let intervaltype = interval()
    let order_id = orderid
    const mainPro = localdata.map(item => {
        let orderid = "order_id"
        let product_id = "product_id"
        let product_name = "product_name"
        let prod_type = "prod_type"
        let pay_interval_type = "pay_interval_type"
        let quantity = "quantity"
        const container = {};
        container[orderid] = order_id
        container[product_id] = item.id
        container[product_name] = item.name
        container[prod_type] = "simple"
        container[pay_interval_type] = intervaltype
        container[quantity] = 1
        return container;
    })
    const CovList = covrage.filter(person =>
        person.quantity > 0).map(item => {
            let orderid = "order_id"
            let product_id = "product_id"
            let product_name = "product_name"
            let prod_type = "prod_type"
            let pay_interval_type = "pay_interval_type"
            let quantity = "quantity"
            const container = {};
            container[orderid] = order_id
            container[product_id] = item.id
            container[product_name] = item.name
            container[prod_type] = "addon"
            container[pay_interval_type] = intervaltype
            container[quantity] = item.quantity
            return container;
        })
    const [productlist, setProductlist] = useState([]);
    //console.log(CovList)
    //console.log(mainPro[0])

    CovList.push(mainPro[0]);
    console.log(CovList)

    function saveProduct() {
        fetch("https://replatform.acclaimedhw.com/replatform/api/add_orderitems", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({order_id:5,product_id:1,product_name:"test999",prod_type:"simple",pay_interval_type:"monthly",quantity:5})
            body: JSON.stringify(CovList)
        })
            .then((resp) => {
                resp.json().then((productlist) => {
                    //  console.warn("productlist", productlist)
                    // const resultMsg = (result.message)
                    setProductlist(productlist);
                    console.log(productlist)
                })
            })
    }

    // if (res == false) {
    //     console.log("Thank you StackOverflow, you're a very big gift for all programmers!");
    //     saveProduct();
       
    //    } else {
    //      console.log("not")
    //    }


   
    const Cove = () => (
        <>
            {covrage.map((pro, index) => (
                <div className="option" key={index}>
                    <ul>{(pro.quantity > 0) ? <li>{pro.quantity}x{pro.name}</li> : ""}
                    </ul>
                </div>
            ))}
        </>
    )
    const PaymentOption = e => {
        setPayment(e.target.value);
    }

    function subtotalfun() {
        if (totalMonthly && val === 2) {
            return totalMonthly
        }
        else if (totalYearly && val === 1 || val === null) {
            return totalYearly
        }
    }
    function subtotalfun2() {
        if (MonthlyPrice && val === 2) {
            return MonthlyPrice
        }
        else if (YearlyPrice && val === 1 || val === null) {
            return YearlyPrice
        }
    }
    // function totalfun() {
    //     if(totalMonthly && val === 2){
    //        return totalMonthly
    //       }
    //       else if(totalYearly && val === 1 || val === null){
    //         return totalYearly
    //       }
    //     }
    let subtotalall = subtotalfun()
    let subtotalall2 = subtotalfun2()
    function sub() {
        if (totalYearly) {
            return subtotalall
        } else if (YearlyPrice) {
            return subtotalall2
        }
    }
    let v1 = sub()
    const [subtotal, SetSubtotal] = useState(v1);
    const [total, SetTotal] = useState(v1);

    //console.log(CovList)
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
                                 <a className="showcoupon" onClick={onClick}>Click here to enter your code</a>
                            </div>
                            <p className="error-msg">{couponMsg}</p>
                            {visible ?
                                <form className="checkout_coupon woocommerce-form-coupon">
                                    <p>If you have a coupon code, please apply it below.</p>
                                    <p className="form-row form-row-first">
                                        <input type="text" className="input-text" placeholder="Coupon code"
                                         name="coupon_code" value={coupon_code} onChange={(e) =>{setCoupon_code(e.target.value)}}/>
                                    </p>
                                    <p className="form-row form-row-last">
                                        <button type="submit" className="button" value="Apply coupon" onClick={CouponData}>Apply coupon</button>
                                    </p>
                                </form> : null}
                        </div>
                        <p>{resultMsg}</p>
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
                                    </div>
                                </div>
                            </div>
                        </form>

                        <h3>Your order{subtotal}</h3>
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
                                                {covrage ? <Cove /> : null}
                                            </td>

                                            <td className="product-total">
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>

                                                        {val === 2 ? item.monthly_price : item.yearly_price}

                                                    </bdi>
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td>
                                            <strong>
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>
                                                        {(val === 2) ? totalMonthly : totalYearly}
                                                        {(val === 2) ? MonthlyPrice : YearlyPrice}
                                                        {/* {(!covrage) && (val == 1) ? MonthlyPrice : YearlyPrice} */}
                                                    </bdi>

                                                </span>
                                            </strong>
                                        </td>
                                    </tr>
                                    <tr className="order-total">
                                        <th>Total</th>
                                        <td>
                                            <strong>
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>
                                                        {(val === 2) ? totalMonthly : totalYearly}
                                                        {(val === 2) ? MonthlyPrice : YearlyPrice}
                                                        {/* {(!covrage) && (val == 1) totalMonthly? MonthlyPrice : YearlyPrice} */}
                                                    </bdi>

                                                </span>
                                            </strong>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="payment_option">
                            <label><Radio.Group onChange={PaymentOption} value={pay_method}>
                                <p></p>
                                <label><Radio value="cash">cash</Radio></label>
                                <label><Radio value="card">card</Radio></label></Radio.Group></label>
                        </div>
                        <div className="woocommerce-checkout-payment">
                            <ul className="wc_payment_methods payment_methods methods">
                                <li className={pay_method == "card" ? "wc_payment_method payment_method_authorize_net_aim showcard" : "hidecard"}>
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
                                <div>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}
export default CheckOut;
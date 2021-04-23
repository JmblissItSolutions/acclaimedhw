import React from 'react';
import { Helmet } from "react-helmet";
import Checkoutbg from "../assets/images/Checkoutbg.png";
const OrderReceived = () => {
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
                    <div className="order-received woocommerce">
                        <div className="woocommerce-order">
                            <p>Thank you. Your order has been received.</p>
                            <ul className="order_details">
                                <li className="woocommerce-order-overview__order order">Order number:<strong>12421</strong></li>
                                <li className="woocommerce-order-overview__date date">Date:<strong>April 9, 2021</strong></li>
                                <li className="woocommerce-order-overview__total total">Total:<strong>$450.00</strong></li>
                                <li className="woocommerce-order-overview__payment-method method">Payment Method<strong>Cash on delivery</strong></li>
                            </ul>
                            <p>Pay with cash upon delivery.</p>
                            <div className="woocommerce-order-details">
                                <h2 className="woocommerce-order-details__title">Order details</h2>
                                <div className="order_review">
                                    <table className="shop_table woocommerce-checkout-review-order-table">
                                        <thead>
                                            <tr>
                                                <th className="product-name">Product</th>
                                                <th className="product-total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="cart_item">
                                              <td className="product-name">Standard - Annual,Single
                                                <strong className="product-quantity"> × 1</strong>
                                              </td>
                                                <td className="product-total">
                                                    <span className="woocommerce-Price-amount amount">
                                                     <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">$</span>400.00
                                                     </bdi>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr className="cart-subtotal">
                                             <th>Subtotal</th>
                                              <td>
                                                 <strong>
                                                  <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                      <span className="woocommerce-Price-currencySymbol">$</span>750.00
                                                    </bdi>
                                                  </span>
                                                 </strong>
                                                </td>
                                            </tr>
                                            <tr className="order-total">
                                                <th>Payment method:</th>
                                                 <td>
                                                  <strong>
                                                   <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                     <span className="woocommerce-Price-currencySymbol">Cash on delivery</span>
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
                                                        <span className="woocommerce-Price-currencySymbol">$</span>750.00
                                                    </bdi>
                                                    </span>
                                                    </strong>
                                                </td>
                                            </tr>
                                            <tr className="order-total">
                                                <th>Note:</th>
                                                 <td>
                                                  <strong>
                                                   <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                     <span className="woocommerce-Price-currencySymbol">Any message</span>
                                                    </bdi>
                                                   </span>
                                                  </strong>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default OrderReceived;
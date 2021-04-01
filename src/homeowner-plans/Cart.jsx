import React from 'react';

export default function Cart({ cart, setCart,value,hometype }) {
  const getTotalSumYearly = () => {
    return cart.reduce(
      (sum, { yearly_price }) => sum + yearly_price,
      ""
    );
  };
  const getTotalSumMonthly = () => {
    return cart.reduce(
      (sum, { monthly_price }) => sum + monthly_price,
      ""
    );
  };

  const clearCart = () => {
    setCart([]);
  };



  return (
    <>
      <h4>Cart</h4>
      {/* {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )} */}
      <div className="products">
      {cart.map((product, index) => (
                <div className="option" key={index}>
                    <ul><li>1x {hometype} {product.name}</li></ul>
                </div>
              ))}
      </div>
      <div className="total">
              <h4>Total</h4>
              {value == 1 ? <span>{getTotalSumYearly()} /YR</span> : null}
              {value == 2 ? <span>{getTotalSumMonthly()} /MO</span> : null}
            </div>
      <div> </div>
    </>
  );
}
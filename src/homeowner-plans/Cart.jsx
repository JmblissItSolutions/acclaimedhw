import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export default function Cart({ cart, coverage, setCart, value, hometype }) {
  localStorage.removeItem('MonthlyPrice');
  localStorage.removeItem('YearlyPrice');
  let history = useHistory();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  // localStorage.clear()
  const Toalpricemonthly = () => {
    if(coverage){
    return  coverage.reduce((sum, i) => (
      sum += i.quantity * i.monthly_price
    ), 0).toFixed(2)}
  }

    const Toalpriceyearly = () => {
      if(coverage){
      return  coverage.reduce((sum, i) => (
        sum += i.quantity * i.yearly_price
      ), 0).toFixed(2)}}

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
 const totalMonthly = parseFloat(Toalpricemonthly())+parseFloat(getTotalSumMonthly())
 const totalYearly = parseFloat(Toalpriceyearly())+parseFloat(getTotalSumYearly())
 
 useEffect(()=>{
  if(coverage){
  localStorage.setItem('totalMonthly',JSON.stringify(totalMonthly))
  localStorage.setItem('totalYearly',JSON.stringify(totalYearly))
  }
})

useEffect(()=>{
  if(!coverage){
  localStorage.setItem('MonthlyPrice',JSON.stringify(getTotalSumMonthly()))
  localStorage.setItem('YearlyPrice',JSON.stringify(getTotalSumYearly()))
}})

  const clearCart = () => {
    setCart([]);
  };
const Cove = ()=>(
  <>
   {coverage.map((pro, index) => (
          <div className="option" key={index}>
            <ul>{pro.quantity > 0 ? <li>{pro.quantity}x{pro.name} </li> :""}</ul>
          </div>
        ))}
  </>
)

  return (
    <>
      <h4>Cart</h4>
      <div className="products">
        {cart.map((product, index) => (
          <div className="option" key={index}>
            <ul><li>1x {hometype} {product.name}</li></ul>
          </div>
        ))}

        {coverage ? <Cove/> : null }
       
      </div>
      
      <div className="total">
        <h4>Total</h4>
        {(coverage) && (value == 1) ? <span>{totalYearly} /YR</span> : null}
        {(coverage) && (value == 2) ? <span>{totalMonthly} /MO</span> : null}
        {(!coverage) && (value == 1) ? <span>{getTotalSumYearly()} /YR</span> : null}
        {(!coverage) && (value == 2) ? <span>{getTotalSumMonthly()}  /MO</span> : null}
      </div>

    </>
  );
}
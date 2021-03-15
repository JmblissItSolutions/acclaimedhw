import React from 'react'
import { Helmet } from "react-helmet";
import PlansandPricing from "./Realstate-plans/PlansandPricing";

const Shop =()=>{
    return(
        <>
          <Helmet>
             <title>Arizona Resources - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
             <meta name="description" content="Arizona Resources - Acclaimed Home Warranty" />
          </Helmet>
        <div>
            <h1>Shop</h1>
            <PlansandPricing/>
        </div>
        </>
    )
}
export default Shop;
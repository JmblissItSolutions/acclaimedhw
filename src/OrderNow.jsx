import React, { useState, useEffect } from 'react';
import APIUrl from "./Api"
import {Helmet} from "react-helmet";
import homeperfect from "./assets/images/home-perfect-bg.png";
import comparedoor from "./assets/images/compare-door-bg.png";
import arizona from "./assets/images/compare-arizona.jpg";
import Utah from "./assets/images/compare-utah.jpg";
import Nevada from "./assets/images/compare-nevada.jpg";
import Texas from "./assets/images/compare-texas.jpg";
import Idaho from "./assets/images/compare_idaho.jpg";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
const OrderNow = () =>{
	const rep = (APIUrl.defaults.assetsURL)
	const [data, setData] = useState([]);
	useEffect(async () => {
	 const result = await APIUrl.get(`/get_holocations`)
	 setData(result.data);
   }, []);
    return(
       <>
	     <Helmet>         
			<title>ORDER NOW - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
			<meta name="description" content="ORDER NOW - Acclaimed Home Warranty" />
        </Helmet>
        <div className="home-page">
		<section id="home-perfect-plan" style={{ backgroundImage: `url(${homeperfect})` }}>
            <div className="plans" style={{ backgroundImage: `url(${comparedoor})` }}>
              <div className="inner">
                {data.map(item => (
                  <div className="col-3" key={item.id} style={{ backgroundImage: `url(${rep}/${item.image})` }}>
                    <div className="perfect-cta">
                      <span className="perfect-cta__compare cormor">Compare</span>
                      <span className="perfect-cta__state">{item.location_name}</span>
                      <span className="perfect-cta__plans">Plans</span>
                    </div>
                    <div className="btn-cont">
                      <a href={'/homeowner-plans/' + item.slug} className="btn">compare homeowner&nbsp;plans</a>
                      <a href="/real-estate-orders/" className="btn">compare real estate&nbsp;plans&nbsp;</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>           
        </div>
       </>
    )
};
export default OrderNow;
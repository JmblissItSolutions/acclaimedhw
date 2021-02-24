import React from "react";
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
    return(
       <>
	     <Helmet>         
			<title>ORDER NOW - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
			<meta name="description" content="ORDER NOW - Acclaimed Home Warranty" />
        </Helmet>
        <div className="home-page">
          <section id="home-perfect-plan"  style={{ backgroundImage: `url(${homeperfect})` }}>
				   <div className="plans"  style={{ backgroundImage: `url(${comparedoor})` }}> 
					  <div className="inner">
						   <div className="col-3" style={{ backgroundImage: `url(${arizona})` }}>
							  <div className="perfect-cta">
                                <span className="perfect-cta__compare cormor">Compare</span>
                                <span className="perfect-cta__state">Arizona</span>
                                <span className="perfect-cta__plans">Plans</span>
							  </div>
							  <div className="btn-cont">
								<Link to="/homeowner-plans/arizona" className="btn">compare homeowner plans</Link>
								<a href="/real-estate-orders/" className="btn">compare real estate&nbsp;plans&nbsp;</a>
							  </div>
						 </div>
						<div className="col-2" style={{ backgroundImage: `url(${Utah})` }}>
							<div className="perfect-cta">
                                <span className="perfect-cta__compare cormor">Compare</span>
                                <span className="perfect-cta__state">Utah</span>
                                <span className="perfect-cta__plans">Plans</span>
							</div>
							<div className="btn-cont">
							   <Link to="/homeowner-plans/utah" className="btn">compare homeowner plans</Link>
							   <a href="/real-estate-orders/" className="btn">compare real&nbsp;estate&nbsp;plans</a>
							</div>
						</div>
						<div className="col-3" style={{ backgroundImage: `url(${Nevada})` }}>
							<div className="perfect-cta">
								<span className="perfect-cta__compare cormor">Compare</span>
								<span className="perfect-cta__state">Nevada</span>
								<span className="perfect-cta__plans">Plans</span>
							</div>
							<div className="btn-cont">
							   <Link to="/homeowner-plans/nevada" className="btn">compare homeowner plans</Link>
								<a href="/real-estate-orders/" className="btn">compare real estate&nbsp;plans&nbsp;</a>
							</div>
						</div>
						<div className="col-4" style={{ backgroundImage: `url(${Texas})` }}>
							<div className="perfect-cta">
								<span className="perfect-cta__compare cormor">Compare</span>
								<span className="perfect-cta__state">Texas</span>
								<span className="perfect-cta__plans">Plans</span>
							</div>
							<div className="btn-cont">
							   <Link to="/homeowner-plans/texas" className="btn">compare homeowner plans</Link>
								<a href="/real-estate-orders/" className="btn">compare real&nbsp;estate&nbsp;plans</a>
							</div>
						</div>
						<div className="col-2 idaho_img" style={{ backgroundImage: `url(${Idaho})` }}>
							<div className="perfect-cta">
								<span className="perfect-cta__compare cormor">Compare</span>
								<span className="perfect-cta__state">Idaho</span>
								<span className="perfect-cta__plans">Plans</span>
							</div>
							<div className="btn-cont">
							   <Link to="/homeowner-plans/idaho" className="btn">compare homeowner plans</Link>
								<a href="/real-estate-orders/" className="btn">compare real&nbsp;estate&nbsp;plans</a>
							</div>
						</div>
					</div>
			  </div>
			</section>             
        </div>
       </>
    )
};
export default OrderNow;
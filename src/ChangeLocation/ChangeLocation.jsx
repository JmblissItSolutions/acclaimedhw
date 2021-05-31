import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import homeperfect from "../assets/images/home-perfect-bg.png";
import comparedoor from "../assets/images/compare-door-bg.png";
import arizona from "../assets/images/compare-arizona.jpg";
import Utah from "../assets/images/compare-utah.jpg";
import Nevada from "../assets/images/compare-nevada.jpg";
import Texas from "../assets/images/compare-texas.jpg";
import Idaho from "../assets/images/compare_idaho.jpg";
import "../assets/css/ChangeLocation.css";

const ChangeLocation = () => {
  let history = useHistory();
  return (
    <>
      <Helmet>
        <title>Join Acclaimed Home Warranty Team as Contractors, coverage area for five Western US States</title>
        <meta name="description" content="Join Acclaimed Home Warranty Team as Contractors, coverage area for five Western US States" />
      </Helmet>
      <div className="home-page">
          <section id="location-perfect-plan">
            <div className="location-plans" >
              <h1>choose a location</h1>
              <div className="inner">
                <div className="col-3" style={{ backgroundImage: `url(${arizona})`}} onClick={() => history.push("/resources/arizona")}>
                  <div className="perfect-cta" >
                    <span className="perfect-cta__state">Arizona</span>
                  </div> 
                </div>
                <div className="col-2" style={{ backgroundImage: `url(${Utah})`}} onClick={() => history.push("/resources/utah")}>
                  <div className="perfect-cta">
                    <span className="perfect-cta__state">Utah</span>
                  </div>
                </div>
                <div className="col-3" style={{ backgroundImage: `url(${Nevada})`}} onClick={() => history.push("/resources/nevada")}>
                  <div className="perfect-cta">
                    <span className="perfect-cta__state">Nevada</span>
                  </div>
                </div>
                <div className="col-4" style={{ backgroundImage: `url(${Texas})`}} onClick={() => history.push("/resources/texas")}>
                  <div className="perfect-cta">
                    <span className="perfect-cta__state">Texas</span>
                  </div>
                </div>
                <div className="col-2 idaho_img" style={{ backgroundImage: `url(${Idaho})`}} onClick={() => history.push("/resources/idaho")}>
                  <div className="perfect-cta">
                    <span className="perfect-cta__state">Idaho</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    </>
  )
};
export default ChangeLocation;
import React from "react";
import { Helmet } from "react-helmet";
import contractorbg from "./assets/images/Contractorbg.png";
import blueleads from "./assets/images/blue-leads.png";
import blueadvertising from "./assets/images/blue-advertising.png"
import blueform from "./assets/images/blue-form.png";
import bluegraph from "./assets/images/blue-graph.png";
import Contractorsform from "./component/Contractorsform";
import Carousel from 'react-bootstrap/Carousel';
import silverstarelectirc from "./assets/images/silverstarelectric.jpg";
import asiszservices from "./assets/images/asiszservices.png";
import latticebackground from "./assets/images/lattice-background.png";

const Contractors = () => {
  return (
    <>
      <Helmet>
        <title>Join Acclaimed Home Warranty Team as Contractors, coverage area for five Western US States</title>
        <meta name="description" content="Join Acclaimed Home Warranty Team as Contractors, coverage area for five Western US States" />
      </Helmet>
      <div className="home_page contractor-pg">
        <div className="top_img">
          <img src={contractorbg} alt="contractorbg"/>
        </div>
        <div className="contrc-text">
          <h1>Acclaimed Contractors</h1>
          <p>Being part of the Acclaimed Home Warranty team means making our clients feel secure in every aspect of their home. We only work with the best contractors, so if you never settle for anything less than exceptional service, we want to hear from you.</p>
        </div>
        <section className="dual-color clear">
          <section className="why-join">
            <div className="inner">
              <div className="ahw-pull-left">
                <h2>why join our team?</h2>
                <div className="icon-cont">
                  <p><i className="achi blue-leads"><img src={blueleads} alt="free-leads" /></i>free leads</p>
                  <p><i className="achi blue-advertising"><img src={blueadvertising} alt="free-advertising" /></i>free advertising</p>
                  <p><i className="achi blue-graph"><img src={bluegraph} alt="free-graph" /></i>steady business</p>
                  <p><i className="achi blue-form"><img src={blueform} alt="free-form" /></i>customer feedback</p>
                </div>
              </div>
            </div>
          </section>
          <section className="reviews">
            <div className="inner">
              <div className="ahw-pull-left">
                <Carousel>
                  <Carousel.Item>
                    <div className="testimonial-slider slick-initialized slick-slider slick-dotted">
                      <div className="slick-list draggable">
                        <div className="slick-track">
                          <div className="img-cont">
                            <img src={silverstarelectirc} alt="SilverStar Electric" />
                          </div>
                          <Carousel.Caption>
                            <div className="text-cont">
                              <p><strong>SilverStar Electric</strong>| Jake Harris</p>
                              <p>""Our experience with Acclaimed always gives excellent communication, allowing us to do our job fast and efficiently. In all aspects of our business with Acclaimed, from start to finish, they are easy to work with. I'd also like to note that Acclaimed also pays invoices in a timely manner. We love working with Acclaimed Home Warranty and hope to continue a long business relationship.
                            Thanks again for the opportunity to work with you.""</p>
                            </div>
                          </Carousel.Caption>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="testimonial-slider slick-initialized slick-slider slick-dotted">
                      <div className="slick-list draggable">
                        <div className="slick-track">
                          <div className="img-cont">
                            <img src={asiszservices} alt="asiszservices" />
                          </div>
                          <Carousel.Caption>
                            <div className="text-cont">
                              <p><strong>As Isz Services</strong>|Shane</p>
                              <p>"“Working with Acclaimed home warranty is great. The organization is very professionally and truly cares about its customers. They want the best contractors they can find to make sure they are delivering the best to their customers. Acclaimed Home Warranty is hands down, a top notch organization.”"</p>
                            </div>
                          </Carousel.Caption>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </section>
          <section className="form-cont" style={{ backgroundImage: `url(${latticebackground})`}}>
            <Contractorsform />
          </section>
        </section>
      </div>
    </>
  );
}
export default Contractors;
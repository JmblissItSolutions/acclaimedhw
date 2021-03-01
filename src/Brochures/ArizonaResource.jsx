import React, { useState } from "react";
import {Helmet} from "react-helmet";
import brochersbanner from"../assets/images/brochers-banner.png";
import locationmarker from "../assets/images/location-marker.png";
import pdf from "../assets/images/pdf.png";
import video1 from "../assets/images/vid-1.jpg";
import video2 from "../assets/images/vid-2.jpg";
import video3 from "../assets/images/vid-3.jpg";
import video4 from "../assets/images/vid-4.jpg";
import play from "../assets/images/play.png";

const ArizonaResource = () =>{
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
      };

return(
       <>
          <Helmet>         
			<title>Arizona Resources - Acclaimed Home Warranty : Acclaimed Home Warranty</title>
			<meta name="description" content="Arizona Resources - Acclaimed Home Warranty" />
        </Helmet>
        <div className="home_page">
            <div className="top_img">
                <img src={brochersbanner} alt=" brochers-banner"/>
            </div>
            <div className="brochures-text">
            <h1>Brochures</h1>
            </div>
            <section className="change-location-header">
            <div className="inner">
					<span className="big-upper">Arizona Resources</span>
					<span className="location"  onClick={toggleClass}>{isActive ? '.slidedown': null}Change Location 
                 
                    <img src={locationmarker} alt=" brochers-banner" className="locationmarker"/></span>
				</div>   
            </section>
            <section className="documents-light-back">
              <div className="container">
                 <h2>Documents</h2>   
               <div className="doc-cont">
                <div className="doc">
                  <a href="https://acclaimedhw.com/wp-content/uploads/2020/03/FullbrochureAZrealtor-AHW.pdf" className="venobox vbox-item" data-vbtype="iframe" data-gall="docs">
                     <i className="achi-pdf"> <img src={pdf} alt="pdf"/></i>
                     <p className="name">Brochure (real estate transaction) w Example Contract</p>
                  </a>
                </div>
                <div className="doc">
                  <a href="https://acclaimedhw.com/wp-content/uploads/2020/03/Acclaimed-Home-Warranty-Price-Options-Realtors-AZ.pdf" className="venobox vbox-item" data-vbtype="iframe" data-gall="docs">
                     <i className="achi-pdf"> <img src={pdf} alt="pdf"/></i>
                     <p className="name">Realtors Price & Options</p>
                  </a>
                </div>
                <div className="doc">
                  <a href="https://acclaimedhw.com/wp-content/uploads/2020/03/AHW-Understanding-Your-Home-Warranty-AZ.pdf" className="venobox vbox-item" data-vbtype="iframe" data-gall="docs">
                     <i className="achi-pdf"> <img src={pdf} alt="pdf"/></i>
                     <p className="name">Understanding Your Home Warranty</p>
                  </a>
                </div>
                <div className="doc">
                  <a href="https://acclaimedhw.com/wp-content/uploads/2020/03/Acclaimed-Home-Warranty-Price-Guide-Consumer-AZ.pdf" className="venobox vbox-item" data-vbtype="iframe" data-gall="docs">
                  <i className="achi-pdf"> <img src={pdf} alt="pdf"/></i>
                  <p className="name">Understanding Your Home Warranty</p>
                  </a>
                </div>
             </div>
              </div>
            </section>
            <section className="videos-light-back">
               <div className="container">
                  <h2>videos</h2> 
                  <div className="vid-cont">
                     <div className="video">
                        <div className="img-cont">
                           {/* <a href="https://www.youtube.com/watch?v=1mzkbJSIMHc" data-vbtype="video" data-gall="resourceVideos" className="venobox vbox-item"> */}
                              <img src={video1} alt="video1" className="video1"/>
                              <img src={play} alt="play" className="play"/>
                           {/* </a> */}
                           <p className="name">Why Choose Acclaimed?</p>
                        </div>
                     </div>
                     <div className="video">
                        <div className="img-cont">
                        {/* <a href="https://youtu.be/QsmndywTysA" data-vbtype="video" data-gall="resourceVideos" className="venobox vbox-item"> */}
									<img src={video2} alt="video2"/>
                           <img src={play} alt="play" className="play"/>
								{/* </a> */}
                           <p className="name">How To Use Our New Website</p>
                        </div>
                     </div>
                     <div className="video">
                        <div className="img-cont">
                        {/* <a href="https://youtu.be/QsmndywTysA" data-vbtype="video" data-gall="resourceVideos" className="venobox vbox-item"> */}
									<img src={video3} alt="video3"/>
                           <img src={play} alt="play" className="play"/>
								{/* </a> */}
                           <p className="name">Donating to Family Promise</p>
                        </div>
                     </div>
                     <div className="video">
                        <div className="img-cont">
                           {/* <a href="https://www.youtube.com/watch?v=1mzkbJSIMHc" data-vbtype="video" data-gall="resourceVideos" className="venobox vbox-item"> */}
                              <img src={video4} alt="video1" className="video4"/>
                              <img src={play} alt="play" className="play"/>
                           {/* </a> */}
                           <p className="name">Live you Life ... Don't Fix It! </p>
                        </div>
                     </div>
                  </div>
               </div> 
            </section>
         </div>
       </>
    )
};
export default ArizonaResource;
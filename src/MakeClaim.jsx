import React from "react";
import MakeAClaim from"./assets/images/MakeAClaim.png";
import leackage from "./assets/images/leackage.jpeg"
import playicon from "./assets/images/play-icon.png"
import Iframe from 'react-iframe'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const MakeClaim = () =>{
    return(
      <>
      <div className="home_page">
          <div className="top_img">
            <img src={MakeAClaim } alt="MakeClaim"/>
          </div>
             <div className="container">
                <div className="upper">
                    <h1>make a claim</h1>
                </div>
                <div className="inner">
                  <h4 className="sub-txt">For the fastest service, please call us at <a href="tel:888-494-9460">888-494-9460</a>&nbsp;during business hours.</h4>
                   <section className="video-sec claimPage" style={{ backgroundImage: `url(${leackage})` }}>
                     <div className="img-pop">
                        <Popup trigger={<button className="play-btn"><img src={playicon } alt="playicon"/> </button>} modal nested>
                          {close => (
                          <div className="modal">
                            <button className="close" onClick={close}>
                              &times;
                            </button>
                            <div className="content">
                              <iframe width="100%" height="400px" src="https://www.youtube.com/embed/1mzkbJSIMHc" frameborder="0"></iframe>
                            </div>
                          </div>
                          )}
                       </Popup>
                     </div>
                  </section> 
                </div>
                <div className="form-box-wrap">
                   <h6>Otherwise, please tell us about the issue(s) by filling out the form below a service fee will be required.</h6>
                        <div className="form">
                                    <form>
                                        <label><input type="text" placeholder="Name*" name="name" /></label>
                                        <label><input type="number" placeholder="Phone number*" name="phonenumber" /></label>
                                        <label><input type="email" placeholder="Email*" name="email" /></label>
                                        <label><input type="text" placeholder="StreetAdress*" name="StreetAdress"/></label>
                                        <label><input type="text" placeholder="City*" name="City"/></label>
                                        <label><input type="number" placeholder="Zip-Code*" name="phonenumber"/></label>
                                        <label><textarea placeholder="please explain the detailes of your" className="field-msg"></textarea></label>
                                        <span>Is this an emergency?*</span>
                                        <label><input type="radio" id="emergency" value="No,this is not an emergency"/>No,this is not an emergency</label>
                                        <label><input type="radio" id="emergency" value="Yes,this is an emergency"/>Yes,this is an emergency</label>
                                        <span>Preferred Contact Method*</span>
                                        <label><input type="checkbox" id="Phone" name="Phone" value="Phone"/>Phone</label>
                                        <label><input type="checkbox" id="Email" name="Email" value="Email"/>Email</label>
                                        <label><input type="checkbox" id="Text" name="Text" value="Text"/>Text</label>
                                        <span>Type of Technician(s) Required*</span>
                                        <label><input type="checkbox" id="Electrician" name="Electrician" value="Electrician"/>Electrician</label>
                                        <label><input type="checkbox" id="Plumber" name="Plumber" value="Plumber"/>Plumber</label>
                                        <label><input type="checkbox" id="ApplianceTechnician" name="Appliance Technician" value="Appliance Technician"/>Appliance Technician</label>
                                        <label><input type="checkbox" id="other" name="other" value="other"/>other</label>
                                        <input type="submit" value="Submit"/>
                                    </form>
                                 </div>        
                        </div> 
               </div>
      </div>
    </>
    )    
};
export default MakeClaim;
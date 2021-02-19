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
                                         <label>
                                         <select name="Alabama" id="Alabama">
                                          <option value="saab">State</option>
                                          <option value="Alabama">Alabama</option>
                                          <option value="Alaska">Alaska</option>
                                          <option value="Arizona">Arizona</option>
                                          <option value="Arkansas">Arkansas</option>
                                          <option value="California">California</option>
                                          <option value="Colorado">Colorado</option>
                                          <option value="Connecticut">Connecticut</option>
                                          <option value="Delaware">Delaware</option>
                                          <option value="Florida">Florida</option>
                                          <option value="Georgia">Georgia</option>
                                          <option value="Hawaii">Hawaii</option>
                                          <option value="Idaho">Idaho</option>
                                          <option value="Illinois">Illinois</option>
                                          <option value="Indiana">Indiana</option>
                                          <option value="Iowa">Iowa</option>
                                          <option value="Kansas">Kansas</option>
                                          <option value="Kentucky">Kentucky</option>
                                          <option value="Louisiana">Louisiana</option>
                                          <option value="Maine">Maine</option>
                                          <option value="Maryland">Maryland</option>
                                          <option value="Massachusetts">Massachusetts</option>
                                          <option value="Michigan">Michigan</option>
                                          <option value="Minnesota">Minnesota</option>
                                          <option value="Mississippi">Mississippi</option>
                                          <option value="Missouri">Missouri</option>
                                          <option value="Montana">Montana</option>
                                          <option value="Nebraska">Nebraska</option>
                                          <option value="Nevada">Nevada</option>
                                          <option value="New Hampshire">New Hampshire</option>
                                          <option value="New Jersey">New Jersey</option>
                                          <option value="New Mexico">New Mexico</option>
                                          <option value="New York">New York</option>
                                          <option value="North Carolina">North Carolina</option>
                                          <option value="North Dakota">North Dakota</option>
                                          <option value="Ohio">Ohio</option>
                                          <option value="Oklahoma">Oklahoma</option>
                                          <option value="Oregon">Oregon</option>
                                          <option value="Pennsylvania">Pennsylvania</option>
                                          <option value="Rhode Island">Rhode Island</option>
                                          <option value="South Carolina">South Carolina</option>
                                          <option value="South Dakota">South Dakota</option>
                                          <option value="Tennessee">Tennessee</option>
                                          <option value="Texas">Texas</option>
                                          <option value="Utah">Utah</option>
                                          <option value="Vermont">Vermont</option>
                                          <option value="Virginia">Virginia</option>
                                          <option value="Washington">Washington</option>
                                          <option value="West Virginia">West Virginia</option>
                                          <option value="Wisconsin">Wisconsin</option>
                                          <option value="Wyoming">Wyoming</option>
                                          <option value="Armed Forces Americas">Armed Forces Americas</option>
                                          <option value="Armed Forces Europe">Armed Forces Europe</option>
                                          <option value="Armed Forces Pacific">Armed Forces Pacific</option>
                                        </select>
                                         </label>
                                        <label><input type="number" placeholder="Zip-Code*" name="phonenumber"/></label>
                                        <label><textarea placeholder="please explain the detailes of your" className="field-msg"></textarea></label>
                                       <label><span>Is this an emergency? *</span></label>
                                        <input type="radio" value="Male" name="gender" /> No, this is not an emergency<br></br>
                                        <label><input type="radio" value="Female" name="gender" /> Yes, this is an emergency</label>
                                        <label><span>Preferred Contact Method*</span></label>
                                        <label><input type="checkbox" id="Phone" name="Phone" value="Phone"/> Phone</label>
                                        <label><input type="checkbox" id="Email" name="Email" value="Email"/> Email</label>
                                        <label><input type="checkbox" id="Text" name="Text" value="Text"/> Text</label>
                                        <label><span>Type of Technician(s) Required*</span></label>
                                        <label><input type="checkbox" id="Electrician" name="Electrician" value="Electrician"/> Electrician</label>
                                        <label><input type="checkbox" id="Plumber" name="Plumber" value="Plumber"/> Plumber</label>
                                        <label><input type="checkbox" id="ApplianceTechnician" name="Appliance Technician" value="Appliance Technician"/> Appliance Technician</label>
                                        <label><input type="checkbox" id="other" name="other" value="other"/> other</label>
                                        <input type="submit" value="Submit" className="claim_sub_btn" />
                                    </form>
                                 </div>        
                        </div> 
               </div>
      </div>
    </>
    )    
};
export default MakeClaim;
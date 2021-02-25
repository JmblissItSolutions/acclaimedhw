import React from "react";
import contactusvertical from "./../../assets/images/contact-us-vertical.png";
import {FacebookFilled,InstagramOutlined } from '@ant-design/icons';
const SocialFollow = () =>{
    return(
        <>
          <div className="contact-us-flag">
          <div>
             <img src={contactusvertical} alt="contact-us-vertical"/>
         </div>
           <div className="antfb-icons"><FacebookFilled/></div>
             <div className="antinsta-icons"><InstagramOutlined /></div>
          </div>
        </>
    ) 
};
export default SocialFollow;
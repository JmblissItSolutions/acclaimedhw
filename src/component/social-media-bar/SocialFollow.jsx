import React from "react";
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialFollow = () => {
  return (
    <>
      <div className="contact-us-flag">
        <a href="https://www.facebook.com/acclaimedhomewarranty/" target="_blank" title="" className="social_icons"><FaFacebook /></a>
        <a href="https://www.instagram.com/acclaimedhwslc/?hl=en" target="_blank" title="" className="social_icons"><FaInstagram /></a>
        <a href="https://acclaimedhw.com/contact-us/" className="desktop" title="">
        Contact us
			</a>
      </div>
    </>
  )
};
export default SocialFollow;
import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import homewarranty from "../assets/images/homewarranty.png";

const RealStateOrder = () => {
    // const [radio, setRadio] = useState("");
    // const onChange = (e) => {
    //     setRadio(e.target.value)
    // }
    const [isActive, setActive] = useState("false");
    const handleShow = () => {
        setActive(!isActive);
    };
    const [isSeller, setSeller] = useState("false");
    const handleToggle = () => {
      setSeller(!isSeller);
  }
    return (
        <>
            <div className="home_page">
                <div className="top_img">
                    <img src={homewarranty} alt="homewarranty" />
                </div>
                <div className="realstate">
                    <h1>Real Estate Orders</h1>
                </div>
                <div className="container">
                    <div className="contentbox0">
                        <h4>I want to get a home warranty for a property in:</h4>
                        <FormControl >
                            <RadioGroup>
                                <FormControlLabel value="utah" control={<Radio/>} label="UTAH" onClick={handleShow} />
                                <FormControlLabel value="idaho" control={<Radio/>} label="IDAHO" onClick={handleShow} />
                                <FormControlLabel value="nevada" control={<Radio/>} label="NEVADA" onClick={handleShow} />
                                <FormControlLabel value="arizona" control={<Radio/>} label="ARIZONA" onClick={handleShow} />
                                <FormControlLabel value="texas" control={<Radio/>} label="TEXAS" onClick={handleShow} />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className={`contentbox0 ${isActive ? "contentbox1" : ""}`}>
                        <h4>Let us know what type of coverage this is...</h4>
                        <FormControl>
                            <RadioGroup>
                                <FormControlLabel value="Buyer's Coverage" control={<Radio/>} label="Buyer's Coverage" onClick={handleToggle}  />
                                <FormControlLabel value="Listing/Seller's Coverage" control={<Radio/>} label="Listing/Seller's Coverage" onClick={handleToggle} />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className={`contentbox0 ${isSeller ? "contentbox2" : ""}`}>
                        <h4>Please begin by answering these questions...</h4>
                        <div className="orders__flex i-am">
                            <div className="orders__flex-child">
                                <article className="ccol n1">
                                    <span>I am the
						              <select ng-model="fields.userTitle" className="ng-valid ng-dirty ng-valid-parse ng-touched">
                                        <option value="escrow-officer">Escrow Officer</option>
                                        <option value="buyer-agent">Buyer's Agent</option>
                                        <option value="listing-agent">Listing Agent</option>
                                        <option value="buyer">Buyer</option>
                                      </select>
                                    </span>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default RealStateOrder;
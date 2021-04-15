import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import ApplicationInformation from "./Realstate-plans/ApplicationInformation";
// import SingleConstruction from "./Realstate-plans/SingleConstruction";
// import SingleStandard from "./Realstate-plans/SingleStandard"; 
// import CondoPlans from "./Realstate-plans/CondoPlans";
// import DuplexPlans from "./Realstate-plans/DuplexPlans";
// import TriplexPlans from "./Realstate-plans/TriplexPlans";
// import FourplexPlans from "./Realstate-plans/FourplexPlans";
const Shop =()=>{
    const ref = useRef(null);
const [input, setinput] = useState("")
    const myfunc = (e) => {
      console.log("I was activated 5 seconds later");
      setinput(e.target.id)
      console.log(input)
    };
  
    useEffect(() => {
      setTimeout(() => {
        ref.current.click();
      }, 5000); //miliseconds
    }, []);
    return (
      <button ref={ref} id="5" onClick={myfunc}>
        TEST
      </button>
    );
}
export default Shop;
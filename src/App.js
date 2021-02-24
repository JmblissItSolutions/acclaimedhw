
import './App.css';
import './assets/css/header.css';
import './assets/css/footer.css';
import './assets/css/Home-Warranty.css';
import './assets/css/home.css';
import "./assets/css/contact.css";
import "./assets/css/makeclaim.css";
import "./assets/css/OrderNow.css";
import "./assets/css/Brochers.css";
import "./assets/css/MemberAdvantages.css";
import "./assets/css/Faq.css";
import "./assets/css/Contractors.css";
import "./assets/css/AboutUs.css";
import "./assets/css/plan.css";
import "./assets/css/SocialFollow.css";
import { Route, Switch} from "react-router-dom";
import { useState, useEffect } from "react"
import HomeWarranty from "./Home-Warranty"
import  Home  from "./Home";
import  Contact  from "./Contact";
import MakeClaim from "./MakeClaim";
import OrderNow from "./OrderNow";
import Brochers from "./Brochers";
import MemberAdvantages from "./MemberAdvantages";
import Faq from "./Faq";
import Contractors from "./Contractors";
import AboutUs from "./AboutUs";
import Arizona from "./homeowner-plans/Arizona"; 
import Utah from "./homeowner-plans/Utah";
import Nevada from "./homeowner-plans/Nevada";
import Texas from "./homeowner-plans/Texas"; 
import Idaho from "./homeowner-plans/Idaho";
import SocialFollow from "./component/social-media-bar/SocialFollow";    
import  Error  from "./Error";
import Menu from "./Menu";
import { Footer, FooterBottom } from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 2);
    });
  }, []); 
  return (
    <>
    <div className="App">
      <header className={scroll ? "fixedHeader" : "staticHeader"}>
      <div className="container">
       <Menu/>
      </div>
      </header>
      <SocialFollow/>
      <div className="pagecontent">
      <main>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/home-warranty" component={HomeWarranty} exact/>
                <Route path="/order-now" component={OrderNow} exact/>
                <Route path="/brochers" component={Brochers} exact/>
                <Route path="/member-advantages" component={MemberAdvantages} exact/>
                <Route path="/home-warranty-faqs" component={Faq} exact/>
                <Route path="/contractors" component={Contractors} exact/>
                <Route path="/about-us" component={AboutUs} exact/>
                <Route path="/make-a-claim" component={MakeClaim} exact/>
                <Route path="/contact-us" component={Contact} exact/> 
                <Route path="/homeowner-plans/arizona" component={Arizona} exact/>
                <Route path="/homeowner-plans/utah" component={Utah} exact/>
                <Route path="/homeowner-plans/nevada" component={Nevada} exact/>
                <Route path="/homeowner-plans/texas" component={Texas} exact/>
                <Route path="/homeowner-plans/idaho" component={Idaho} exact/>
                <Route component={Error}/>
            </Switch>
        </main>
      </div>
      <footer className="footer">
      <div className="container">
      <Footer />
      </div>
      <FooterBottom/>
      </footer>
      </div>
    </>
  );
}

export default App;

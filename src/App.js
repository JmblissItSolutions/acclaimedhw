
import './App.css';
import './assets/css/header.css';
import './assets/css/footer.css';
import './assets/css/home.css';
import "./assets/css/contact.css";
import "./assets/css/makeclaim.css";
import "./assets/css/OrderNow.css";
import "./assets/css/Brochers.css";
import "./assets/css/MemberAdvantages.css";
import "./assets/css/Faq.css";
import "./assets/css/Contractors.css";
import "./assets/css/AboutUs.css";
import { Route, Switch } from "react-router-dom";
import  Home  from "./Home";
import  Contact  from "./Contact";
import MakeClaim from "./MakeClaim";
import OrderNow from "./OrderNow";
import Brochers from "./Brochers";
import MemberAdvantages from "./MemberAdvantages";
import Faq from "./Faq";
import Contractors from "./Contractors";
import AboutUs from "./AboutUs";                
import  Error  from "./Error";
import Menu from "./Menu";
import { Footer, FooterBottom } from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <div className="App">
      <header>
      <div className="container">
      <Menu />
      </div>
      </header>
      <div className="pagecontent">
      <main>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/contact" component={Contact} exact/>
                <Route path="/makeclaim" component={MakeClaim} exact/>
                <Route path="/ordernow" component={OrderNow} exact/>
                <Route path="/brochers" component={Brochers} exact/>
                <Route path="/memberadvantages" component={MemberAdvantages} exact/>
                <Route path="/faq" component={Faq} exact/>
                <Route path="/contractors" component={Contractors} exact/>
                <Route path="/aboutus" component={AboutUs} exact/>
                <Route component={Error} />
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

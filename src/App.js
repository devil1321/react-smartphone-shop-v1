import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar  from "./Components/Navbar"
import ProductList from "./Components/ProductList"
import Details from "./Components/Details"
import Cart from "./Components/Cart"
import Error from "./Components/Error"
import Modal from "./Components/Modal"
import Footer from "./Components/Footer"
function App() {
    return ( 
        <div className = "container-fluid p-0">
          <Navbar />
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route path="*" component={Error} />
            </Switch>
            <Modal />
          <Footer />
        </div>
    );
}

export default App;
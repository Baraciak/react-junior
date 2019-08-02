import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import Payment from './components/payment';
import App from './App';


ReactDOM.render(
    <Router>
            <Route path={["/", "/home/:name/:surname"]} exact component={App} />
            <Route path={"/payment"} component={Payment} />
    </Router>, document.getElementById('root'));

//render payMent btn
const paymentBtn = <button type="submit" className="btn btn-info"><a href="/payment">Pay</a></button>
ReactDOM.render(paymentBtn, document.querySelector("#payBtn"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

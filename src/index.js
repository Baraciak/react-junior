import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Payment from './components/payment';


ReactDOM.render(
    <Router>
        <Route path="/" exact component={App} />
        <Route path="/payment/" component={Payment} />
    </Router>, document.getElementById('root'));

//render payMent btn
const paymentBtn = <button type="submit" className="btn btn-info"><a href="/payment">Pay</a></button>
ReactDOM.render(paymentBtn, document.querySelector("#payBtn"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

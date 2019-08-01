import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import AppRouter from './AppRouter';

ReactDOM.render(
    // <Router >
    //     <Route path="/" component={App} />
    //     <Route path="/payment" component={Payment} />
    // </Router>

// )
<AppRouter />
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

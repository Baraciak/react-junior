import React, { Component } from 'react';
import App from './App';
import Payment from './components/payment';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AppRouter extends Component {
  render(){
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/payment/">Payment</Link>
              </li>
            </ul>
          </nav>
  
          <Route path="/" exact component={App} />
          <Route path="/payment/" component={Payment} />
        </div>
      </Router>
    );
  }
}
  
  export default AppRouter;
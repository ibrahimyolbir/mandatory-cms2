import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './components/home';
import Cartp from './components/cart';
import Productdetails from './components/productdetails';
import Checkout from './components/checkout';
import Done from './components/done';

import { ModalProvider } from "react-modal-hook";
import './App.css';
function App() {

 

  return (
    <Router>
      <ModalProvider>
      <div className="App">
        <header>
          <h2><i className="fab fa-apple"></i> APPLE</h2>
          <Cartp/>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
          </ul>
        </header>

        <Route exact path="/" component={Home} />
        <Route path="/productdetails/:id" component={Productdetails} />
        <Route path="/checkout" component={Checkout}/>
        <Route path="/done" component={Done}/>
      </div>
      </ModalProvider>
    </Router>
  )
};

export default App;

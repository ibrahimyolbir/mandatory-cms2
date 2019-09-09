import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './components/home';
import Productdetails from './components/productdetails';
import './App.css';
const App = () => (

  <Router>
    <div  className="App">
      <header>
        <h5>ARTICLES ABOUT</h5>
        <h1>COMPUTERS & INTERNET</h1> 
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
        </ul>
      </header>
      <Route exact path="/" component={Home} />
      <Route path="/productdetails/:id" component={Productdetails} />

    </div>

  </Router>
);

export default App;

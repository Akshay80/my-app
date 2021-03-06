import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './components/Contact';
import Service from './components/Service';
import About from './components/About';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
          <Route path="/">
            <Header />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

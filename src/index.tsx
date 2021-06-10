import "./App.css"
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";



ReactDOM.render(
  <React.StrictMode>
    <Header/>

    <Router>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>

    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);


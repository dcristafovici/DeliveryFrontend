import "./App.css"
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache()
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Header/>
      <Router>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


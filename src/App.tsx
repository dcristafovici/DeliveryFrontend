import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Restaurant from './Pages/Restaurant';
import ScrollToTop from './misc/ScrollToTop';

const App:React.FC = () => (
  <>
    <Header />

    <Router>
      <>
        <ScrollToTop />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/restaurant/:id" component={Restaurant} />
        </Switch>
      </>
    </Router>

    <Footer />
  </>
);

export default App;

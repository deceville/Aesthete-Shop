import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation, Shop_Grid, Single_Product, Footer, Home, About, Blog, Contact } from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/shop-grid" exact component={() => <Shop_Grid />} />
          <Route path="/single-product" exact component={() => <Single_Product />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/blog" exact component={() => <Blog />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

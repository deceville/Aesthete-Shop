import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer } from "./components";
import { Home, ShopGrid, SingleProduct, About, Blog, Contact } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/shop-grid" exact component={() => <ShopGrid />} />
          <Route
            path="/single-product"
            exact
            component={() => <SingleProduct />}
          />
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

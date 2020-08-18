import React, { useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer } from "./components";
import {
  Home,
  ShopGrid,
  SingleProduct,
  About,
  Blog,
  BlogDetails,
  Contact,
} from "./pages";

function App() {
  useEffect(() => {
    let scripts = [
      { src: "js/vendor/jquery-3.2.1.min.js" },
      { src: "js/popper.min.js" },
      { src: "js/bootstrap.min.js" },
      { src: "js/plugins.js" },
      { src: "js/active.js" },
    ];
    scripts.map((item) => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = false;
      document.body.appendChild(script);
    });
  }, []);

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
          <Route path="/blog-detail" exact component={() => <BlogDetails />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

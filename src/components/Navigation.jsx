import React from "react";
import { Link, withRouter } from "react-router-dom";
import { logo } from "../assets/images";
import SearchProduct from "./SearchProduct";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const product = importAll(
  require.context(
    "../assets/images/product/sm-img",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

function Navigation(props) {
  return (
    <div className="navigation">
      {/* Header */}
      <header
        id="wn__header"
        className="header__area header__absolute sticky__header"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-6 col-lg-2">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo images" />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-block">
              <nav className="mainmenu__nav">
                <ul className="meninmenu d-flex justify-content-start">
                  <li className="drop with--one--item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="drop">
                    <Link to="/shop-grid">Shop</Link>
                    <div className="megamenu mega03">
                      <ul className="item item03">
                        <li className="title">Shop Layout</li>
                        <li>
                          <Link to="/shop-grid">Shop Grid</Link>
                        </li>
                        <li>
                          <Link to="/single-product">Single Product</Link>
                        </li>
                      </ul>
                      <ul className="item item03">
                        <li className="title">Shop Page</li>
                        <li>
                          <Link to="/my-account">My Account</Link>
                        </li>
                        <li>
                          <Link to="/cart">Cart Page</Link>
                        </li>
                        <li>
                          <Link to="/checkout">Checkout Page</Link>
                        </li>
                        <li>
                          <Link to="/wishlist">Wishlist Page</Link>
                        </li>
                        <li>
                          <Link to="/error404">404 Page</Link>
                        </li>
                        <li>
                          <Link to="/faq">Faq Page</Link>
                        </li>
                      </ul>
                      <ul className="item item03">
                        <li className="title">Bargain Books</li>
                        <li>
                          <Link to="/shop-grid">Bargain Bestsellers</Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">Activity Kits</Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">B&amp;N Classics</Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">Books Under $5</Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">Bargain Books</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="drop">
                    <Link to="/shop-grid">Books</Link>
                    <div className="megamenu mega03">
                      <ul className="item item03">
                        <li className="title">Categories</li>
                        <li>
                          <Link to="/shop-grid">Biography </Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">Business </Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">Cookbooks </Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">Health &amp; Fitness </Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">History </Link>
                        </li>
                      </ul>
                      <ul className="item item03">
                        <li className="title">Customer Favourite</li>
                        <li>
                          <Link to="/shop-grid">Mystery</Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">
                            Religion &amp; Inspiration
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">Romance</Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">Fiction/Fantasy</Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">Sleeveless</Link>
                        </li>
                      </ul>
                      <ul className="item item03">
                        <li className="title">Collections</li>
                        <li>
                          <Link to="/shop-grid">Science </Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">Fiction/Fantasy</Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">Self-Improvemen</Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">Home &amp; Garden</Link>
                        </li>
                        <li>
                          <Link to="/shop-grid">Humor Books</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="drop">
                    <a href="#">Pages</a>
                    <div className="megamenu dropdown">
                      <ul className="item item01">
                        <li>
                          <Link to="/about">About Page</Link>
                        </li>
                        <li className="label2">
                          <Link to="/portfolio">Portfolio</Link>
                          <ul>
                            <li>
                              <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                              <Link to="/portfolio-details">
                                Portfolio Details
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/my-account">My Account</Link>
                        </li>
                        <li>
                          <Link to="/cart">Cart Page</Link>
                        </li>
                        <li>
                          <Link to="/checkout">Checkout Page</Link>
                        </li>
                        <li>
                          <Link to="/wishlist">Wishlist Page</Link>
                        </li>
                        <li>
                          <Link to="/error404">404 Page</Link>
                        </li>
                        <li>
                          <Link to="/faq">Faq Page</Link>
                        </li>
                        <li>
                          <Link to="/team">Team Page</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="drop">
                    <Link to="/blog">Blog</Link>
                    <div className="megamenu dropdown">
                      <ul className="item item01">
                        <li>
                          <Link to="/blog">Blog Page</Link>
                        </li>
                        <li>
                          <Link to="/blog-detail">Blog Details</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-6 col-sm-6 col-6 col-lg-2">
              <ul className="header__sidebar__right d-flex justify-content-end align-items-center">
                <li className="shop_search">
                  <a className="search__active" href="#" />
                </li>
                <li className="wishlist">
                  <a href="#" />
                </li>
                <li className="shopcart">
                  <a className="cartbox_active" href="#">
                    <span className="product_qun">3</span>
                  </a>
                  {/* Start Shopping Cart */}
                  <div className="block-minicart minicart__active">
                    <div className="minicart-content-wrapper">
                      <div className="micart__close">
                        <span>close</span>
                      </div>
                      <div className="items-total d-flex justify-content-between">
                        <span>3 items</span>
                        <span>Cart Subtotal</span>
                      </div>
                      <div className="total_amount text-right">
                        <span>$66.00</span>
                      </div>
                      <div className="mini_action checkout">
                        <Link className="checkout__btn" to="/cart">
                          Go to Checkout
                        </Link>
                      </div>
                      <div className="single__items">
                        <div className="miniproduct">
                          <div className="item01 d-flex">
                            <div className="thumb">
                              <Link to="/product-details">
                                <img
                                  src={product["1.jpg"]}
                                  alt="product images"
                                />
                              </Link>
                            </div>
                            <div className="content">
                              <h6>
                                <Link to="/product-details">
                                  Voyage Yoga Bag
                                </Link>
                              </h6>
                              <span className="prize">$30.00</span>
                              <div className="product_prize d-flex justify-content-between">
                                <span className="qun">Qty: 01</span>
                                <ul className="d-flex justify-content-end">
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-settings" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-delete" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="item01 d-flex mt--20">
                            <div className="thumb">
                              <Link to="/product-details">
                                <img
                                  src={product["3.jpg"]}
                                  alt="product images"
                                />
                              </Link>
                            </div>
                            <div className="content">
                              <h6>
                                <Link to="/product-details">
                                  Impulse Duffle
                                </Link>
                              </h6>
                              <span className="prize">$40.00</span>
                              <div className="product_prize d-flex justify-content-between">
                                <span className="qun">Qty: 03</span>
                                <ul className="d-flex justify-content-end">
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-settings" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-delete" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="item01 d-flex mt--20">
                            <div className="thumb">
                              <Link to="/product-details">
                                <img
                                  src={product["2.jpg"]}
                                  alt="product images"
                                />
                              </Link>
                            </div>
                            <div className="content">
                              <h6>
                                <Link to="/product-details">
                                  Compete Track Tote
                                </Link>
                              </h6>
                              <span className="prize">$40.00</span>
                              <div className="product_prize d-flex justify-content-between">
                                <span className="qun">Qty: 03</span>
                                <ul className="d-flex justify-content-end">
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-settings" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-delete" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mini_action cart">
                        <Link className="cart__btn" to="/cart">
                          View and edit cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* End Shopping Cart */}
                </li>
                <li className="setting__bar__icon">
                  <a className="setting__active" href="#" />
                  <div className="searchbar__content setting__block">
                    <div className="content-inner">
                      <div className="switcher-currency">
                        <strong className="label switcher-label">
                          <span>Currency</span>
                        </strong>
                        <div className="switcher-options">
                          <div className="switcher-currency-trigger">
                            <span className="currency-trigger">
                              USD - US Dollar
                            </span>
                            <ul className="switcher-dropdown">
                              <li>GBP - British Pound Sterling</li>
                              <li>EUR - Euro</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="switcher-currency">
                        <strong className="label switcher-label">
                          <span>Language</span>
                        </strong>
                        <div className="switcher-options">
                          <div className="switcher-currency-trigger">
                            <span className="currency-trigger">English01</span>
                            <ul className="switcher-dropdown">
                              <li>English02</li>
                              <li>English03</li>
                              <li>English04</li>
                              <li>English05</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="switcher-currency">
                        <strong className="label switcher-label">
                          <span>Select Store</span>
                        </strong>
                        <div className="switcher-options">
                          <div className="switcher-currency-trigger">
                            <span className="currency-trigger">
                              Fashion Store
                            </span>
                            <ul className="switcher-dropdown">
                              <li>Furniture</li>
                              <li>Shoes</li>
                              <li>Speaker Store</li>
                              <li>Furniture</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="switcher-currency">
                        <strong className="label switcher-label">
                          <span>My Account</span>
                        </strong>
                        <div className="switcher-options">
                          <div className="switcher-currency-trigger">
                            <div className="setting__menu">
                              <span>
                                <a href="#">Compare Product</a>
                              </span>
                              <span>
                                <a href="#">My Account</a>
                              </span>
                              <span>
                                <a href="#">My Wishlist</a>
                              </span>
                              <span>
                                <a href="#">Sign In</a>
                              </span>
                              <span>
                                <a href="#">Create An Account</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Start Mobile Menu */}
          <div className="row d-none">
            <div className="col-lg-12 d-none">
              <nav className="mobilemenu__nav">
                <ul className="meninmenu">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul>
                      <li>
                        <Link to="/about">About Page</Link>
                      </li>
                      <li>
                        <Link to="/portfolio">Portfolio</Link>
                        <ul>
                          <li>
                            <Link to="/portfolio">Portfolio</Link>
                          </li>
                          <li>
                            <Link to="/portfolio-details">
                              Portfolio Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/my-account">My Account</Link>
                      </li>
                      <li>
                        <Link to="/cart">Cart Page</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Checkout Page</Link>
                      </li>
                      <li>
                        <Link to="/wishlist">Wishlist Page</Link>
                      </li>
                      <li>
                        <Link to="/error404">404 Page</Link>
                      </li>
                      <li>
                        <Link to="/faq">Faq Page</Link>
                      </li>
                      <li>
                        <Link to="/team">Team Page</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/shop-grid">Shop</Link>
                    <ul>
                      <li>
                        <Link to="/shop-grid">Shop Grid</Link>
                      </li>
                      <li>
                        <Link to="/single-product">Single Product</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                    <ul>
                      <li>
                        <Link to="/blog">Blog Page</Link>
                      </li>
                      <li>
                        <Link to="/blog-detail">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* End Mobile Menu */}
          <div className="mobile-menu d-block d-lg-none"></div>
          {/* Mobile Menu */}
        </div>
      </header>
      {/* //Header */}
      <SearchProduct />
    </div>
  );
}

export default withRouter(Navigation);

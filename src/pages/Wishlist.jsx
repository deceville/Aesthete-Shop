import React from "react";
import { Breadcrumb } from "../components";
import { Link } from "react-router-dom";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const products = importAll(
  require.context("../assets/images/product/sm-3", false, /\.(png|jpe?g|svg)$/)
);

function Wishlist() {
  return (
    <div className="wishlist">
      {/* Main wrapper */}
      <div className="wrapper" id="wrapper">
        <Breadcrumb />
        {/* cart-main-area start */}
        <div className="wishlist-area section-padding--lg bg__white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="wishlist-content">
                  <form action="#">
                    <div className="wishlist-table wnro__table table-responsive">
                      <table>
                        <thead>
                          <tr>
                            <th className="product-remove" />
                            <th className="product-thumbnail" />
                            <th className="product-name">
                              <span className="nobr">Product Name</span>
                            </th>
                            <th className="product-price">
                              <span className="nobr"> Unit Price </span>
                            </th>
                            <th className="product-stock-stauts">
                              <span className="nobr"> Stock Status </span>
                            </th>
                            <th className="product-add-to-cart" />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="product-remove">
                              <a href="#">×</a>
                            </td>
                            <td className="product-thumbnail">
                              <a href="#">
                                <img src={products["1.jpg"]} alt="" />
                              </a>
                            </td>
                            <td className="product-name">
                              <a href="#">Natoque penatibus</a>
                            </td>
                            <td className="product-price">
                              <span className="amount">$165.00</span>
                            </td>
                            <td className="product-stock-status">
                              <span className="wishlist-in-stock">
                                In Stock
                              </span>
                            </td>
                            <td className="product-add-to-cart">
                              <Link to="/cart">Add to Cart</Link>
                            </td>
                          </tr>
                          <tr>
                            <td className="product-remove">
                              <a href="#">×</a>
                            </td>
                            <td className="product-thumbnail">
                              <a href="#">
                                <img src={products["2.jpg"]} alt="" />
                              </a>
                            </td>
                            <td className="product-name">
                              <a href="#">Quisque fringilla</a>
                            </td>
                            <td className="product-price">
                              <span className="amount">$50.00</span>
                            </td>
                            <td className="product-stock-status">
                              <span className="wishlist-in-stock">
                                In Stock
                              </span>
                            </td>
                            <td className="product-add-to-cart">
                              <Link to="/cart">Add to Cart</Link>
                            </td>
                          </tr>
                          <tr>
                            <td className="product-remove">
                              <a href="#">×</a>
                            </td>
                            <td className="product-thumbnail">
                              <a href="#">
                                <img src={products["3.jpg"]} alt="" />
                              </a>
                            </td>
                            <td className="product-name">
                              <a href="#">Quisque fringilla</a>
                            </td>
                            <td className="product-price">
                              <span className="amount">$65.00</span>
                            </td>
                            <td className="product-stock-status">
                              <span className="wishlist-in-stock">
                                In Stock
                              </span>
                            </td>
                            <td className="product-add-to-cart">
                              <Link to="/cart">Add to Cart</Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;

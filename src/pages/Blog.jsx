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

const blogs = importAll(
  require.context("../assets/images/blog/blog-3", false, /\.(png|jpe?g|svg)$/)
);
const sm_blogs = importAll(
  require.context("../assets/images/blog/sm-img", false, /\.(png|jpe?g|svg)$/)
);
const comments = importAll(
  require.context("../assets/images/blog/comment", false, /\.(png|jpe?g|svg)$/)
);

function Blog() {
  return (
    <div className="blog-page">
      {/* Main wrapper */}
      <div className="wrapper" id="wrapper">
        <Breadcrumb />
        {/* Start Blog Area */}
        <div className="page-blog bg--white section-padding--lg blog-sidebar right-sidebar">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-12">
                <div className="blog-page">
                  <div className="page__header">
                    <h2>Category Archives: HTML</h2>
                  </div>
                  {/* Start Single Post */}
                  <article className="blog__post d-flex flex-wrap">
                    <div className="thumb">
                      <Link to="/blog-detail">
                        <img src={blogs["1.jpg"]} alt="blog images" />
                      </Link>
                    </div>
                    <div className="content">
                      <h4>
                        <Link to="/blog-detail">Blog image post</Link>
                      </h4>
                      <ul className="post__meta">
                        <li>
                          Posts by : <a href="#">road theme</a>
                        </li>
                        <li className="post_separator">/</li>
                        <li>Mar 10 2018</li>
                      </ul>
                      <p>
                        Donec vitae hendrerit arcu, sit amet faucibus nisl.
                        Crastoup pretium arcu ex. Aenean posuere libero eu augue
                        rhoncus Praesent ornare tortor amet.
                      </p>
                      <div className="blog__btn">
                        <Link to="/blog-detail">read more</Link>
                      </div>
                    </div>
                  </article>
                  {/* End Single Post */}
                  {/* Start Single Post */}
                  <article className="blog__post d-flex flex-wrap">
                    <div className="thumb">
                      <Link to="/blog-detail">
                        <img src={blogs["2.jpg"]} alt="blog images" />
                      </Link>
                    </div>
                    <div className="content">
                      <h4>
                        <Link to="/blog-detail">Post with Gallery</Link>
                      </h4>
                      <ul className="post__meta">
                        <li>
                          Posts by : <a href="#">road theme</a>
                        </li>
                        <li className="post_separator">/</li>
                        <li>Mar 10 2018</li>
                      </ul>
                      <p>
                        Donec vitae hendrerit arcu, sit amet faucibus nisl.
                        Crastoup pretium arcu ex. Aenean posuere libero eu augue
                        rhoncus Praesent ornare tortor amet.
                      </p>
                      <div className="blog__btn">
                        <Link to="/blog-detail">read more</Link>
                      </div>
                    </div>
                  </article>
                  {/* End Single Post */}
                  {/* Start Single Post */}
                  <article className="blog__post d-flex flex-wrap">
                    <div className="thumb">
                      <Link to="/blog-detail">
                        <img src={blogs["3.jpg"]} alt="blog images" />
                      </Link>
                    </div>
                    <div className="content">
                      <h4>
                        <Link to="/blog-detail">Post with Gallery</Link>
                      </h4>
                      <ul className="post__meta">
                        <li>
                          Posts by : <a href="#">road theme</a>
                        </li>
                        <li className="post_separator">/</li>
                        <li>Mar 10 2018</li>
                      </ul>
                      <p>
                        Donec vitae hendrerit arcu, sit amet faucibus nisl.
                        Crastoup pretium arcu ex. Aenean posuere libero eu augue
                        rhoncus Praesent ornare tortor amet.
                      </p>
                      <div className="blog__btn">
                        <Link to="/blog-detail">read more</Link>
                      </div>
                    </div>
                  </article>
                  {/* End Single Post */}
                  {/* Start Single Post */}
                  <article className="blog__post d-flex flex-wrap">
                    <div className="thumb">
                      <Link to="/blog-detail">
                        <img src={blogs["4.jpg"]} alt="blog images" />
                      </Link>
                    </div>
                    <div className="content">
                      <h4>
                        <Link to="/blog-detail">Blog image post</Link>
                      </h4>
                      <ul className="post__meta">
                        <li>
                          Posts by : <a href="#">road theme</a>
                        </li>
                        <li className="post_separator">/</li>
                        <li>Mar 10 2018</li>
                      </ul>
                      <p>
                        Donec vitae hendrerit arcu, sit amet faucibus nisl.
                        Crastoup pretium arcu ex. Aenean posuere libero eu augue
                        rhoncus Praesent ornare tortor amet.
                      </p>
                      <div className="blog__btn">
                        <Link to="/blog-detail">read more</Link>
                      </div>
                    </div>
                  </article>
                  {/* End Single Post */}
                  {/* Start Single Post */}
                  <article className="blog__post d-flex flex-wrap">
                    <div className="thumb">
                      <Link to="/blog-detail">
                        <img src={blogs["5.jpg"]} alt="blog images" />
                      </Link>
                    </div>
                    <div className="content">
                      <h4>
                        <Link to="/blog-detail">Blog image post</Link>
                      </h4>
                      <ul className="post__meta">
                        <li>
                          Posts by : <a href="#">road theme</a>
                        </li>
                        <li className="post_separator">/</li>
                        <li>Mar 10 2018</li>
                      </ul>
                      <p>
                        Donec vitae hendrerit arcu, sit amet faucibus nisl.
                        Crastoup pretium arcu ex. Aenean posuere libero eu augue
                        rhoncus Praesent ornare tortor amet.
                      </p>
                      <div className="blog__btn">
                        <Link to="/blog-detail">read more</Link>
                      </div>
                    </div>
                  </article>
                  {/* End Single Post */}
                  {/* Start Single Post */}
                  <article className="blog__post text--post">
                    <div className="content">
                      <h4>
                        <Link to="/blog-detail">Blog image post</Link>
                      </h4>
                      <ul className="post__meta">
                        <li>
                          Posts by : <a href="#">road theme</a>
                        </li>
                        <li className="post_separator">/</li>
                        <li>Mar 10 2018</li>
                      </ul>
                      <p>
                        Donec vitae hendrerit arcu, sit amet faucibus nisl.
                        Crastoup pretium arcu ex. Aenean posuere libero eu augue
                        rhoncus Praesent ornare tortor amet.
                      </p>
                      <div className="blog__btn">
                        <Link to="/blog-detail">read more</Link>
                      </div>
                    </div>
                  </article>
                  {/* End Single Post */}
                </div>
                <ul className="wn__pagination">
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="zmdi zmdi-chevron-right" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-12 md-mt-40 sm-mt-40">
                <div className="wn__sidebar">
                  {/* Start Single Widget */}
                  <aside className="widget search_widget">
                    <h3 className="widget-title">Search</h3>
                    <form action="#">
                      <div className="form-input">
                        <input type="text" placeholder="Search..." />
                        <button>
                          <i className="fa fa-search" />
                        </button>
                      </div>
                    </form>
                  </aside>
                  {/* End Single Widget */}
                  {/* Start Single Widget */}
                  <aside className="widget recent_widget">
                    <h3 className="widget-title">Recent</h3>
                    <div className="recent-posts">
                      <ul>
                        <li>
                          <div className="post-wrapper d-flex">
                            <div className="thumb">
                              <Link to="/blog-detail">
                                <img
                                  src={sm_blogs["1.jpg"]}
                                  alt="blog images"
                                />
                              </Link>
                            </div>
                            <div className="content">
                              <h4>
                                <Link to="/blog-detail">Blog image post</Link>
                              </h4>
                              <p> March 10, 2015</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-wrapper d-flex">
                            <div className="thumb">
                              <Link to="/blog-detail">
                                <img
                                  src={sm_blogs["2.jpg"]}
                                  alt="blog images"
                                />
                              </Link>
                            </div>
                            <div className="content">
                              <h4>
                                <Link to="/blog-detail">Post with Gallery</Link>
                              </h4>
                              <p> March 10, 2015</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-wrapper d-flex">
                            <div className="thumb">
                              <Link to="/blog-detail">
                                <img
                                  src={sm_blogs["3.jpg"]}
                                  alt="blog images"
                                />
                              </Link>
                            </div>
                            <div className="content">
                              <h4>
                                <Link to="/blog-detail">Post with Video</Link>
                              </h4>
                              <p> March 10, 2015</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-wrapper d-flex">
                            <div className="thumb">
                              <Link to="/blog-detail">
                                <img
                                  src={sm_blogs["4.jpg"]}
                                  alt="blog images"
                                />
                              </Link>
                            </div>
                            <div className="content">
                              <h4>
                                <Link to="/blog-detail">
                                  Maecenas ultricies
                                </Link>
                              </h4>
                              <p> March 10, 2015</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-wrapper d-flex">
                            <div className="thumb">
                              <Link to="/blog-detail">
                                <img
                                  src={sm_blogs["5.jpg"]}
                                  alt="blog images"
                                />
                              </Link>
                            </div>
                            <div className="content">
                              <h4>
                                <Link to="/blog-detail">Blog image post</Link>
                              </h4>
                              <p> March 10, 2015</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </aside>
                  {/* End Single Widget */}
                  {/* Start Single Widget */}
                  <aside className="widget comment_widget">
                    <h3 className="widget-title">Comments</h3>
                    <ul>
                      <li>
                        <div className="post-wrapper">
                          <div className="thumb">
                            <img
                              src={comments["1.jpeg"]}
                              alt="Comment images"
                            />
                          </div>
                          <div className="content">
                            <p>demo says:</p>
                            <a href="#">Quisque semper nunc vitae...</a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="post-wrapper">
                          <div className="thumb">
                            <img
                              src={comments["1.jpeg"]}
                              alt="Comment images"
                            />
                          </div>
                          <div className="content">
                            <p>Admin says:</p>
                            <a href="#">Curabitur aliquet pulvinar...</a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="post-wrapper">
                          <div className="thumb">
                            <img
                              src={comments["1.jpeg"]}
                              alt="Comment images"
                            />
                          </div>
                          <div className="content">
                            <p>Irin says:</p>
                            <a href="#">Quisque semper nunc vitae...</a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="post-wrapper">
                          <div className="thumb">
                            <img
                              src={comments["1.jpeg"]}
                              alt="Comment images"
                            />
                          </div>
                          <div className="content">
                            <p>Boighor says:</p>
                            <a href="#">Quisque semper nunc vitae...</a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="post-wrapper">
                          <div className="thumb">
                            <img
                              src={comments["1.jpeg"]}
                              alt="Comment images"
                            />
                          </div>
                          <div className="content">
                            <p>demo says:</p>
                            <a href="#">Quisque semper nunc vitae...</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </aside>
                  {/* End Single Widget */}
                  {/* Start Single Widget */}
                  <aside className="widget category_widget">
                    <h3 className="widget-title">Categories</h3>
                    <ul>
                      <li>
                        <a href="#">Fashion</a>
                      </li>
                      <li>
                        <a href="#">Creative</a>
                      </li>
                      <li>
                        <a href="#">Electronics</a>
                      </li>
                      <li>
                        <a href="#">Kids</a>
                      </li>
                      <li>
                        <a href="#">Flower</a>
                      </li>
                      <li>
                        <a href="#">Books</a>
                      </li>
                      <li>
                        <a href="#">Jewelle</a>
                      </li>
                    </ul>
                  </aside>
                  {/* End Single Widget */}
                  {/* Start Single Widget */}
                  <aside className="widget archives_widget">
                    <h3 className="widget-title">Archives</h3>
                    <ul>
                      <li>
                        <a href="#">March 2015</a>
                      </li>
                      <li>
                        <a href="#">December 2014</a>
                      </li>
                      <li>
                        <a href="#">November 2014</a>
                      </li>
                      <li>
                        <a href="#">September 2014</a>
                      </li>
                      <li>
                        <a href="#">August 2014</a>
                      </li>
                    </ul>
                  </aside>
                  {/* End Single Widget */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Area */}
      </div>
    </div>
  );
}

export default Blog;

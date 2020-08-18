import React, { useEffect } from "react";
import { Breadcrumb } from "../components";

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
const bg_blogs = importAll(
  require.context("../assets/images/blog/big-img", false, /\.(png|jpe?g|svg)$/)
);
const sm_blogs = importAll(
  require.context("../assets/images/blog/sm-img", false, /\.(png|jpe?g|svg)$/)
);
const comments = importAll(
  require.context("../assets/images/blog/comment", false, /\.(png|jpe?g|svg)$/)
);

function BlogDetails() {
  return (
    <div className="blog-detail">
      {/* Main Wrapper */}
      <div className="wrapper" id="wrapper">
        <Breadcrumb />
        <div className="page-blog-details section-padding--lg bg--white">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-12">
                <div className="blog-details content">
                  <article className="blog-post-details">
                    <div className="post-thumbnail">
                      <img src={bg_blogs["1.jpg"]} alt="blog images" />
                    </div>
                    <div className="post_wrapper">
                      <div className="post_header">
                        <h2>International activities of the Book</h2>
                        <div className="blog-date-categori">
                          <ul>
                            <li>June 27, 2018</li>
                            <li>
                              <a href="#" title="Posts by boighor" rel="author">
                                boighor
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="post_content">
                        <p>
                          Donec vitae hendrerit arcu, sit amet faucibus nisl.
                          Crastoup pretium arcu ex. Aenean posuere libero eu
                          augue rhoncus. Praesent ornare tortor ac ante egestas
                          hendrerit. Aliquam et metus pharetra, bibendum massa
                          nec, fermentum odio. Nunc id leo ultrices, mollis
                          ligula in, finibus tortor. Mauris eu dui ut lectus
                          fermentum eleifend. Pellentesque faucibus sem ante,
                          non malesuada odio varius nec. Suspendisse potenti.
                          Proin consectetur aliquam odio nec fringilla. Sed
                          interdum at justo in efficitur. Vivamus gravida
                          volutpat sodales. Fusce ornare sit amet ligula
                          condimentum sagittis.
                        </p>
                        <blockquote>
                          Lorem ipsum dolor sit amet, consecte adipisicing elit,
                          sed do eiusmod tempor deo incididunt labo dolor magna
                          aliqua. Ut enim ad minim veniam quis nostrud geolans
                          work.
                        </blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehendrit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore of to magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor
                          in reprehnderit in voluptate velit esse cillum dolore
                          eu fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia dser
                          mollit anim id est laborum. Sed ut perspiciatis unde
                          omnis iste natus error sit voluptatem accusantium
                          doloremque laudantium, totam rem aperiam, eaque ipsa
                          quae ab illo.
                        </p>
                      </div>
                      <ul className="blog_meta">
                        <li>
                          <a href="#">3 comments</a>
                        </li>
                        <li> / </li>
                        <li>
                          Tags:<span>fashion</span> <span>t-shirt</span>{" "}
                          <span>white</span>
                        </li>
                      </ul>
                    </div>
                  </article>
                  <div className="comments_area">
                    <h3 className="comment__title">1 comment</h3>
                    <ul className="comment__list">
                      <li>
                        <div className="wn__comment">
                          <div className="thumb">
                            <img
                              src={comments["1.jpeg"]}
                              alt="comment images"
                            />
                          </div>
                          <div className="content">
                            <div className="comnt__author d-block d-sm-flex">
                              <span>
                                <a href="#">admin</a> Post author
                              </span>
                              <span>October 6, 2014 at 9:26 am</span>
                              <div className="reply__btn">
                                <a href="#">Reply</a>
                              </div>
                            </div>
                            <p>
                              Sed interdum at justo in efficitur. Vivamus
                              gravida volutpat sodales. Fusce ornare sit
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="comment_reply">
                        <div className="wn__comment">
                          <div className="thumb">
                            <img
                              src={comments["1.jpeg"]}
                              alt="comment images"
                            />
                          </div>
                          <div className="content">
                            <div className="comnt__author d-block d-sm-flex">
                              <span>
                                <a href="#">admin</a> Post author
                              </span>
                              <span>October 6, 2014 at 9:26 am</span>
                              <div className="reply__btn">
                                <a href="#">Reply</a>
                              </div>
                            </div>
                            <p>
                              Sed interdum at justo in efficitur. Vivamus
                              gravida volutpat sodales. Fusce ornare sit
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="comment_respond">
                    <h3 className="reply_title">
                      Leave a Reply{" "}
                      <small>
                        <a href="#">Cancel reply</a>
                      </small>
                    </h3>
                    <form className="comment__form" action="#">
                      <p>
                        Your email address will not be published.Required fields
                        are marked{" "}
                      </p>
                      <div className="input__box">
                        <textarea
                          name="comment"
                          placeholder="Your comment here"
                          defaultValue={""}
                        />
                      </div>
                      <div className="input__wrapper clearfix">
                        <div className="input__box name one--third">
                          <input type="text" placeholder="name" />
                        </div>
                        <div className="input__box email one--third">
                          <input type="email" placeholder="email" />
                        </div>
                        <div className="input__box website one--third">
                          <input type="text" placeholder="website" />
                        </div>
                      </div>
                      <div className="submite__btn">
                        <a href="#">Post Comment</a>
                      </div>
                    </form>
                  </div>
                </div>
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
                              <a href="blog-details.html">
                                <img
                                  src={sm_blogs["1.jpg"]}
                                  alt="blog images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4>
                                <a href="blog-details.html">Blog image post</a>
                              </h4>
                              <p> March 10, 2015</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-wrapper d-flex">
                            <div className="thumb">
                              <a href="blog-details.html">
                                <img
                                  src={sm_blogs["2.jpg"]}
                                  alt="blog images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4>
                                <a href="blog-details.html">
                                  Post with Gallery
                                </a>
                              </h4>
                              <p> March 10, 2015</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-wrapper d-flex">
                            <div className="thumb">
                              <a href="blog-details.html">
                                <img
                                  src={sm_blogs["3.jpg"]}
                                  alt="blog images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4>
                                <a href="blog-details.html">Post with Video</a>
                              </h4>
                              <p> March 10, 2015</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-wrapper d-flex">
                            <div className="thumb">
                              <a href="blog-details.html">
                                <img
                                  src={sm_blogs["4.jpg"]}
                                  alt="blog images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4>
                                <a href="blog-details.html">
                                  Maecenas ultricies
                                </a>
                              </h4>
                              <p> March 10, 2015</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-wrapper d-flex">
                            <div className="thumb">
                              <a href="blog-details.html">
                                <img
                                  src={sm_blogs["5.jpg"]}
                                  alt="blog images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4>
                                <a href="blog-details.html">Blog image post</a>
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
      </div>
    </div>
  );
}

export default BlogDetails;

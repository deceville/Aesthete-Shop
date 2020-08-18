import React, { useEffect } from "react";
import { Breadcrumb } from "../components";

function About() {
  return (
    <div className="about">
      {/* Main wrapper */}
      <div className="wrapper" id="wrapper">
        <Breadcrumb />
        {/* Start About Area */}
        <div className="page-about about_area bg--white section-padding--lg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section__title--3 text-center pb--30">
                  <h2>Our Process Skill Of High</h2>
                  <p>the right people for your project</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-12 col-12">
                <div className="content text-left text_style--2">
                  <h2>we have skills to show</h2>
                  <div className="skill-container">
                    {/* Start single skill */}
                    <div className="single-skill">
                      <p>Customer Favorites</p>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-wow-duration="0.8s"
                          data-wow-delay=".5s"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "90%" }}
                        >
                          <span className="pen-lable" />
                        </div>
                      </div>
                    </div>
                    {/* End single skill */}
                    {/* Start single skill */}
                    <div className="single-skill">
                      <p>Popular Authors</p>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-wow-duration="0.8s"
                          data-wow-delay=".5s"
                          role="progressbar"
                          aria-valuenow={95}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "95%" }}
                        >
                          <span className="pen-lable" />
                        </div>
                      </div>
                    </div>
                    {/* End single skill */}
                    {/* Start single skill */}
                    <div className="single-skill">
                      <p>Bestselling Series</p>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-wow-duration="0.8s"
                          data-wow-delay=".5s"
                          role="progressbar"
                          aria-valuenow={93}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "93%" }}
                        >
                          <span className="pen-lable" />
                        </div>
                      </div>
                    </div>
                    {/* End single skill */}
                    {/* Start single skill */}
                    <div className="single-skill">
                      <p>Bargain Books</p>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-wow-duration="0.8s"
                          data-wow-delay=".5s"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "90%" }}
                        >
                          <span className="pen-lable" />
                        </div>
                      </div>
                    </div>
                    {/* End single skill */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-12">
                <div className="content">
                  <h3>Buy Book</h3>
                  <h2>Different Knowledge</h2>
                  <p className="mt--20 mb--20">
                    Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum. Mirum est notare quam
                    littera gothica, quam nunc putamus parum claram,
                    anteposuerit litterarum formas humanitatis per seacula
                    quarta decima et quinta decima. Eodem modo typi, qui nunc
                    nobis videntur parum clari, fiant sollemnes in futurum.
                  </p>
                  <strong>London Address</strong>
                  <p>34 Parer Place via Musk Avenue Kelvin Grove, QLD, 4059</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area */}
        {/* Start Team Area */}
        <section className="wn__team__area pb--75 bg--white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section__title--3 text-center">
                  <h2>Meet our team of experts</h2>
                  <p>the right people for your project</p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Start Single Team */}
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="wn__team">
                  <div className="thumb">
                    <img src="images/about/team/1.jpg" alt="Team images" />
                  </div>
                  <div className="content text-center">
                    <h4>JOHN SMITH</h4>
                    <p>Manager</p>
                    <ul className="team__social__net">
                      <li>
                        <a href="#">
                          <i className="icon-social-twitter icons" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-social-tumblr icons" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-social-facebook icons" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-social-linkedin icons" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-social-pinterest icons" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Single Team */}
              {/* Start Single Team */}
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="wn__team">
                  <div className="thumb">
                    <img src="images/about/team/2.jpg" alt="Team images" />
                  </div>
                  <div className="content text-center">
                    <h4>ALICE KIM</h4>
                    <p>Co-Founder</p>
                    <ul className="team__social__net">
                      <li>
                        <a href="#">
                          <i className="icon-social-twitter icons" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-social-tumblr icons" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-social-facebook icons" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-social-linkedin icons" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-social-pinterest icons" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Single Team */}
              {/* Start Single Team */}
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="wn__team">
                  <div className="thumb">
                    <img src="images/about/team/3.jpg" alt="Team images" />
                  </div>
                  <div className="content text-center">
                    <h4>VICTORIA DOE</h4>
                    <p>Marketer</p>
                    <ul className="team__social__net">
                      <li>
                        <a href="#">
                          <i className="icon-social-twitter icons" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-social-tumblr icons" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-social-facebook icons" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-social-linkedin icons" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-social-pinterest icons" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Single Team */}
            </div>
          </div>
        </section>
        {/* End Team Area */}
      </div>
    </div>
  );
}

export default About;

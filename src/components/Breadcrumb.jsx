import React from "react";

function Breadcrumb() {
  return (
    <div className="breadcrumbs">
      {/* Start Breadcrumb area */}
      <div className="ht__bradcaump__area bg-image--3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bradcaump__inner text-center">
                <h2 className="bradcaump-title">About us</h2>
                <nav className="bradcaump-content">
                  <a className="breadcrumb_item" href="index.html">
                    Home
                  </a>
                  <span className="brd-separetor">/</span>
                  <span className="breadcrumb_item active">About us</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb area */}
    </div>
  );
}

export default Breadcrumb;

import React from "react";

function BlogPreview() {
  return (
    <div className="container mb-5">
          <div
        className="p-4 rounded"
        style={{ backgroundColor: "#eca1a1ff" }}
      >
      <h3 className="text-center mb-4">Latest Travel Tips</h3>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">5 Packing Hacks for Stress-Free Travel</h5>
              <p className="card-text">
                Discover how to pack light, stay organized, and avoid common travel mistakes with these simple tips.
              </p>
              <a href="#" className="btn btn-outline-primary btn-sm">Read More</a>
            </div>
          </div>
          <div className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Top 3 Hidden Gems in Europe</h5>
              <p className="card-text">
                Explore lesser-known destinations that offer breathtaking views and unique experiences.
              </p>
              <a href="#" className="btn btn-outline-primary btn-sm">Read More</a>
            </div>
          </div>
        </div>
      </div>
       </div>
    </div>
  );
}

export default BlogPreview;
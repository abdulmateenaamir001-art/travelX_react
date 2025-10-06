import React from "react";

function FeaturedSection() {
  return (
    <div className="card mb-4 shadow text-center p-4">
      <div className="row">
        <div className="col">
          <i className="fas fa-users fa-2x text-primary mb-2"></i>
          <h2 className="text-primary mb-0">1000+</h2>
          <p className="mb-0">Happy Travelers</p>
        </div>
        <div className="col">
          <i className="fas fa-globe fa-2x text-success mb-2"></i>
          <h2 className="text-success mb-0">50+</h2>
          <p className="mb-0">Destinations</p>
        </div>
        <div className="col">
          <i className="fas fa-headset fa-2x text-warning mb-2"></i>
          <h2 className="text-warning mb-0">24/7</h2>
          <p className="mb-0">Support</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSection;
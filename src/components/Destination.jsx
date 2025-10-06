import React from "react";
import "./Destination.css";

const Destination = ({ title, description, image, price }) => {
  return (
    <div className="card h-100 d-flex flex-column shadow destination-card">
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column" style={{ minHeight: "200px" }}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <p className="card-text fw-bold mb-2">Price: ${price}</p>
        <button className="btn btn-danger mt-auto">Book Now</button>
      </div>
    </div>
  );
};

export default Destination;
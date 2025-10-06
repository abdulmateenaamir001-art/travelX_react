import React from "react";

function TestimonialCard({ image, tour, review, name, rating }) {
  return (
    <div className="card-custom d-flex flex-row align-items-center p-4 mb-4">
      <img
        src={image}
        alt={name}
        className="team-img"
        style={{
          borderRadius: "12px",
          width: "120px",
          height: "120px",
          objectFit: "cover",
          marginRight: "30px",
        }}
      />
      <div>
        <h6 className="text-uppercase text-muted mb-2" style={{ letterSpacing: "2px" }}>
          {tour}
        </h6>
        <p className="mb-3">{review}</p>
        <div className="d-flex align-items-center justify-content-between">
          <span className="fw-bold">By Traveler {name}</span>
          <span>
            <span style={{ color: "#ff9800", fontSize: "1.2rem" }}>
              {"★".repeat(rating)}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
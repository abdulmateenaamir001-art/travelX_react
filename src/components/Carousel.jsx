import React from "react";

export default function Carousel({ slides }) {
  return (
    <div
      id="travelCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={slide.image}
              className="d-block w-100"
              alt={slide.title}
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                backgroundColor: "rgba(0,0,0,0.4)",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <h3 style={{ color: "white" }}>{slide.title}</h3>
              <p style={{ color: "#f1f1f1" }}>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#travelCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#travelCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

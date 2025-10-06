import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonials({ reviews }) {
  return (
    <section className="mb-5 testimonials">
      <div className="text-center mb-4">
        <h6 className="text-uppercase text-primary mb-2" style={{ letterSpacing: "2px" }}>
          Customer Reviews
        </h6>
        <h3 className="section-title">The People Who Know Best</h3>
        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
          There’s no easier way to see if you’re traveling with one of our specialists, you simply won’t get the depth of experience — the widest sights, the closest wilderness encounters, the best people and the real gems — that spell out the difference between a regular package tour and a tailor-made, once-in-a-lifetime vacation. Don’t just take our word for it. Listen to our travelers.
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {reviews.map((review) => (
            <TestimonialCard
              key={review.id}
              image={review.image}
              tour={review.tour}
              review={review.review}
              name={review.name}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
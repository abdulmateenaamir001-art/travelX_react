import React from "react";

function StoryMissionVision() {
  return (
    <section className="row mb-5 text-center">
      <div className="col-md-4 mb-4">
        <div className="card-custom h-100">
          <h3><i className="fa-solid fa-book-open"></i> Our Story</h3>
          <p>
            Founded in <strong>2015</strong>, TravelX was born from a passion for exploring the world and making travel dreams come true.
            Over the years, we have guided thousands of travelers on unforgettable journeys, turning ordinary vacations into extraordinary experiences.
          </p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card-custom h-100">
          <h3><i className="fa-solid fa-person-running"></i> Our Mission</h3>
          <ul>
            <li>Crafting <strong>personalized travel experiences</strong> tailored to your interests.</li>
            <li>Ensuring <strong>hassle-free trips</strong> with 24/7 customer support.</li>
            <li>Promoting <strong>sustainable travel practices</strong> that protect the planet.</li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card-custom h-100">
          <h3><i className="fa-solid fa-lightbulb"></i> Our Vision</h3>
          <p>
            To become the <strong>most trusted and loved travel agency</strong>, connecting travelers with authentic experiences and unforgettable destinations worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StoryMissionVision;
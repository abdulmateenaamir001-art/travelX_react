import React from "react";

function VideoSection() {
  return (
    <div className="container mb-5">
      <div className="p-4 rounded bg-light text-center shadow">
        <h3 className="mb-3">Watch Our Travel Story</h3>
        <p className="mb-4">
          Discover how we make your journeys unforgettable. Explore breathtaking destinations and get inspired for your next adventure!
        </p>
        <div className="d-flex justify-content-center">
          <div className="ratio ratio-16x9" style={{ maxWidth: '800px', width: '100%' }}>
            <iframe
              src="https://www.youtube.com/embed/Scxs7L0vhZ4"
              title="Travel Agency Introduction"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
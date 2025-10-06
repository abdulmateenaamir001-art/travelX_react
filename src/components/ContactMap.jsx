import React from 'react';

function ContactMap({ mapSrc }) {
  return (
    <div className="mb-5">
      <div className="card shadow-sm">
        <div className="card-body p-0">
          <iframe
            src={mapSrc}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Agency Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactMap;

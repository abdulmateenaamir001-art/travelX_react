import React from 'react';

function ContactInfo({ address, phone, email, socialLinks }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-3">Get in Touch</h3>
          <p><i className="fas fa-map-marker-alt me-2"></i>{address}</p>
          <p><i className="fas fa-phone me-2"></i>{phone}</p>
          <p><i className="fas fa-envelope me-2"></i>{email}</p>
          <div>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} className="me-2">
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;

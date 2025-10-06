import React from 'react';

function ContactHero({ title, subtitle }) {
  return (
    <section className="contact-hero text-center text-white py-5 mb-4" style={{ background: "#007bff" }}>
      <h1 className="display-4 fw-bold">{title}</h1>
      <p className="lead">{subtitle}</p>
    </section>
  );
}

export default ContactHero;

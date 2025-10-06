import React from 'react';

function ContactForm({ formTitle }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-3">{formTitle}</h3>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

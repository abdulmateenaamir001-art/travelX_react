import React from 'react';

function NewsletterSignup() {
  return (
    <div className="newsletter-signup text-center py-5 mb-5" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
      <h3 className="mb-3" style={{ color: '#007bff' }}>Stay Updated with Travel Deals</h3>
      <p className="mb-4">Subscribe to our newsletter for exclusive travel tips, deals, and destination highlights!</p>
      <form className="d-flex justify-content-center">
        <div className="input-group" style={{ maxWidth: '400px' }}>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            aria-label="Email"
          />
          <button className="btn btn-primary" type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
}

export default NewsletterSignup;

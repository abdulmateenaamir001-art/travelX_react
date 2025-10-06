import React from 'react';
import "./Faq.css"

function ContactFAQ({ title, questions }) {
  return (
    <div className="contact-faq-container mb-5">
      <h3 className="contact-faq-title">{title}</h3>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="accordion contact-accordion" id="faqAccordion">
            {questions.map((q, index) => (
              <div className="accordion-item contact-accordion-item" key={q.id}>
                <h2 className="accordion-header" id={q.id}>
                  <button
                    className={`accordion-button contact-accordion-button ${index === 0 ? '' : 'collapsed'}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index + 1}`}
                  >
                    {q.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index + 1}`}
                  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                >
                  <div className="accordion-body contact-accordion-body">
                    {q.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactFAQ;

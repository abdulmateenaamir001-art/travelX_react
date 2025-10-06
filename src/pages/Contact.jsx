import React from 'react';
import ContactHero from '../components/ContactHero';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap';
import ContactFAQ from '../components/ContactFAQ';
import contactData from '../../datacontact';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="contact-page">
      <ContactHero title={contactData.hero.title} subtitle={contactData.hero.subtitle} />
      <div className="container">
        <div className="row mb-5">
          <ContactInfo {...contactData.info} />
          <ContactForm formTitle={contactData.form.title} />
        </div>
        <ContactMap mapSrc={contactData.map.embedUrl} />
        <ContactFAQ title={contactData.faq.title} questions={contactData.faq.questions} />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

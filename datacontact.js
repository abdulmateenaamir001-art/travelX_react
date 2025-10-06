const contactData = {
  hero: {
    title: "Contact Us",
    subtitle: "We’re here to help you plan your next adventure!"
  },
  info: {
    address: "123 Travel St, City, Country",
    phone: "+123 456 7890",
    email: "info@wanderlust.com",
    socialLinks: [
      { platform: "Facebook", url: "#", icon: "fab fa-facebook" },
      { platform: "Instagram", url: "#", icon: "fab fa-instagram" },
      { platform: "Twitter", url: "#", icon: "fab fa-twitter" }
    ]
  },
  form: {
    fields: [
      { type: "text", placeholder: "Your Name", required: true },
      { type: "email", placeholder: "Your Email", required: true },
      { type: "textarea", placeholder: "Your Message", required: true }
    ],
    submitText: "Send Message"
  },
  map: {
    embedUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019253317386!2d-122.4194154846816!3d37.77492977975998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f0e3e0b%3A0x4c2c2b2b2b2b2b2b!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus"
  },
  faq: {
    title: "Frequently Asked Questions",
    questions: [
      {
        id: "faq1",
        question: "How do I book a trip?",
        answer: "You can book a trip by contacting us directly or using our online booking form."
      },
      {
        id: "faq2",
        question: "What payment methods do you accept?",
        answer: "We accept credit cards, bank transfers, and online payments."
      },
      {
        id: "faq3",
        question: "Can I cancel or modify my booking?",
        answer: "Yes, you can cancel or modify your booking up to 48 hours before the departure date."
      },
      {
        id: "faq4",
        question: "Do you offer group discounts?",
        answer: "Yes, we offer discounts for groups of 10 or more. Contact us for more details."
      },
      {
        id: "faq5",
        question: "What should I pack for my trip?",
        answer: "Pack according to the destination's weather and activities. We provide packing lists for each trip."
      }
    ]
  }
};

export default contactData;

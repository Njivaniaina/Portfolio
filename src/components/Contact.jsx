import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm('service_o9wjl9u', 'template_voltgpa', form.current, {
        publicKey: 'cNVfVxJ0CbyDDCrct',
      })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          form.current.reset();
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Let's Create<br/>Something Amazing</h2>
            <p className="contact-description">
              I'm always open to discussing product design work or partnership opportunities. Feel free to reach out to me!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon glass-panel">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="detail-title">Email Me</h4>
                  <a href="mailto:fenosoanjivaniaina@gmail.com" className="detail-value">fenosoanjivaniaina@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon glass-panel">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="detail-title">Location</h4>
                  <p className="detail-value">Antananarivo, Madagascar</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container glass-panel">
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="user_name" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="user_email" placeholder="john@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : <>Send Message <Send size={18} /></>}
              </button>

              {submitStatus === 'success' && (
                <p style={{ color: '#4ade80', marginTop: '1rem', textAlign: 'center' }}>
                  Message sent successfully!
                </p>
              )}
              {submitStatus === 'error' && (
                <p style={{ color: '#f87171', marginTop: '1rem', textAlign: 'center' }}>
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

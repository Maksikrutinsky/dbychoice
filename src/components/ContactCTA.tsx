'use client';

import { useState } from 'react';
import Image from 'next/image';

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact-cta"
      className="contact-cta-section-revolutionary"
    >
      <div className="cta-container-revolutionary">
        <div className="cta-content-revolutionary">
          {/* Left Side - Enhanced */}
          <div className="cta-left-side-revolutionary">
            <div className="cta-logo-wrapper-revolutionary">
              <div className="cta-logo-glow"></div>
              <Image
                src="/images/logo-main.png"
                alt="Design By Choice Logo"
                width={150}
                height={150}
                className="cta-logo-revolutionary"
                priority
              />
            </div>

            <div className="cta-heading-revolutionary">
              <h2 className="cta-title-revolutionary">
                <span className="cta-title-line">Let's Create</span>
                <span className="cta-title-line cta-title-accent">Something Amazing</span>
              </h2>
              <p className="cta-subtitle-revolutionary">
                Transform your vision into reality with our innovative design approach
              </p>
            </div>

            <div className="cta-contact-info-revolutionary">
              <div className="contact-info-item-revolutionary">
                <div className="contact-icon-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 8L10.89 13.26C11.21 13.46 11.61 13.56 12 13.56C12.39 13.56 12.79 13.46 13.11 13.26L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-info-text">
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-value">info@designbychoice.com</span>
                </div>
              </div>
              <div className="contact-info-item-revolutionary">
                <div className="contact-icon-wrapper">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-info-text">
                  <span className="contact-info-label">Phone</span>
                  <span className="contact-info-value">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Revolutionary Form */}
          <form onSubmit={handleSubmit} className="cta-form-revolutionary">
            <div className="form-grid-revolutionary">
              <div className={`form-group-revolutionary ${focusedField === 'name' ? 'form-group-focused' : ''}`}>
                <label htmlFor="name" className="form-label-revolutionary">Full Name</label>
                <div className="form-input-wrapper">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="form-input-revolutionary"
                    placeholder="John Doe"
                    required
                  />
                  <div className="form-input-border"></div>
                </div>
              </div>

              <div className={`form-group-revolutionary ${focusedField === 'email' ? 'form-group-focused' : ''}`}>
                <label htmlFor="email" className="form-label-revolutionary">Email Address</label>
                <div className="form-input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="form-input-revolutionary"
                    placeholder="john@example.com"
                    required
                  />
                  <div className="form-input-border"></div>
                </div>
              </div>

              <div className={`form-group-revolutionary ${focusedField === 'phone' ? 'form-group-focused' : ''}`}>
                <label htmlFor="phone" className="form-label-revolutionary">Phone Number</label>
                <div className="form-input-wrapper">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="form-input-revolutionary"
                    placeholder="+1 (555) 000-0000"
                  />
                  <div className="form-input-border"></div>
                </div>
              </div>

              <div className={`form-group-revolutionary form-group-full-revolutionary ${focusedField === 'message' ? 'form-group-focused' : ''}`}>
                <label htmlFor="message" className="form-label-revolutionary">Your Message</label>
                <div className="form-input-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="form-textarea-revolutionary"
                    placeholder="Tell us about your project..."
                    rows={4}
                    required
                  />
                  <div className="form-input-border"></div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="cta-submit-button-revolutionary"
              disabled={isSubmitting}
            >
              <span className="button-text">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <span className="button-icon">
                {isSubmitting ? (
                  <svg className="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25"/>
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;


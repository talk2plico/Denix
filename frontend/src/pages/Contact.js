// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Optional: Import a CSS file for styling

const Contact = () => {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactForm({ ...contactForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Contact Form Submitted:', contactForm);
        alert('Your message has been sent!');
        setContactForm({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Send</button>
            </form>
            <div className="social-media">
                <h2>Follow Us</h2>
                <p>Stay connected with us on social media!</p>
                <a href="https://www.instagram.com/hi2denix" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.pinterest.com/hi2denix" target="_blank" rel="noopener noreferrer">Pinterest</a>
            </div>
        </div>
    );
};

export default Contact;

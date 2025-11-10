import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white text-black p-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl font-bold mb-2 text-center">Get In Touch</h2>
        <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
        <p className="text-center mb-12 opacity-70">
          Have a project in mind? Let's work together!
        </p>

        {submitted ? (
          <div className="border-4 border-black p-12 text-center bg-black text-white">
            <Send className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <User className="absolute left-4 top-4 w-5 h-5 opacity-50" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border-4 border-black  rounded-xl p-4 pl-12 text-lg focus:bg-black focus:text-white outline-none transition-all duration-300"
              />
            </div>

            <div className="relative group">
              <Mail className="absolute left-4 top-4 w-5 h-5 opacity-50" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border-4 border-black rounded-xl p-4 pl-12 text-lg focus:bg-black focus:text-white outline-none transition-all duration-300"
              />
            </div>

            <div className="relative group">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 opacity-50" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="6"
                className="w-full border-4 border-black rounded-xl p-4 pl-12 text-lg focus:bg-black focus:text-white outline-none transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full border-4 border-black rounded-xl p-4 text-lg font-bold bg-white text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}

        <div className="mt-12 text-center">
          <p className="text-sm opacity-70">
            I typically respond within 24-48 hours
          </p>
        </div>
      </div>
    </div>
  );
}
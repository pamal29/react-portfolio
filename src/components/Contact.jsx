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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white p-6 sm:p-10 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
          Get In Touch
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-black dark:bg-white mx-auto mb-4"></div>
        <p className="text-center mb-10 sm:mb-12 opacity-70 text-sm sm:text-base">
          Have a project in mind? Let’s work together!
        </p>

        {/* SUCCESS MESSAGE */}
        {submitted ? (
          <div className="border-4 border-black p-10 sm:p-12 text-center bg-black text-white dark:bg-white dark:text-black rounded-xl">
            <Send className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-sm sm:text-base">Thank you for reaching out. I’ll get back to you soon.</p>
          </div>
        ) : (

          /* FORM */
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* NAME */}
            <div className="relative">
              <User className="absolute left-4 top-4 w-5 h-5 opacity-50" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border-4 border-black  rounded-xl p-4 pl-12 text-base sm:text-lg  transition-all duration-300
                            dark:bg-black dark:text-white dark:placeholder-white/40 dark:border-white"

              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-4 top-4 w-5 h-5 opacity-50" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border-4 border-black rounded-xl p-4 pl-12 text-base sm:text-lg transition-all duration-300
                            dark:bg-black dark:text-white dark:placeholder-white/40 dark:border-white"
              />
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 opacity-50" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="5"
                className="w-full border-4 border-black dark:border:white rounded-xl p-4 pl-12 text-base sm:text-lg transition-all duration-300 resize-none
                            dark:bg-black dark:text-white dark:placeholder-white/40 dark:border-white"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full border-4 border-black rounded-xl p-4 text-base sm:text-lg font-bold bg-white text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-3
                          dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        )}

        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm opacity-70">
            I typically respond within 24–48 hours
          </p>
        </div>
      </div>
    </div>
  );
}

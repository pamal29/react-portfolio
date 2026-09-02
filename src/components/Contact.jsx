import { Send, Mail, User, MessageSquare } from "lucide-react";

export default function Contact({
  submitted,
  formData,
  setFormData,
  handleSubmit
}) {
  return (
    <section id="contact" className="py-16 animate-fade-in">
      <h2 className="text-4xl font-bold text-center mb-8">
        Get In Touch
      </h2>

      {submitted ? (
        <div className="max-w-2xl mx-auto bg-neutral-900/50 border-2 border-neonPurple p-12 text-center rounded-2xl animate-scale-in">
          <Send className="w-16 h-16 mx-auto mb-4 text-neonPurple animate-bounce-in" />
          <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
          <p className="text-neutral-400 text-sm mt-2">I'll get back to you soon.</p>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="relative">
            <User className="absolute left-4 top-4 w-5 h-5 text-neutral-500" />
            <input
              type="text"
              value={formData.name}
              placeholder="Your Name"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-neutral-900/50 border border-neutral-700 text-white placeholder:text-neutral-500
                         p-4 pl-12 rounded-xl focus:border-neonPurple outline-none transition-colors"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-4 w-5 h-5 text-neutral-500" />
            <input
              type="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-neutral-900/50 border border-neutral-700 text-white placeholder:text-neutral-500
                         p-4 pl-12 rounded-xl focus:border-neonPurple outline-none transition-colors"
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-neutral-500" />
            <textarea
              rows="5"
              value={formData.message}
              placeholder="Your Message"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-neutral-900/50 border border-neutral-700 text-white placeholder:text-neutral-500
                         p-4 pl-12 rounded-xl resize-none focus:border-neonPurple outline-none transition-colors"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-neonPurple text-black p-4 rounded-xl font-semibold
                       hover:opacity-90 transition-all flex justify-center items-center gap-3"
          >
            Send Message <Send className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
}
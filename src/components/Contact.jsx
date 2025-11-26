import { Send, Mail, User, MessageSquare } from "lucide-react";

export default function Contact({
  submitted,
  formData,
  setFormData,
  handleSubmit
}) {
  return (
    <section id="contact" className="animate-fade-in">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-300 to-orange-400 bg-clip-text text-transparent mb-8">
        Get In Touch
      </h2>


      {submitted ? (
        <div className="bg-gray-800/50 border-2 border-orange-400 p-12 text-center rounded-2xl animate-scale-in">
          <Send className="w-20 h-20 mx-auto mb-4 text-orange-400 animate-bounce-in" />
          <h3 className="text-2xl font-bold">Message Sent!</h3>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Name */}
          <div className="relative group">
            <User className="absolute left-4 top-4 opacity-50" />
            <input
              type="text"
              value={formData.name}
              placeholder="Your Name"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-gray-800/30 border-2 border-gray-500/30 p-4 pl-12 rounded-xl focus:border-orange-400 outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative group">
            <Mail className="absolute left-4 top-4 opacity-50" />
            <input
              type="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-gray-800/30 border-2 border-gray-500/30 p-4 pl-12 rounded-xl focus:border-orange-400 outline-none"
            />
          </div>

          {/* Message */}
          <div className="relative group">
            <MessageSquare className="absolute left-4 top-4 opacity-50" />
            <textarea
              rows="5"
              value={formData.message}
              placeholder="Your Message"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-gray-800/30 border-2 border-gray-500/30 p-4 pl-12 rounded-xl resize-none focus:border-orange-400 outline-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-orange-600 p-4 rounded-xl font-bold hover:bg-orange-500 transition-all flex justify-center items-center gap-3"
          >
            Send Message <Send className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
}

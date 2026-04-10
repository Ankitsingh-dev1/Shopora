import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#1a1740] to-[#24243e] flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 md:p-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Contact <span className="text-red-400">Shopora</span>
          </h2>
          <p className="text-gray-300 mt-2 text-sm md:text-base">
            We'd love to hear from you. Reach out anytime ✨
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Info Section */}
          <div className="text-white space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-gray-300 text-sm">
                Have questions about products, orders, or anything else? Our team is ready to help you.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition">
                <MapPin className="text-red-400" />
                <p className="text-sm">123 Tech Lane, Kolkata, India</p>
              </div>

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition">
                <Mail className="text-red-400" />
                <p className="text-sm">support@shopora.com</p>
              </div>

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl hover:bg-white/20 transition">
                <Phone className="text-red-400" />
                <p className="text-sm">+91 98765 43210</p>
              </div>

            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6">

            <div>
              <label className="block text-gray-300 mb-1 text-sm">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1 text-sm">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1 text-sm">Your Message</label>
              <textarea 
                rows="4" 
                placeholder="Type your message..." 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-3 rounded-xl 
              hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Send Message 🚀
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
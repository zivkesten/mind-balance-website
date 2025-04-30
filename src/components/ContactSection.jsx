import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Twitter, MapPin, Clock, Phone, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log(formData);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        message: "",
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your journey? Let's discuss how my programs can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Tel Aviv, Israel</p>
                    <p className="text-gray-600">Available for online coaching worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <Clock className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Working Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 7am - 8pm</p>
                    <p className="text-gray-600">Saturday - Sunday: 8am - 3pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+972 50 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">michelle@example.com</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Connect on Social Media</h4>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition-colors">
                    <Instagram className="w-5 h-5 text-pink-700" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <Facebook className="w-5 h-5 text-blue-700" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-800" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <Twitter className="w-5 h-5 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Request a Consultation</h3>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <Send className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Message Sent Successfully!</h4>
                    <p>Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                        placeholder="Your phone (optional)"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                      Program of Interest
                    </label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                    >
                      <option value="" disabled>Select a program</option>
                      <option value="mental">Mental Coaching</option>
                      <option value="functional">Functional Coaching</option>
                      <option value="combined">Combined Program</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                      placeholder="Tell me about your goals..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      "Request a Quote"
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
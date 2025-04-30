import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail("");
    
    // Reset success state after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter for tips on mental wellness, functional training, 
            and exclusive offers for my coaching programs.
          </p>
          
          <div className="max-w-md mx-auto">
            {isSubscribed ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center space-x-3">
                <CheckCircle className="w-5 h-5 text-teal-200" />
                <span className="text-teal-50">Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-grow px-4 py-3 rounded-lg border-2 border-transparent focus:border-teal-200 bg-white/10 backdrop-blur-sm placeholder-teal-100 text-white focus:ring-0 outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-white text-teal-700 font-medium rounded-lg hover:bg-teal-50 transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-teal-700 mr-2"></div>
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
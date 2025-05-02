import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, MapPin, Clock, Phone, Mail, Send } from "lucide-react";
import { sendEmail } from "../api/sendEmail";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" });
  
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
    setSubmitStatus({ success: false, message: "" });
    
    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setSubmitStatus({
          success: true,
          message: "ההודעה נשלחה בהצלחה! ניצור איתכם קשר בהקדם."
        });
        
        // Reset form after showing success message
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            program: "",
            message: "",
          });
          setSubmitStatus({ success: false, message: "" });
        }, 5000);
      } else {
        throw new Error(result.error || "Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        success: false,
        message: "אירעה שגיאה בשליחת ההודעה. אנא נסו שוב מאוחר יותר."
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">צור קשר</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מוכנים להתחיל את המסע שלכם? בואו נדון כיצד התוכניות שלי יכולות לעזור לכם להשיג את המטרות שלכם.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">פרטי התקשרות</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center ml-4">
                    <MapPin className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">מיקום</h4>
                    <p className="text-gray-600">תל אביב, ישראל</p>
                    <p className="text-gray-600">זמינה לאימון אונליין ברחבי העולם</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center ml-4">
                    <Clock className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">שעות פעילות</h4>
                    <p className="text-gray-600">ראשון - חמישי: 7:00 - 20:00</p>
                    <p className="text-gray-600">שישי: 8:00 - 15:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center ml-4">
                    <Phone className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">טלפון</h4>
                    <p className="text-gray-600">054-421-6497</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center ml-4">
                    <Mail className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">אימייל</h4>
                    <p className="text-gray-600">michelleziv@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">התחברו ברשתות החברתיות</h4>
                <div className="flex space-x-reverse space-x-4">
                  <a href="https://www.instagram.com/mrapokest/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition-colors">
                    <Instagram className="w-5 h-5 text-pink-700" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <Facebook className="w-5 h-5 text-blue-700" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">בקשו פגישת ייעוץ</h3>
              
              {submitStatus.message && (
                <div className={`${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} p-4 rounded-lg mb-6`}>
                  <p className="text-center">{submitStatus.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">שם מלא</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">אימייל</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">טלפון</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">תוכנית אימון</label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="">בחרו תוכנית</option>
                    <option value="mental">אימון מנטלי</option>
                    <option value="functional">אימון תפקודי</option>
                    <option value="combined">תוכנית משולבת</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">הודעה</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span>שולח...</span>
                  ) : (
                    <>
                      <span>שלח הודעה</span>
                      <Send className="w-5 h-5 mr-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}